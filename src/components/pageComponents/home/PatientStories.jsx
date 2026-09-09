import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Play, Quote, CheckCircle2, ChevronRight, User } from 'lucide-react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { SliderNavigation } from '../../shared/SliderNavigation';
import { PATIENT_STORIES } from '../../../constants/config';
import { Card } from '../../common/Card';
import { VideoModal } from '../../shared/VideoModal';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const PatientStories = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeVideoStory, setActiveVideoStory] = useState(null);

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC]">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <SectionTitle
            badge="Inspiring Journeys"
            title="Patient Stories"
            subtitle="Heartfelt stories of resilience, world-class medical miracles, and renewed health"
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

        {/* Stories Swiper */}
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
            autoplay={{ delay: 7000, disableOnInteraction: true }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1200: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-12"
          >
            {PATIENT_STORIES.map((story) => (
              <SwiperSlide key={story.id} className="h-auto">
                <Card className="h-full flex flex-col justify-between p-6 sm:p-7 border border-slate-200 hover:border-sky-300 hover:shadow-xl group bg-white">
                  <div>
                    {/* Top Row: Patient Photo, Video Play Button & Rating */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 shadow-md border-2 border-white">
                        <img
                          src={story.image}
                          alt={story.patientName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {story.hasVideo && (
                          <button
                            onClick={() => setActiveVideoStory(story)}
                            aria-label={`Watch video story for ${story.patientName}`}
                            className="absolute inset-0 bg-black/40 hover:bg-black/60 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <div className="w-8 h-8 rounded-full bg-[#F37023] text-white flex items-center justify-center shadow-md">
                              <Play className="w-4 h-4 fill-white translate-x-0.5" />
                            </div>
                          </button>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* 5-Star Rating */}
                        <div className="flex items-center gap-1 text-amber-400 mb-1">
                          {Array.from({ length: story.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <h4 className="text-base font-bold text-slate-800 truncate">
                          {story.patientName}
                        </h4>
                        <div className="text-xs text-slate-500 truncate">{story.location}</div>
                      </div>
                    </div>

                    {/* Heartfelt Quote */}
                    <div className="relative mb-4">
                      <Quote className="w-8 h-8 text-sky-100 absolute -top-3 -left-2 -z-0" />
                      <p className="relative z-10 text-xs sm:text-sm italic text-slate-700 leading-relaxed">
                        {story.quote}
                      </p>
                    </div>

                    {/* Story summary */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {story.story}
                    </p>
                  </div>

                  {/* Doctor & Procedure Footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/70 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-4 sm:p-5 rounded-b-2xl">
                    <div className="text-[11px] font-bold text-[#003B73] uppercase tracking-wider">
                      Procedure:
                    </div>
                    <div className="text-xs font-semibold text-slate-800 truncate">
                      {story.treatment}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1 truncate">
                      {story.doctor}
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>

      {/* Video Modal */}
      <VideoModal
        isOpen={Boolean(activeVideoStory)}
        onClose={() => setActiveVideoStory(null)}
        story={activeVideoStory}
      />
    </section>
  );
};

export default PatientStories;
