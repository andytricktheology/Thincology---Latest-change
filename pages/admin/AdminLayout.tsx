
import React, { ReactNode } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChartBarIcon, DocumentTextIcon, ArrowLeftOnRectangleIcon as LogoutIcon, Squares2X2Icon as ViewGridIcon } from '@heroicons/react/24/solid';
import { useTheme } from '../../hooks/useTheme';

interface AdminLayoutProps {
  children: ReactNode;
  onLogout: () => void;
}

const ADMIN_NAV = [
    { name: 'Dashboard', path: '/oracle/dashboard', icon: ViewGridIcon },
    { name: 'Manage Blog', path: '/oracle/blog', icon: DocumentTextIcon },
    // Add other links here...
];

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, onLogout }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen font-sans ${theme} bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200`}>
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white dark:bg-gray-900/70 border-r border-purple-500/20 shadow-lg flex flex-col">
          <div className="h-20 flex items-center justify-center border-b border-purple-500/20">
            <Link to="/oracle/dashboard" className="font-orbitron text-2xl font-black text-gradient">
              DASHBOARD
            </Link>
          </div>
          <nav className="flex-grow p-4 space-y-2">
            {ADMIN_NAV.map(item => (
                <NavLink 
                    key={item.name} 
                    to={item.path}
                    className={({ isActive }) => `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? 'bg-gradient-to-r from-[#c900ff] to-[#330040] text-white shadow-md' : 'hover:bg-gray-200 dark:hover:bg-gray-800'}`}
                >
                    <item.icon className="h-6 w-6"/>
                    <span className="font-semibold">{item.name}</span>
                </NavLink>
            ))}
          </nav>
          <div className="p-4 border-t border-purple-500/20">
              <button onClick={onLogout} className="flex w-full items-center space-x-3 px-4 py-3 rounded-lg hover:bg-red-500/20 text-red-500 transition-colors">
                  <LogoutIcon className="h-6 w-6"/>
                  <span className="font-semibold">Logout</span>
              </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <header className="h-20 flex items-center justify-between px-8 bg-white dark:bg-gray-900/70 border-b border-purple-500/20">
            <h1 className="text-xl font-bold">Admin Panel</h1>
            {/* You can add user profile, notifications here */}
          </header>
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
