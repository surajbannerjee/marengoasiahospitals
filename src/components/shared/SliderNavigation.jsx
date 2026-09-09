import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../util/cn';

export const SliderNavigation = ({
  onPrev,
  onNext,
  isBeginning = false,
  isEnd = false,
  className = '',
}) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        type="button"
        onClick={onPrev}
        disabled={isBeginning}
        aria-label="Previous slide"
        className={cn(
          'w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 shadow-sm transition-all duration-200',
          'hover:bg-[#003B73] hover:text-white hover:border-[#003B73]',
          'disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:cursor-not-allowed cursor-pointer'
        )}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={isEnd}
        aria-label="Next slide"
        className={cn(
          'w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700 shadow-sm transition-all duration-200',
          'hover:bg-[#003B73] hover:text-white hover:border-[#003B73]',
          'disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-slate-700 disabled:cursor-not-allowed cursor-pointer'
        )}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default SliderNavigation;
