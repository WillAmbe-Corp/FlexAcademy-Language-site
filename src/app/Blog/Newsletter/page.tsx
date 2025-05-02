"use client";
import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-blue-500 py-16 px-4 md:px-8 lg:px-12 text-white text-center">
      <div className="container mx-auto space-y-4">
        <h3 className="text-2xl md:text-3xl font-bold">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-lg">
          Get the latest updates, tips, and insights delivered straight to your
          inbox.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 w-full md:w-auto border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-full shadow-md">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;