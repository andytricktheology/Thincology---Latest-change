
import React from 'react';
import Layout from '../components/Layout';
import { MOCK_BOOKS } from '../constants';

const Books: React.FC = () => {
  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gradient font-orbitron">Books</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MOCK_BOOKS.map((book) => (
            <div key={book.id} className="group text-center">
              <img 
                src={book.imageUrl} 
                alt={book.title} 
                className="w-full h-auto object-cover rounded-lg shadow-lg mb-4 transform transition-transform group-hover:scale-105"
                loading="lazy"
              />
              <h2 className="text-xl font-bold mb-2 dark:text-white">{book.title}</h2>
              <a 
                href={book.amazonUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-wipe relative inline-block text-md font-semibold text-white bg-gradient-to-r from-[#c900ff] to-[#330040] py-2 px-6 rounded-lg shadow-md"
              >
                <span className="relative z-10">View on Amazon</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Books;
