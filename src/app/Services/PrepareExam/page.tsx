"use client";
import Footer from "@/app/HomePage/Footer/page";
import Navbar from "@/app/HomePage/Hero/Navbar";
import React from "react";
import ServiceHeader from "../ServiceHead/page";
import EnglishExamsSection from "./EnglishExam/page";
import FrenchExamsSection from "./FrenchExam/page";

const ExamPreparationSection: React.FC = () => {
  return (
    <section id="exam-preparation" className="py-16 bg-white">
        <Navbar/>
        <ServiceHeader/>
        <EnglishExamsSection/>
        <FrenchExamsSection/>
        <Footer/>
    </section>
  );
};

export default ExamPreparationSection;