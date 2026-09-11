import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Phone,
  Calendar,
  Search,
  Building2,
  HeartPulse,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Globe,
  BookOpen,
  CreditCard,
  Briefcase,
  User,
  Heart,
  Siren,
  ChevronDown,
  ArrowRight,
  Hospital,
} from 'lucide-react';
import {
  SITE_CONFIG,
  HOSPITALS_DATA,
  CENTERS_OF_EXCELLENCE,
  SPECIALITIES_MEGA_MENU,
} from '../../constants/config';
import { IMAGES } from '../../constants/images';
import { Button } from '../common/Button';

export const MobileMenu = ({ isOpen, onClose, onOpenAppointment }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  const drawerVariants = {
    hidden: { x: '100%', opacity: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
        mass: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.04,
      },
    },
    exit: {
      x: '100%',
      opacity: 0.8,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
  };

  const accordionVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: { height: { duration: 0.28, ease: 'easeOut' }, opacity: { duration: 0.2 } },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { height: { duration: 0.24, ease: 'easeIn' }, opacity: { duration: 0.15 } },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] overflow-hidden">
          {/* Animated Backdrop Blur Overlay */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Animated Sidebar Drawer */}
          <motion.div
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 max-w-sm sm:max-w-md w-[88vw] bg-white shadow-2xl flex flex-col z-10 border-l border-slate-100"
          >
            {/* 1. Drawer Header */}
            <div className="px-5 py-4 flex items-center justify-between border-b border-slate-100 bg-white">
              <a href="#" onClick={onClose} className="flex items-center">
                <img
                  src={IMAGES.logo.main}
                  alt={SITE_CONFIG.name}
                  className="h-9 sm:h-10 w-auto object-contain"
                />
              </a>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* 2. Emergency 24/7 Banner */}
            <div className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2">
                <Siren className="w-4 h-4 animate-pulse text-white" />
                <span className="text-xs font-bold uppercase tracking-wider">24/7 Emergency</span>
              </div>
              <a
                href={`tel:${SITE_CONFIG.emergencyNumber}`}
                className="px-3 py-1 bg-white text-red-700 rounded-full text-xs font-black shadow-xs hover:bg-red-50 transition-colors"
              >
                1800 309 9999
              </a>
            </div>

            {/* 3. Search Bar inside Sidebar */}
            <div className="p-4 bg-slate-50/80 border-b border-slate-100">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search doctors, specialties, treatments..."
                  className="w-full pl-9.5 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#005BAA]/30 focus:border-[#005BAA] shadow-2xs"
                />
              </div>
            </div>

            {/* 4. Smooth Nav Links Scroll Area */}
            <div className="flex-1 overflow-y-auto py-3 px-4 space-y-1.5 scrollbar-thin">
              
              {/* Home */}
              <motion.div variants={itemVariants}>
                <a
                  href="#"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-colors group"
                >
                  <Heart className="w-4 h-4 text-[#005BAA] group-hover:scale-110 transition-transform" />
                  <span>Home</span>
                </a>
              </motion.div>

              {/* Our Hospital Accordion */}
              <motion.div variants={itemVariants}>
                <button
                  onClick={() => toggleAccordion('hospitals')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-[#005BAA] group-hover:scale-110 transition-transform" />
                    <span>Our Hospital</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSection === 'hospitals' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedSection === 'hospitals' && (
                    <motion.div
                      variants={accordionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden pl-4 pr-1 py-1 space-y-1 bg-sky-50/40 rounded-xl my-1 border border-sky-100/50"
                    >
                      {HOSPITALS_DATA.map((h) => (
                        <a
                          key={h.id}
                          href="#hospitals"
                          onClick={onClose}
                          className="flex items-center justify-between py-2 px-2.5 rounded-lg text-xs font-medium text-slate-700 hover:text-[#005BAA] hover:bg-white transition-colors"
                        >
                          <div>
                            <div className="font-bold text-slate-800">{h.name}</div>
                            <div className="text-[10px] text-slate-500">{h.city}, {h.state}</div>
                          </div>
                          <span className="text-[10px] font-semibold text-[#005BAA] bg-sky-100/80 px-2 py-0.5 rounded-full">
                            {h.beds}
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Specialities Accordion */}
              <motion.div variants={itemVariants}>
                <button
                  onClick={() => toggleAccordion('specialties')}
                  className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <HeartPulse className="w-4 h-4 text-[#005BAA] group-hover:scale-110 transition-transform" />
                    <span>Specialities</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSection === 'specialties' ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedSection === 'specialties' && (
                    <motion.div
                      variants={accordionVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden pl-4 pr-1 py-1 space-y-1 bg-sky-50/40 rounded-xl my-1 border border-sky-100/50"
                    >
                      <div className="px-2 pt-1 text-[10px] font-bold text-[#005BAA] uppercase tracking-wider">
                        Centres of Excellence
                      </div>
                      {CENTERS_OF_EXCELLENCE.map((c) => (
                        <a
                          key={c.id}
                          href="#specialties"
                          onClick={onClose}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-medium text-slate-700 hover:text-[#005BAA] hover:bg-white transition-colors"
                        >
                          <span>{c.title}</span>
                          <span className="text-[10px] font-bold text-[#F37023]">{c.stat}</span>
                        </a>
                      ))}
                      <div className="px-2 pt-2 text-[10px] font-bold text-[#005BAA] uppercase tracking-wider">
                        Key Specialities
                      </div>
                      {SPECIALITIES_MEGA_MENU.keySpecialities.items.slice(0, 4).map((k) => (
                        <a
                          key={k.name}
                          href="#specialties"
                          onClick={onClose}
                          className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg text-xs font-medium text-slate-700 hover:text-[#005BAA] hover:bg-white transition-colors"
                        >
                          <span className="text-xs">{k.icon}</span>
                          <span>{k.name}</span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Find Doctor */}
              <motion.div variants={itemVariants}>
                <a
                  href="#doctors"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-colors group"
                >
                  <Stethoscope className="w-4 h-4 text-[#005BAA] group-hover:scale-110 transition-transform" />
                  <span>Find Doctor</span>
                </a>
              </motion.div>

              {/* Blogs */}
              <motion.div variants={itemVariants}>
                <a
                  href="#blogs"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-colors group"
                >
                  <Sparkles className="w-4 h-4 text-[#005BAA] group-hover:scale-110 transition-transform" />
                  <span>Blogs & Insights</span>
                </a>
              </motion.div>

              {/* Health Check-Up */}
              <motion.div variants={itemVariants}>
                <a
                  href="#packages"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-colors group"
                >
                  <ShieldCheck className="w-4 h-4 text-[#005BAA] group-hover:scale-110 transition-transform" />
                  <span>Health Check-Up Packages</span>
                </a>
              </motion.div>

              {/* International Patients */}
              <motion.div variants={itemVariants}>
                <a
                  href="#international"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-colors group"
                >
                  <Globe className="w-4 h-4 text-[#005BAA] group-hover:scale-110 transition-transform" />
                  <span>International Patients</span>
                </a>
              </motion.div>

              {/* News & Events */}
              <motion.div variants={itemVariants}>
                <a
                  href="#news"
                  onClick={onClose}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#005BAA] hover:bg-sky-50/80 font-semibold text-sm transition-colors group"
                >
                  <BookOpen className="w-4 h-4 text-[#005BAA] group-hover:scale-110 transition-transform" />
                  <span>News & Events</span>
                </a>
              </motion.div>

              {/* Extra Utility Links */}
              <motion.div variants={itemVariants} className="pt-3 mt-3 border-t border-slate-100 space-y-1 text-xs">
                <a
                  href="#pay-online"
                  onClick={onClose}
                  className="flex items-center gap-2.5 py-2 px-3 text-slate-600 hover:text-[#005BAA] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <CreditCard className="w-4 h-4 text-slate-400" />
                  <span>Pay Hospital Bills Online</span>
                </a>
                <a
                  href="#careers"
                  onClick={onClose}
                  className="flex items-center gap-2.5 py-2 px-3 text-slate-600 hover:text-[#005BAA] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <Briefcase className="w-4 h-4 text-slate-400" />
                  <span>Careers at Marengo</span>
                </a>
                <a
                  href="#login"
                  onClick={onClose}
                  className="flex items-center gap-2.5 py-2 px-3 text-slate-600 hover:text-[#005BAA] hover:bg-slate-50 rounded-lg transition-colors"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Patient Portal Login</span>
                </a>
              </motion.div>
            </div>

            {/* 5. Drawer Footer CTA */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 space-y-3">
              <Button
                variant="accent"
                size="md"
                icon={Calendar}
                onClick={() => {
                  onClose();
                  onOpenAppointment();
                }}
                className="w-full font-bold shadow-md shadow-orange-500/20 py-3"
              >
                Book Appointment
              </Button>

              <div className="text-center text-xs text-slate-500">
                Helpline Support:{' '}
                <a href={`tel:${SITE_CONFIG.tollFree}`} className="font-bold text-[#005BAA]">
                  1800 309 9999
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
