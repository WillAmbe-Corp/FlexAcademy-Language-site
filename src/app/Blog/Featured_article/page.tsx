"use client";
import React from "react";
import Image from "next/image";

const FeaturedArticle: React.FC = () => {
  return (
    <div className="bg-sky-200 py-16 px-4 md:px-8 lg:px-12 rounded-lg shadow-md mb-12">
      <div className="container mx-auto">
        <div className="mb-8">
          <Image
            src="/featured-article.png"
            alt="Featured Article"
            width={1200}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
            The Importance of Language Learning in Today&apos;s World
          </h3>
          <p className="text-gray-700">
            In an increasingly globalized world, mastering a new language can open
            doors to new opportunities and experiences. Read more to discover why
            language learning matters.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;