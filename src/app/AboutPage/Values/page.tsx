"use client";
import React from "react";

const ourValues = [
  {
    values: "Excellence",
    content: "We strive for excellence in everything we do, ensuring high-quality education and support for all our learners."
  },
  {
    values: "Innovation",
    content: "We embrace innovation to deliver modern, engaging, and effective learning experiences."
  },
  {
    values: "Empathy",
    content: "We understand the unique needs of each learner and provide personalized support to help them succeed."
  },
]

const ValuesSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-8">
          Our Core Values
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourValues.map((value, index)=>{
            return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">{value.values}</h4>
                  <p className="text-gray-700">{value.content}</p>
                </div>
            );
          })}
          </div>
      </div>
    </div>
  );
};

export default ValuesSection;