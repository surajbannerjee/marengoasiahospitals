import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* MainLayout provides global Header, Footer, Widgets & Modal to all child pages */}
        <Route path="/" element={<MainLayout />}>
          {/* Home Page Route */}
          <Route index element={<Home />} />

          {/* Add more pages here as you build them, e.g.:
            <Route path="specialties" element={<SpecialtiesPage />} />
            <Route path="hospitals" element={<HospitalsPage />} />
            <Route path="doctors" element={<DoctorsPage />} />
            <Route path="blogs" element={<BlogsPage />} />
            <Route path="packages" element={<PackagesPage />} />
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
