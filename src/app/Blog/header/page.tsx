"use client";
import React from "react";

const BlogHeader: React.FC = () => {
  return (
    <div className="text-center mb-16 pt-16">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
        Our Blog
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Stay updated with the latest news, tips, and insights about language
        learning, exam preparation, and immigration services.
      </p>
    </div>
  );
};

export default BlogHeader;