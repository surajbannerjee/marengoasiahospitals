import React from 'react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { WHY_CHOOSE_US_DATA } from '../../../constants/config';

// Single 1200px Continuous Rail Segment with SVG Stepped Line and Positioned Stats
const RailSegment = () => (
  <div className="relative h-[230px] w-[1200px] shrink-0">
    {/* Stepped Blue Rail SVG Line */}
    <svg
      className="absolute left-0 top-0 h-[230px] w-[1200px] pointer-events-none"
      viewBox="0 0 1200 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="railLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2C6BB2" />
          <stop offset="50%" stopColor="#0258B9" />
          <stop offset="100%" stopColor="#2C6BB2" />
        </linearGradient>
      </defs>
      <path
        d="M0 140 H180 C188 140 195 147 195 155 V192 C195 200 202 205 210 205 H460 C468 205 475 200 475 192 V148 C475 140 482 140 490 140 H620 C628 140 635 133 635 125 V88 C635 80 642 78 650 78 H880 C888 78 895 80 895 88 V192 C895 200 902 205 910 205 H1120 C1128 205 1135 200 1135 192 V148 C1135 140 1142 140 1150 140 H1200"
        stroke="url(#railLineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>

    {/* Metric 1: 32,000,000+ Patients Treated */}
    <div
      className="absolute flex -translate-x-1/2 gap-4 flex-col items-center text-center select-none"
      style={{ left: '27.9%', bottom: '-10px' }}
    >
      <span className="text-[24px] sm:text-[30px] font-bold leading-tight text-[#0258B9]">
        32,000,000+
      </span>
      <span className="whitespace-nowrap text-[13px] sm:text-[15px] font-medium text-[#666666] pt-1 pb-1">
        Patients Treated
      </span>
    </div>

    {/* Metric 2: 8 Hospitals */}
    <div
      className="absolute flex -translate-x-1/2 gap-4 flex-col items-center text-center select-none"
      style={{ left: '63.8%', top: '30px' }}
    >
      <span className="text-[24px] sm:text-[30px] font-bold leading-tight text-[#0258B9]">
        8
      </span>
      <span className="whitespace-nowrap text-[13px] sm:text-[15px] font-medium text-[#666666] pt-1 pb-1">
        Hospitals
      </span>
    </div>

    {/* Metric 3: 10,000+ Doctors */}
    <div
      className="absolute flex -translate-x-1/2 gap-4 flex-col items-center text-center select-none"
      style={{ left: '84.6%', bottom: '-10px' }}
    >
      <span className="text-[24px] sm:text-[30px] font-bold leading-tight text-[#0258B9]">
        10,000+
      </span>
      <span className="whitespace-nowrap text-[13px] sm:text-[15px] font-medium text-[#666666] pt-1 pb-1">
        Doctors
      </span>
    </div>
  </div>
);

export const WhyChooseUs = () => {
  return (
    <section className="pb-6 min-[360px]:pb-7 min-[400px]:pb-8 sm:pb-9 md:pb-11 lg:pb-14 xl:pb-16 2xl:pb-[80px] 3xl:pb-[70px] 4k:pb-[85px] relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <SectionTitle
          title={WHY_CHOOSE_US_DATA.heading}
          subtitle={WHY_CHOOSE_US_DATA.subtitle}
          align="center"
        />
      </Container>

      {/* Infinite Continuous Rail Marquee Slider */}
      <div className="relative w-full mt-4 sm:mt-6 select-none">


        {/* Marquee Track (Repeats segments to create seamless infinite scrolling) */}
        <div className="animate-continuous-rail 3xl:scale-125 4k:scale-145 origin-center">
          <RailSegment />
          <RailSegment />
          <RailSegment />
          <RailSegment />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
