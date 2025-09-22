import BlogSection from "./components/BlogSection";
import BookingSection from "./components/BookingSection";
import FeaturesSection from "./components/FeaturesSection";
import FeedbackSection from "./components/FeedbackSection";
import HeroBanner from "./components/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />

      <FeaturesSection />

      <FeedbackSection />
      <BookingSection />

      <BlogSection />
    </>
  );
}
