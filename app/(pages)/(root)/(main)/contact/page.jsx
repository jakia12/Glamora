import ContactBanner from "./components/ContactBanner";
import ContactForm from "./components/ContactForm";
import ContactInfoSection from "./components/ContactInfoSection";
import ContactMap from "./components/ContactMap";

const ContactPage = () => {
  return (
    <div>
      <ContactBanner />
      <ContactInfoSection />
      <ContactMap />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
