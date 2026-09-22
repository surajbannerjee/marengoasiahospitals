import React from 'react';

// Home Page Section Components
import HeroSection from '../components/pageComponents/home/HeroSection';
import QuickActions from '../components/pageComponents/home/QuickActions';
import CentersOfExcellence from '../components/pageComponents/home/CentersOfExcellence';
import SpecialtySearch from '../components/pageComponents/home/SpecialtySearch';
import Technologies from '../components/pageComponents/home/Technologies';
import InternationalPatients from '../components/pageComponents/home/InternationalPatients';
import HealthPackages from '../components/pageComponents/home/HealthPackages';
import WhyChooseUs from '../components/pageComponents/home/WhyChooseUs';
import PatientStories from '../components/pageComponents/home/PatientStories';
import NewsEvents from '../components/pageComponents/home/NewsEvents';
import Blogs from '../components/pageComponents/home/Blogs';
import OurHospitals from '../components/pageComponents/home/OurHospitals';
import ExpertCareCTA from '../components/pageComponents/home/ExpertCareCTA';

export const Home = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Action Buttons */}
      <QuickActions />

      {/* 3. Centers of Excellence */}
      <CentersOfExcellence />

      {/* 4. Search by Specialty / Condition */}
      <SpecialtySearch />

      {/* 5. Our Technologies */}
      <Technologies />

      {/* 6. International Patients */}
      <InternationalPatients />

      {/* 7. Health Check-Up Packages */}
      <HealthPackages />

      {/* 8. Why Choose Us */}
      <WhyChooseUs />

      {/* 9. Patient Stories */}
      <PatientStories />

      {/* 10. News & Events */}
      <NewsEvents />

      {/* 11. Blogs */}
      <Blogs />

      {/* 12. Our Hospitals */}
      <OurHospitals />

      {/* 13. Expert Medical Care CTA */}
      <ExpertCareCTA />
    </>
  );
};

export default Home;
