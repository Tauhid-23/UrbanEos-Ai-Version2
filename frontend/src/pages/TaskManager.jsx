import React, { useState } from 'react';
import Layout from '../components/Layout';
import TaskItem from '../components/TaskItem';
import { Plus, Filter, Calendar, CheckCircle } from 'lucide-react';
import { mockTasks } from '../data/mock';

const TaskManager = () => {
  const [tasks, setTasks] = useState(mockTasks);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('priority');

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'pending': return !task.isCompleted;
      case 'completed': return task.isCompleted;
      case 'overdue': return task.isOverdue && !task.isCompleted;
      default: return true;
    }
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sortBy) {
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      case 'time':
        return a.time.localeCompare(b.time);
      case 'plant':
        return a.plant.localeCompare(b.plant);
      default:
        return 0;
    }
  });

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.isCompleted).length,
    pending: tasks.filter(t => !t.isCompleted).length,
    overdue: tasks.filter(t => t.isOverdue && !t.isCompleted).length
  };

  return (
    <Layout title="Task Manager">
      <div className="p-4 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Task Manager</h1>
            <p className="text-gray-600">Manage all your garden care tasks and activities</p>
          </div>
          <button className="mt-4 lg:mt-0 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-gray-900">{taskStats.total}</div>
            <div className="text-sm text-gray-600">Total Tasks</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-green-600">{taskStats.completed}</div>
            <div className="text-sm text-gray-600">Completed</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-blue-600">{taskStats.pending}</div>
            <div className="text-sm text-gray-600">Pending</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold text-red-600">{taskStats.overdue}</div>
            <div className="text-sm text-gray-600">Overdue</div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Tasks</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="priority">Priority</option>
                <option value="time">Time</option>
                <option value="plant">Plant Name</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tasks List */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {filter === 'all' ? 'All Tasks' : 
                 filter === 'pending' ? 'Pending Tasks' :
                 filter === 'completed' ? 'Completed Tasks' : 'Overdue Tasks'}
              </h2>
              <span className="text-sm text-gray-500">
                {sortedTasks.length} task{sortedTasks.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            {sortedTasks.map((task) => (
              <TaskItem key={task.id} {...task} />
            ))}

            {sortedTasks.length === 0 && (
              <div className="text-center py-12">
                <CheckCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
                <p className="text-gray-600">
                  {filter === 'completed' ? 'No tasks completed yet' :
                   filter === 'overdue' ? 'No overdue tasks' :
                   'Create your first task to get started'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TaskManager;