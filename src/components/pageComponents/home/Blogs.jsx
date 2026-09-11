import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { BlogCard } from '../../common/BlogCard';
import { BLOGS_DATA } from '../../../constants/config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Blogs = ({ onSelectBlog }) => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  // Multiply slides if array is small so Swiper loop works seamlessly
  const loopCards = BLOGS_DATA.length > 0 && BLOGS_DATA.length <= 4
    ? [...BLOGS_DATA, ...BLOGS_DATA]
    : BLOGS_DATA;

  return (
    <section id="blogs" className="pb-6 min-[360px]:pb-7 min-[400px]:pb-8 sm:pb-9 md:pb-11 lg:pb-14 xl:pb-16 2xl:pb-[80px] 3xl:pb-[70px] 4k:pb-[85px] relative">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <SectionTitle
            title="Blogs"
            subtitle="Expert insights for every step of your health journey"
            align="center"
            className=""
          />
        </div>

        {/* Swiper Slider matching Technologies slider and card design */}
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
            {loopCards.map((blog, index) => (
              <SwiperSlide key={`${blog.id}-${index}`} className="h-auto">
                <BlogCard
                  blog={blog}
                  onClick={onSelectBlog}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
