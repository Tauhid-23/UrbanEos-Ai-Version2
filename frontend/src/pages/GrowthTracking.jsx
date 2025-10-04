import React, { useState } from 'react';
import Layout from '../components/Layout';
import { TrendingUp, Calendar, BarChart3, Target, Download, Filter } from 'lucide-react';

const GrowthTracking = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Month');
  const [activeTab, setActiveTab] = useState('Overview');

  const tabs = ['Overview', 'Growth Tracking', 'Weather & Climate', 'Goals & Targets'];
  const periods = ['Week', 'Month', 'Year'];

  const growthData = [
    { month: 'Jan', height: 15, health: 85, harvest: 2.1, temp: 18 },
    { month: 'Feb', height: 18, health: 88, harvest: 2.8, temp: 20 },
    { month: 'Mar', height: 22, health: 90, harvest: 3.5, temp: 22 },
    { month: 'Apr', height: 28, health: 92, harvest: 4.2, temp: 25 },
    { month: 'May', height: 35, health: 94, harvest: 5.1, temp: 28 },
    { month: 'Jun', height: 42, health: 91, harvest: 6.3, temp: 32 },
  ];

  const metrics = [
    { title: 'Average Growth Rate', value: '+18%', subtitle: 'Compared to last period', trend: 'up' },
    { title: 'Health Improvement', value: '+12%', subtitle: 'Overall garden health', trend: 'up' },
    { title: 'Harvest Increase', value: '+34%', subtitle: 'Yield optimization', trend: 'up' }
  ];

  return (
    <Layout title="Growth Analytics">
      <div className="p-4 lg:p-8 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 lg:mb-0">
            <BarChart3 className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Growth Analytics</h1>
              <p className="text-gray-600">Track your garden's progress and optimize your growing strategy</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex bg-white rounded-lg p-1 shadow-sm">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedPeriod === period
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm">Export</span>
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-green-100 text-green-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'Overview' && (
          <>
            {/* Growth Timeline */}
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Growth Timeline</h2>
              
              <div className="space-y-6">
                {growthData.map((data, index) => (
                  <div key={data.month} className="flex items-center space-x-4">
                    <div className="w-12 text-sm font-medium text-gray-600">{data.month}</div>
                    
                    <div className="flex-1 grid grid-cols-4 gap-4">
                      {/* Height */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Height</span>
                          <span className="text-sm font-medium">{data.height}cm</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${(data.height / 50) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Health */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Health</span>
                          <span className="text-sm font-medium">{data.health}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${data.health}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Harvest */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Harvest</span>
                          <span className="text-sm font-medium">{data.harvest}kg</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-orange-500 h-2 rounded-full"
                            style={{ width: `${(data.harvest / 7) * 100}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Temperature */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Temp</span>
                          <span className="text-sm font-medium">{data.temp}°C</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: `${(data.temp / 40) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className={`w-8 h-8 ${index === 0 ? 'text-green-500' : index === 1 ? 'text-blue-500' : 'text-orange-500'}`} />
                    <span className={`text-2xl ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      ↗
                    </span>
                  </div>
                  
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-lg font-medium text-gray-700 mb-1">{metric.title}</div>
                    <div className="text-sm text-gray-500">{metric.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'Growth Tracking' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Detailed Growth Analysis</h2>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>All Plants</option>
                  <option>Basil</option>
                  <option>Tomato</option>
                  <option>Lettuce</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Growth Chart Placeholder */}
              <div className="bg-gray-50 rounded-xl p-8 text-center">
                <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-700 mb-2">Growth Chart</h3>
                <p className="text-gray-500">Interactive growth tracking chart will be displayed here</p>
              </div>
              
              {/* Statistics */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Growth Statistics</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">42cm</div>
                    <div className="text-sm text-gray-600">Average Height</div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">91%</div>
                    <div className="text-sm text-gray-600">Health Score</div>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">6.3kg</div>
                    <div className="text-sm text-gray-600">Total Harvest</div>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">180</div>
                    <div className="text-sm text-gray-600">Days Growing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Weather & Climate' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Environmental Impact Analysis</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Temperature Trends */}
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="font-semibold text-red-800 mb-4">Temperature Trends</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">32°C</div>
                <div className="text-sm text-red-700">Average this month</div>
                <div className="mt-4 text-xs text-red-600">
                  <span className="font-medium">Impact:</span> Optimal for warm-season crops
                </div>
              </div>

              {/* Humidity Levels */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-semibold text-blue-800 mb-4">Humidity Levels</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">65%</div>
                <div className="text-sm text-blue-700">Average humidity</div>
                <div className="mt-4 text-xs text-blue-600">
                  <span className="font-medium">Impact:</span> Good for most plants
                </div>
              </div>

              {/* Rainfall */}
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-green-800 mb-4">Rainfall</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">45mm</div>
                <div className="text-sm text-green-700">This month</div>
                <div className="mt-4 text-xs text-green-600">
                  <span className="font-medium">Impact:</span> Supplemental watering needed
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Goals & Targets' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Growth Goals & Targets</h2>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center">
                <Target className="w-4 h-4 mr-2" />
                Set New Goal
              </button>
            </div>
            
            <div className="space-y-6">
              {/* Monthly Harvest Goal */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Monthly Harvest Target</h3>
                  <span className="text-sm text-green-600 font-medium">85% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-green-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>5.3kg harvested</span>
                  <span>6.2kg target</span>
                </div>
              </div>

              {/* Plant Health Goal */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Overall Plant Health</h3>
                  <span className="text-sm text-blue-600 font-medium">91% Achieved</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-blue-500 h-3 rounded-full" style={{ width: '91%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>91% average health</span>
                  <span>95% target</span>
                </div>
              </div>

              {/* Growth Rate Goal */}
              <div className="border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">Growth Rate Improvement</h3>
                  <span className="text-sm text-orange-600 font-medium">120% Exceeded</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                  <div className="bg-orange-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>18% improvement</span>
                  <span>15% target</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GrowthTracking;