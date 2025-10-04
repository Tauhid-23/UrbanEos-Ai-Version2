// Mock data for UrbanEos AI Garden Dashboard

export const mockUser = {
  name: "Ahmed Rahman",
  title: "Blooming Gardener",
  avatar: "AR"
};

export const mockWeather = {
  temperature: "32°C",
  condition: "Sunny", 
  description: "Perfect gardening weather today",
  date: "Friday, October 03, 2025",
  wind: "15 km/h",
  humidity: "65%",
  uvIndex: "8/10"
};

export const mockMetrics = [
  {
    id: 1,
    value: "8",
    title: "Total Plants Growing",
    subtitle: "",
    change: "+3",
    color: "green",
    trend: "up"
  },
  {
    id: 2, 
    value: "3",
    title: "Tasks Due Today",
    subtitle: "2 overdue",
    change: "",
    color: "blue", 
    trend: "up"
  },
  {
    id: 3,
    value: "5", 
    title: "Days Until Next Harvest",
    subtitle: "",
    change: "+2 days",
    color: "orange",
    trend: "up"
  },
  {
    id: 4,
    value: "87%",
    title: "Garden Health Score", 
    subtitle: "",
    change: "+5%",
    color: "purple",
    trend: "up"
  }
];

export const mockTasks = [
  {
    id: 1,
    title: "Water Basil",
    plant: "Basil",
    time: "Morning", 
    priority: "high",
    isCompleted: false,
    isOverdue: true,
    plantImage: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=40&h=40&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Check Health Cherry Tomato", 
    plant: "Cherry Tomato",
    time: "Morning",
    priority: "medium", 
    isCompleted: false,
    isOverdue: true,
    plantImage: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=40&h=40&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Prune Mint",
    plant: "Mint", 
    time: "Afternoon",
    priority: "low",
    isCompleted: true,
    isOverdue: false,
    plantImage: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=40&h=40&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Fertilize Herbs",
    plant: "Herb Garden",
    time: "Evening", 
    priority: "medium",
    isCompleted: false,
    isOverdue: false,
    plantImage: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=40&h=40&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Harvest Lettuce",
    plant: "Lettuce",
    time: "Morning",
    priority: "high", 
    isCompleted: false,
    isOverdue: false,
    plantImage: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=40&h=40&fit=crop&crop=center"
  }
];

export const mockWeatherAlert = {
  type: "high-uv",
  title: "Weather Alert",
  message: "High sun exposure today - ensure adequate watering for all plants. UV index: 8/10",
  severity: "warning"
};

export const mockPlants = [
  {
    id: 1,
    name: "Basil",
    variety: "Sweet Basil", 
    status: "healthy",
    plantedDate: "2025-08-15",
    lastWatered: "2025-10-02",
    image: "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Cherry Tomato",
    variety: "Cherry",
    status: "needs-attention", 
    plantedDate: "2025-07-20",
    lastWatered: "2025-10-01",
    image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=100&h=100&fit=crop&crop=center"
  },
  {
    id: 3, 
    name: "Mint",
    variety: "Spearmint",
    status: "healthy",
    plantedDate: "2025-09-01", 
    lastWatered: "2025-10-03",
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=100&h=100&fit=crop&crop=center"
  }
];

// Helper function to get overdue tasks count
export const getOverdueTasksCount = () => {
  return mockTasks.filter(task => task.isOverdue && !task.isCompleted).length;
};