import React from 'react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { WHY_CHOOSE_US_DATA } from '../../../constants/config';

// Single 1200px Continuous Rail Segment with SVG Stepped Line and Positioned Stats (Desktop/Tablet)
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

// Compact Mobile Continuous Rail Segment (600px width, 115px height for clean mobile fit)
const MobileRailSegment = () => (
  <div className="relative h-[115px] w-[600px] shrink-0">
    {/* Stepped Blue Rail SVG Line */}
    <svg
      className="absolute left-0 top-0 h-[115px] w-[600px] pointer-events-none"
      viewBox="0 0 600 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="mobileRailLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2C6BB2" />
          <stop offset="50%" stopColor="#0258B9" />
          <stop offset="100%" stopColor="#2C6BB2" />
        </linearGradient>
      </defs>
      <path
        d="M0 65 H75 C80 65 84 69 84 74 V80 C84 85 88 88 93 88 H230 C235 88 239 85 239 80 V74 C239 69 243 65 248 65 H305 C310 65 314 61 314 56 V46 C314 41 318 38 323 38 H435 C440 38 444 41 444 46 V80 C444 85 448 88 453 88 H550 C555 88 559 85 559 80 V74 C559 69 563 65 568 65 H600"
        stroke="url(#mobileRailLineGrad)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>

    {/* Metric 1: 32,000,000+ Patients Treated */}
    <div
      className="absolute flex -translate-x-1/2 gap-3 flex-col items-center text-center select-none"
      style={{ left: '27%', bottom: '4px' }}
    >
      <span className="text-[18px] min-[360px]:text-[20px] font-bold leading-tight text-[#0258B9]">
        32,000,000+
      </span>
      <span className="whitespace-nowrap text-[11px] min-[360px]:text-[12px] font-medium text-[#666666]">
        Patients Treated
      </span>
    </div>

    {/* Metric 2: 8 Hospitals */}
    <div
      className="absolute flex -translate-x-1/2 gap-3 flex-col items-center text-center select-none"
      style={{ left: '63%', top: '6px' }}
    >
      <span className="text-[18px] min-[360px]:text-[20px] font-bold leading-tight text-[#0258B9]">
        8
      </span>
      <span className="whitespace-nowrap text-[11px] min-[360px]:text-[12px] font-medium text-[#666666]">
        Hospitals
      </span>
    </div>

    {/* Metric 3: 10,000+ Doctors */}
    <div
      className="absolute flex -translate-x-1/2 gap-3 flex-col items-center text-center select-none"
      style={{ left: '84%', bottom: '2px' }}
    >
      <span className="text-[18px] min-[360px]:text-[20px] font-bold leading-tight text-[#0258B9]">
        10,000+
      </span>
      <span className="whitespace-nowrap text-[11px] min-[360px]:text-[12px] font-medium text-[#666666]">
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
          className="mb-2 sm:mb-5!"
        />
      </Container>

      {/* Infinite Continuous Rail Marquee Slider */}
      <div className="relative w-full select-none mt-1 sm:mt-0 overflow-hidden">
        {/* Mobile View: Compact Rail Slider (Only visible on screens < 640px) */}
        <div className="block sm:hidden">
          <div className="animate-continuous-rail">
            <MobileRailSegment />
            <MobileRailSegment />
            <MobileRailSegment />
            <MobileRailSegment />
          </div>
        </div>

        {/* Desktop View: Full Continuous Rail Slider (Only visible on screens >= 640px) */}
        <div className="hidden sm:block">
          <div className="animate-continuous-rail 3xl:scale-125 4k:scale-145 origin-center">
            <RailSegment />
            <RailSegment />
            <RailSegment />
            <RailSegment />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
