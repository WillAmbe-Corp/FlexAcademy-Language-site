"use client";
import React from "react";
import Link from "next/link"

const EnglishLearningSection: React.FC = () => {
  return (
    <section id="english-learning" className="py-16 bg-white rounded-lg shadow-md">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          English Language Courses
        </h2>
        <p className="text-lg text-gray-700 max-w-lg mx-auto mb-12">
          Master the English language with our comprehensive courses tailored to
          your needs.
        </p>

        {/* General English Learning */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            General English Learning
          </h3>
          <p className="text-gray-700 mb-6">
            Improve your English skills for everyday communication, travel, and
            personal growth. Our courses cover grammar, vocabulary, listening,
            speaking, reading, and writing.
          </p>
          <Link
            href="https://wa.link/2jitkl" target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md inline-block"
          >
            Register Now
          </Link>
        </div>

        {/* Business English Learning */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Business English Learning
          </h3>
          <p className="text-gray-700 mb-6">
            Enhance your professional English skills with courses designed for the
            business world. Learn industry-specific vocabulary, negotiation
            techniques, and effective communication for global workplaces.
          </p>
          <Link
            href="https://wa.link/60sp7l" target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md inline-block"
          >
            Register Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnglishLearningSection;