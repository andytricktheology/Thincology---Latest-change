
import React from 'react';
import Layout from '../components/Layout';

const Connect: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would be handled by a backend service
    alert('Thank you for your message! This is a demo form.');
  };

  return (
    <Layout>
      <div className="py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-gradient font-orbitron">Connect</h1>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white/80 dark:bg-black/30 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input type="text" id="name" required className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-md p-2 focus:ring-2 focus:ring-[#c900ff]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input type="email" id="email" required className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-md p-2 focus:ring-2 focus:ring-[#c900ff]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea id="message" rows={5} required className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 border-transparent rounded-md p-2 focus:ring-2 focus:ring-[#c900ff]"></textarea>
              </div>
              <button
                type="submit"
                className="btn-wipe relative w-full text-md font-semibold text-white bg-gradient-to-r from-[#c900ff] to-[#330040] py-2 px-6 rounded-lg shadow-md"
              >
                <span className="relative z-10">Submit</span>
              </button>
            </form>
          </div>

          <div className="bg-white/80 dark:bg-black/30 p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Booking & Media Inquiries</h2>
            <p className="mb-4">
              For interviews, public speaking engagements, or other media inquiries, please reach out via the contact form or directly at the email below.
            </p>
            <p className="font-semibold">
              Email: <a href="mailto:contact@example.com" className="text-gradient hover:underline">contact@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Connect;
