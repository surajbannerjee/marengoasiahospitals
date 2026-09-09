import React from 'react';
import { UserCheck, Stethoscope, ShieldCheck, Building2, ChevronRight, Phone, Siren, MessageCircle, HeartPulse, Hospital } from 'lucide-react';
import { Container } from '../../common/Container';
import { SITE_CONFIG } from '../../../constants/config';
import { cn } from '../../../util/cn';

export const QuickActions = ({ onOpenAppointment }) => {
  const tabs = [
    {
      id: 'doctor',
      title: 'Find',
      subtitle: 'Doctor',
      fullTitle: 'Find a Doctor',
      desc: 'Book consult with top specialists',
      icon: UserCheck,
      bgColor: 'bg-[#F37023]',
      hoverColor: 'hover:bg-[#E05D10]',
      href: '#doctors',
    },
    {
      id: 'specialties',
      title: 'Our',
      subtitle: 'Specialties',
      fullTitle: 'Our Specialties',
      desc: '30+ Super-speciality departments',
      icon: Stethoscope,
      bgColor: 'bg-[#1D4ED8]',
      hoverColor: 'hover:bg-[#1E40AF]',
      href: '#specialties',
    },
    {
      id: 'health-checkup',
      title: 'Book Your',
      subtitle: 'Health Checkup',
      fullTitle: 'Book Health Checkup',
      desc: 'Preventive full-body packages',
      icon: ShieldCheck,
      bgColor: 'bg-[#657917]',
      hoverColor: 'hover:bg-[#526410]',
      href: '#packages',
    },
    {
      id: 'hospitals',
      title: 'Our Hospital',
      subtitle: 'Locations',
      fullTitle: 'Our Hospital Locations',
      desc: 'State-of-the-art medical centers',
      icon: Hospital,
      bgColor: 'bg-[#94A3B8]',
      hoverColor: 'hover:bg-[#64748B]',
      href: '#hospitals',
    },
  ];

  return (
    <section className="relative z-20 -mt-2 sm:-mt-10 mb-8 sm:mb-12 font-sans">
      <Container>
        {/* 4 Notched Action Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            return (
              <a
                key={tab.id}
                href={tab.href}
                className={cn(
                  'group relative flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-2 sm:gap-4 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl text-white cursor-pointer overflow-hidden',
                  tab.bgColor,
                  tab.hoverColor
                )}
              >
                {/* Decorative Notch / Corner tab detail on right edge */}
                <div className="hidden sm:block absolute -right-3 -top-3 w-8 h-8 rotate-45 bg-white/20 pointer-events-none" />

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
