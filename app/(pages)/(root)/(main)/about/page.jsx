import CategorySection from "../components/CategorySection";
import AboutBanner from "./components/AboutBanner";
import AboutPageSection from "./components/AboutPageSection";

const AboutPage = () => {
  return (
    <div className="zndx">
      <AboutBanner />
      <AboutPageSection />
      <CategorySection />
      {/* <ServicesSection /> */}
    </div>
  );
};

export default AboutPage;
