import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { PackageCard } from '../../common/PackageCard';
import { HEALTH_PACKAGES } from '../../../constants/config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const HealthPackages = ({ onOpenAppointment }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Multiply slides if array is small so Swiper loop works seamlessly
  const loopCards = HEALTH_PACKAGES.length > 0 && HEALTH_PACKAGES.length <= 4
    ? [...HEALTH_PACKAGES, ...HEALTH_PACKAGES]
    : HEALTH_PACKAGES;

  return (
    <section id="packages" className="py-6 min-[360px]:py-7 min-[400px]:py-8 sm:py-9 md:py-11 lg:py-14 xl:py-16 2xl:py-[80px] 3xl:py-[70px] 4k:py-[85px] bg-white relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <SectionTitle
            title="Health Check-Up Packages"
            subtitle="Evidence-based preventive health checkups for every age and lifestyle requirement."
            align="center"
            className=""
          />
        </div>

        {/* Swiper Slider with identical breakpoints and style */}
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
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={600}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              420: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
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
            className="cardSlider"
          >
            {loopCards.map((pkg, index) => (
              <SwiperSlide key={`${pkg.id}-${index}`} className="h-auto">
                <PackageCard
                  packageItem={pkg}
                  onClick={(item) => onOpenAppointment && onOpenAppointment(item?.title || 'Health Check-Up Package')}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default HealthPackages;
