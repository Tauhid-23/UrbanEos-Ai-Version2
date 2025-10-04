import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Upload, Camera, Search, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const PlantDiagnosis = () => {
  const [diagnosisHistory, setDiagnosisHistory] = useState([
    {
      id: 1,
      plantName: 'Basil',
      issue: 'Yellow leaves',
      diagnosis: 'Overwatering',
      severity: 'medium',
      date: '2025-10-02',
      status: 'resolved',
      recommendations: ['Reduce watering frequency', 'Improve drainage', 'Remove affected leaves']
    },
    {
      id: 2,
      plantName: 'Cherry Tomato',
      issue: 'Brown spots on leaves',
      diagnosis: 'Early blight',
      severity: 'high',
      date: '2025-10-01',
      status: 'treating',
      recommendations: ['Apply fungicide', 'Increase air circulation', 'Remove infected leaves']
    }
  ]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'treating': return <Clock className="w-4 h-4 text-yellow-600" />;
      default: return <AlertTriangle className="w-4 h-4 text-red-600" />;
    }
  };

  return (
    <Layout title="Plant Diagnosis">
      <div className="p-4 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Plant Diagnosis</h1>
          <p className="text-gray-600">AI-powered plant health analysis and treatment recommendations</p>
        </div>

        {/* Diagnosis Upload Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">New Diagnosis</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upload Methods */}
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-400 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Plant Photo</h3>
                <p className="text-gray-600 mb-4">Take a clear photo of the affected plant area</p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium">
                  Choose File
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Camera className="w-5 h-5 text-gray-600" />
                  <span>Take Photo</span>
                </button>
                <button className="flex items-center justify-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Search className="w-5 h-5 text-gray-600" />
                  <span>Symptom Search</span>
                </button>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Photography Tips</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>• Use natural lighting when possible</li>
                <li>• Focus on the affected area clearly</li>
                <li>• Include surrounding healthy parts for comparison</li>
                <li>• Take multiple angles if needed</li>
                <li>• Avoid shadows and blurry images</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Diagnosis History */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Diagnosis History</h2>
          </div>

          <div className="p-6">
            {diagnosisHistory.length > 0 ? (
              <div className="space-y-4">
                {diagnosisHistory.map((diagnosis) => (
                  <div key={diagnosis.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                      <div className="flex items-center space-x-3 mb-2 lg:mb-0">
                        {getStatusIcon(diagnosis.status)}
                        <div>
                          <h3 className="font-semibold text-gray-900">{diagnosis.plantName}</h3>
                          <p className="text-sm text-gray-600">{diagnosis.issue}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${getSeverityColor(diagnosis.severity)}`}>
                          {diagnosis.severity.toUpperCase()}
                        </span>
                        <span className="text-sm text-gray-500">{diagnosis.date}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="font-medium text-gray-900 mb-2">Diagnosis: {diagnosis.diagnosis}</div>
                      
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Recommendations:</h4>
                        <ul className="space-y-1">
                          {diagnosis.recommendations.map((rec, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="px-3 py-1 text-sm bg-green-50 text-green-700 hover:bg-green-100 rounded-md">
                        View Details
                      </button>
                      <button className="px-3 py-1 text-sm bg-gray-50 text-gray-700 hover:bg-gray-100 rounded-md">
                        Re-diagnose
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No diagnosis history</h3>
                <p className="text-gray-600">Start by uploading a photo of your plant for AI analysis</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlantDiagnosis;