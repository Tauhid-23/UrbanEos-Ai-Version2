import React, { useState } from 'react';
import { 
  Sprout, 
  CheckCircle, 
  Calendar,
  Heart,
  Sun,
  Bell,
  Search,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import Sidebar from '../components/Sidebar';
import MetricCard from '../components/MetricCard';
import WeatherAlert from '../components/WeatherAlert';
import TaskItem from '../components/TaskItem';
import WeatherCard from '../components/WeatherCard';
import { 
  mockUser, 
  mockWeather, 
  mockMetrics, 
  mockTasks, 
  getOverdueTasksCount 
} from '../data/mock';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Today');
  const [tasks, setTasks] = useState(mockTasks);
  
  const tabs = ['Today', 'Week', 'Month'];
  const overdueCount = getOverdueTasksCount();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeItem="Dashboard" />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Good Morning, {mockUser.name}!
                </h1>
                <span className="text-2xl">🌱</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {mockWeather.date} • {mockWeather.description}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Sun className="w-4 h-4" />
                <span className="font-medium">{mockWeather.temperature} {mockWeather.condition}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <HelpCircle className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-6 mt-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <MetricCard
                value={mockMetrics[0].value}
                title={mockMetrics[0].title}
                change={mockMetrics[0].change}
                icon={Sprout}
                color={mockMetrics[0].color}
              />
              <MetricCard
                value={mockMetrics[1].value} 
                title={mockMetrics[1].title}
                subtitle={mockMetrics[1].subtitle}
                icon={CheckCircle}
                color={mockMetrics[1].color}
              />
              <MetricCard
                value={mockMetrics[2].value}
                title={mockMetrics[2].title} 
                change={mockMetrics[2].change}
                icon={Calendar}
                color={mockMetrics[2].color}
              />
              <MetricCard
                value={mockMetrics[3].value}
                title={mockMetrics[3].title}
                change={mockMetrics[3].change} 
                icon={Heart}
                color={mockMetrics[3].color}
              />
            </div>

            {/* Weather Alert */}
            <WeatherAlert />

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Tasks Section */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <h2 className="text-lg font-semibold text-gray-900">Today's Tasks</h2>
                      {overdueCount > 0 && (
                        <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-md font-medium">
                          {overdueCount} Overdue
                        </span>
                      )}
                    </div>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                      View All
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    {tasks.slice(0, 4).map((task) => (
                      <TaskItem
                        key={task.id}
                        {...task}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Weather Card */}
              <div className="lg:col-span-1">
                <WeatherCard />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;