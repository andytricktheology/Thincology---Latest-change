
import React from 'react';
import Layout from '../components/Layout';
import { MOCK_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gradient font-orbitron">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_POSTS.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="block group bg-white dark:bg-gray-800/50 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2">
              <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-colors dark:text-white">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.date} by {post.author}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
