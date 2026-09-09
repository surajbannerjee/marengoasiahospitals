import React, { useState, useEffect } from 'react';
import {
  X,
  Phone,
  Calendar,
  Search,
  MapPin,
  Stethoscope,
  ChevronRight,
  ChevronDown,
  Globe,
  HeartPulse,
  Building2,
  BookOpen,
  CreditCard,
  Briefcase,
  User,
  Heart,
  Siren,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG, NAV_LINKS, CENTERS_OF_EXCELLENCE, HOSPITALS_DATA } from '../../constants/config';
import { Button } from '../common/Button';
import { IMAGES } from '../../constants/images';

export const MobileMenu = ({ isOpen, onClose, onOpenAppointment }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle smooth open and close transition (right slide with fade)
  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setShouldRender(true);
      // Trigger animation on next frame
      const frameId = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(frameId);
    } else {
      setIsVisible(false);
      timeoutId = setTimeout(() => {
        setShouldRender(false);
      }, 350); // Match transition duration
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const toggleAccordion = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
      {/* Smooth Backdrop Fade In & Out */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Smooth Sidebar Drawer - Slides to/from right with fade */}
      <div
        className={`fixed inset-y-0 right-0 max-w-sm w-[85vw] bg-white shadow-2xl flex flex-col z-10 transform transition-all duration-300 ease-out ${
          isVisible
            ? 'translate-x-0 opacity-100'
            : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-white">
          <img src={IMAGES.logo.main} alt={SITE_CONFIG.name} className="h-9 w-auto object-contain" />
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-all duration-200 cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Emergency Call Banner */}
        <div className="px-4 py-3 bg-red-600 text-white flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2">
            <Siren className="w-4 h-4 animate-pulse text-white" />
            <span className="text-xs font-bold uppercase tracking-wider">24/7 Emergency</span>
          </div>
          <a
            href={`tel:${SITE_CONFIG.emergencyNumber}`}
            className="px-3 py-1 bg-white text-red-700 rounded-full text-xs font-black shadow-xs hover:bg-red-50 transition-colors"
          >
            8003090309
          </a>
        </div>

        {/* Search Bar inside Sidebar */}
        <div className="p-3.5 bg-slate-50 border-b border-slate-100">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search doctors, treatments..."
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50"
            />
          </div>
        </div>

        {/* Nav Links Scroll Area */}
        <div className="flex-1 overflow-y-auto py-2 px-3 space-y-1">
          {/* Main Links */}
          <a
            href="#"
            onClick={onClose}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#003B73] hover:bg-sky-50 font-semibold text-sm transition-colors"
          >
            <Heart className="w-4 h-4 text-[#0284C7]" />
            <span>Home</span>
          </a>

          {/* Hospitals Accordion */}
          <div>
            <button
              onClick={() => toggleAccordion('hospitals')}
              className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#003B73] hover:bg-sky-50 font-semibold text-sm transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Building2 className="w-4 h-4 text-[#0284C7]" />
                <span>Our Hospital</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  expandedSection === 'hospitals' ? 'rotate-180 text-[#003B73]' : ''
                }`}
              />
            </button>

            {expandedSection === 'hospitals' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-sky-50/50 rounded-xl my-1 animate-in fade-in duration-200">
                {HOSPITALS_DATA.map((h) => (
                  <a
                    key={h.id}
                    href="#hospitals"
                    onClick={onClose}
                    className="flex items-center justify-between py-2 px-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#003B73] hover:bg-sky-100/50"
                  >
                    <span>{h.name} ({h.city})</span>
                    <span className="text-[10px] text-slate-500">{h.beds}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Specialties Accordion */}
          <div>
            <button
              onClick={() => toggleAccordion('specialties')}
              className="w-full flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#003B73] hover:bg-sky-50 font-semibold text-sm transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <HeartPulse className="w-4 h-4 text-[#0284C7]" />
                <span>Specialities</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  expandedSection === 'specialties' ? 'rotate-180 text-[#003B73]' : ''
                }`}
              />
            </button>

            {expandedSection === 'specialties' && (
              <div className="pl-6 pr-2 py-1 space-y-1 bg-sky-50/50 rounded-xl my-1 animate-in fade-in duration-200">
                {CENTERS_OF_EXCELLENCE.map((c) => (
                  <a
                    key={c.id}
                    href="#specialties"
                    onClick={onClose}
                    className="flex items-center justify-between py-2 px-2 rounded-lg text-xs font-medium text-slate-700 hover:text-[#003B73] hover:bg-sky-100/50"
                  >
                    <span>{c.title}</span>
                    <span className="text-[10px] font-bold text-[#0284C7]">{c.stat}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Find Doctor */}
          <a
            href="#doctors"
            onClick={onClose}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#003B73] hover:bg-sky-50 font-semibold text-sm transition-colors"
          >
            <Stethoscope className="w-4 h-4 text-[#0284C7]" />
            <span>Find Doctor</span>
          </a>

          {/* Blogs */}
          <a
            href="#blogs"
            onClick={onClose}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#003B73] hover:bg-sky-50 font-semibold text-sm transition-colors"
          >
            <Sparkles className="w-4 h-4 text-[#0284C7]" />
            <span>Blogs</span>
          </a>

          {/* Health Check-Up */}
          <a
            href="#packages"
            onClick={onClose}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#003B73] hover:bg-sky-50 font-semibold text-sm transition-colors"
          >
            <Shield className="w-4 h-4 text-[#0284C7]" />
            <span>Health Check-Up</span>
          </a>

          <a
            href="#international"
            onClick={onClose}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#003B73] hover:bg-sky-50 font-semibold text-sm transition-colors"
          >
            <Globe className="w-4 h-4 text-[#0284C7]" />
            <span>International Patients</span>
          </a>

          <a
            href="#news"
            onClick={onClose}
            className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-800 hover:text-[#003B73] hover:bg-sky-50 font-semibold text-sm transition-colors"
          >
            <BookOpen className="w-4 h-4 text-[#0284C7]" />
            <span>News & Events</span>
          </a>

          <div className="pt-3 mt-3 border-t border-slate-100 space-y-1 text-xs">
            <a
              href="#pay-online"
              onClick={onClose}
              className="flex items-center gap-2.5 py-2 px-3 text-slate-600 hover:text-[#003B73] hover:bg-slate-50 rounded-lg"
            >
              <CreditCard className="w-4 h-4 text-slate-400" />
              <span>Pay Bills Online</span>
            </a>
            <a
              href="#careers"
              onClick={onClose}
              className="flex items-center gap-2.5 py-2 px-3 text-slate-600 hover:text-[#003B73] hover:bg-slate-50 rounded-lg"
            >
              <Briefcase className="w-4 h-4 text-slate-400" />
              <span>Careers at Marengo</span>
            </a>
            <a
              href="#login"
              onClick={onClose}
              className="flex items-center gap-2.5 py-2 px-3 text-slate-600 hover:text-[#003B73] hover:bg-slate-50 rounded-lg"
            >
              <User className="w-4 h-4 text-slate-400" />
              <span>Patient Portal Login</span>
            </a>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2.5">
          <Button
            variant="accent"
            size="md"
            icon={Calendar}
            onClick={() => {
              onClose();
              onOpenAppointment();
            }}
            className="w-full font-bold shadow-md shadow-orange-500/20"
          >
            Book Appointment
          </Button>

          <div className="text-center text-[11px] text-slate-500">
            Helpline Support:{' '}
            <a href={`tel:18003095999`} className="font-bold text-[#003B73]">
              1800-309-5999
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
