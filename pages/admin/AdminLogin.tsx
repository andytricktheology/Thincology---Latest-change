
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

interface AdminLoginProps {
  onLogin: () => void;
}

// In a real app, this would be managed on a server
const getLoginAttempts = () => parseInt(localStorage.getItem('loginAttempts') || '0');
const setLoginAttempts = (count: number) => localStorage.setItem('loginAttempts', count.toString());
const getLockoutTime = () => parseInt(localStorage.getItem('lockoutTime') || '0');
const setLockoutTime = (time: number) => localStorage.setItem('lockoutTime', time.toString());


const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const lockoutTime = getLockoutTime();
    if (lockoutTime > Date.now()) {
      setIsLocked(true);
      const remaining = Math.ceil((lockoutTime - Date.now()) / 1000);
      setTimeLeft(remaining);
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsLocked(false);
            localStorage.removeItem('lockoutTime');
            localStorage.removeItem('loginAttempts');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) {
        setError('Account is locked. Please try again later.');
        return;
    }
    // MOCK AUTHENTICATION
    if (email === 'admin@gmail.com' && password === 'password') {
      setLoginAttempts(0);
      onLogin();
      navigate('/oracle/dashboard');
    } else {
      const attempts = getLoginAttempts() + 1;
      setLoginAttempts(attempts);
      if (attempts >= 3) {
        const lockoutDuration = 48 * 60 * 60 * 1000; // 48 hours
        const lockoutEndTime = Date.now() + lockoutDuration;
        setLockoutTime(lockoutEndTime);
        setIsLocked(true);
        setTimeLeft(lockoutDuration / 1000);
        setError('Too many failed attempts. Your IP is locked for 48 hours.');
      } else {
        setError(`Invalid credentials. ${3 - attempts} attempts remaining.`);
      }
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center font-orbitron ${theme}`}>
      <div className="absolute top-4 right-4">
        <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
           {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
       <div className="w-full max-w-md p-8 space-y-8 bg-white dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20">
        <div className="text-center">
            <h1 className="text-3xl font-black text-gradient">Admin Access</h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Restricted Zone</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                 <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@gmail.com"
                    required 
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-lg focus:border-purple-500 focus:outline-none transition"
                 />
            </div>
             <div>
                 <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required 
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-2 border-transparent rounded-lg focus:border-purple-500 focus:outline-none transition"
                 />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {isLocked && <p className="text-yellow-400 text-sm text-center">Time left: {new Date(timeLeft * 1000).toISOString().substr(11, 8)}</p>}
             <button
                type="submit"
                disabled={isLocked}
                className={`w-full py-3 font-bold text-white rounded-lg transition-all duration-300 ${isLocked ? 'bg-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-[#c900ff] to-[#330040] hover:shadow-lg hover:shadow-purple-500/50'}`}
              >
                Authenticate
            </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
