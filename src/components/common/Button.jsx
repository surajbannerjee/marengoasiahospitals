import React from 'react';
import { cn } from '../../util/cn';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  type = 'button',
  href,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer';

  const variants = {
    primary:
      'bg-[#003B73] hover:bg-[#002D59] text-white shadow-sm hover:shadow focus:ring-[#003B73]/50',
    secondary:
      'bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-sm hover:shadow focus:ring-[#0284C7]/50',
    accent:
      'bg-[#F37023] hover:bg-[#E05D10] text-white shadow-sm hover:shadow focus:ring-[#F37023]/50 font-semibold',
    outline:
      'border-2 border-[#003B73] text-[#003B73] hover:bg-[#003B73] hover:text-white focus:ring-[#003B73]/30',
    outlineAccent:
      'border-2 border-[#F37023] text-[#F37023] hover:bg-[#F37023] hover:text-white focus:ring-[#F37023]/30',
    ghost:
      'text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:ring-slate-300',
    white:
      'bg-white text-[#003B73] hover:bg-slate-50 shadow-sm hover:shadow border border-slate-200 focus:ring-white/50',
    emergency:
      'bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow-red-600/30 focus:ring-red-500 font-bold',
  };

  const sizes = {
    xs: 'text-xs px-2.5 py-1.5 gap-1.5',
    sm: 'text-sm px-3.5 py-2 gap-2',
    md: 'text-sm sm:text-base px-5 py-2.5 gap-2.5',
    lg: 'text-base sm:text-lg px-6 py-3.5 gap-3',
  };

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
