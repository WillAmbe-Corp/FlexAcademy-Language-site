"use client";
import React from "react";

interface Exam {
  name: string;
  description: string;
  useCase: string;
  link: string;
}

const FrenchExamsSection: React.FC = () => {
  const frenchExams: Exam[] = [
    {
      name: "TCF",
      description: "Test de Connaissance du Français",
      useCase:
        "Required for French citizenship applications and university admissions in France.",
      link: "https://wa.link/jksc6l",
    },
    {
      name: "TEF",
      description: "Test d'Évaluation de Français",
      useCase:
        "Used for immigration to Canada and admission to French-speaking universities.",
      link: "https://wa.link/kp1isd",
    },
    {
      name: "DELF",
      description: "Diplôme d'Études en Langue Française",
      useCase:
        "A French language proficiency certification for non-native speakers. It assesses levels A1 to B2 of the Common European Framework of Reference for Languages (CEFR), often used for educational, professional, and immigration purposes.",
      link: "https://wa.link/ae8ryp",
    },
    {
      name: "DALF",
      description: "Diplôme Approfondi de Langue Française",
      useCase:
        "An advanced French language certification, covering levels C1 and C2 of the CEFR. It is ideal for individuals seeking to demonstrate high proficiency in French for academic, professional, or cultural purposes.",
      link: "https://wa.link/2978pe",
    },
  ];

  return (
    <section id="french-exams" className="py-16 bg-gray-200 rounded-lg shadow-md">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
          French Language Exams
        </h2>
        <p className="text-lg text-gray-700 max-w-lg mx-auto mb-12">
          Get ready for French proficiency exams with our specialized preparation
          programs.
        </p>

        {/* Exam Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {frenchExams.map((exam, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
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

export default FrenchExamsSection;