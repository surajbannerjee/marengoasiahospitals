import React from 'react';
import { cn } from '../../util/cn';

export const IconButton = ({
  icon: Icon,
  label,
  variant = 'default',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  ...props
}) => {
  const variants = {
    default: 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm',
    primary: 'bg-[#003B73] hover:bg-[#002D59] text-white shadow-sm',
    secondary: 'bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-sm',
    orange: 'bg-[#F37023] hover:bg-[#E05D10] text-white shadow-sm',
    ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  };

  const sizes = {
    sm: 'w-8 h-8 p-1.5',
    md: 'w-10 h-10 p-2',
    lg: 'w-12 h-12 p-3',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 disabled:opacity-50 cursor-pointer',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <Icon className="w-full h-full" />
    </button>
  );
};

export default IconButton;
