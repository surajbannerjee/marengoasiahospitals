import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../util/cn';
import { IMAGES } from '../../constants/images';

export const CenterCard = ({ center, onClick, className = '' }) => {
  const iconSrc = IMAGES.svgs[center.icon] || IMAGES.svgs.Cardiac;

  return (
    <div
      onClick={() => onClick && onClick(center.title)}
      className={cn(
        'group relative flex flex-col justify-between w-full h-[370px] sm:h-[390px] p-6 sm:p-7 select-none cursor-pointer',
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
      <div className="flex flex-col items-center text-center pt-2">
        {/* Medical SVG Icon */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-3 group-hover:scale-108 transition-transform duration-300">
          <img
            src={iconSrc}
            alt={center.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Stat Number */}
        <h3 className="text-2xl sm:text-[28px] font-bold text-[#2D3748] tracking-tight leading-tight">
          {center.stat}
        </h3>

        {/* Subtitle / Stat Label */}
        <p className="text-xs sm:text-[13px] font-normal text-slate-500 mt-1">
          {center.statLabel || 'Patients treated'}
        </p>

        {/* Divider Line */}
        <div className="w-9 h-[1.5px] bg-slate-400/60 my-3 rounded-full" />

        {/* Specialty Title */}
        <h4 className="text-[17px] sm:text-[19px] font-bold text-[#4B73BC] group-hover:text-[#003B73] transition-colors leading-snug">
          {center.title}
        </h4>
      </div>

      {/* Read More Link situated in the bottom-right notch */}
      <div className="flex justify-end items-center pb-0.5 pr-0.5">
        <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13.5px] font-medium text-[#2563EB] group-hover:text-[#003B73] transition-colors">
          Read More
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </div>
  );
};

export default CenterCard;
