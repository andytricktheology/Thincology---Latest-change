
import React from 'react';
import Layout from '../components/Layout';
import { MOCK_PODCASTS } from '../constants';

const Podcast: React.FC = () => {
  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gradient font-orbitron">Podcast</h1>
        <div className="max-w-3xl mx-auto space-y-12">
          {MOCK_PODCASTS.map((episode) => (
            <div key={episode.id} className="bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">{episode.title}</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={episode.embedUrl}
                  title={episode.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Podcast;
