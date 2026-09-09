import React, { useState } from 'react';
import { IMAGES } from '../../../constants/images';
import { Container } from '../../common/Container';
import { Search } from 'lucide-react';
import { Button } from '../../common/Button';

export const HeroSection = ({ onOpenAppointment }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="relative flex h-[50dvh] min-[400px]:h-[50dvh] sm:h-[50dvh] md:h-[60dvh] lg:h-[70dvh] xl:h-[80dvh] 2xl:h-[100dvh] 3xl:h-[100dvh] 4k:h-[100dvh] w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat px-4 pb-6 sm:pb-7 md:pb-8 lg:pb-10 xl:pb-12 2xl:pb-16 3xl:pb-20 4k:pb-24 md:px-8 lg:px-12 xl:px-16 3xl:px-[60px] 4k:px-8">
      {/* Background Hero Image with Soft Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero.home}
          alt="Trusted Care, Every Step - Marengo Asia Hospitals"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Soft bottom vignette for crisp white text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/20" /> */}
      </div>

      {/* Hero Content Aligned to Bottom Center */}
      <Container className="relative z-10 pt-28 sm:pt-36 lg:pt-48 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-[1520px] mx-auto flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
          {/* Main Centered Headline */}
          <h1 className="text-center w-full text-[22px] min-[360px]:text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[68px] 3xl:text-[60px] 4k:text-[64px] font-bold leading-[1.2] text-white [text-shadow:0px_17px_39px_rgba(34,79,159,1)] lg:leading-tight lg:whitespace-nowrap">
            Trusted Care, Every Step
          </h1>

          {/* Search Input and Book Appointment Button Form */}
          <form
            onSubmit={handleSearchSubmit}
            className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-3.5 px-2 sm:px-0"
          >
            {/* Search Input Box with Magnifying Glass on the Right */}
            <div className="relative w-full max-w-[855px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Find A Doctor, Specialty and Health Check-up Packages..."
                className="w-full  bg-white text-slate-800 text-sm sm:text-base pl-4 sm:pl-5 pr-11 py-3 sm:py-3.5 rounded-[8px] shadow-xl border border-slate-200/80 focus:outline-none! focus:ring-none! placeholder:text-slate-400 font-medium"
              />
              <button
                type="submit"
                aria-label="Search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#1D4ED8] transition-colors p-1 cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Book Appointment CTA Button */}
            <Button
              variant="primary"
              size="lg"
              type="button"
              onClick={onOpenAppointment}
              className="w-full sm:w-auto font-bold bg-[#224F9F] hover:bg-[#1E40AF] text-white py-3 sm:py-3.5 px-7 sm:px-8 rounded-[8px] shadow-xl text-sm sm:text-base shrink-0 whitespace-nowrap transition-all duration-200 hover:scale-102 cursor-pointer"
            >
              Book Appointment
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
