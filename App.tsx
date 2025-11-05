
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Podcast from './pages/Podcast';
import Books from './pages/Books';
import Merch from './pages/Merch';
import About from './pages/About';
import Connect from './pages/Connect';
import AdminLogin from './pages/admin/AdminLogin';
import Dashboard from './pages/admin/Dashboard';
import ManageBlog from './pages/admin/ManageBlog';
import AdminLayout from './pages/admin/AdminLayout';

// In a real application, this would be managed by a proper auth context
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
};

const App: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <Routes>
      {/* Admin Routes - The admin keyword is "oracle" */}
      <Route path="/oracle/login" element={<AdminLogin onLogin={login} />} />
      
      <Route 
        path="/oracle/*" 
        element={
          isAuthenticated ? (
            <AdminLayout onLogout={logout}>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="blog" element={<ManageBlog />} />
                {/* Add other admin routes here */}
                <Route path="*" element={<Navigate to="dashboard" />} />
              </Routes>
            </AdminLayout>
          ) : (
            <Navigate to="/oracle/login" />
          )
        }
      />

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/podcast" element={<Podcast />} />
      <Route path="/books" element={<Books />} />
      <Route path="/merch" element={<Merch />} />
      <Route path="/about" element={<About />} />
      <Route path="/connect" element={<Connect />} />

      {/* Fallback Route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
