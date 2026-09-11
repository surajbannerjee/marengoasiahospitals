import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { NEWS_AND_EVENTS } from '../../../constants/config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export const NewsEvents = () => {
  const featuredNews = NEWS_AND_EVENTS.find((n) => n.isFeatured) || NEWS_AND_EVENTS[0];
  const sideNews = NEWS_AND_EVENTS.filter((n) => !n.isFeatured);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Desktop shows 4 in a slide (2x2), mobile shows 2 in a slide
  const chunkSize = isMobile ? 1 : 4;
  const slides = [];
  for (let i = 0; i < sideNews.length; i += chunkSize) {
    slides.push(sideNews.slice(i, i + chunkSize));
  }
  const renderSlides = slides.length === 1 ? [...slides, ...slides] : slides;

  return (
    <section id="news" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          <SectionTitle
            title="News & Events"
            subtitle="Discover Our Latest News & Events"
            align="center"
            className="max-w-xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: 1 Big Featured Story Card */}
          <div className="lg:col-span-5 xl:col-span-6 flex">
            <div className="relative w-full flex flex-col justify-between group select-none">
              {/* Custom SVG Background Shape */}
              <svg
                viewBox="0 0 663 541"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none z-0 drop-shadow-xs"
                preserveAspectRatio="none"
              >
                <path
                  d="M662.402 318.993V476.227C662.402 483.564 656.455 489.511 649.119 489.511H628.8C621.463 489.511 615.516 495.459 615.516 502.794V526.867C615.516 534.203 609.569 540.15 602.233 540.15H13.2835C5.94704 540.15 0 534.203 0 526.867V13.2833C0 5.9469 5.94704 -0.00012207 13.2835 -0.00012207H602.233C609.569 -0.00012207 615.516 5.9469 615.516 13.2833V292.426C615.516 299.762 621.463 305.709 628.8 305.709H649.119C656.455 305.709 662.402 311.656 662.402 318.993Z"
                  fill="#EAEAEA"
                />
              </svg>

              {/* Card Content */}
              <div className="relative z-10 p-4 sm:p-6 md:p-7 pr-10 sm:pr-15 md:pr-20 flex flex-col justify-between h-full">
                <div>
                  {/* Featured Image */}
                  <div className="relative aspect-[16/10] w-full rounded-[14px] overflow-hidden bg-slate-200 mb-4 sm:mb-5 shadow-xs">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Metadata Row: Author & Date */}
                  <div className="flex items-center justify-between text-xs sm:text-[13px] text-slate-500 font-medium mb-3 px-1">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                      <span>{featuredNews.author || 'BW Online Bureau'}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                      <span>{featuredNews.date}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#1E3A5F] leading-snug px-1 mb-4 group-hover:text-[#0258B9] transition-colors">
                    {featuredNews.title}
                  </h3>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-2 px-1 flex items-center text-xs sm:text-sm font-bold text-[#0258B9] group-hover:text-[#003B73] cursor-pointer gap-1.5 transition-colors">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Box Slide (2x2 Grid per slide) */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-between">
            <Swiper
              modules={[Pagination, Autoplay]}
              loop={renderSlides.length > 1}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              speed={600}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="newsEventsSlider w-full !pb-9 select-none"
            >
              {renderSlides.map((slideItems, slideIdx) => (
                <SwiperSlide key={`${chunkSize}-${slideIdx}`}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {slideItems.map((item) => (
                      <div
                        key={item.id}
                        className="group flex flex-col justify-between cursor-pointer"
                      >
                        {/* News Image Card with Stepped Navy Blue Overlay Shape */}
                        <div className="relative w-full aspect-[2/1]">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-[100% 100%]"
                          />

                          {/* Stepped Blue Bottom Overlay Shape */}
                          <div className="absolute inset-x-1.5 bottom-10 flex flex-col justify-end p-2.5 sm:p-3 z-10">


                            {/* Content inside Blue Shape */}
                            <div className="relative z-10 text-white pl-1 sm:pl-2 pr-1 sm:pr-2">
                              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-sky-100 mb-0.5">
                                <Calendar className="w-3 h-3 text-sky-200" />
                                <span>{item.date}</span>
                              </div>
                              <h4 className="text-xs sm:text-[13px] font-bold text-white line-clamp-2 leading-tight">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                        </div>

                        {/* Read More Action Link on Right */}
                        <div className="flex items-center justify-end -mt-8 py-3 pr-3 text-xs font-semibold text-[#0258B9] group-hover:text-[#003B73] gap-1 transition-colors">
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsEvents;
