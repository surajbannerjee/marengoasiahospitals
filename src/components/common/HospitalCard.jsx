import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../util/cn';

export const HospitalCard = ({ hospital, onClick, className = '' }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={() => onClick && onClick(hospital)}
      className={cn(
        'group flex flex-col justify-between w-full select-none cursor-pointer',
        className
      )}
    >
      {/* Hospital Image Card */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
        <img
          src={hospital.image}
          alt={hospital.name || hospital.city}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Card Bottom Area: View More on Left & City Name on Right */}
      <div className="flex sm:items-center items-start sm:flex-row flex-col-reverse sm:justify-between justify-center pl-5 sm:pl-10 pr-3 mt-1">
        {/* Left: View More */}
        <div className="flex items-center gap-1 text-[12px] max-[360px]:text-[10px] sm:text-[13px] text-[#636466] font-bold group-hover:text-[#003B73] transition-colors">
          <span>View More</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Right: Hospital City Name */}
        <h4 className="text-[14px] max-[360px]:text-[12px] sm:text-[17px] md:text-[18px] font-bold text-[#224F9F] group-hover:text-[#003B73] transition-colors tracking-tight">
          {hospital.city}
        </h4>
      </div>
    </motion.div>
  );
};

export default HospitalCard;
