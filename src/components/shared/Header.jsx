import React, { useState, useEffect, useRef } from 'react';
import { Phone, Calendar, Search, ChevronDown, Menu, User, Siren, ArrowRight } from 'lucide-react';
import {
  SITE_CONFIG,
  HEADER_NAV_ITEMS,
  HOSPITAL_MEGA_MENU,
  SPECIALITIES_MEGA_MENU
} from '../../constants/config';
import { IMAGES } from '../../constants/images';
import { Button } from '../common/Button';
import { MobileMenu } from './MobileMenu';

export const Header = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuHover = (dropdownType) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (dropdownType) {
      setActiveDropdown(dropdownType);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleMenuLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleSearchClick = (e) => {
    e?.preventDefault?.();
    const searchSection = document.getElementById('specialty-search');
    const searchInput = document.getElementById('specialty-search-input');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (searchInput) {
        setTimeout(() => {
          searchInput.focus();
        }, 400);
      }
    } else {
      window.location.href = '/#specialty-search';
    }
  };

  return (
    <>
      <header
        onMouseLeave={handleMenuLeave}
        className={`fixed top-0 left-0 right-0 z-100 w-full transition-all duration-300 ease-in-out font-sans ${isScrolled
            ? 'bg-white text-slate-800 shadow-md py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-black/70 via-black/35 to-transparent text-white py-3 sm:py-4'
          }`}
      >
        <div className="flex w-full max-w-[1920px] 3xl:max-w-[2100px] 4k:max-w-none items-center justify-between px-3 min-[360px]:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-[72px] 3xl:px-[60px] 4k:px-[72px] mx-auto">
          <div className="w-full flex items-center justify-between">
            {/* Left: Brand Logo */}
            <a href="#" className="flex items-center shrink-0 group">
              <div className="max-w-[150px] w-full">
                <img
                  src={IMAGES.logo.main}
                  alt={SITE_CONFIG.name}
                  className="h-full w-full max-w-[100px] sm:max-w-[120px] lg:max-w-[130px] lg:max-w-[150px] shrink-0 object-contain opacity-100 transition-transform duration-200 hover:opacity-90"
                />
              </div>
            </a>

            {/* Desktop Navigation Structure: 2 Tiers */}
            <div className="hidden lg:flex flex-col items-end gap-1.5">
              {/* Top Tier: Emergency, Helpline, Search, Login */}
              <div className="flex items-center gap-6">
                {/* 24/7 Emergency */}
                <a
                  href={`tel:18003099999`}
                  className="flex items-center gap-1.5 text-[14px] lg:text-[16px] 2xl:text-[18px] font-semibold leading-normal tracking-[0%] whitespace-nowrap transition-colors text-[#FF3333] hover:text-[#E60000] cursor-pointer"
                >
                  <Siren className="w-4 h-4 text-[#FF3333] animate-pulse" />
                  <span className="uppercase tracking-wider">24/7 Emergency</span>
                </a>

                {/* Helpline Phone */}
                <a
                  href={`tel:18003099999`}
                  className={`flex items-center gap-1.5 text-[14px] lg:text-[16px] 2xl:text-[18px] font-semibold leading-normal tracking-[0%] whitespace-nowrap transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#003B73]' : 'text-slate-100 hover:text-white'
                    }`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>1800 309 9999</span>
                </a>

                {/* Search Toggle */}
                <button
                  type="button"
                  onClick={handleSearchClick}
                  className={`flex items-center gap-1.5 text-[14px] lg:text-[16px] 2xl:text-[18px] font-semibold leading-normal tracking-[0%] whitespace-nowrap transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#003B73]' : 'text-slate-100 hover:text-white'
                    }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search</span>
                </button>

                {/* Login */}
                <a
                  href="#login"
                  className={`flex items-center gap-1.5 text-[14px] lg:text-[16px] 2xl:text-[18px] font-semibold leading-normal tracking-[0%] whitespace-nowrap transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#003B73]' : 'text-slate-100 hover:text-white'
                    }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Login</span>
                </a>
              </div>

              {/* Bottom Tier: Nav Links with Mapped Dropdowns */}
              <nav className="flex relative items-center gap-5 xl:gap-7 pt-0.5">
                {HEADER_NAV_ITEMS.map((item) => (
                  <div
                    key={item.label}
                        className={`group py-1 cursor-pointer ${item.hasDropdown
                          ? "relative after:absolute after:content-[''] after:w-full after:h-full after:bg-transparent after:z-1 after:bottom-0 after:left-0 after:right-0"
                          : ""
                          }`}
                    onMouseEnter={() => handleMenuHover(item.hasDropdown ? item.dropdownType : null)}
                    onMouseLeave={handleMenuLeave}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-1 text-[14px] lg:text-[16px] 2xl:text-[18px] font-semibold leading-normal tracking-[0%] whitespace-nowrap transition-colors ${isScrolled
                        ? 'text-slate-700 hover:text-[#003B73]'
                        : 'text-slate-100 hover:text-white drop-shadow-sm'
                        }`}
                    >
                      <span>{item.label}</span>
                      {/* ChevronDown renders ONLY for menu items that have a dropdown */}
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 opacity-70 transition-transform duration-200 ${activeDropdown === item.dropdownType ? 'rotate-180 opacity-100 text-[#005BAA]' : 'group-hover:opacity-100'
                            }`}
                        />
                      )}
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            {/* Mobile Header Icons: Siren, Phone, Search, Login, Menu */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              {/* Emergency Siren */}
              <a
                href={`tel:18003099999`}
                aria-label="24/7 Emergency"
                className="p-1.5 text-red-500 hover:text-red-400 transition-colors cursor-pointer"
              >
                <Siren className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
              </a>

              {/* Helpline Phone */}
              <a
                href={`tel:18003099999`}
                aria-label="Call 1800 309 9999"
                className={`p-1.5 transition-colors cursor-pointer ${isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </a>

              {/* Search Toggle */}
              <button
                type="button"
                onClick={handleSearchClick}
                aria-label="Search"
                className={`p-1.5 transition-colors cursor-pointer ${isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
              >
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* User Login */}
              <a
                href="#login"
                aria-label="Login"
                className={`p-1.5 transition-colors cursor-pointer ${isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
              >
                <User className="w-4 h-4 md:w-5 md:h-5" />
              </a>

              {/* Mobile Hamburger Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-1.5 transition-colors cursor-pointer ${isScrolled ? 'text-slate-800' : 'text-white'
                  }`}
                aria-label="Open mobile menu"
              >
                <Menu className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 1. OUR HOSPITAL MEGA DROPDOWN (Full Screen Width) */}
        {/* ========================================================= */}
        {activeDropdown === 'hospitals' && (
          <div
            onMouseEnter={() => handleMenuHover('hospitals')}
            onMouseLeave={handleMenuLeave}
            className="absolute left-0 right-0 top-full w-full bg-white border-t border-slate-100 shadow-2xl z-50 text-slate-800 animate-in fade-in-50 slide-in-from-top-1 duration-200"
          >
            <div className="max-w-[1920px] 3xl:max-w-[2100px] 4k:max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-[72px] 3xl:px-[60px] 4k:px-[72px] py-8 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 text-left items-start">

                {/* Left Section: 6 Hospital Locations (3 Columns of 2 items) */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                  {/* Column 1: Ahmedabad & Surat */}
                  <div className="space-y-6">
                    {HOSPITAL_MEGA_MENU.column1.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className="inline-block group/link py-1 hover:text-[#005BAA] transition-colors"
                        >
                          <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit group-hover/link:translate-x-0.5 transition-transform">
                            {item.name}
                          </h4>
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Column 2: Gurugram & Vadodara */}
                  <div className="space-y-6">
                    {HOSPITAL_MEGA_MENU.column2.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className="inline-block group/link py-1 hover:text-[#005BAA] transition-colors"
                        >
                          <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit group-hover/link:translate-x-0.5 transition-transform">
                            {item.name}
                          </h4>
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Column 3: Faridabad & Saudi Arabia */}
                  <div className="space-y-6">
                    {HOSPITAL_MEGA_MENU.column3.map((item) => (
                      <div key={item.name}>
                        <a
                          href={item.href}
                          className="inline-block group/link py-1 hover:text-[#005BAA] transition-colors"
                        >
                          <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit group-hover/link:translate-x-0.5 transition-transform">
                            {item.name}
                          </h4>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Section: 2 CTA Boxes Side-by-Side in a Row */}
                <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                    {/* Box 1: BOOK AN APPOINTMENT */}
                    <div className="flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-2.5">
                        <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                          {HOSPITAL_MEGA_MENU.ctaColumn.appointment.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {HOSPITAL_MEGA_MENU.ctaColumn.appointment.description}
                        </p>
                      </div>
                      <div className="pt-1">
                        <button
                          onClick={() => onOpenAppointment()}
                          className="inline-flex items-center justify-center px-6 py-2.5 bg-[#005BAA] hover:bg-[#00427A] text-white text-xs font-bold rounded-full transition-colors shadow-sm cursor-pointer hover:shadow-md active:scale-95"
                        >
                          {HOSPITAL_MEGA_MENU.ctaColumn.appointment.buttonText}
                        </button>
                      </div>
                    </div>

                    {/* Box 2: FIND A DOCTOR */}
                    <div className="flex flex-col justify-between h-full space-y-4">
                      <div className="space-y-2.5">
                        <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                          {HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.description}
                        </p>
                      </div>
                      <div className="pt-1">
                        <a
                          href={HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.href}
                          className="inline-flex items-center justify-center px-6 py-2.5 bg-[#005BAA] hover:bg-[#00427A] text-white text-xs font-bold rounded-full transition-colors shadow-sm cursor-pointer hover:shadow-md active:scale-95"
                        >
                          {HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. SPECIALITIES MEGA DROPDOWN (Full Screen Width) */}
        {/* ========================================================= */}
        {activeDropdown === 'specialties' && (
          <div
            onMouseEnter={() => handleMenuHover('specialties')}
            onMouseLeave={handleMenuLeave}
            className="absolute left-0 right-0 top-full w-full bg-white border-t border-slate-100 shadow-2xl z-50 text-slate-800 animate-in fade-in-50 slide-in-from-top-1 duration-200"
          >
            <div className="max-w-[1920px] 3xl:max-w-[2100px] 4k:max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-[72px] 3xl:px-[60px] 4k:px-[72px] py-8 lg:py-10 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

                {/* Column 1: CENTRE OF EXCELLENCE */}
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                    {SPECIALITIES_MEGA_MENU.centersOfExcellence.title}
                  </h4>
                  <div className="space-y-2 pt-1">
                    {SPECIALITIES_MEGA_MENU.centersOfExcellence.items.map((sp) => (
                      <a
                        key={sp.name}
                        href={sp.href}
                        className="flex items-center gap-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#005BAA] transition-colors group/item"
                      >
                        <span className="w-5 h-5 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                          {sp.icon}
                        </span>
                        <span className="group-hover/item:translate-x-0.5 transition-transform">{sp.name}</span>
                      </a>
                    ))}
                  </div>
                  <div className="pt-2">
                    <a
                      href={SPECIALITIES_MEGA_MENU.centersOfExcellence.viewAllHref}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#005BAA] hover:underline"
                    >
                      View All <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Column 2: KEY SPECIALITIES */}
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                    {SPECIALITIES_MEGA_MENU.keySpecialities.title}
                  </h4>
                  <div className="space-y-2 pt-1">
                    {SPECIALITIES_MEGA_MENU.keySpecialities.items.map((sp) => (
                      <a
                        key={sp.name}
                        href={sp.href}
                        className="flex items-center gap-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-[#005BAA] transition-colors group/item"
                      >
                        <span className="w-5 h-5 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                          {sp.icon}
                        </span>
                        <span className="group-hover/item:translate-x-0.5 transition-transform">{sp.name}</span>
                      </a>
                    ))}
                  </div>
                  <div className="pt-2">
                    <a
                      href={SPECIALITIES_MEGA_MENU.keySpecialities.viewAllHref}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#005BAA] hover:underline"
                    >
                      View All <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Column 3: PROCEDURES */}
                <div className="space-y-3">
                  <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                    {SPECIALITIES_MEGA_MENU.procedures.title}
                  </h4>
                  <div className="space-y-2 pt-1">
                    {SPECIALITIES_MEGA_MENU.procedures.items.map((proc) => (
                      <a
                        key={proc.name}
                        href={proc.href}
                        className="block py-1.5 text-xs font-semibold text-slate-700 hover:text-[#005BAA] group-hover:translate-x-0.5 transition-all"
                      >
                        {proc.name}
                      </a>
                    ))}
                  </div>
                  <div className="pt-2">
                    <a
                      href={SPECIALITIES_MEGA_MENU.procedures.viewAllHref}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#005BAA] hover:underline"
                    >
                      View All <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Column 4: Quick Action & Guidance Box */}
                <div className="border-l border-slate-100 pl-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                      Need Medical Guidance?
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Connect with our top specialists across India or book a personalized consultation today.
                    </p>
                    <div className="pt-2 space-y-2.5">
                      <button
                        onClick={() => onOpenAppointment()}
                        className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-[#005BAA] hover:bg-[#00427A] text-white text-xs font-bold rounded-full transition-colors shadow-sm cursor-pointer"
                      >
                        Book Consultation
                      </button>
                      <a
                        href="#doctors"
                        className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-sky-50 hover:bg-sky-100 text-[#005BAA] text-xs font-bold rounded-full transition-colors border border-sky-100 cursor-pointer"
                      >
                        Find a Doctor
                      </a>
                    </div>
                  </div>

                  <div className="p-4 bg-sky-50/70 rounded-xl border border-sky-100">
                    <div className="text-[11px] font-bold text-[#005BAA] uppercase tracking-wider">24/7 Care Helpline</div>
                    <a href="tel:18003099999" className="text-sm font-extrabold text-slate-800 hover:text-[#005BAA] transition-colors mt-0.5 block">
                      1800 309 9999
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </header>

      {/* Smooth Sliding and Fading Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenAppointment={onOpenAppointment}
      />
    </>
  );
};

export default Header;
