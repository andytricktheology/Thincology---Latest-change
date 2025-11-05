import React from 'react';
import Layout from '../components/Layout';
import AnimatedHeadline from '../components/AnimatedHeadline';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center min-h-[70vh]">
        <div className="flex items-center justify-center min-h-[6rem] md:min-h-[8rem]">
          <AnimatedHeadline />
        </div>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-600 dark:text-gray-300">
          A central hub for Wisdom, Truth, and Biblical Secrets. Explore my books, blogs, podcasts, and more.
        </p>
        <div className="mt-10">
          <Link
            to="/blog"
            className="btn-wipe relative inline-block text-lg font-semibold text-white bg-gradient-to-r from-[#c900ff] to-[#330040] py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <span className="relative z-10">Explore the Blog</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;