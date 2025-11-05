
import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 max-w-4xl mx-auto bg-white/80 dark:bg-black/30 p-4 sm:p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center mb-8 text-gradient font-orbitron">About the Author</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img src="https://picsum.photos/seed/author/250/250" alt="Author Portrait" className="w-48 h-48 rounded-full object-cover shadow-lg" />
          <div className="text-lg text-gray-700 dark:text-gray-300 space-y-4">
            <p>
              Welcome! I am an author, researcher, and speaker dedicated to uncovering the profound wisdom and hidden truths within ancient scriptures. My work focuses on decoding biblical secrets, exploring timeless wisdom, and challenging conventional theological interpretations.
            </p>
            <p>
              My mission is to empower individuals with knowledge, encouraging critical thinking and a deeper, more personal connection to the divine narratives that have shaped our world. Through my books, blog, and podcast, I aim to liberate minds from dogma and inspire a journey of spiritual discovery.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
