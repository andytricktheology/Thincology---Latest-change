import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black/30 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
            {Object.entries(SOCIAL_LINKS).map(([key, value]) => (
                <a key={key} href={value} target="_blank" rel="noopener noreferrer" className="hover:text-gradient transition-colors">
                   {key.charAt(0).toUpperCase() + key.slice(1)}
                </a>
            ))}
        </div>
        <p>&copy; {new Date().getFullYear()} A. U. Thor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;