"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../HomePage/Hero/Navbar";
import Footer from "../HomePage/Footer/page";
import Pricing from "./CoorporatePrices/page";

const LandingPage: React.FC = () => {
  return (
    <main className="bg-blue-100 min-h-screen py-8">
        <Navbar/>
      <section className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
          Welcome to FlexAcademy
        </h1>
        <p className="text-lg text-gray-700 max-w-lg mx-auto mb-16">
          Choose your path to success—whether it&apos;s mastering a new language or
          preparing for important exams, w&apos;re here to help.
        </p>
      </section>

      <section className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
            <Image
              src="/learn-language.jpg"
              alt="Learn a Language"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-8"
            />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Learn a New Language
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Master English, German, or other languages with our interactive and
              engaging courses. Unlock new opportunities through communication.
            </p>
            <Link
              href="/Services/LearnLanguage"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md"
            >
              Start Learning
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
            <Image
              src="/prepare-exam.jpg"
              alt="Prepare for an Exam"
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-8"
            />
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Prepare for Important Exams
            </h2>
            <p className="text-gray-700 text-center mb-6">
              Get ready for TOEFL, IELTS, TOEIC, TCF, and TEF with our tailored
              preparation plans. Achieve excellence in language proficiency tests.
            </p>
            <Link
              href="/Services/PrepareExam"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md"
            >
              Start Preparation
            </Link>
          </div>
        </div>
      </section>
      <Pricing/>
      <Footer/>
    </main>
  );
};

export default LandingPage;