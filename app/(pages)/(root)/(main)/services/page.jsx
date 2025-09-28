import CounterSection from "./components/CountersSection";
import PopularServices from "./components/PopularServices";
import ServicesBanner from "./components/ServicesBanner";
import ServicesPageSection from "./components/ServicesPageSection";

const ServicesPage = () => {
  return (
    <div className=" relative">
      <ServicesBanner />
      <ServicesPageSection />
      <CounterSection />
      <PopularServices />
    </div>
  );
};

export default ServicesPage;
