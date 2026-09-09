import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import QuickFloatingWidgets from '../components/shared/QuickFloatingWidgets';
import AppointmentModal from '../components/shared/AppointmentModal';

export const MainLayout = () => {
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
      {/* 1. Universal Header & Navigation - Shown on all pages */}
      <Header onOpenAppointment={() => handleOpenAppointment()} />

      {/* 2. Main Page Content (Routed via React Router Outlet) */}
      <main className="flex-grow">
        <Outlet context={{ handleOpenAppointment, handleCloseAppointment }} />
      </main>

      {/* 3. Universal Footer - Shown on all pages */}
      <Footer />

      {/* 4. Quick Floating Action Widgets (Right edge on desktop, fixed bottom bar on mobile) */}
      <QuickFloatingWidgets onOpenAppointment={() => handleOpenAppointment()} />

      {/* 5. Global Interactive Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
        defaultSpecialty={selectedSpecialty}
      />
    </div>
  );
};

export default MainLayout;
