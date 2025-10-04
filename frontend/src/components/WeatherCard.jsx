import React from 'react';
import { Sun, Wind, Droplets, Eye } from 'lucide-react';

const WeatherCard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-6 text-white">
      <div className="flex items-center space-x-2 mb-4">
        <Sun className="w-5 h-5" />
        <h3 className="text-lg font-semibold">Weather Today</h3>
      </div>

      <div className="text-center mb-6">
        <div className="text-5xl font-bold mb-2">32°C</div>
        <div className="text-lg opacity-90 mb-1">Sunny</div>
        <div className="text-sm opacity-75">Perfect for outdoor gardening</div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wind className="w-4 h-4 opacity-75" />
            <span className="text-sm">Wind</span>
          </div>
          <span className="text-sm font-medium">15 km/h</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Droplets className="w-4 h-4 opacity-75" />
            <span className="text-sm">Humidity</span>
          </div>
          <span className="text-sm font-medium">65%</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4 opacity-75" />
            <span className="text-sm">UV Index</span>
          </div>
          <span className="text-sm font-medium">8/10</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;