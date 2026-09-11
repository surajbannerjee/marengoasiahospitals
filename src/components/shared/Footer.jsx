import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Container } from '../common/Container';

export const Footer = () => {
  return (
    <footer className="bg-[#EAF2F8] text-[#555555] pt-12 sm:pt-14 md:pt-16 pb-6 select-none">
      <Container>
        {/* 4 Column Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-10 sm:pb-12 text-center sm:text-left">
          {/* Column 1: Patient Care, International Patients, Research and Academics */}
          <div className="space-y-6 sm:space-y-8">
            {/* Patient Care */}
            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#224F9F] mb-3">
                Patient Care
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#666666]">
                <li><a href="#doctors" className="hover:text-[#224F9F] transition-colors">Find A Doctor</a></li>
                <li><a href="#patient-stories" className="hover:text-[#224F9F] transition-colors">Patient Testimonials</a></li>
                <li><a href="#doctor-bytes" className="hover:text-[#224F9F] transition-colors">Doctor Bytes</a></li>
              </ul>
            </div>

            {/* International Patients */}
            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#224F9F] mb-3">
                International Patients
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#666666]">
                <li><a href="#specialties" className="hover:text-[#224F9F] transition-colors">Specialities</a></li>
                <li><a href="#doctors" className="hover:text-[#224F9F] transition-colors">Our Doctors</a></li>
                <li><a href="#patient-stories" className="hover:text-[#224F9F] transition-colors">Patient Stories</a></li>
                <li><a href="#international" className="hover:text-[#224F9F] transition-colors">International Patient Process</a></li>
              </ul>
            </div>

            {/* Research and Academics */}
            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#224F9F] mb-3">
                Research and Academics
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#666666]">
                <li><a href="#research" className="hover:text-[#224F9F] transition-colors">DNB/FNB Programmes</a></li>
              </ul>
            </div>
          </div>

          {/* Column 2: About Us, Legal */}
          <div className="space-y-6 sm:space-y-8">
            {/* About Us */}
            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#224F9F] mb-3">
                About Us
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#666666]">
                <li><a href="#doctors" className="hover:text-[#224F9F] transition-colors">Find A Doctor</a></li>
                <li><a href="#patient-stories" className="hover:text-[#224F9F] transition-colors">Patient Testimonials</a></li>
                <li><a href="#doctor-bytes" className="hover:text-[#224F9F] transition-colors">Doctor Bytes</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#224F9F] mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#666666]">
                <li><a href="#privacy" className="hover:text-[#224F9F] transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-[#224F9F] transition-colors">Terms And Conditions</a></li>
                <li><a href="#disclaimer" className="hover:text-[#224F9F] transition-colors">Disclaimer</a></li>
                <li><a href="#dpdp" className="hover:text-[#224F9F] transition-colors">DPDP Act</a></li>
                <li><a href="#legal" className="hover:text-[#224F9F] transition-colors">Legal Entities</a></li>
                <li><a href="#compliance" className="hover:text-[#224F9F] transition-colors">Environment Compliance</a></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Marengo Asia Updates, Get in Touch */}
          <div className="space-y-6 sm:space-y-8">
            {/* Marengo Asia Updates */}
            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#224F9F] mb-3">
                Marengo Asia Updates
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#666666]">
                <li><a href="#print" className="hover:text-[#224F9F] transition-colors">Print</a></li>
                <li><a href="#digital" className="hover:text-[#224F9F] transition-colors">Digital</a></li>
                <li><a href="#electronic" className="hover:text-[#224F9F] transition-colors">Electronic</a></li>
                <li><a href="#events" className="hover:text-[#224F9F] transition-colors">Event</a></li>
                <li><a href="#blogs" className="hover:text-[#224F9F] transition-colors">Blogs</a></li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="text-[15px] sm:text-[16px] font-bold text-[#224F9F] mb-3">
                Get in Touch
              </h4>
              <ul className="space-y-2 text-xs sm:text-[13px] text-[#666666]">
                <li><a href="#query" className="hover:text-[#224F9F] transition-colors">Post A Query</a></li>
                <li><a href="#contact" className="hover:text-[#224F9F] transition-colors">Contact Us</a></li>
                <li><a href="#appointment" className="hover:text-[#224F9F] transition-colors">Book An Appointment</a></li>
                <li><a href="#careers" className="hover:text-[#224F9F] transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Our Hospitals */}
          <div>
            <h4 className="text-[15px] sm:text-[16px] font-bold text-[#224F9F] mb-3">
              Our Hospitals
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#666666]">
              <li><a href="#hospitals" className="hover:text-[#224F9F] transition-colors">Marengo CIMS Hospital, Ahmedabad</a></li>
              <li><a href="#hospitals" className="hover:text-[#224F9F] transition-colors">Marengo Asia Hospitals, Gurugram</a></li>
              <li><a href="#hospitals" className="hover:text-[#224F9F] transition-colors">Marengo Asia Hospitals, Faridabad</a></li>
              <li><a href="#hospitals" className="hover:text-[#224F9F] transition-colors">Marengo Asia Hospital, Surat</a></li>
              <li><a href="#hospitals" className="hover:text-[#224F9F] transition-colors">Marengo Asia Hospital, Vadodara</a></li>
              <li><a href="#hospitals" className="hover:text-[#224F9F] transition-colors">Marengo Asia Hospital, Saudi Arabia</a></li>
              <li><a href="#hospitals" className="hover:text-[#224F9F] transition-colors">METIS- The Medicity Hospital, Varanasi</a></li>
              <li><a href="#hospitals" className="hover:text-[#224F9F] transition-colors">KK Patel Super Speciality Hospital, Bhuj</a></li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-[#D0E2EE] my-4" />

        {/* Bottom Bar Row: Humane by Practice, App Stores, Social, Contact */}
        <div className="py-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 text-center lg:text-left">
          {/* 1. Humane By Practice */}
          <div className="shrink-0">
            <h3 className="text-base sm:text-lg font-bold text-[#224F9F] leading-tight tracking-tight">
              Humane By<br className="hidden lg:block" /> Practice
            </h3>
          </div>

          {/* 2. App Store Links */}
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-[11px] sm:text-xs font-semibold text-[#224F9F] mb-2">
              Download the Marengo Asia Hospitals App
            </span>
            <div className="flex items-center gap-2">
              {/* Google Play */}
              <a
                href="#download-app"
                className="inline-flex items-center gap-2 bg-black text-white px-2.5 py-1.5 rounded-md hover:bg-neutral-800 transition-colors shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.03 2.03 0 0 1-.61-.954V2.768c0-.368.223-.715.609-.954zm11.235 11.238l2.08 2.08-11.89 6.84 9.81-8.92zm2.977-1.052l2.366 1.36a1.36 1.36 0 0 1 0 2.36l-2.366 1.36-2.03-2.03 2.03-2.05zm-2.977-3.136l-9.81-8.92 11.89 6.84-2.08 2.08z" />
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[7.5px] tracking-wider text-slate-300 uppercase">GET IT ON</span>
                  <span className="text-[10.5px] font-bold text-white tracking-tight">Google Play</span>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#download-app"
                className="inline-flex items-center gap-2 bg-black text-white px-2.5 py-1.5 rounded-md hover:bg-neutral-800 transition-colors shadow-2xs"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.74-.96 2.77 1 .08 2.04-.51 2.69-1.27z"/>
                </svg>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[7.5px] tracking-wider text-slate-300">Download on the</span>
                  <span className="text-[10.5px] font-bold text-white tracking-tight">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* 3. Stay Connected Social Links */}
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-[11px] sm:text-xs font-semibold text-[#224F9F] mb-2">
              Stay Connected
            </span>
            <div className="flex items-center gap-2">
              {/* Instagram */}
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E62117] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                aria-label="X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 4. Direct Contact Information */}
          <div className="flex flex-col items-center lg:items-start space-y-2 text-xs sm:text-[13px] text-[#224F9F] font-medium">
            <a
              href="mailto:connect@marengoasia.com"
              className="flex items-center gap-2 hover:text-[#003B73] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#224F9F] shrink-0" />
              <span>connect@marengoasia.com</span>
            </a>

            <a
              href="tel:18003099999"
              className="flex items-center gap-2 hover:text-[#003B73] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#224F9F] shrink-0" />
              <span>24/7 Patient Helpline (1800-309-9999)</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 pb-2 text-center text-xs text-[#224F9F] font-medium">
          © {new Date().getFullYear()} Marengo Asia Hospitals. All Rights Reserved. Crafted by Meraki Square
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
