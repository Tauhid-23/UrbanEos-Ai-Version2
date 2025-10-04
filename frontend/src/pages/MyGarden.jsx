import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Plus, Search, Filter, MoreVertical, Droplets, Sun, Thermometer, TrendingUp, Calendar, Sprout } from 'lucide-react';
import { mockPlants } from '../data/mock';

const MyGarden = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const extendedPlants = [
    {
      id: 1,
      name: 'Basil',
      variety: 'Sweet Basil',
      health: 95,
      location: 'Kitchen Window',
      daysGrowing: 385,
      harvestIn: '12d',
      nextAction: 'Water today',
      actionPriority: 'high',
      status: 'healthy',
      image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Cherry Tomato',
      variety: 'Cherry Red',
      health: 88,
      location: 'Balcony',
      daysGrowing: 411,
      harvestIn: '20d',
      nextAction: 'Check for pests',
      actionPriority: 'medium',
      status: 'healthy',
      image: 'https://images.unsplash.com/photo-1592921870789-04563d55041c?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Mint',
      variety: 'Spearmint',
      health: 92,
      location: 'Kitchen Counter',
      daysGrowing: 375,
      harvestIn: '5d',
      nextAction: 'Harvest leaves',
      actionPriority: 'low',
      status: 'healthy',
      image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Chili Pepper',
      variety: 'Thai Chili',
      health: 78,
      location: 'Balcony',
      daysGrowing: 421,
      harvestIn: '15d',
      nextAction: 'Fertilize',
      actionPriority: 'medium',
      status: 'needs-attention',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Lettuce',
      variety: 'Butterhead',
      health: 85,
      location: 'Indoor Shelf',
      daysGrowing: 380,
      harvestIn: '8d',
      nextAction: 'Thin seedlings',
      actionPriority: 'low',
      status: 'healthy',
      image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Coriander',
      variety: 'Slow Bolt',
      health: 90,
      location: 'Kitchen Window',
      daysGrowing: 406,
      harvestIn: '18d',
      nextAction: 'Pinch flowers',
      actionPriority: 'low',
      status: 'healthy',
      image: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=300&h=200&fit=crop&crop=center'
    }
  ];

  const filteredPlants = extendedPlants.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || plant.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getHealthColor = (health) => {
    if (health >= 90) return 'text-green-600';
    if (health >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Layout title="My Garden">
      <div className="p-4 lg:p-8 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 lg:mb-0">
            <Sprout className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">My Garden</h1>
              <p className="text-gray-600">Track and manage your growing plants</p>
            </div>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            Add Plant
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Sprout className="w-6 h-6 opacity-80" />
              <TrendingUp className="w-4 h-4 opacity-60" />
            </div>
            <div className="text-2xl font-bold">6</div>
            <div className="text-sm opacity-90">Total Plants Growing</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-6 h-6 opacity-80" />
              <TrendingUp className="w-4 h-4 opacity-60" />
            </div>
            <div className="text-2xl font-bold">1</div>
            <div className="text-sm opacity-90">Tasks Due Today</div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-6 h-6 opacity-80" />
              <TrendingUp className="w-4 h-4 opacity-60" />
            </div>
            <div className="text-2xl font-bold">5</div>
            <div className="text-sm opacity-90">Days Until Next Harvest</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl p-4 text-white">
            <div className="flex items-center justify-between mb-2">
              <Sun className="w-6 h-6 opacity-80" />
              <TrendingUp className="w-4 h-4 opacity-60" />
            </div>
            <div className="text-2xl font-bold">88%</div>
            <div className="text-sm opacity-90">Garden Health Score</div>
          </div>
        </div>

        {/* Weather Alert */}
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg mb-8">
          <div className="flex items-start">
            <Sun className="w-5 h-5 text-orange-400 mr-3 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-orange-800">Weather Alert</h3>
              <p className="text-sm text-orange-700 mt-1">
                High sun exposure today - ensure adequate watering for all plants
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search plants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="healthy">Healthy</option>
                <option value="needs-attention">Needs Attention</option>
              </select>
              
              <button className="px-3 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                Sort
              </button>
            </div>
          </div>
        </div>

        {/* Plants Section */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                <Sprout className="w-5 h-5 text-green-600 mr-2" />
                My Plants ({filteredPlants.length})
              </h2>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-md">Filter</button>
                <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md">Sort</button>
              </div>
            </div>
          </div>

          {/* Plants Grid */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map((plant) => (
              <div key={plant.id} className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:shadow-md transition-shadow">
                {/* Plant Image and Health */}
                <div className="relative mb-4">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-32 object-cover rounded-xl"
                  />
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-1 ${plant.health >= 90 ? 'bg-green-500' : plant.health >= 75 ? 'bg-yellow-500' : 'bg-red-500'}`}></div>
                    <span className={getHealthColor(plant.health)}>{plant.health}% Health</span>
                  </div>
                </div>

                {/* Plant Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{plant.name}</h3>
                    <p className="text-sm text-gray-600">{plant.variety}</p>
                    <p className="text-xs text-gray-500 mt-1">Harvest in {plant.harvestIn}</p>
                  </div>

                  {/* Plant Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="text-gray-900 text-xs">{plant.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Growing:</span>
                      <span className="text-gray-900 text-xs">{plant.daysGrowing} days</span>
                    </div>
                  </div>

                  {/* Next Action */}
                  <div className="pt-2 border-t border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-600">{plant.nextAction}</span>
                      <span className={`text-xs px-2 py-1 rounded-md ${getPriorityColor(plant.actionPriority)}`}>
                        {plant.actionPriority}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Watering Schedule */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Droplets className="w-5 h-5 text-blue-500 mr-2" />
              Watering Schedule
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Basil</p>
                    <p className="text-xs text-gray-500">Last watered: 2024-10-02</p>
                  </div>
                </div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs">Water Now</button>
              </div>
            </div>
          </div>

          {/* Ready to Harvest */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Sun className="w-5 h-5 text-orange-500 mr-2" />
              Ready to Harvest
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mint</p>
                    <p className="text-xs text-gray-500">5 days remaining</p>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">Harvest</button>
              </div>
            </div>
          </div>

          {/* Plant Health Check */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Thermometer className="w-5 h-5 text-purple-500 mr-2" />
              Plant Health Check
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <Sprout className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Chili Pepper</p>
                    <p className="text-xs text-gray-500">78% health</p>
                  </div>
                </div>
                <button className="bg-purple-500 text-white px-3 py-1 rounded-md text-xs">Diagnose</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyGarden;