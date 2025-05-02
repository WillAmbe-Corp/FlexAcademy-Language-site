"use client";
import React from "react";
import Image from "next/image";

interface Article {
  title: string;
  description: string;
  imageUrl: string;
  href: string;
}

const ArticleList: React.FC = () => {
  const articles: Article[] = [
    {
      title: "Top Tips for Learning a New Language",
      description:
        "Discover effective strategies to accelerate your language learning journey.",
      imageUrl: "/LevelTest.jpg",
      href: "/blog/top-tips-for-learning-a-new-language",
    },
    {
      title: "How to Prepare for International Exams",
      description:
        "Get expert advice on how to ace your upcoming international exams.",
      imageUrl: "/prepare.jpg",
      href: "/blog/how-to-prepare-for-international-exams",
    },
    {
      title: "Navigating the Immigration Process",
      description:
        "Learn the essential steps to successfully navigate the immigration process.",
      imageUrl: "/ietls.jpg",
      href: "/blog/navigating-the-immigration-process",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-8">
          Recent Articles
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="mb-4">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-bold text-blue-900 mb-2">
                  {article.title}
                </h4>
                <p className="text-gray-700 text-sm">{article.description}</p>
              </div>

              <div className="mt-4">
                <a
                  href={article.href}
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleList;