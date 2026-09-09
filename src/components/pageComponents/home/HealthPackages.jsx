import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HeartPulse, Check, Calendar, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { SliderNavigation } from '../../shared/SliderNavigation';
import { HEALTH_PACKAGES } from '../../../constants/config';
import { Card } from '../../common/Card';
import { Button } from '../../common/Button';
import { Badge } from '../../common/Badge';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HealthPackages = ({ onOpenAppointment }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section id="packages" className="py-12 sm:py-16 bg-white">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <SectionTitle
            badge="Preventive Wellness"
            title="Health Check-Up Packages"
            subtitle="Customized full-body preventive health checkups for every age and lifestyle requirement"
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

        {/* Health Packages Swiper */}
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
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {HEALTH_PACKAGES.map((pkg) => (
              <SwiperSlide key={pkg.id} className="h-auto">
                <Card className="h-full flex flex-col overflow-hidden border border-slate-200/90 hover:border-sky-300 hover:shadow-xl group justify-between bg-white">
                  <div>
                    {/* Package Image */}
                    <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="orange" className="font-bold shadow-sm">
                          {pkg.badge}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-[#003B73] shadow-sm">
                        {pkg.testsCount}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6">
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#003B73] transition-colors mb-1">
                        {pkg.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#0284C7] mb-2.5">
                        {pkg.subtitle}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                        {pkg.description}
                      </p>

                      {/* Pricing Tag */}
                      <div className="flex items-baseline gap-2 pt-2 border-t border-slate-100">
                        <span className="text-xl font-black text-[#003B73]">
                          {pkg.discountPrice}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          {pkg.originalPrice}
                        </span>
                        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          Save 50%+
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="p-5 sm:p-6 pt-0">
                    <Button
                      variant="primary"
                      size="sm"
                      icon={Calendar}
                      onClick={onOpenAppointment}
                      className="w-full justify-center group-hover:bg-[#0284C7]"
                    >
                      Book Package
                    </Button>
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

export default HealthPackages;
