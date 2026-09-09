import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { StoryCard } from '../../common/StoryCard';
import { PATIENT_STORIES } from '../../../constants/config';
import { VideoModal } from '../../shared/VideoModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const PatientStories = () => {
  const swiperRef = useRef(null);
  const [activeVideoStory, setActiveVideoStory] = useState(null);

  // Multiply items so Swiper infinite loop slides seamlessly across full width
  const loopCards = PATIENT_STORIES.length > 0 && PATIENT_STORIES.length <= 4
    ? [...PATIENT_STORIES, ...PATIENT_STORIES, ...PATIENT_STORIES]
    : [...PATIENT_STORIES, ...PATIENT_STORIES];

  return (
    <section id="stories" className="pb-6 min-[360px]:pb-7 min-[400px]:pb-8 sm:pb-9 md:pb-11 lg:pb-14 xl:pb-16 2xl:pb-[80px] 3xl:pb-[70px] 4k:pb-[85px] bg-[#EEF2F6] relative overflow-hidden">
      {/* Central White Backdrop Card with Header & Bottom Notch Tab */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-12 relative text-center">
        {/* Background White Card Shape */}
        <div className="absolute inset-x-4 sm:inset-x-6 top-0 bottom-6 bg-white rounded-[2.5rem] sm:rounded-[3rem] shadow-xs border border-slate-100/90 -z-10">
          {/* Bottom Center Notch Tab */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-5 bg-white rounded-b-2xl border-b border-x border-slate-100/90 shadow-2xs" />
        </div>

        {/* Header Content */}
        <div className="max-w-2xl mx-auto mb-2 sm:mb-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#1E4E98] tracking-tight">
            Patient Stories
          </h2>
          <p className="text-xs sm:text-sm text-[#636466] leading-relaxed mt-2.5 max-w-xl mx-auto">
            Real experiences from patients whose lives have been transformed through compassionate care and medical excellence.
          </p>
        </div>
      </div>

      {/* Full-Width Swiper Slider (Extends Edge-to-Edge across viewport) */}
      <div className="relative w-full overflow-hidden -mt-4 sm:-mt-6 pb-6 select-none">
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
              spaceBetween: 24,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3.6,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 4.6,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1536: {
              slidesPerView: 5.2,
              spaceBetween: 28,
              centeredSlides: false,
            },
          }}
          className="cardSlider !px-4 sm:!px-8"
        >
          {loopCards.map((story, index) => (
            <SwiperSlide key={`${story.id}-${index}`} className="h-auto py-2">
              <StoryCard
                story={story}
                onPlayVideo={(s) => setActiveVideoStory(s)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Video Modal Player */}
      {activeVideoStory && (
        <VideoModal
          isOpen={!!activeVideoStory}
          onClose={() => setActiveVideoStory(null)}
          videoTitle={activeVideoStory.title || `${activeVideoStory.patientName}'s Recovery Story`}
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />
      )}
    </section>
  );
};

export default PatientStories;
