"use client";
import React from "react";

const GermanLearningSection: React.FC = () => {
  return (
    <section id="german-learning" className="py-16 bg-gray-200 rounded-lg shadow-md">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          German Language Courses
        </h2>
        <p className="text-lg text-gray-700 max-w-lg mx-auto mb-12">
          Unlock new career opportunities with our expert-led German language
          courses.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Why Learn German?
          </h3>
          <p className="text-gray-700 mb-6">
            Germany has one of the strongest economies in the world, and many
            multinational companies require German proficiency. Learning German can
            open doors to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>High-paying jobs in engineering, technology, and manufacturing.</li>
            <li>Opportunities in German-speaking countries like Germany, Austria, and Switzerland.</li>
            <li>Access to world-class universities and research institutions.</li>
          </ul>
          <a
            href="/german-courses"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md inline-block"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GermanLearningSection;