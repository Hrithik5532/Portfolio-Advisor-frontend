import React from 'react';
import { Calendar, MessageSquare, FileText } from 'lucide-react';

const History = () => {
  const consultations = [
    {
      id: 1,
      date: '2024-03-15',
      type: 'Chat Consultation',
      summary: 'Discussion about portfolio rebalancing and risk management',
      recommendations: [
        'Increase bond allocation by 5%',
        'Consider adding emerging market ETFs',
        'Review retirement contribution strategy'
      ]
    },
    {
      id: 2,
      date: '2024-03-10',
      type: 'Form Submission',
      summary: 'Initial investment strategy consultation',
      recommendations: [
        'Start with a conservative portfolio mix',
        'Set up monthly contributions of $500',
        'Focus on low-cost index funds'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Consultation History</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Download All Reports
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        {consultations.map((consultation, index) => (
          <div
            key={consultation.id}
            className={`p-6 ${
              index !== consultations.length - 1 ? 'border-b' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  {consultation.type === 'Chat Consultation' ? (
                    <MessageSquare className="h-6 w-6 text-blue-600" />
                  ) : (
                    <FileText className="h-6 w-6 text-blue-600" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {consultation.type}
                  </h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">
                      {new Date(consultation.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{consultation.summary}</p>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Key Recommendations:
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {consultation.recommendations.map((rec, i) => (
                        <li key={i} className="text-sm text-gray-600">
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;