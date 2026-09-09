import React from 'react';
import { cn } from '../../util/cn';

export const SectionTitle = ({
  title,
  subtitle,
  badge,
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
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 bg-sky-100 text-sky-800">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight',
          light ? 'text-white' : 'text-[#003B73]'
        )}
      >
        {title}
      </h2>
      {/* Decorative Brand Underline */}
      <div
        className={cn(
          'h-1 w-16 sm:w-20 rounded-full mt-3.5 mb-3 bg-gradient-to-r from-[#0284C7] to-[#F37023]',
          align === 'center' ? 'mx-auto' : ''
        )}
      />
      {subtitle && (
        <p
          className={cn(
            'text-sm sm:text-base lg:text-lg leading-relaxed mt-1 font-normal',
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
