import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../util/cn';
import { IMAGES } from '../../constants/images';

export const CenterCard = ({ center, className = '' }) => {
  const iconSrc = IMAGES.svgs[center.icon] || IMAGES.svgs.Cardiac;

  const centerUrls = {
    'cardiac': 'https://marengoasiahospitals.com/speciality/cardiac-sciences',
    'neuro': 'https://marengoasiahospitals.com/speciality/neurology',
    'cancer': 'https://marengoasiahospitals.com/speciality/medical-oncology',
    'ortho': 'https://marengoasiahospitals.com/speciality/orthopaedics-and-joint-replacement',
  };

  const handleCardClick = () => {
    const url = centerUrls[center.id];

    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div>
    <div
      onClick={handleCardClick}
      className={cn(
        'group relative aspect-square flex justify-between items-center w-full  pt-7 pb-7 md:pt-10 md:pb-10 lg:pt-15  lg:pb-15 md:px-6 px-4 select-none cursor-pointer',
        className
      )}
    >
      {/* SVG Card Background with Notch Cutout */}
      <svg
        className="absolute inset-0 w-full h-full -z-10"
        viewBox="0 0 350 402"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M350 6.7168V374.965C350 378.675 344.843 381.682 338.481 381.682H193.88C190.103 381.682 186.566 382.761 184.414 384.57L167.118 399.111C164.965 400.921 161.428 402 157.653 402H39.7416C33.3797 402 28.2224 398.993 28.2224 395.284V388.398C28.2224 384.688 23.0651 381.682 16.7031 381.682H10.5192C4.15727 381.682 -1 378.675 -1 374.965V6.7168C-1 3.0076 4.15727 0 10.5192 0H338.481C344.843 0 350 3.0076 350 6.7168Z"
          fill="#EDEEEF"
        />
      </svg>

      {/* Main Content Area */}
        <div className="flex flex-col items-center w-full text-center">
        {/* Medical SVG Icon */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:h-16 lg:w-16 xl:h-18 xl:w-18 2xl:h-20 2xl:w-20 3xl:h-24 3xl:w-24  flex items-center justify-center mb-3 group-hover:scale-108 transition-transform duration-300">
          <img
            src={iconSrc}
            alt={center.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Stat Number */}
          <h3 className="text-[20px] max-[330px]:text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[28px] font-bold text-[#666666] tracking-tight leading-tight">
          {center.stat}
        </h3>

        {/* Subtitle / Stat Label */}
          <p className="text-[13px] sm:text-[14px] font-normal text-[#666666] mt-1">
          {center.statLabel || 'Patients treated'}
        </p>

        {/* Divider Line */}
        <div className="w-9 h-[1.5px] bg-slate-400/60 my-3 rounded-full" />

        {/* Specialty Title */}
          <h4 className="text-[16px] max-[330px]:text-[14px] sm:text-[18px] md:text-[18px] lg:text-[20px] font-bold text-[#7589CC] group-hover:text-[#224F9F] truncate transition-colors leading-snug">
          {center.title}
        </h4>
      </div>
      </div>
      {/* Read More Link situated in the bottom-right notch */}
      <div className="flex justify-end items-center sm:mt-[-10px] mt-[-7px] pr-0.5">
        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[12px] md:text-[14px] font-medium text-[#2563EB] group-hover:text-[#003B73] transition-colors">
          Read More
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </div>
  );
};

export default CenterCard;
