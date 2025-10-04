import React from 'react';
import { 
  Home, 
  Sprout, 
  Calendar, 
  CheckSquare, 
  Stethoscope, 
  Database, 
  AlertTriangle, 
  TrendingUp, 
  Apple, 
  Users, 
  LogOut 
} from 'lucide-react';

const Sidebar = ({ activeItem = 'Dashboard' }) => {
  const menuItems = [
    { name: 'Dashboard', icon: Home, active: true },
    { name: 'My Garden', icon: Sprout },
    { name: 'Planting Calendar', icon: Calendar },
    { name: 'Task Manager', icon: CheckSquare },
    { name: 'Plant Diagnosis', icon: Stethoscope },
    { name: 'Plant Database', icon: Database },
    { name: 'Weather & Alerts', icon: AlertTriangle },
    { name: 'Growth Tracking', icon: TrendingUp },
    { name: 'Harvest Tracker', icon: Apple },
    { name: 'Community', icon: Users }
  ];

  return (
    <div className="w-64 bg-green-800 text-white h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-green-700">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Sprout className="w-5 h-5 text-green-800" />
          </div>
          <h1 className="text-lg font-semibold">UrbanEos AI</h1>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.name === activeItem;
            return (
              <li key={item.name}>
                <button className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                  isActive 
                    ? 'bg-green-700 text-white' 
                    : 'hover:bg-green-700/50 text-green-100'
                }`}>
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-green-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
            AR
          </div>
          <div>
            <p className="text-sm font-medium">Ahmed Rahman</p>
            <p className="text-xs text-green-200">Blooming Gardener</p>
          </div>
        </div>
        
        <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-green-700/50 text-green-100 mt-3">
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;