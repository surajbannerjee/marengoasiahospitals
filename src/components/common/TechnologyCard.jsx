import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../util/cn';

export const TechnologyCard = ({ technology, onClick, className = '' }) => {
  return (
    <div
      onClick={() => onClick && onClick(technology)}
      className={cn(
        'group flex flex-col justify-between w-full select-none cursor-pointer',
        className
      )}
    >

      {/* Technology Image */}
      <div className="w-full h-full aspect-square flex items-center justify-center overflow-hidden rounded-xl">
        <img
          src={technology.image}
          alt={technology.title}
          className="h-full w-full object-contain transition-transform duration-500 ease-out"
        />
      </div>

      {/* 2. Text & Link Area Below the Notched Box */}
      <div className="flex flex-col text-left pt-3.5 sm:pt-4 px-1">
        {/* Technology Title */}
        <h4 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-[#224F9F] group-hover:text-[#003B73] transition-colors leading-snug">
          {technology.title}
        </h4>

        {/* Description */}
        <p className="text-xs sm:text-[13px] text-[#636466] mt-1.5 line-clamp-2 leading-relaxed font-normal">
          {technology.description || technology.subtitle}
        </p>

        {/* Read More Link */}
        <div className="flex items-center mt-2.5 sm:mt-3">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13.5px] font-medium text-[#2563EB] group-hover:text-[#003B73] transition-colors">
            Read More
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
