import React from 'react';
import { motion } from 'motion/react';
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
      <motion.button
        whileHover={isBeginning ? undefined : { scale: 1.1 }}
        whileTap={isBeginning ? undefined : { scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
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
      </motion.button>

      <motion.button
        whileHover={isEnd ? undefined : { scale: 1.1 }}
        whileTap={isEnd ? undefined : { scale: 0.92 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
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
      </motion.button>
    </div>
  );
};

export default SliderNavigation;
