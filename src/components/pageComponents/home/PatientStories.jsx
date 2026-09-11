import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { StoryCard } from '../../common/StoryCard';
import { PATIENT_STORIES } from '../../../constants/config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionTitle from '../../common/SectionTitle';
import Container from '../../common/Container';

export const PatientStories = () => {
  const swiperRef = useRef(null);

  const handleVideoPlay = () => {
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  // Multiply items so Swiper infinite loop slides seamlessly across full width
  const loopCards = PATIENT_STORIES.length > 0 && PATIENT_STORIES.length <= 4
    ? [...PATIENT_STORIES, ...PATIENT_STORIES, ...PATIENT_STORIES]
    : [...PATIENT_STORIES, ...PATIENT_STORIES];

  return (
    <div className='py-20 bg-[#EAEAEA]'>
      <section id="stories" className="py-6 min-[360px]:py-7 min-[400px]:py-8 sm:py-9 md:py-11 lg:py-14 xl:py-16 2xl:py-[100px] 3xl:py-[100px] 4k:py-[100px] bg-[#EAEAEA] relative">

        {/* Central White Backdrop Card Shape */}
        <div className="absolute  inset-y-3 sm:inset-y-5 lg:inset-y-8 left-1/2 -translate-x-1/2 w-[94vw] sm:w-[90vw] md:w-[780px] lg:w-[800px] xl:w-[824px] pointer-events-none z-0 flex justify-center">
          <svg
            viewBox="0 0 825 789"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-xs"
            preserveAspectRatio="none"
          >
            <path
              d="M0 22.0328V715.061C0 727.23 4.4586 737.094 9.95934 737.094H505.885C509.151 737.094 512.209 740.634 514.069 746.57L530.479 779.525C532.34 785.46 535.398 789 538.663 789H712.906C718.407 789 722.865 779.136 722.865 766.968V759.126C722.865 746.958 727.325 737.094 732.825 737.094H815.041C820.54 737.094 825 727.23 825 715.061V22.0328C825 9.86456 820.54 0 815.041 0H9.95934C4.4586 0 0 9.86456 0 22.0328Z"
              fill="white"
            />
          </svg>
        </div>
        <Container className="relative z-10">

          <div className="flex flex-col items-center justify-center text-center relative z-5">
            <SectionTitle
              title="Patient Stories"
              subtitle="Real experiences from patients whose lives have been transformed through compassionate care and medical excellence."
              align="center"
              className="max-w-[85%] md:max-w-[75%] lg:max-w-[40%] xl:max-w-[40%]"
            />
          </div>
        </Container>


        {/* Full-Width Swiper Slider (Extends Edge-to-Edge across viewport) */}
        <div className="relative z-10 w-full overflow-hidden -mt-4 sm:-mt-6 pb-6 select-none">

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            speed={600}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                centeredSlides: true,
              },
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2.8,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3.6,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1280: {
                slidesPerView: 4.6,
                spaceBetween: 20,
                centeredSlides: false,
              },
              1536: {
                slidesPerView: 5.2,
                spaceBetween: 20,
                centeredSlides: false,
              },
            }}
            className="cardSlider !px-4 sm:!px-7"
          >
            {loopCards.map((story, index) => (
              <SwiperSlide key={`${story.id}-${index}`} className="h-auto py-2">
                <StoryCard story={story} onPlay={handleVideoPlay} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default PatientStories;
