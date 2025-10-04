import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Plus, Search, Filter, MoreVertical, Droplets, Sun, Thermometer } from 'lucide-react';
import { mockPlants } from '../data/mock';

const MyGarden = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredPlants = mockPlants.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || plant.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'needs-attention': return 'bg-yellow-100 text-yellow-800';
      case 'critical': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'healthy': return 'Healthy';
      case 'needs-attention': return 'Needs Attention';
      case 'critical': return 'Critical';
      default: return 'Unknown';
    }
  };

  return (
    <Layout title="My Garden">
      <div className="p-4 lg:p-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">My Garden</h1>
            <p className="text-gray-600">Manage and monitor all your plants in one place</p>
          </div>
          <button className="mt-4 lg:mt-0 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Plant
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search plants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="healthy">Healthy</option>
              <option value="needs-attention">Needs Attention</option>
              <option value="critical">Critical</option>
            </select>
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              {/* Plant Image */}
              <div className="relative mb-4">
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg">
                  <MoreVertical className="w-4 h-4 text-gray-600" />
                </button>
                
                {/* Status Badge */}
                <div className={`absolute bottom-3 left-3 px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(plant.status)}`}>
                  {getStatusText(plant.status)}
                </div>
              </div>

              {/* Plant Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{plant.name}</h3>
                  <p className="text-sm text-gray-600">{plant.variety}</p>
                </div>

                {/* Care Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Droplets className="w-4 h-4" />
                      <span>Last watered</span>
                    </div>
                    <span className="text-gray-900">{new Date(plant.lastWatered).toLocaleDateString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Sun className="w-4 h-4" />
                      <span>Planted</span>
                    </div>
                    <span className="text-gray-900">{new Date(plant.plantedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 px-3 py-2 text-sm bg-green-50 text-green-700 hover:bg-green-100 rounded-lg font-medium transition-colors">
                    Water
                  </button>
                  <button className="flex-1 px-3 py-2 text-sm bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPlants.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No plants found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default MyGarden;