
import React from 'react';
import Layout from '../components/Layout';
import { MOCK_MERCH } from '../constants';

const Merch: React.FC = () => {
  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gradient font-orbitron">Merchandise</h1>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {MOCK_MERCH.map((item) => (
            <div key={item.id} className="group bg-white dark:bg-gray-800/50 p-4 rounded-lg shadow-lg text-center">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-auto object-cover rounded-md mb-4" 
                loading="lazy"
              />
              <h2 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h2>
              <a 
                href={item.teepublicUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-wipe relative inline-block text-md font-semibold text-white bg-gradient-to-r from-[#c900ff] to-[#330040] py-2 px-6 rounded-lg shadow-md"
              >
                <span className="relative z-10">Buy on TeePublic</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Merch;
