import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/HomePage/Hero/Navbar";

const Hero: React.FC = () => {
  return (
    <div className="w-full bg-sky-50 overflow-hidden relative">
      <Navbar/>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-16 mt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            {/* Animated heading */}
            <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-blue-900 leading-tight mb-4 animate-fade-in-up text-center lg:text-justify">
              Excel in Global Communication with FlexAcademy
            </h1>

            {/* Placeholder text with fade-in animation */}
            <p className="text-gray-600 mb-8 max-w-md animate-fade-in-up delay-200">
            Master any language at your own pace, with expert guidance and real-world conversations
            </p>

            {/* Action buttons with hover effects and fade-in animation */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="../../Services/LearnLanguage" passHref>
                <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full transition duration-200 font-medium text-center w-full sm:w-auto animate-fade-in-up delay-400">
                  Learn a Language
                </button>
              </Link>
              <Link href="../../Services/PrepareExam" passHref>
                <button className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-full transition duration-200 font-medium text-center w-full sm:w-auto animate-fade-in-up delay-600">
                  Prepare an Exam
                </button>
              </Link>
            </div>
            <p className="text-xl font-bold pt-10">
                Get Immigration Assistance from us
            </p>
          </div>

          <div className="w-full lg:w-1/2 relative animate-fade-in-right">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Circle background with pulse animation */}
              <div className="absolute inset-0 bg-sky-200 rounded-full animate-pulse"></div>
              <div className="absolute inset-0">
                <Image
                  src="/newNero.png"
                  alt="Student with notebook"
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;