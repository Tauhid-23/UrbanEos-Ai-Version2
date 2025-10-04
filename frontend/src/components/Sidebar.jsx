import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'My Garden', icon: Sprout, path: '/my-garden' },
    { name: 'Planting Calendar', icon: Calendar, path: '/planting-calendar' },
    { name: 'Task Manager', icon: CheckSquare, path: '/task-manager' },
    { name: 'Plant Diagnosis', icon: Stethoscope, path: '/plant-diagnosis' },
    { name: 'Plant Database', icon: Database, path: '/plant-database' },
    { name: 'Weather & Alerts', icon: AlertTriangle, path: '/weather-alerts' },
    { name: 'Growth Tracking', icon: TrendingUp, path: '/growth-tracking' },
    { name: 'Harvest Tracker', icon: Apple, path: '/harvest-tracker' },
    { name: 'Community', icon: Users, path: '/community' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate('/');
  };

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
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <button 
                  onClick={() => handleNavigation(item.path)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
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
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
            AR
          </div>
          <div>
            <p className="text-sm font-medium">Ahmed Rahman</p>
            <p className="text-xs text-green-200">Blooming Gardener</p>
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors hover:bg-green-700/50 text-green-100">
          <LogOut className="w-4 h-4" />
          <span className="text-sm">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;