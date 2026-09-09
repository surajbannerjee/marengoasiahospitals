import React, { useState } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import QuickFloatingWidgets from '../components/shared/QuickFloatingWidgets';
import AppointmentModal from '../components/shared/AppointmentModal';

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

export const App = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const handleOpenAppointment = (specialty = '') => {
    setSelectedSpecialty(specialty);
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
    setSelectedSpecialty('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800 pb-14 sm:pb-0">
      {/* 1. Header & Navigation */}
      <Header onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* 3. Quick Action Buttons */}
        <QuickActions onOpenAppointment={() => handleOpenAppointment()} />

        {/* 4. Centers of Excellence */}
        <CentersOfExcellence onSelectSpecialty={(spec) => handleOpenAppointment(spec)} />

        {/* 5. Search by Specialty / Condition */}
        <SpecialtySearch onSelectCondition={(cond) => handleOpenAppointment(cond)} />

        {/* 6. Our Technologies */}
        <Technologies />

        {/* 7. International Patients */}
        <InternationalPatients onOpenAppointment={() => handleOpenAppointment('International Patient Desk')} />

        {/* 8. Health Check-Up Packages */}
        <HealthPackages onOpenAppointment={() => handleOpenAppointment('Health Check-Up Package')} />

        {/* 9. Why Choose Us */}
        <WhyChooseUs />

        {/* 10. Patient Stories */}
        <PatientStories />

        {/* 11. News & Events */}
        <NewsEvents />

        {/* 12. Blogs */}
        <Blogs />

        {/* 13. Our Hospitals */}
        <OurHospitals />

        {/* 14. Expert Medical Care CTA */}
        <ExpertCareCTA onOpenAppointment={() => handleOpenAppointment()} />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* Quick Floating Action Widgets (Right edge on desktop, fixed bottom bar on mobile) */}
      <QuickFloatingWidgets onOpenAppointment={() => handleOpenAppointment()} />

      {/* Global Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        defaultSpecialty={selectedSpecialty}
      />
    </div>
  );
};

export default App;
