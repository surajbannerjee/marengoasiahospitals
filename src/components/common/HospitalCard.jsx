import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../util/cn';

export const HospitalCard = ({ hospital, onClick, className = '' }) => {
  return (
    <div
      onClick={() => onClick && onClick(hospital)}
      className={cn(
        'group flex flex-col justify-between w-full select-none cursor-pointer',
        className
      )}
    >
      {/* Hospital Image Card */}
      <div className="relative w-full aspect-[16/10]">
        <img
          src={hospital.image}
          alt={hospital.name || hospital.city}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Card Bottom Area: View More on Left & City Name on Right */}
      <div className="flex items-center justify-between pl-10">
        {/* Left: View More */}
        <div className="flex items-center gap-1 text-xs sm:text-[13px] text-[#636466] group-hover:text-[#003B73] transition-colors">
          <span>View More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Right: Hospital City Name */}
        <h4 className="text-base sm:text-[17px] md:text-[18px] font-bold text-[#224F9F] group-hover:text-[#003B73] transition-colors tracking-tight">
          {hospital.city}
        </h4>
      </div>
    </div>
  );
};

export default HospitalCard;
