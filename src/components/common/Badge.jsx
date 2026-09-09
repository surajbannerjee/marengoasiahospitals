import React from 'react';
import { cn } from '../../util/cn';

export const Badge = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
}) => {
  const variants = {
    blue: 'bg-sky-100 text-sky-800 border-sky-200',
    navy: 'bg-[#003B73]/10 text-[#003B73] border-[#003B73]/20',
    orange: 'bg-orange-100 text-orange-800 border-orange-200',
    green: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    red: 'bg-red-100 text-red-800 border-red-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-semibold',
    lg: 'text-sm px-3.5 py-1.5 font-bold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
