import React from 'react';
import { AlertTriangle, ChevronRight } from 'lucide-react';

const WeatherAlert = () => {
  return (
    <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg mb-6">
      <div className="flex items-start">
        <AlertTriangle className="w-5 h-5 text-orange-400 mr-3 mt-0.5" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-orange-800">Weather Alert</h3>
            <button className="text-orange-600 hover:text-orange-800 text-sm font-medium flex items-center">
              View Details
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          <p className="text-sm text-orange-700 mt-1">
            High sun exposure today - ensure adequate watering for all plants. UV index: 8/10
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherAlert;