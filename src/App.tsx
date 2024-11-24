import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import OTP from './pages/OTP';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ConsultationForm from './pages/ConsultationForm';
import Chat from './pages/Chat';
import History from './pages/History';
import Layout from './components/Layout';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp" element={<OTP />} />

          <Route path="/" element={
            <PrivateRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/consultation" element={
            <PrivateRoute>
              <Layout>
                <ConsultationForm />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/chat" element={
            <PrivateRoute>
              <Layout>
                <Chat />
              </Layout>
            </PrivateRoute>
          } />
          <Route path="/history" element={
            <PrivateRoute>
              <Layout>
                <History />
              </Layout>
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;