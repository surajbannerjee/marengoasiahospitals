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
      fullTitle: 'Find Doctor',
      icon: IMAGES.svgs.findDoctor,
      bg: IMAGES.svgs.shapeOrangeSvg,
      href: '#doctors',
      textColor: "text-[#ffffff]",
    },
    {
      id: 'specialties',
      title: 'Our',
      subtitle: 'Specialties',
      fullTitle: 'Our Specialties',
      desc: '30+ Super-speciality departments',
      icon: IMAGES.svgs.ourSpecialties,
      bg: IMAGES.svgs.shapeBlueSvg,
      href: '#specialties',
      textColor: "text-[#ffffff]",
    },
    {
      id: 'health-checkup',
      title: 'Book Your',
      subtitle: 'Health Checkup',
      fullTitle: 'Book Health Checkup',
      desc: 'Preventive full-body packages',
      bg: IMAGES.svgs.shapeGreenSvg,
      icon: IMAGES.svgs.bookAppointment,
      href: '#packages',
      textColor: "text-[#ffffff]",
    },
    {
      id: 'hospitals',
      title: 'Our Hospital',
      subtitle: 'Locations',
      fullTitle: 'Our Hospital Locations',
      icon: IMAGES.svgs.ourHospitalLocations,
      bg: IMAGES.svgs.shapeGraySvg,
      href: '#hospitals',
      textColor: "text-[#686868]",
    },
  ];

  return (
    <section className="relative z-20 py-6 min-[360px]:py-7 min-[400px]:py-8 sm:py-9 md:py-11 lg:py-14 xl:py-16 2xl:py-[80px] 3xl:py-[70px] 4k:py-[85px]">
      <Container>
        {/* 4 Notched Action Cards */}
        <div className="mx-auto grid gap-y-2 w-full grid-cols-1 min-[360px]:grid-cols-2 min-[400px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:max-w-full lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 3xl:grid-cols-4 4k:grid-cols-4">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            return (
              <a
                key={tab.id}
                href={tab.href}
                className="group relative flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-center gap-2 sm:gap-4 p-3.5 sm:p-5 transition-all duration-300 transform hover:-translate-y-1 text-white cursor-pointer overflow-visible h-[40px] min-[321px]:h-[80px] min-[361px]:h-[70px] min-[401px]:h-[80px] min-[501px]:h-[90px] sm:h-[120px] md:h-[100px] lg:h-[96px] xl:h-[110px] 2xl:h-[121.31px] 3xl:h-[170px] 4k:h-[220px]"
                style={{ backgroundImage: `url(${tab.bg})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
              >
                <div className="flex items-center gap-1 min-[360px]:gap-1.5 sm:gap-1.5 md:gap-2 lg:gap-3 xl:gap-4 2xl:gap-5 3xl:gap-8 4k:gap-12 px-1 min-[360px]:px-1.5 sm:px-1.5 md:px-2 lg:px-3 xl:px-5 2xl:px-6 3xl:px-10 4k:px-14">
                  {/* Icon Container */}
                  <div className="shrink-0 h-6 w-6 min-[360px]:h-8 min-[360px]:w-8 sm:h-10 sm:w-10 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-12 xl:w-12 2xl:h-[58px] 2xl:w-[62px] 3xl:h-[84px] 3xl:w-[90px] 4k:h-[125px] 4k:w-[135px]">
                    <img src={Icon} alt={tab.title} className=" object-contain w-full h-full" />
                  </div>
                  <div className={cn("w-auto flex flex-col justify-center text-[14px] min-[360px]:text-[14px] sm:text-[18px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[30px] 4k:text-[40px] font-bold leading-[100%] sm:leading-[100%] 4k:leading-[1.1] tracking-[0%]", tab.textColor)}>
                    <span className="block sm:inline">{tab.title} </span>
                    <span className="block sm:inline">{tab.subtitle}</span>
                  </div>
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
