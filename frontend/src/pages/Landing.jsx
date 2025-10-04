import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Stethoscope, Calendar, TrendingUp } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/garden-setup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          {/* Plant Illustration */}
          <div className="mb-8 md:mb-12">
            <div className="relative mx-auto w-full max-w-2xl">
              <img 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop&crop=center" 
                alt="Urban Garden"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Urban Space into a{' '}
            <span className="text-green-600">Thriving Garden</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join 10,000+ gardeners growing fresh food at home with AI-powered guidance and personalized care plans.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleGetStarted}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            Get Started
          </button>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">AI Plant Doctor</h3>
              <p className="text-sm text-gray-600">Diagnose plant health issues with AI-powered analysis</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Smart Scheduling</h3>
              <p className="text-sm text-gray-600">Never miss watering or care tasks with intelligent reminders</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Growth Tracking</h3>
              <p className="text-sm text-gray-600">Monitor your garden's progress with detailed analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;