import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import QuickFloatingWidgets from '../components/shared/QuickFloatingWidgets';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans antialiased text-slate-800 pb-14 sm:pb-0">
      {/* 1. Universal Header & Navigation - Shown on all pages */}
      <Header />

      {/* 2. Main Page Content (Routed via React Router Outlet) */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* 3. Universal Footer - Shown on all pages */}
      <Footer />

      {/* 4. Quick Floating Action Widgets (Right edge on desktop, fixed bottom bar on mobile) */}
      <QuickFloatingWidgets />

    </div>
  );
};

export default MainLayout;
