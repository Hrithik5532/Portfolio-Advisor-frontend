import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, UserCircle, PieChart, LogOut, MessageSquare, History, FileText } from 'lucide-react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <PieChart className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">PortfolioPilot</span>
            </div>
          </div>
          
          <nav className="flex-1 p-4">
            <div className="space-y-2">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 w-full p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Dashboard</span>
              </button>
              
              <button
                onClick={() => navigate('/consultation')}
                className="flex items-center space-x-2 w-full p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <FileText className="h-5 w-5" />
                <span>Get Consultation</span>
              </button>

              <button
                onClick={() => navigate('/chat')}
                className="flex items-center space-x-2 w-full p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Live Chat</span>
              </button>

              <button
                onClick={() => navigate('/history')}
                className="flex items-center space-x-2 w-full p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <History className="h-5 w-5" />
                <span>History</span>
              </button>
            </div>
          </nav>

          <div className="p-4 border-t">
            <div className="flex items-center space-x-2 mb-4">
              <UserCircle className="h-8 w-8 text-gray-400" />
              <div>
                <p className="text-sm font-medium text-gray-700">{user?.name}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="flex items-center space-x-2 w-full p-2 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 p-8">
        {children}
      </div>
    </div>
  );
};

export default Layout;