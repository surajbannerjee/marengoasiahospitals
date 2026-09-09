import React, { useState, useEffect } from 'react';
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
import { SearchBar } from './SearchBar';

export const Header = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300 ease-in-out font-sans ${isScrolled
            ? 'bg-white text-slate-800 shadow-md py-2.5 sm:py-3'
            : 'bg-gradient-to-b from-black/70 via-black/35 to-transparent text-white py-3 sm:py-4'
          }`}
      >
        <div className="flex w-full max-w-[1920px] 3xl:max-w-[2100px] 4k:max-w-none items-center justify-between px-3 min-[360px]:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-[72px] 3xl:px-[60px] 4k:px-[72px] mx-auto">
          <div className="w-full flex items-center justify-between">
            {/* Left: Brand Logo */}
            <a href="#" className="flex items-center shrink-0 group">
              <div className="md:w-[150px] w-[100px]">
                <img
                  src={IMAGES.logo.main}
                  alt={SITE_CONFIG.name}
                  className="h-[44px] sm:h-[60px] md:h-[75px] lg:h-[85px] xl:h-[95px] 3xl:h-[125px] 4k:h-[135px] w-auto max-w-[100px] sm:max-w-[120px] lg:max-w-[130px] 3xl:max-w-[240px] 4k:max-w-[250px] shrink-0 object-contain opacity-100 transition-transform duration-200 hover:opacity-90"
                />
              </div>
            </a>

            {/* Desktop Navigation Structure: 2 Tiers */}
            <div className="hidden lg:flex flex-col items-end gap-1.5">
              {/* Top Tier: Emergency, Helpline, Search, Login */}
              <div className="flex items-center gap-6">
                {/* 24/7 Emergency */}
                <a
                  href={`tel:8003090309`}
                  className="flex items-center gap-1.5 text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[21px] 4k:text-[24px] font-semibold leading-[29px] 3xl:leading-[34px] 4k:leading-[38px] tracking-[0%] whitespace-nowrap transition-colors text-[#FF3333] hover:text-[#E60000] cursor-pointer"
                >
                  <Siren className="w-4 h-4 text-[#FF3333] animate-pulse" />
                  <span className="uppercase tracking-wider">24/7 Emergency</span>
                </a>

                {/* Helpline Phone */}
                <a
                  href={`tel:8003090309`}
                  className={`flex items-center gap-1.5 text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[21px] 4k:text-[24px] font-semibold leading-[29px] 3xl:leading-[34px] 4k:leading-[38px] tracking-[0%] whitespace-nowrap transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#003B73]' : 'text-slate-100 hover:text-white'
                    }`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>8003090309</span>
                </a>

                {/* Search Toggle */}
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`flex items-center gap-1.5 text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[21px] 4k:text-[24px] font-semibold leading-[29px] 3xl:leading-[34px] 4k:leading-[38px] tracking-[0%] whitespace-nowrap transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#003B73]' : 'text-slate-100 hover:text-white'
                    }`}
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search</span>
                </button>

                {/* Login */}
                <a
                  href="#login"
                  className={`flex items-center gap-1.5 text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[21px] 4k:text-[24px] font-semibold leading-[29px] 3xl:leading-[34px] 4k:leading-[38px] tracking-[0%] whitespace-nowrap transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#003B73]' : 'text-slate-100 hover:text-white'
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
                    className=" group py-1"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.dropdownType)}
                    onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-1 text-[13px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] 3xl:text-[21px] 4k:text-[24px] font-semibold leading-[29px] 3xl:leading-[34px] 4k:leading-[38px] tracking-[0%] whitespace-nowrap transition-colors ${isScrolled
                          ? 'text-slate-700 hover:text-[#003B73]'
                          : 'text-slate-100 hover:text-white drop-shadow-sm'
                        }`}
                    >
                      <span>{item.label}</span>
                      {/* ChevronDown renders ONLY for menu items that have a dropdown */}
                      {item.hasDropdown && (
                        <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-200" />
                      )}
                    </a>

                    {/* ========================================================= */}
                    {/* 1. OUR HOSPITAL MEGA DROPDOWN (Matches 1st Reference Image) */}
                    {/* ========================================================= */}
                    {item.dropdownType === 'hospitals' && activeDropdown === 'hospitals' && (
                      <div className="absolute right-0 top-[calc(100%+14px)] z-50 w-[780px] lg:w-[840px] xl:w-[900px] 2xl:w-[960px] 4k:w-[1280px] max-w-[calc(100vw-48px)] rounded-2xl 4k:rounded-3xl border border-neutral-100 bg-white p-6 lg:p-8 4k:p-10 shadow-2xl transition-all duration-300 animate-in fade-in ">
                        <div className="grid grid-cols-4 gap-6">
                          {/* Column 1: SURAT & SAUDI ARABIA */}
                          <div className="space-y-6">
                            {HOSPITAL_MEGA_MENU.column1.map((section) => (
                              <div key={section.region} className="space-y-2">
                                <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                                  {section.region}
                                </h4>
                                {section.items.map((h) => (
                                  <a
                                    key={h.name}
                                    href={h.href}
                                    className="block group/link py-1 hover:text-[#005BAA] transition-colors"
                                  >
                                    <div className="text-xs font-bold text-slate-800 group-hover/link:text-[#005BAA] leading-snug">
                                      {h.name}
                                    </div>
                                    <div className="text-[10px] text-slate-500 uppercase mt-0.5 leading-tight">
                                      {h.subtitle}
                                    </div>
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>

                          {/* Column 2: DELHI/NCR */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                              {HOSPITAL_MEGA_MENU.column2.region}
                            </h4>
                            <div className="space-y-4 pt-1">
                              {HOSPITAL_MEGA_MENU.column2.items.map((h) => (
                                <a
                                  key={h.name}
                                  href={h.href}
                                  className="block group/link hover:text-[#005BAA] transition-colors"
                                >
                                  <div className="text-xs font-bold text-slate-800 group-hover/link:text-[#005BAA] leading-snug">
                                    {h.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-normal">
                                    {h.address}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* Column 3: AHMEDABAD */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                              {HOSPITAL_MEGA_MENU.column3.region}
                            </h4>
                            <div className="space-y-4 pt-1">
                              {HOSPITAL_MEGA_MENU.column3.items.map((h) => (
                                <a
                                  key={h.name}
                                  href={h.href}
                                  className="block group/link hover:text-[#005BAA] transition-colors"
                                >
                                  <div className="text-xs font-bold text-slate-800 group-hover/link:text-[#005BAA] leading-snug">
                                    {h.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500 mt-0.5 leading-relaxed font-normal">
                                    {h.address}
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* Column 4: CTAs (BOOK AN APPOINTMENT & FIND A DOCTOR) */}
                          <div className="border-l border-slate-100 pl-6 space-y-6">
                            {/* Appointment CTA */}
                            <div className="space-y-2">
                              <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                                {HOSPITAL_MEGA_MENU.ctaColumn.appointment.title}
                              </h4>
                              <p className="text-[11px] text-slate-600 leading-relaxed">
                                {HOSPITAL_MEGA_MENU.ctaColumn.appointment.description}
                              </p>
                              <button
                                onClick={() => onOpenAppointment()}
                                className="inline-flex items-center justify-center px-5 py-2 bg-[#005BAA] hover:bg-[#00427A] text-white text-xs font-bold rounded-full transition-colors shadow-sm cursor-pointer"
                              >
                                {HOSPITAL_MEGA_MENU.ctaColumn.appointment.buttonText}
                              </button>
                            </div>

                            {/* Find Doctor CTA */}
                            <div className="space-y-2">
                              <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                                {HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.title}
                              </h4>
                              <p className="text-[11px] text-slate-600 leading-relaxed">
                                {HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.description}
                              </p>
                              <a
                                href={HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.href}
                                className="inline-flex items-center justify-center px-5 py-2 bg-[#005BAA] hover:bg-[#00427A] text-white text-xs font-bold rounded-full transition-colors shadow-sm cursor-pointer"
                              >
                                {HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.buttonText}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ========================================================= */}
                    {/* 2. SPECIALITIES MEGA DROPDOWN (Matches 2nd Reference Image) */}
                    {/* ========================================================= */}
                    {item.dropdownType === 'specialties' && activeDropdown === 'specialties' && (
                      <div className="absolute top-full right-0 w-[860px] xl:w-[920px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-7 text-slate-800 animate-in fade-in-50 zoom-in-95 z-50 text-left font-sans">
                        <div className="grid grid-cols-3 gap-8">
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
                                  className="flex items-center gap-2.5 py-1 text-xs font-semibold text-slate-700 hover:text-[#005BAA] transition-colors group/item"
                                >
                                  <span className="text-sm shrink-0">{sp.icon}</span>
                                  <span className="group-hover/item:translate-x-0.5 transition-transform">{sp.name}</span>
                                </a>
                              ))}
                            </div>
                            <div className="pt-2">
                              <a
                                href={SPECIALITIES_MEGA_MENU.centersOfExcellence.viewAllHref}
                                className="text-xs font-bold text-[#005BAA] hover:underline"
                              >
                                View All
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
                                  className="flex items-center gap-2.5 py-1 text-xs font-semibold text-slate-700 hover:text-[#005BAA] transition-colors group/item"
                                >
                                  <span className="text-sm shrink-0">{sp.icon}</span>
                                  <span className="group-hover/item:translate-x-0.5 transition-transform">{sp.name}</span>
                                </a>
                              ))}
                            </div>
                            <div className="pt-2">
                              <a
                                href={SPECIALITIES_MEGA_MENU.keySpecialities.viewAllHref}
                                className="text-xs font-bold text-[#005BAA] hover:underline"
                              >
                                View All
                              </a>
                            </div>
                          </div>

                          {/* Column 3: PROCEDURES */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-1 w-fit">
                              {SPECIALITIES_MEGA_MENU.procedures.title}
                            </h4>
                            <div className="space-y-2.5 pt-1">
                              {SPECIALITIES_MEGA_MENU.procedures.items.map((proc) => (
                                <a
                                  key={proc.name}
                                  href={proc.href}
                                  className="block py-1 text-xs font-semibold text-slate-700 hover:text-[#005BAA] transition-colors"
                                >
                                  {proc.name}
                                </a>
                              ))}
                            </div>
                            <div className="pt-2">
                              <a
                                href={SPECIALITIES_MEGA_MENU.procedures.viewAllHref}
                                className="text-xs font-bold text-[#005BAA] hover:underline"
                              >
                                View All
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Mobile Header Icons: Siren, Phone, Search, Login, Menu */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              {/* Emergency Siren */}
              <a
                href={`tel:8003090309`}
                aria-label="24/7 Emergency"
                className="p-1.5 text-red-500 hover:text-red-400 transition-colors cursor-pointer"
              >
                <Siren className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
              </a>

              {/* Helpline Phone */}
              <a
                href={`tel:8003090309`}
                aria-label="Call 8003090309"
                className={`p-1.5 transition-colors cursor-pointer ${isScrolled ? 'text-slate-700' : 'text-white'
                  }`}
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </a>

              {/* Search Toggle */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
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

          {/* Quick Search Slideout */}
          {isSearchOpen && (
            <div className="mt-3 pt-3 border-t border-slate-200/30 bg-white/95 text-slate-800 rounded-2xl shadow-xl p-4 animate-in slide-in-from-top duration-200">
              <div className="max-w-3xl mx-auto flex items-center justify-center">
                <SearchBar variant="compact" className="w-full max-w-xl" />
              </div>
            </div>
          )}
        </div>
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
