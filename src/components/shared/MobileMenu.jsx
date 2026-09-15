import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Phone,
  Calendar,
  Search,
  Building2,
  HeartPulse,
  Stethoscope,
  BookOpen,
  ShieldCheck,
  Globe,
  CreditCard,
  Briefcase,
  User,
  Heart,
  Siren,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Info,
  Layers,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import {
  SITE_CONFIG,
  HEADER_NAV_ITEMS,
  HOSPITAL_MEGA_MENU,
  SPECIALITIES_MEGA_MENU,
} from '../../constants/config';
import { IMAGES } from '../../constants/images';

// Icon mapping based on nav item label or dropdownType
const getNavIcon = (item) => {
  if (item.dropdownType === 'hospitals') return Building2;
  if (item.dropdownType === 'specialties') return HeartPulse;
  
  const labelLower = item.label.toLowerCase();
  if (labelLower.includes('about')) return Info;
  if (labelLower.includes('doctor')) return Stethoscope;
  if (labelLower.includes('blog')) return BookOpen;
  if (labelLower.includes('check')) return ShieldCheck;
  if (labelLower.includes('international')) return Globe;
  if (labelLower.includes('news')) return Sparkles;
  
  return Layers;
};

export const MobileMenu = ({ isOpen, onClose }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null); // 'hospitals' | 'specialties' | null
  const [searchQuery, setSearchQuery] = useState('');

  // Reset submenu whenever mobile menu closes
  useEffect(() => {
    if (!isOpen) {
      setActiveSubMenu(null);
      setSearchQuery('');
    }
  }, [isOpen]);

  // Handle Search Submission
  const handleSearchSubmit = (e) => {
    e?.preventDefault?.();
    if (!searchQuery.trim()) return;
    
    onClose();
    const searchSection = document.getElementById('specialty-search');
    const searchInput = document.getElementById('specialty-search-input');
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (searchInput) {
        setTimeout(() => {
          searchInput.value = searchQuery;
          searchInput.focus();
        }, 400);
      }
    } else {
      window.location.href = `/#specialty-search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  const drawerVariants = {
    hidden: { x: '100%', opacity: 0.95 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 320,
        mass: 0.8,
      },
    },
    exit: {
      x: '100%',
      opacity: 0.95,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
      },
    },
  };

  const subDrawerVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        damping: 28,
        stiffness: 300,
      },
    },
    exit: {
      x: '100%',
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 12 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.035, duration: 0.22, ease: 'easeOut' },
    }),
  };

  // Combine hospitals for easy listing
  const allHospitals = [
    ...(HOSPITAL_MEGA_MENU?.column1 || []),
    ...(HOSPITAL_MEGA_MENU?.column2 || []),
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] overflow-hidden">
          {/* 1. Backdrop Blur Overlay */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* 2. Main Mobile Menu Sidebar Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 max-w-sm sm:max-w-md w-[88vw] bg-white shadow-2xl flex flex-col z-10 border-l border-slate-100 overflow-hidden"
          >
            {/* Header: Logo & Close */}
            <div className="px-4 sm:px-5 py-3.5 flex items-center justify-between border-b border-slate-100 bg-white">
              <a href="#" onClick={onClose} className="flex items-center">
                <img
                  src={IMAGES.logo.main}
                  alt={SITE_CONFIG.name}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </a>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.05 }}
                whileTap={{ scale: 0.92 }}
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Emergency 24/7 Strip */}
            <div className="px-4 sm:px-5 py-2 bg-gradient-to-r from-red-600 via-red-600 to-rose-700 text-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <Siren className="w-4 h-4 animate-pulse text-white" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">24/7 Emergency</span>
              </div>
              <a
                href={`tel:${SITE_CONFIG.emergencyNumber}`}
                className="px-2.5 py-0.5 bg-white text-red-700 rounded-full text-[11px] sm:text-xs font-black shadow-xs hover:bg-red-50 transition-colors"
              >
                1800 309 9999
              </a>
            </div>

            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} className="p-3.5 bg-slate-50 border-b border-slate-100">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search doctors, specialities, treatments..."
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005BAA]/30 focus:border-[#005BAA] shadow-2xs transition-all"
                />
              </div>
            </form>

            {/* Dynamic Navigation Items (from HEADER_NAV_ITEMS) */}
            <div className="flex-1 overflow-y-auto py-3 px-3.5 space-y-1.5 scrollbar-thin">
              <div className="px-2 pb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Main Menu
              </div>

              {HEADER_NAV_ITEMS.map((item, index) => {
                const IconComponent = getNavIcon(item);
                const hasMegaDropdown = item.hasDropdown && Boolean(item.dropdownType);

                return (
                  <motion.div
                    key={item.label}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {hasMegaDropdown ? (
                      /* If Item has a Mega Dropdown -> Open Secondary Mega Menu Sidebar */
                      <button
                        type="button"
                        onClick={() => setActiveSubMenu(item.dropdownType)}
                        className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-all duration-200 cursor-pointer group border border-transparent hover:border-sky-100 active:scale-[0.99]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-sky-50 text-[#005BAA] flex items-center justify-center shrink-0 group-hover:bg-[#005BAA] group-hover:text-white transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </span>
                          <span className="text-left font-semibold text-slate-800 group-hover:text-[#005BAA] transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#005BAA]">
                          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-sky-100/70 text-[#005BAA] group-hover:bg-[#005BAA] group-hover:text-white transition-colors">
                            Explore
                          </span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </button>
                    ) : (
                      /* Regular Link (Direct Navigation) */
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-all duration-200 group border border-transparent hover:border-sky-100 active:scale-[0.99]"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 rounded-lg bg-slate-100/80 text-slate-600 flex items-center justify-center shrink-0 group-hover:bg-[#005BAA] group-hover:text-white transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </span>
                          <span className="font-semibold text-slate-800 group-hover:text-[#005BAA] transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#005BAA] group-hover:translate-x-0.5 transition-all" />
                      </a>
                    )}
                  </motion.div>
                );
              })}

              {/* Secondary Utility Links */}
              <div className="pt-3 mt-3 border-t border-slate-100 space-y-1">
                <div className="px-2 pb-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Quick Services
                </div>
                
                <a
                  href="https://marengoasiahospitals.com/internationalpatients"
                  onClick={onClose}
                  className="flex items-center gap-2.5 py-2 px-3 text-xs font-semibold text-slate-700 hover:text-[#005BAA] hover:bg-sky-50/60 rounded-lg transition-colors"
                >
                  <Globe className="w-4 h-4 text-[#005BAA]" />
                  <span>International Patients</span>
                </a>

                <a
                  href="#pay-online"
                  onClick={onClose}
                  className="flex items-center gap-2.5 py-2 px-3 text-xs font-medium text-slate-600 hover:text-[#005BAA] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <CreditCard className="w-4 h-4 text-slate-400" />
                  <span>Pay Hospital Bills Online</span>
                </a>

                <a
                  href="https://marengoasiahospitals.com/careers"
                  onClick={onClose}
                  className="flex items-center gap-2.5 py-2 px-3 text-xs font-medium text-slate-600 hover:text-[#005BAA] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  <span>Careers at Marengo</span>
                </a>

                <a
                  href="#login"
                  onClick={onClose}
                  className="flex items-center gap-2.5 py-2 px-3 text-xs font-medium text-slate-600 hover:text-[#005BAA] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Patient Portal Login</span>
                </a>
              </div>
            </div>

            {/* Primary Drawer Footer */}
            <div className="p-3.5 sm:p-4 border-t border-slate-100 bg-slate-50/90 space-y-2.5">
              <a
                href="https://marengoasiahospitals.com/bookanappointment"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 font-bold bg-[#F37023] hover:bg-[#E05D10] text-white shadow-md shadow-orange-500/20 py-2.5 text-xs sm:text-sm rounded-lg transition-colors text-center cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </a>

              <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
                <span>Care Helpline:</span>
                <a
                  href={`tel:${SITE_CONFIG.tollFree}`}
                  className="font-bold text-[#005BAA] hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3 text-[#005BAA]" />
                  1800 309 9999
                </a>
              </div>
            </div>

            {/* ======================================================= */}
            {/* 3. SECONDARY MEGA MENU SIDEBAR (Nested Drilldown Panel) */}
            {/* ======================================================= */}
            <AnimatePresence>
              {activeSubMenu && (
                <motion.div
                  variants={subDrawerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0 bg-white z-20 flex flex-col shadow-2xl"
                >
                  {/* Sub-Sidebar Top Navigation Bar */}
                  <div className="px-4 py-3.5 flex items-center justify-between border-b border-slate-100 bg-white shrink-0">
                    <button
                      type="button"
                      onClick={() => setActiveSubMenu(null)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#005BAA] hover:text-[#003B73] px-2 py-1 -ml-2 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <div className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wide truncate max-w-[170px]">
                      {activeSubMenu === 'hospitals' && 'Our Hospitals'}
                      {activeSubMenu === 'specialties' && 'Specialities'}
                    </div>

                    <button
                      type="button"
                      onClick={onClose}
                      className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                      aria-label="Close menu"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Sub-Sidebar Content Body */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin">
                    
                    {/* ================================================= */}
                    {/* SUB-PANEL: OUR HOSPITALS MEGA MENU */}
                    {/* ================================================= */}
                    {activeSubMenu === 'hospitals' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                          <div>
                            <h3 className="text-sm font-extrabold text-[#005BAA] uppercase tracking-wider">
                              Hospital Locations
                            </h3>
                            <p className="text-[11px] text-slate-500">
                              World-class tertiary care centers across India & abroad
                            </p>
                          </div>
                        </div>

                        {/* Hospital List Items */}
                        <div className="space-y-2">
                          {allHospitals.map((hospital) => (
                            <a
                              key={hospital.name}
                              href={hospital.href}
                              onClick={onClose}
                              className="group flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-sky-50/80 border border-slate-100 hover:border-sky-200 transition-all duration-200"
                            >
                              <div className="flex items-start gap-2.5">
                                <span className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 text-[#005BAA] flex items-center justify-center shrink-0 mt-0.5 group-hover:border-[#005BAA] group-hover:bg-[#005BAA] group-hover:text-white transition-colors">
                                  <Building2 className="w-3.5 h-3.5" />
                                </span>
                                <div>
                                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#005BAA] transition-colors leading-snug">
                                    {hospital.name}
                                  </h4>
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-[#F37023] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                            </a>
                          ))}
                        </div>

                        {/* CTA Cards Section */}
                        <div className="pt-2 space-y-3">
                          {/* Card 1: Book an Appointment */}
                          {HOSPITAL_MEGA_MENU?.ctaColumn?.appointment && (
                            <div className="p-3.5 bg-gradient-to-br from-sky-50 to-white rounded-xl border border-sky-100 shadow-2xs space-y-2">
                              <div className="text-xs font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-0.5 w-fit">
                                {HOSPITAL_MEGA_MENU.ctaColumn.appointment.title}
                              </div>
                              <p className="text-[11px] text-slate-600 leading-relaxed">
                                {HOSPITAL_MEGA_MENU.ctaColumn.appointment.description}
                              </p>
                              <a
                                href={HOSPITAL_MEGA_MENU.ctaColumn.appointment.href}
                                onClick={onClose}
                                className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#005BAA] hover:bg-[#00427A] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                              >
                                {HOSPITAL_MEGA_MENU.ctaColumn.appointment.buttonText}
                              </a>
                            </div>
                          )}

                          {/* Card 2: Find a Doctor */}
                          {HOSPITAL_MEGA_MENU?.ctaColumn?.findDoctor && (
                            <div className="p-3.5 bg-gradient-to-br from-amber-50/50 to-white rounded-xl border border-amber-100/70 shadow-2xs space-y-2">
                              <div className="text-xs font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-0.5 w-fit">
                                {HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.title}
                              </div>
                              <p className="text-[11px] text-slate-600 leading-relaxed">
                                {HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.description}
                              </p>
                              <a
                                href={HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.href}
                                onClick={onClose}
                                className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#005BAA] hover:bg-[#00427A] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
                              >
                                {HOSPITAL_MEGA_MENU.ctaColumn.findDoctor.buttonText}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* ================================================= */}
                    {/* SUB-PANEL: SPECIALITIES MEGA MENU */}
                    {/* ================================================= */}
                    {activeSubMenu === 'specialties' && (
                      <div className="space-y-6">
                        
                        {/* Section 1: Centre of Excellence */}
                        {SPECIALITIES_MEGA_MENU?.centersOfExcellence && (
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                              <h4 className="text-xs sm:text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-0.5">
                                {SPECIALITIES_MEGA_MENU.centersOfExcellence.title}
                              </h4>
                              {SPECIALITIES_MEGA_MENU.centersOfExcellence.viewAllHref && (
                                <a
                                  href={SPECIALITIES_MEGA_MENU.centersOfExcellence.viewAllHref}
                                  onClick={onClose}
                                  className="text-[11px] font-bold text-[#005BAA] hover:underline flex items-center gap-0.5"
                                >
                                  View All <ArrowRight className="w-3 h-3" />
                                </a>
                              )}
                            </div>

                            <div className="grid grid-cols-1 gap-1.5">
                              {SPECIALITIES_MEGA_MENU.centersOfExcellence.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={onClose}
                                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-sky-50 text-slate-700 hover:text-[#005BAA] transition-colors group"
                                >
                                  <span className="w-6 h-6 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                  </span>
                                  <span className="text-xs font-semibold leading-tight group-hover:translate-x-0.5 transition-transform">
                                    {item.name}
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Section 2: Key Specialities */}
                        {SPECIALITIES_MEGA_MENU?.keySpecialities && (
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                              <h4 className="text-xs sm:text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-0.5">
                                {SPECIALITIES_MEGA_MENU.keySpecialities.title}
                              </h4>
                              {SPECIALITIES_MEGA_MENU.keySpecialities.viewAllHref && (
                                <a
                                  href={SPECIALITIES_MEGA_MENU.keySpecialities.viewAllHref}
                                  onClick={onClose}
                                  className="text-[11px] font-bold text-[#005BAA] hover:underline flex items-center gap-0.5"
                                >
                                  View All <ArrowRight className="w-3 h-3" />
                                </a>
                              )}
                            </div>

                            <div className="grid grid-cols-1 gap-1.5">
                              {SPECIALITIES_MEGA_MENU.keySpecialities.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={onClose}
                                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-sky-50 text-slate-700 hover:text-[#005BAA] transition-colors group"
                                >
                                  <span className="w-6 h-6 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                  </span>
                                  <span className="text-xs font-semibold leading-tight group-hover:translate-x-0.5 transition-transform">
                                    {item.name}
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Section 3: Procedures */}
                        {SPECIALITIES_MEGA_MENU?.procedures?.items?.length > 0 && (
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                              <h4 className="text-xs sm:text-sm font-extrabold text-[#005BAA] uppercase tracking-wider border-b-2 border-[#F37023] pb-0.5">
                                {SPECIALITIES_MEGA_MENU.procedures.title}
                              </h4>
                            </div>

                            <div className="grid grid-cols-1 gap-1">
                              {SPECIALITIES_MEGA_MENU.procedures.items.map((proc) => (
                                <a
                                  key={proc.name}
                                  href={proc.href}
                                  onClick={onClose}
                                  className="block py-1.5 px-2 text-xs font-semibold text-slate-700 hover:text-[#005BAA] hover:bg-sky-50/60 rounded-md transition-colors"
                                >
                                  {proc.name}
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Section 4: Guidance Box & Helpline */}
                        <div className="p-3.5 bg-sky-50/80 rounded-xl border border-sky-100 space-y-3">
                          <div className="space-y-1">
                            <div className="text-xs font-extrabold text-[#005BAA] uppercase tracking-wider">
                              Need Medical Guidance?
                            </div>
                            <p className="text-[11px] text-slate-600 leading-relaxed">
                              Connect with our top specialists across India or book a personalized consultation today.
                            </p>
                          </div>

                          <div className="space-y-2 pt-1">
                            <a
                              href="https://marengoasiahospitals.com/bookanappointment"
                              onClick={onClose}
                              className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#005BAA] hover:bg-[#00427A] text-white text-xs font-bold rounded-lg transition-colors shadow-xs text-center"
                            >
                              Book Consultation
                            </a>
                            <a
                              href="#specialty-search"
                              onClick={onClose}
                              className="w-full inline-flex items-center justify-center px-4 py-2 bg-white hover:bg-sky-100 text-[#005BAA] text-xs font-bold rounded-lg transition-colors border border-sky-200 text-center"
                            >
                              Find a Doctor
                            </a>
                          </div>

                          <div className="pt-2 border-t border-sky-200/60 flex items-center justify-between text-xs">
                            <span className="text-[11px] font-bold text-slate-600">24/7 Helpline:</span>
                            <a
                              href="tel:18003099999"
                              className="font-extrabold text-[#005BAA] hover:underline"
                            >
                              1800 309 9999
                            </a>
                          </div>
                        </div>

                      </div>
                    )}

                  </div>

                  {/* Sub-Sidebar Bottom Return CTA */}
                  <div className="p-3 border-t border-slate-100 bg-slate-50 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveSubMenu(null)}
                      className="flex-1 py-2.5 px-3 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Back to Menu</span>
                    </button>
                    <a
                      href="https://marengoasiahospitals.com/bookanappointment"
                      onClick={onClose}
                      className="flex-1 py-2.5 px-3 bg-[#F37023] hover:bg-[#E05D10] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs cursor-pointer text-center"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Appt</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
