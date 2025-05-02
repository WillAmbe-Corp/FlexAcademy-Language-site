import Footer from "./HomePage/Footer/page";
import LanguageGallery from "./HomePage/Gallery/page";
import Hero from "./HomePage/Hero/page";
import ImmigrationPage from "./HomePage/Immigration/page";
import FeatureShowcase from "./HomePage/Services/page";
import StatisticsPage from "./HomePage/Statistics/page";
import TestimonialPage from "./HomePage/Testimonials/page";
import AboutPage from "./HomePage/about/page";

export default function Home() {
  return(
    <div>
       <Hero/>
       <FeatureShowcase/>
       <LanguageGallery/>
       <AboutPage/>
       <ImmigrationPage/>
       <TestimonialPage/>
       <StatisticsPage/>
       <Footer/>
    </div>
  );
}
