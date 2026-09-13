import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Container } from '../../common/Container';
import { INTERNATIONAL_PATIENTS_DATA } from '../../../constants/config';
import { IMAGES } from '../../../constants/images';

// Import Swiper styles
import 'swiper/css';

// Animated Counter Component with ease-out and comma formatting
const AnimatedCounter = ({ target, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let frameId;
    const duration = 2000;

    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(easeOutExpo(progress) * target);
      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, isVisible]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const InternationalPatients = ({ onOpenAppointment }) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const [hoveredCountry, setHoveredCountry] = useState(null);

  return (
    <section
      id="international"
      ref={sectionRef}
      className="py-10 sm:py-14 md:py-16 lg:py-20 bg-[#EEF2F6] relative overflow-hidden"
    >
      <Container>
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 items-center">

          {/* LEFT COLUMN (Desktop) / CONTENTS (Mobile) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-5 items-center lg:items-start text-center lg:text-left">
            {/* 1. Headings */}
            <div className="order-1 lg:order-none flex flex-col items-center lg:items-start text-center lg:text-left w-full">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[40px] font-bold text-[#1E4E98] tracking-tight leading-tight">
                {INTERNATIONAL_PATIENTS_DATA.heading}
              </h2>

              {/* Description Paragraph */}
              <p className="text-sm sm:text-base text-[#636466] leading-relaxed max-w-lg mt-3 sm:mt-4">
                {INTERNATIONAL_PATIENTS_DATA.description}
              </p>
            </div>

            {/* 3. 10 Country Flags Automatic Carousel with Smooth Hover Tooltips */}
            <div className="order-3 lg:order-none mt-4 sm:mt-6 lg:mt-8 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-full overflow-hidden mx-auto lg:mx-0">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={700}
                spaceBetween={12}
                slidesPerView={4}
                breakpoints={{
                  320: { slidesPerView: 4, spaceBetween: 10 },
                  480: { slidesPerView: 5, spaceBetween: 12 },
                  640: { slidesPerView: 5, spaceBetween: 14 },
                  1024: { slidesPerView: 4, spaceBetween: 12 },
                  1280: { slidesPerView: 5, spaceBetween: 14 },
                }}
                className="w-full py-2 select-none"
              >
                {INTERNATIONAL_PATIENTS_DATA.countries.map((country, idx) => (
                  <SwiperSlide key={`flag-${country.code}-${idx}`} className="flex justify-center">
                    <div className="relative group py-1">
                      <motion.div
                        whileHover={{
                          scale: 1.18,
                          y: -3,
                          transition: { type: 'spring', stiffness: 450, damping: 18 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        onHoverStart={() => setHoveredCountry(country.name)}
                        onHoverEnd={() => setHoveredCountry(null)}
                        onClick={() => onOpenAppointment && onOpenAppointment(`International Patient Desk (${country.name})`)}
                        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full cursor-pointer flex items-center justify-center p-0.5 bg-white shadow-sm hover:shadow-md border border-slate-200/80 transition-shadow overflow-hidden"
                      >
                        <img
                          src={country.image}
                          alt={country.name}
                          className="w-full h-full rounded-full object-cover select-none pointer-events-none"
                        />
                      </motion.div>

                      {/* Hover Country Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 bg-slate-800 text-white text-[10px] font-medium rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 shadow-sm">
                        {country.name}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 5. Action Buttons & VISA Link */}
            <div className="order-5 lg:order-none mt-6 sm:mt-8 lg:mt-10 flex flex-col items-center lg:items-start w-full">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                {/* Know More Button */}
                <a
                  href="https://marengoasiahospitals.com/internationalpatient"
                  className=" sm:flex-initial min-w-[130px] sm:min-w-[150px] px-6 sm:px-8 py-3 bg-[#1E4E98] hover:bg-[#163B75] text-white font-semibold text-sm sm:text-[15px] rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer text-center"
                >
                  Know More
                </a>

                {/* Get An Estimate Button */}
                <a
                  href="https://marengoasiahospitals.com/bookanappointment"
                  className="sm:flex-initial min-w-[130px] sm:min-w-[150px] px-6 sm:px-8 py-3 bg-white hover:bg-slate-50 text-[#1E4E98] font-semibold text-sm sm:text-[15px] rounded-lg border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer text-center"
                >
                  Get An Estimate
                </a>
              </div>

              {/* VISA Invitation Letter Link */}
              <div className="mt-4 sm:mt-6 lg:mt-8 text-xs sm:text-sm text-[#636466] text-center lg:text-left">
                Request For{' '}
                <a
                  href="https://marengoasiahospitals.com/patientstories"
                  className="font-bold text-[#1E4E98] hover:text-[#163B75] underline underline-offset-4 cursor-pointer transition-colors"
                >
                  VISA Invitation Letter
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Desktop) / CONTENTS (Mobile) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-7 items-center">
            {/* 2. World Map Container */}
            <div className="order-2 lg:order-none relative w-full aspect-[16/9] max-w-[700px] flex items-center justify-center select-none mt-2 lg:mt-0">
              {/* World Map SVG Image */}
              <img
                src={IMAGES.svgs.map}
                alt="World Map"
                className="w-full h-full object-contain pointer-events-none select-none drop-shadow-xs"
              />
            </div>

            {/* 4. Bottom 3 Stats Counters with Vertical Divider Bars on sm+ and Clean Stacking on Mobile */}
            <div className="order-4 lg:order-none w-full mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-300/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-300 items-center text-center">
                {INTERNATIONAL_PATIENTS_DATA.stats.map((stat) => (
                  <div key={stat.label} className="py-2.5 sm:py-0 px-2 sm:px-4">
                    {/* Number Counter */}
                    <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[30px] font-extrabold text-[#1E4E98] tracking-tight leading-none">
                      <AnimatedCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        isVisible={isInView}
                      />
                    </div>
                    {/* Label */}
                    <div className="text-xs sm:text-sm font-medium text-[#1E4E98]/80 mt-1 sm:mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default InternationalPatients;
