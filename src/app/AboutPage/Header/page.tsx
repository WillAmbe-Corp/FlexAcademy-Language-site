"use client";
import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 pt-8">
        About Us
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        At FlexAcademy, we are dedicated to helping individuals unlock their
        potential through language learning and cultural immersion. Our mission is
        to bridge cultural gaps and empower learners with the skills they need to
        succeed in an increasingly globalized world.
      </p>
    </div>
  );
};

export default AboutHeader;