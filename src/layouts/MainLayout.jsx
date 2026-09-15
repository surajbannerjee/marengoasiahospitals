import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import QuickFloatingWidgets from '../components/shared/QuickFloatingWidgets';

export const MainLayout = () => {
  const handleOpenAppointment = () => {
    window.location.href = 'https://marengoasiahospitals.com/bookanappointment';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800 pb-14 sm:pb-0">
      {/* 1. Universal Header & Navigation - Shown on all pages */}
      <Header onOpenAppointment={handleOpenAppointment} />

      {/* 2. Main Page Content (Routed via React Router Outlet) */}
      <main className="flex-grow">
        <Outlet context={{ handleOpenAppointment }} />
      </main>

      {/* 3. Universal Footer - Shown on all pages */}
      <Footer />

      {/* 4. Quick Floating Action Widgets (Right edge on desktop, fixed bottom bar on mobile) */}
      <QuickFloatingWidgets onOpenAppointment={handleOpenAppointment} />
    </div>
  );
};

export default MainLayout;
