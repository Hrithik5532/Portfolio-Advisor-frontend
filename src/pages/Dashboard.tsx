import React from 'react';
import { ArrowUp, ArrowDown, DollarSign, Percent, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  const portfolioValue = 150000;
  const monthlyReturn = 2.5;
  const yearlyReturn = 12.8;
  
  const portfolioData = [
    { name: 'Stocks', value: 60, color: 'bg-blue-500' },
    { name: 'Bonds', value: 25, color: 'bg-green-500' },
    { name: 'Real Estate', value: 10, color: 'bg-yellow-500' },
    { name: 'Cash', value: 5, color: 'bg-gray-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Portfolio Overview</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Portfolio Value Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Portfolio Value</p>
              <p className="text-2xl font-bold text-gray-900">
                ${portfolioValue.toLocaleString()}
              </p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Monthly Return Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Monthly Return</p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-bold text-gray-900">{monthlyReturn}%</p>
                <ArrowUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <Percent className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Yearly Return Card */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Yearly Return</p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-bold text-gray-900">{yearlyReturn}%</p>
                <ArrowUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Allocation */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Allocation</h2>
        <div className="flex items-center space-x-2 mb-4">
          {portfolioData.map(({ value, color }) => (
            <div
              key={color}
              className={`h-2 ${color} rounded-full`}
              style={{ width: `${value}%` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioData.map(({ name, value, color }) => (
            <div key={name} className="flex items-center space-x-2">
              <div className={`h-3 w-3 rounded-full ${color}`} />
              <span className="text-sm text-gray-600">{name}</span>
              <span className="text-sm font-medium text-gray-900">{value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            { type: 'Buy', asset: 'AAPL', amount: 5000, change: 2.3 },
            { type: 'Sell', asset: 'GOOGL', amount: 3000, change: -1.5 },
            { type: 'Buy', asset: 'MSFT', amount: 4500, change: 1.8 },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b last:border-0">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  activity.type === 'Buy' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {activity.type === 'Buy' ? (
                    <ArrowUp className={`h-4 w-4 ${
                      activity.type === 'Buy' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  ) : (
                    <ArrowDown className={`h-4 w-4 ${
                      activity.type === 'Buy' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {activity.type} {activity.asset}
                  </p>
                  <p className="text-sm text-gray-500">
                    ${activity.amount.toLocaleString()}
                  </p>
                </div>
              </div>
              <span className={`text-sm font-medium ${
                activity.change > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {activity.change > 0 ? '+' : ''}{activity.change}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;