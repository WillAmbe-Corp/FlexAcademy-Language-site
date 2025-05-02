"use client";
import React from "react";

const BlogCategories: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-12 rounded-lg shadow-md">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          Explore Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Category 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-900 mb-4">Language Tips</h4>
            <p className="text-gray-700 text-center">
              Articles focused on improving your language skills.
            </p>
          </div>

          {/* Category 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-900 mb-4">Exam Prep</h4>
            <p className="text-gray-700 text-center">
              Guides and tips for preparing for international exams.
            </p>
          </div>

          {/* Category 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <h4 className="text-xl font-bold text-blue-900 mb-4">Immigration</h4>
            <p className="text-gray-700 text-center">
              Insights into the immigration process and related topics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCategories;