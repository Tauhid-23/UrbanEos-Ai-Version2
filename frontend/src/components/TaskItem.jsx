import React, { useState } from 'react';
import { Clock } from 'lucide-react';

const TaskItem = ({ 
  id,
  title, 
  plant, 
  time, 
  priority = 'medium', 
  isCompleted = false, 
  isOverdue = false,
  plantImage 
}) => {
  const [completed, setCompleted] = useState(isCompleted);

  const priorityColors = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200', 
    low: 'bg-green-100 text-green-700 border-green-200'
  };

  const handleToggle = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`flex items-center space-x-4 p-4 rounded-xl border transition-colors ${
      completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>
      {/* Checkbox */}
      <div className="flex-shrink-0">
        <input
          type="checkbox"
          checked={completed}
          onChange={handleToggle}
          className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
        />
      </div>

      {/* Plant Image */}
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100">
          <img 
            src={plantImage || "/api/placeholder/40/40"} 
            alt={plant}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center space-x-2">
          <h4 className={`text-sm font-medium ${completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
            {title}
          </h4>
          {isOverdue && !completed && (
            <span className="text-xs text-red-600 font-medium">Overdue</span>
          )}
        </div>
        <div className="flex items-center space-x-2 mt-1">
          <span className={`text-sm ${completed ? 'text-gray-400' : 'text-gray-600'}`}>
            {plant}
          </span>
          <span className="text-gray-400">•</span>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3 text-gray-400" />
            <span className={`text-sm ${completed ? 'text-gray-400' : 'text-gray-600'}`}>
              {time}
            </span>
          </div>
        </div>
      </div>

      {/* Priority Badge */}
      <div className="flex-shrink-0">
        <span className={`px-2 py-1 text-xs font-medium rounded-md border ${priorityColors[priority]}`}>
          {priority}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;