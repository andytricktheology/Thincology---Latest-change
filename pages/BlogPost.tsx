
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { MOCK_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = MOCK_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h1 className="text-3xl font-bold">Post not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="max-w-4xl mx-auto py-12 bg-white/80 dark:bg-black/30 p-4 sm:p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient font-orbitron mb-4">{post.title}</h1>
        <div className="text-gray-500 dark:text-gray-400 mb-6">
          <span>By {post.author}</span> | <span>{post.date}</span>
        </div>
        <img src={post.imageUrl} alt={post.title} className="w-full rounded-lg mb-8" />
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
    </Layout>
  );
};

export default BlogPost;
