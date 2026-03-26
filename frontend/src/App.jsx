import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './context/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Mixologists from './pages/Mixologists';
import Profile from './pages/Profile';
import Bookings from './pages/Bookings';
import AdminDashboard from './pages/AdminDashboard';
import MixologistRegistration from './pages/MixologistRegistration';
import VendorDashboard from './pages/VendorDashboard';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mixologists" element={<Mixologists />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/admin-dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/mixologist-registration" element={
              <ProtectedRoute>
                <MixologistRegistration />
              </ProtectedRoute>
            } />
            <Route path="/vendor-dashboard" element={
              <ProtectedRoute>
                <VendorDashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
