import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Brain, HeartPulse, Bone, ActivitySquare, Crosshair, ShieldAlert, Baby, Wind, ArrowRight } from 'lucide-react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { SliderNavigation } from '../../shared/SliderNavigation';
import { CENTERS_OF_EXCELLENCE } from '../../../constants/config';
import { Card } from '../../common/Card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const iconComponents = {
  Brain: Brain,
  HeartPulse: HeartPulse,
  Bone: Bone,
  ActivitySquare: ActivitySquare,
  Crosshair: Crosshair,
  ShieldAlert: ShieldAlert,
  Baby: Baby,
  Wind: Wind,
};

export const CentersOfExcellence = ({ onSelectSpecialty }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section id="specialties" className="py-12 sm:py-16 bg-slate-50 relative">
      <Container>
        {/* Section Header with Slider Controls on Desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <SectionTitle
            badge="Super Speciality"
            title="Centers of Excellence"
            subtitle="Leading clinicians and next-generation clinical technology for the most complex medical conditions"
            align="left"
            className="mb-0 max-w-2xl"
          />

          <div className="hidden md:flex items-center gap-3 mt-4 md:mt-0">
            <SliderNavigation
              onPrev={() => swiperRef.current?.slidePrev()}
              onNext={() => swiperRef.current?.slideNext()}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4500, disableOnInteraction: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="pb-12"
          >
            {CENTERS_OF_EXCELLENCE.map((center) => {
              const Icon = iconComponents[center.icon] || HeartPulse;
              return (
                <SwiperSlide key={center.id} className="h-auto">
                  <Card
                    onClick={() => onSelectSpecialty && onSelectSpecialty(center.title)}
                    className="h-full flex flex-col p-6 sm:p-7 border border-slate-200/80 hover:border-sky-300 hover:shadow-xl group justify-between"
                  >
                    <div>
                      {/* Top Row: Specialty Icon and Stat Counter Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#003B73] flex items-center justify-center group-hover:bg-[#003B73] group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-black text-[#003B73] group-hover:text-[#0284C7] transition-colors">
                            {center.stat}
                          </div>
                          <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                            {center.statLabel}
                          </div>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 group-hover:text-[#003B73] transition-colors mb-1.5">
                        {center.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#0284C7] mb-3">
                        {center.subtitle}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {center.description}
                      </p>
                    </div>

                    {/* Bottom CTA Link */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#003B73] group-hover:text-[#0284C7]">
                      <span>Explore Department</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default CentersOfExcellence;
