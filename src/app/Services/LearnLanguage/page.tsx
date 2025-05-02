"use client";
import Navbar from "@/app/HomePage/Hero/Navbar";
import React from "react";
import ServiceHeader from "../ServiceHead/page";
import Footer from "@/app/HomePage/Footer/page";
import EnglishLearningSection from "./LearnEnglish/page";
import GermanLearningSection from "./LearnGerman/page";

const LanguageLearningSection: React.FC = () => {
  return (
    <section id="language-learning" className="py-16 bg-gray-100">
        <Navbar/>
        <ServiceHeader/>
        <EnglishLearningSection/>
        <GermanLearningSection/>
        <Footer/>
    </section>
  );
};

export default LanguageLearningSection;