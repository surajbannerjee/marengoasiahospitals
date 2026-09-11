import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { HospitalCard } from '../../common/HospitalCard';
import { HOSPITALS_DATA } from '../../../constants/config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const OurHospitals = ({ onSelectHospital }) => {
  return (
    <section id="hospitals" className="pb-6 min-[360px]:pb-7 min-[400px]:pb-8 sm:pb-9 md:pb-11 lg:pb-14 xl:pb-16 2xl:pb-[80px] 3xl:pb-[70px] 4k:pb-[85px] bg-white relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center ">
          <SectionTitle
            title="Our Hospitals"
            subtitle="Explore Our Network of Advanced Healthcare Facilities"
            align="center"
            className="max-w-xl mx-auto"
          />
        </div>

        {/* Mobile View: 1-by-1 Swiper Slider */}
        <div className="sm:hidden relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            speed={600}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="cardSlider !pb-9 select-none"
          >
            {HOSPITALS_DATA.map((hosp, index) => (
              <SwiperSlide key={`mobile-${hosp.id}-${index}`}>
                <HospitalCard
                  hospital={hosp}
                  onClick={onSelectHospital}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop / Tablet View: 3x2 Grid for 6 Hospitals */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {HOSPITALS_DATA.map((hosp) => (
            <HospitalCard
              key={hosp.id}
              hospital={hosp}
              onClick={onSelectHospital}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurHospitals;
