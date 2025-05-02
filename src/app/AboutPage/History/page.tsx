"use client";
import React from "react";

const HistorySection: React.FC = () => {
  return (
    <div className="bg-sky-100 py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8">
          Our Journey
        </h3>
        <p className="text-gray-700 text-center">
          FlexAcademy was founded in 2021 with a simple goal: to make language
          learning accessible and impactful. Over the years, we&apos;ve grown into a
          trusted partner for students, professionals, and immigrants seeking to
          enhance their skills and adapt to new cultures.
        </p>
      </div>
    </div>
  );
};

export default HistorySection;