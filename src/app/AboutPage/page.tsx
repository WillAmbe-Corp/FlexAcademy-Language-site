"use client";
import AboutHeader from "./Header/page";
import HistorySection from "./History/page";
import VisionSection from "./Vision/page";
import ValuesSection from "./Values/page";
import Footer from "../HomePage/Footer/page";
import Navbar from "../HomePage/Hero/Navbar";
import MissionSection from "./Mission/page";

const AboutPage: React.FC = () => {
    return (
      <section id="about" className="py-24 bg-gray-100">
        <Navbar/>
        <AboutHeader/>
        <MissionSection/>
        <VisionSection/>
        <ValuesSection/>
        <HistorySection/>
        <Footer/>
      </section>
    );
  };
  
  export default AboutPage;