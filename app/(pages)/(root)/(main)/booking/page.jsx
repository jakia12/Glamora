import BookingBanner from "./components/BookingBanner";
import BookingForm from "./components/BookingForm";
import BookingHours from "./components/BookingHours";
import OfferSection from "./components/OfferSection";

const BookingPage = () => {
  return (
    <div>
      <BookingBanner />
      <OfferSection />
      <BookingHours />
      <BookingForm />
    </div>
  );
};

export default BookingPage;
