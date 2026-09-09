import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { SliderNavigation } from '../../shared/SliderNavigation';
import { CenterCard } from '../../common/CenterCard';
import { CENTERS_OF_EXCELLENCE } from '../../../constants/config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const CentersOfExcellence = ({ onSelectSpecialty }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Multiply slides if array is small so Swiper loop works seamlessly with slidesPerView 4
  const loopCards = CENTERS_OF_EXCELLENCE.length > 0 && CENTERS_OF_EXCELLENCE.length <= 4
    ? [...CENTERS_OF_EXCELLENCE, ...CENTERS_OF_EXCELLENCE, ...CENTERS_OF_EXCELLENCE]
    : CENTERS_OF_EXCELLENCE;

  return (
    <section id="specialties" className="pb-6 min-[360px]:pb-7 min-[400px]:pb-8 sm:pb-9 md:pb-11 lg:pb-14 xl:pb-16 2xl:pb-[80px] 3xl:pb-[70px] 4k:pb-[85px] relative">
      <Container>
        {/* Section Header with Slider Controls on Desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <SectionTitle
            title="Centers of Excellence"
            subtitle="Trusted care for 25+ years"
            align="center"
            className=""
          />

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
            loop={true}
            speed={600}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              420: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
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
            className="cardSlider"
          >
            {loopCards.map((center, index) => (
              <SwiperSlide key={`${center.id}-${index}`} className="h-auto">
                <CenterCard
                  center={center}
                  onClick={onSelectSpecialty}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default CentersOfExcellence;
