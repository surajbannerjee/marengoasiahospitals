import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG, FOOTER_SECTIONS } from '../../constants/config';
import { IMAGES } from '../../constants/images';
import { Container } from '../common/Container';

// Social SVG Icons
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-[#002244] text-slate-300 pt-16 pb-8 border-t-4 border-[#F37023]">
      <Container>
        {/* Top Footer: Brand summary and Emergency Hotlines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block shadow-md">
              <img src={IMAGES.logo.main} alt={SITE_CONFIG.name} className="h-11 w-auto" />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Marengo Asia Hospitals is committed to delivering world-class healthcare with a 'Patient First' approach across our multi-speciality network in India.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white transition-colors">{SITE_CONFIG.email}</a>
              </div>
            </div>
          </div>

          {/* Quick Helpline Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 self-center">
            {/* 24x7 Emergency */}
            <div className="bg-red-950/40 border border-red-500/30 rounded-2xl p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">Emergency 24x7</span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              </div>
              <a href={`tel:${SITE_CONFIG.emergencyNumber}`} className="text-2xl font-black text-white hover:text-red-300 transition-colors">
                {SITE_CONFIG.emergencyNumber}
              </a>
              <span className="text-[11px] text-slate-400 mt-1">Immediate ambulance & trauma care</span>
            </div>

            {/* Toll Free */}
            <div className="bg-sky-950/40 border border-sky-500/30 rounded-2xl p-4 flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">Toll Free Support</span>
              <a href={`tel:${SITE_CONFIG.tollFree}`} className="text-xl font-black text-white hover:text-sky-300 transition-colors">
                {SITE_CONFIG.tollFree}
              </a>
              <span className="text-[11px] text-slate-400 mt-1">Appointments & general inquiries</span>
            </div>

            {/* International Desk */}
            <div className="bg-amber-950/40 border border-amber-500/30 rounded-2xl p-4 flex flex-col justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">International Desk</span>
              <a href={`tel:${SITE_CONFIG.internationalHelp}`} className="text-lg font-bold text-white hover:text-amber-300 transition-colors">
                {SITE_CONFIG.internationalHelp}
              </a>
              <span className="text-[11px] text-slate-400 mt-1">Global patient visa & travel support</span>
            </div>
          </div>
        </div>

        {/* Middle Footer: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 border-b border-white/10 text-xs">
          {FOOTER_SECTIONS.map((sec) => (
            <div key={sec.title} className="space-y-3">
              <h4 className="text-sm font-bold text-white tracking-wide uppercase font-sans border-b border-white/10 pb-2">
                {sec.title}
              </h4>
              <ul className="space-y-2 text-slate-300">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white hover:underline flex items-center gap-1 group transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Accreditation Badges */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-white">Connect With Us:</span>
            <div className="flex items-center gap-2 text-white">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#000000] flex items-center justify-center transition-colors" aria-label="X / Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0A66C2] flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#CD201F] flex items-center justify-center transition-colors" aria-label="YouTube">
                <YoutubeIcon />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E4405F] flex items-center justify-center transition-colors" aria-label="Instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Accreditations */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>NABH Accredited Hospitals</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-200">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>NABL Certified Laboratories</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved. "Patient First" is a registered trademark.
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
            <span>•</span>
            <a href="#disclaimer" className="hover:text-white transition-colors">Medical Disclaimer</a>
            <span>•</span>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
