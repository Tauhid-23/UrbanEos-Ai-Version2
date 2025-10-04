import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';

const GardenSetup = () => {
  const navigate = useNavigate();
  const [selectedGarden, setSelectedGarden] = useState(null);

  const gardenTypes = [
    {
      id: 'balcony',
      title: 'Balcony Garden',
      description: 'Perfect for apartments and small spaces. Grow in containers and make the most of your balcony.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center',
      features: [
        'Container gardening',
        'Vertical growing solutions', 
        'Space optimization'
      ]
    },
    {
      id: 'roof',
      title: 'Roof Garden',
      description: 'Ideal for larger spaces with full sun exposure. Create an extensive garden on your rooftop.',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
      features: [
        'Raised bed systems',
        'Full sun exposure',
        'Larger growing area'
      ]
    }
  ];

  const handleBack = () => {
    navigate('/');
  };

  const handleContinue = () => {
    if (selectedGarden) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What type of garden space do you have?
          </h1>
          <p className="text-gray-600 text-lg">
            Choose your garden type to get personalized recommendations
          </p>
        </div>

        {/* Garden Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {gardenTypes.map((garden) => (
            <div
              key={garden.id}
              onClick={() => setSelectedGarden(garden.id)}
              className={`cursor-pointer rounded-2xl p-6 border-2 transition-all ${
                selectedGarden === garden.id
                  ? 'border-green-500 bg-green-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="relative mb-4">
                <img
                  src={garden.image}
                  alt={garden.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                {selectedGarden === garden.id && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {garden.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {garden.description}
              </p>

              <ul className="space-y-2">
                {garden.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <button
            onClick={handleContinue}
            disabled={!selectedGarden}
            className={`px-8 py-3 rounded-full font-semibold transition-colors ${
              selectedGarden
                ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default GardenSetup;