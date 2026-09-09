import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Cpu, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { SliderNavigation } from '../../shared/SliderNavigation';
import { TECHNOLOGIES } from '../../../constants/config';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Technologies = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <SectionTitle
            badge="Clinical Innovation"
            title="Our Technologies"
            subtitle="Equipped with world-leading medical instrumentation for maximum diagnostic accuracy and minimally invasive treatment"
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

        {/* Technologies Swiper */}
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
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {TECHNOLOGIES.map((tech) => (
              <SwiperSlide key={tech.id} className="h-auto">
                <Card className="h-full flex flex-col overflow-hidden border border-slate-200/80 hover:border-sky-300 hover:shadow-xl group justify-between bg-white">
                  <div>
                    {/* Technology Photo with Tag */}
                    <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                      <img
                        src={tech.image}
                        alt={tech.title}
                        className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="navy" className="bg-white/90 backdrop-blur-sm shadow-sm">
                          {tech.tag}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#003B73] transition-colors mb-1">
                        {tech.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#0284C7] mb-2.5">
                        {tech.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {tech.description}
                      </p>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#003B73] group-hover:text-[#0284C7]">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Technologies;
