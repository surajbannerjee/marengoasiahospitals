import React from 'react';
import { UserCheck, Stethoscope, ShieldCheck, Building2, ChevronRight, Phone, Siren, MessageCircle, HeartPulse, Hospital } from 'lucide-react';
import { Container } from '../../common/Container';
import { SITE_CONFIG } from '../../../constants/config';
import { cn } from '../../../util/cn';
import { IMAGES } from '../../../constants/images';

export const QuickActions = ({ onOpenAppointment }) => {
  const tabs = [
    {
      id: 'doctor',
      title: 'Find',
      subtitle: 'Doctor',
      fullTitle: 'Find a Doctor',
      desc: 'Book consult with top specialists',
      icon: UserCheck,
      bg: IMAGES.svgs.shapeOrangeSvg,
      href: '#doctors',
    },
    {
      id: 'specialties',
      title: 'Our',
      subtitle: 'Specialties',
      fullTitle: 'Our Specialties',
      desc: '30+ Super-speciality departments',
      icon: Stethoscope,
      bg: IMAGES.svgs.shapeBlueSvg,
      href: '#specialties',
    },
    {
      id: 'health-checkup',
      title: 'Book Your',
      subtitle: 'Health Checkup',
      fullTitle: 'Book Health Checkup',
      desc: 'Preventive full-body packages',
      bg: IMAGES.svgs.shapeGreenSvg,
      icon: ShieldCheck,
      href: '#packages',
    },
    {
      id: 'hospitals',
      title: 'Our Hospital',
      subtitle: 'Locations',
      fullTitle: 'Our Hospital Locations',
      desc: 'State-of-the-art medical centers',
      icon: Hospital,
      bg: IMAGES.svgs.shapeGraySvg,
      href: '#hospitals',
    },
  ];

  return (
    <section className="relative z-20 py-[80px]">
      <Container>
        {/* 4 Notched Action Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            return (
              <a
                key={tab.id}
                href={tab.href}
                className="group relative flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-2 sm:gap-4 p-3.5 sm:p-5 transition-all duration-300 transform hover:-translate-y-1 text-white cursor-pointer overflow-visible"
                style={{ backgroundImage: `url(${tab.bg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "100%, 100%" }}
              >

                {/* Icon Container */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>

                {/* Text Labels */}
                <div className="text-center sm:text-left min-w-0">
                  <div className="text-xs sm:text-base lg:text-lg font-bold tracking-tight text-white leading-tight">
                    <span className="block sm:inline">{tab.title} </span>
                    <span className="block sm:inline">{tab.subtitle}</span>
                  </div>
                  <p className="hidden sm:block text-xs text-white/80 line-clamp-1 mt-0.5 font-normal">
                    {tab.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>


      </Container>
    </section>
  );
};

export default QuickActions;
