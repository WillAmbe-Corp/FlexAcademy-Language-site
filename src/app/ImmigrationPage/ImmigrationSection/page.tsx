"use client";
import React from "react";
import Image from "next/image";

const ImmigrationSection: React.FC = () => {
  return (
    <main className="bg-gray-100 min-h-screen py-16">
      <section className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <div className="relative mb-16">
          <Image
            src="/head_bg.jpeg"
            alt="Immigration Services"
            fill
            objectFit="cover"
            className="object-center brightness-50 rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 pt-8">
              Immigration Services
            </h1>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-8 pt-16">
          Service Currently Unavailable
        </h2>
        <p className="text-lg text-gray-700 max-w-lg mx-auto mb-12">
          We are sorry, but our immigration services are currently unavailable.
          Please check back soon or contact us for more information.
        </p>
      </section>
    </main>
  );
};

export default ImmigrationSection;