import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Search, Filter, Camera, Upload, Database as DatabaseIcon, Leaf, Sun, Droplets, Thermometer } from 'lucide-react';

const PlantDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAIRecognition, setShowAIRecognition] = useState(false);

  const categories = ['All', 'Herbs', 'Vegetables', 'Leafy Greens', 'Fruits'];

  const plants = [
    {
      id: 1,
      name: 'Basil',
      scientificName: 'Ocimum basilicum',
      category: 'Herbs',
      difficulty: 'Easy',
      sunlight: 'Full Sun',
      watering: 'Moderate',
      growthTime: '60-90 days',
      temperature: '18-24°C',
      description: 'A fragrant herb perfect for cooking, especially Italian dishes. Easy to grow indoors or outdoors.',
      image: 'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Cherry Tomato',
      scientificName: 'Solanum lycopersicum var. cerasiforme',
      category: 'Vegetables',
      difficulty: 'Medium',
      sunlight: 'Full Sun',
      watering: 'Regular',
      growthTime: '65-80 days',
      temperature: '70-80°F',
      description: 'Small, sweet tomatoes perfect for snacking and salads. Prolific producers in warm weather.',
      image: 'https://images.unsplash.com/photo-1592921870789-04563d55041c?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Lettuce',
      scientificName: 'Lactuca sativa',
      category: 'Leafy Greens',
      difficulty: 'Easy',
      sunlight: 'Partial Sun',
      watering: 'Regular',
      growthTime: '45-65 days',
      temperature: '60-70°F',
      description: 'Cool-season crop that grows quickly and provides fresh salad greens year-round in mild climates.',
      image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Mint',
      scientificName: 'Mentha',
      category: 'Herbs',
      difficulty: 'Easy',
      sunlight: 'Partial Sun',
      watering: 'High',
      growthTime: '90 days',
      temperature: '65-75°F',
      description: 'Aromatic herb that spreads quickly. Great for teas, cooking, and natural pest control.',
      image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Chili Pepper',
      scientificName: 'Capsicum annuum',
      category: 'Vegetables',
      difficulty: 'Medium',
      sunlight: 'Full Sun',
      watering: 'Moderate',
      growthTime: '70-100 days',
      temperature: '70-80°F',
      description: 'Spicy peppers that add heat to dishes. Require warm conditions and regular feeding.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Coriander',
      scientificName: 'Coriandrum sativum',
      category: 'Herbs',
      difficulty: 'Easy',
      sunlight: 'Partial Sun',
      watering: 'Moderate',
      growthTime: '45-70 days',
      temperature: '50-75°F',
      description: 'Also known as cilantro, this herb is essential in many cuisines. Both leaves and seeds are edible.',
      image: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 7,
      name: 'Spinach',
      scientificName: 'Spinacia oleracea',
      category: 'Leafy Greens',
      difficulty: 'Easy',
      sunlight: 'Partial Sun',
      watering: 'Regular',
      growthTime: '40-50 days',
      temperature: '50-70°F',
      description: 'Nutrient-dense leafy greens that thrive in cool weather. Perfect for salads and cooking.',
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 8,
      name: 'Rosemary',
      scientificName: 'Rosmarinus officinalis',
      category: 'Herbs',
      difficulty: 'Medium',
      sunlight: 'Full Sun',
      watering: 'Low',
      growthTime: '75-90 days',
      temperature: '60-75°F',
      description: 'Woody perennial herb with needle-like leaves. Perfect for seasoning meats and vegetables.',
      image: 'https://images.unsplash.com/photo-1595857154266-b80ce0497962?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 9,
      name: 'Thyme',
      scientificName: 'Thymus vulgaris',
      category: 'Herbs',
      difficulty: 'Easy',
      sunlight: 'Full Sun',
      watering: 'Low',
      growthTime: '75-90 days',
      temperature: '60-75°F',
      description: 'Small-leaved perennial herb with intense flavor. Perfect for seasoning and medicinal uses.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 10,
      name: 'Parsley',
      scientificName: 'Petroselinum crispum',
      category: 'Herbs',
      difficulty: 'Easy',
      sunlight: 'Partial Sun',
      watering: 'Regular',
      growthTime: '70-90 days',
      temperature: '50-70°F',
      description: 'Versatile herb used as garnish and flavoring. Rich in vitamins and easy to grow.',
      image: 'https://images.unsplash.com/photo-1553882809-a4f32c1bb5ba?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 11,
      name: 'Oregano',
      scientificName: 'Origanum vulgare',
      category: 'Herbs',
      difficulty: 'Easy',
      sunlight: 'Full Sun',
      watering: 'Moderate',
      growthTime: '80-90 days',
      temperature: '65-75°F',
      description: 'Perennial herb with strong, pungent flavor essential for Mediterranean and Mexican cuisines.',
      image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=300&h=200&fit=crop&crop=center'
    },
    {
      id: 12,
      name: 'Bell Pepper',
      scientificName: 'Capsicum annuum',
      category: 'Vegetables',
      difficulty: 'Medium',
      sunlight: 'Full Sun',
      watering: 'Regular',
      growthTime: '70-80 days',
      temperature: '70-80°F',
      description: 'Sweet, colorful peppers perfect for cooking and eating fresh. Require warm, sunny conditions.',
      image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=300&h=200&fit=crop&crop=center'
    }
  ];

  const filteredPlants = plants.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-700';
      case 'Medium': return 'bg-yellow-100 text-yellow-700';
      case 'Hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <Layout title="Plant Database">
      <div className="p-4 lg:p-8 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 lg:mb-0">
            <DatabaseIcon className="w-8 h-8 text-green-600" />
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Plant Database</h1>
              <p className="text-gray-600">Explore comprehensive plant information and growing guides</p>
            </div>
          </div>
          <button 
            onClick={() => setShowAIRecognition(!showAIRecognition)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors"
          >
            <Camera className="w-4 h-4 mr-2" />
            AI Plant Recognition
          </button>
        </div>

        {/* AI Recognition Panel */}
        {showAIRecognition && (
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-8 border-2 border-blue-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Camera className="w-5 h-5 text-blue-600 mr-2" />
              AI Plant Recognition
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upload Section */}
              <div className="space-y-4">
                <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer bg-blue-50">
                  <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Plant Photo</h3>
                  <p className="text-gray-600 mb-4">Take a clear photo of the plant for AI identification</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    Choose File
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center space-x-2 p-4 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
                    <Camera className="w-5 h-5 text-blue-600" />
                    <span>Take Photo</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-4 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors">
                    <Search className="w-5 h-5 text-blue-600" />
                    <span>Browse Library</span>
                  </button>
                </div>
              </div>

              {/* Tips Section */}
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Recognition Tips</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• Use natural lighting for best results</li>
                  <li>• Capture clear details of leaves and flowers</li>
                  <li>• Include the whole plant if possible</li>
                  <li>• Avoid shadows and blurry images</li>
                  <li>• Take multiple angles for better accuracy</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search plants by name or scientific name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                <option value="all">All Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </div>

        {/* Plant Database */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <DatabaseIcon className="w-5 h-5 text-green-600 mr-2" />
              Plant Database ({filteredPlants.length} plants)
            </h2>
            <p className="text-sm text-gray-600 mt-1">Showing {filteredPlants.length} of {plants.length} plants</p>
          </div>

          {/* Plants Grid */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.map((plant) => (
              <div key={plant.id} className="bg-green-50 rounded-2xl p-4 border border-green-100 hover:shadow-md transition-shadow">
                {/* Plant Image */}
                <div className="relative mb-4">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-md text-xs font-medium ${getDifficultyColor(plant.difficulty)}`}>
                      {plant.difficulty}
                    </span>
                  </div>
                </div>

                {/* Plant Info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-gray-900">{plant.name}</h3>
                    <p className="text-sm text-gray-600 italic">{plant.scientificName}</p>
                    <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                      {plant.category}
                    </span>
                  </div>

                  {/* Growing Conditions */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center space-x-1">
                      <Sun className="w-3 h-3 text-yellow-500" />
                      <span className="text-gray-600">Sunlight:</span>
                    </div>
                    <span className="text-gray-900">{plant.sunlight}</span>
                    
                    <div className="flex items-center space-x-1">
                      <Droplets className="w-3 h-3 text-blue-500" />
                      <span className="text-gray-600">Watering:</span>
                    </div>
                    <span className="text-gray-900">{plant.watering}</span>
                    
                    <div className="flex items-center space-x-1">
                      <Thermometer className="w-3 h-3 text-red-500" />
                      <span className="text-gray-600">Temperature:</span>
                    </div>
                    <span className="text-gray-900">{plant.temperature}</span>
                    
                    <div className="flex items-center space-x-1">
                      <Leaf className="w-3 h-3 text-green-500" />
                      <span className="text-gray-600">Growth Time:</span>
                    </div>
                    <span className="text-gray-900">{plant.growthTime}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed">{plant.description}</p>

                  {/* Action Button */}
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium text-sm transition-colors flex items-center justify-center">
                    <Leaf className="w-4 h-4 mr-2" />
                    Add to My Garden
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPlants.length === 0 && (
            <div className="text-center py-16">
              <DatabaseIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No plants found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PlantDatabase;