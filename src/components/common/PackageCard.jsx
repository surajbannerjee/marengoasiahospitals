import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../util/cn';

export const PackageCard = ({ packageItem, className = '' }) => {
  const targetHref = packageItem?.link || 'https://marengoasiahospitals.com/bookanappointment';

  return (
    <a
      href={targetHref}
      className={cn(
        'group flex flex-col justify-between w-full select-none cursor-pointer',
        className
      )}
    >
      {/* 1. Top Package Image */}
      <div className="w-full h-full aspect-square">
        <img
          src={packageItem.image}
          alt={packageItem.title}
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-103"
        />
      </div>

      {/* 2. Text Content & Book Now Button */}
      <div className="flex flex-col text-left pt-3.5 sm:pt-4 px-1">
        {/* Package Title */}
        <h4 className="text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#224F9F] group-hover:text-[#003B73] transition-colors truncate leading-snug">
          {packageItem.title}
        </h4>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-[#636466] mt-1.5 line-clamp-2 leading-relaxed font-normal min-h-[36px]">
          {packageItem.description || packageItem.subtitle}
        </p>

        {/* Outline Book Now Button */}
        <div className="w-full mt-3.5 sm:mt-4 py-2 sm:py-2.5 px-4 rounded-lg border border-[#224F9F] text-[#224F9F] group-hover:bg-[#224F9F] group-hover:text-white font-semibold text-xs sm:text-sm flex items-center justify-between transition-all duration-200 cursor-pointer shadow-2xs">
          <span>Book Now</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </a>
  );
};

export default PackageCard;
