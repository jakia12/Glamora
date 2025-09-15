import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import BookingSection from "./components/BookingSection";
import CategorySection from "./components/CategorySection";
import FeaturesSection from "./components/FeaturesSection";
import FeedbackSection from "./components/FeedbackSection";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <FeaturesSection />

      <FeedbackSection />
      <BookingSection />
      <CategorySection />
      <BlogSection />
    </>
  );
}
