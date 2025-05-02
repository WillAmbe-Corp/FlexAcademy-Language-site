"use client";
import React from "react";

const ServiceHeader: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Services
        </h1>
        <p className="text-lg md:text-xl max-w-lg mx-auto">
          At FlexAcademy, we offer comprehensive language learning and exam
          preparation services to help you achieve your goals.
        </p>
      </div>
    </header>
  );
};

export default ServiceHeader;