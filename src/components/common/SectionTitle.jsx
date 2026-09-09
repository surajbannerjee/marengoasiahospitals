import React from 'react';
import { cn } from '../../util/cn';

export const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  light = false,
}) => {
  const alignmentClasses = {
    center: 'text-center mx-auto items-center',
    left: 'text-left items-start',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col mb-10 sm:mb-14 max-w-3xl', alignmentClasses[align], className)}>

      <h2
        className={cn(
          'text-[20px] min-[360px]:text-[22px] font-bold leading-tight tracking-[0%] text-[#0258B9] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[42px] 2xl:text-[44px] 3xl:text-[52px] 4k:text-[62px]',
          light ? 'text-white' : 'text-[#003B73]'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            'text-[14px] min-[360px]:text-[14px] font-normal leading-tight tracking-[0%] sm:text-[14px] md:text-[15px] lg:text-[15.5px] xl:text-[16px] 3xl:text-[20px] 4k:text-[24px]',
            light ? 'text-slate-200' : 'text-slate-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
