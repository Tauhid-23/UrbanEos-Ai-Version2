import React, { useState } from 'react';
import Layout from '../components/Layout';
import { AlertTriangle, Sun, Cloud, CloudRain, Wind, Thermometer, Droplets, Eye } from 'lucide-react';

const WeatherAlerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      type: 'high-uv',
      severity: 'warning',
      title: 'High UV Index Alert',
      message: 'UV index reaching 8/10 today. Ensure adequate shade and watering for sensitive plants.',
      timestamp: '2025-10-03T08:00:00Z',
      icon: Sun,
      color: 'orange'
    },
    {
      id: 2,
      type: 'high-wind',
      severity: 'caution',
      title: 'Strong Wind Advisory',
      message: 'Wind speeds up to 25 km/h expected. Secure tall plants and check for damage.',
      timestamp: '2025-10-03T06:30:00Z',
      icon: Wind,
      color: 'blue'
    }
  ]);

  const weeklyForecast = [
    { day: 'Today', temp: '32°C', condition: 'Sunny', icon: Sun, humidity: '65%' },
    { day: 'Tomorrow', temp: '28°C', condition: 'Partly Cloudy', icon: Cloud, humidity: '70%' },
    { day: 'Friday', temp: '25°C', condition: 'Light Rain', icon: CloudRain, humidity: '85%' },
    { day: 'Saturday', temp: '27°C', condition: 'Sunny', icon: Sun, humidity: '60%' },
    { day: 'Sunday', temp: '29°C', condition: 'Partly Cloudy', icon: Cloud, humidity: '68%' },
  ];

  const currentWeather = {
    temperature: '32°C',
    condition: 'Sunny',
    humidity: '65%',
    wind: '15 km/h',
    uv: '8/10',
    pressure: '1013 hPa'
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'warning': return 'bg-orange-500';
      case 'caution': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getSeverityBg = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-50 border-red-200';
      case 'warning': return 'bg-orange-50 border-orange-200';
      case 'caution': return 'bg-yellow-50 border-yellow-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <Layout title="Weather & Alerts">
      <div className="p-4 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Weather & Alerts</h1>
          <p className="text-gray-600">Stay informed about weather conditions affecting your garden</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Weather */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Conditions */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-6 text-white">
              <h2 className="text-lg font-semibold mb-4">Current Weather</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Sun className="w-8 h-8 mx-auto mb-2 opacity-80" />
                  <div className="text-2xl font-bold">{currentWeather.temperature}</div>
                  <div className="text-sm opacity-80">{currentWeather.condition}</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Droplets className="w-4 h-4 opacity-80" />
                      <span className="text-sm">Humidity</span>
                    </div>
                    <span className="text-sm font-medium">{currentWeather.humidity}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wind className="w-4 h-4 opacity-80" />
                      <span className="text-sm">Wind</span>
                    </div>
                    <span className="text-sm font-medium">{currentWeather.wind}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 opacity-80" />
                      <span className="text-sm">UV Index</span>
                    </div>
                    <span className="text-sm font-medium">{currentWeather.uv}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Active Alerts */}
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Active Weather Alerts</h2>
              </div>
              
              <div className="p-6">
                {alerts.length > 0 ? (
                  <div className="space-y-4">
                    {alerts.map((alert) => {
                      const Icon = alert.icon;
                      return (
                        <div key={alert.id} className={`border-l-4 ${getSeverityColor(alert.severity)} ${getSeverityBg(alert.severity)} rounded-r-lg p-4`}>
                          <div className="flex items-start space-x-3">
                            <Icon className="w-5 h-5 text-gray-600 mt-0.5" />
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-1">{alert.title}</h3>
                              <p className="text-gray-700 text-sm mb-2">{alert.message}</p>
                              <div className="text-xs text-gray-500">
                                {new Date(alert.timestamp).toLocaleString()}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-600">No active weather alerts</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Weekly Forecast */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">5-Day Forecast</h2>
              </div>
              
              <div className="p-6 space-y-4">
                {weeklyForecast.map((day, index) => {
                  const Icon = day.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">{day.day}</div>
                          <div className="text-sm text-gray-600">{day.condition}</div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="font-medium text-gray-900">{day.temp}</div>
                        <div className="text-sm text-gray-600">{day.humidity}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Garden Care Tips */}
            <div className="bg-green-50 rounded-2xl p-6 mt-6">
              <h3 className="font-semibold text-green-800 mb-4">Today's Garden Tips</h3>
              <div className="space-y-3 text-sm text-green-700">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>High UV conditions - provide shade for sensitive plants</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Perfect weather for outdoor activities and harvesting</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Water plants in early morning to minimize evaporation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WeatherAlerts;