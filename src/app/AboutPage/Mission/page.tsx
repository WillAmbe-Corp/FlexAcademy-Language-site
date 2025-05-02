"use client";
import React from "react";

const MissionSection: React.FC = () => {
  return (
    <div className="bg-sky-100 py-16 px-4 md:px-8 lg:px-12 rounded-lg shadow-md">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl text-center font-bold text-blue-900 mb-6">
          Our Mission
        </h3>
        <p className="text-gray-700 mb-4">
          Founded in 2021, FlexAcademy has become a leader in language education. Our experienced team of instructors and
          is committed to providing personalized support to every
          learner.
        </p>
        <p className="text-gray-700">
          Whether you&apos;re preparing for exams, learning a new language, or seeking
          immigration guidance, we&apos;re here to help you achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default MissionSection;