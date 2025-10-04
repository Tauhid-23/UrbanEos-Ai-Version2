import React from 'react';
import { TrendingUp } from 'lucide-react';

const MetricCard = ({ 
  value, 
  title, 
  subtitle, 
  change, 
  icon: Icon, 
  color = 'green',
  trend = 'up' 
}) => {
  const colorClasses = {
    green: 'bg-gradient-to-br from-green-400 to-green-500',
    blue: 'bg-gradient-to-br from-blue-400 to-blue-500', 
    orange: 'bg-gradient-to-br from-orange-400 to-orange-500',
    purple: 'bg-gradient-to-br from-purple-400 to-purple-500'
  };

  return (
    <div className={`${colorClasses[color]} rounded-2xl p-6 text-white relative overflow-hidden min-h-[140px]`}>
      {/* Background Icon */}
      <div className="absolute top-4 right-4 opacity-20">
        <Icon className="w-8 h-8" />
      </div>
      
      {/* Trend Arrow */}
      <div className="absolute top-4 right-4">
        <TrendingUp className={`w-4 h-4 ${trend === 'up' ? 'rotate-0' : 'rotate-180'}`} />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="flex items-center space-x-2 mb-1">
          <Icon className="w-5 h-5" />
        </div>
        
        <div className="text-3xl font-bold mb-1">{value}</div>
        
        <div className="text-sm opacity-90 mb-1">{title}</div>
        
        {subtitle && (
          <div className="text-xs opacity-75">{subtitle}</div>
        )}
        
        {change && (
          <div className="text-xs opacity-75 mt-2">{change}</div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;