"use client";
import React from "react";

interface Exam {
  name: string;
  description: string;
  useCase: string;
  link: string;
}

const EnglishExamsSection: React.FC = () => {
  const englishExams: Exam[] = [
    {
      name: "TOEFL",
      description: "Test of English as a Foreign Language",
      useCase:
        "Used for university admissions in English-speaking countries, particularly the USA.",
      link: "https://wa.link/kzqk9w",
    },
    {
      name: "IETLS",
      description: "International English Language Testing System",
      useCase:
        "Required for immigration, work, and study in countries like the UK, Canada, and Australia.",
      link: "https://wa.link/84ijv5",
    },
    {
      name: "TOEIC",
      description: "Test of English for International Communication",
      useCase:
        "Designed for workplace communication, often required by international companies.",
      link: "https://wa.link/pn9369",
    },
  ];

  return (
    <section id="english-exams" className="py-16 bg-white rounded-lg shadow-md">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          English Language Exams
        </h2>
        <p className="text-lg text-gray-700 max-w-lg mx-auto mb-12">
          Prepare for important English proficiency exams with our tailored
          preparation plans.
        </p>

        {/* Exam Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {englishExams.map((exam, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{exam.name}</h3>
              <p className="text-gray-700 text-center mb-6">{exam.description}</p>
              <p className="text-gray-600 text-sm text-center mb-6">
                <strong>Purpose:</strong> {exam.useCase}
              </p>
              <a
                href={exam.link}
                target="_blank"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md"
              >
                Start Preparation
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnglishExamsSection;