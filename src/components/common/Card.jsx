import React from 'react';
import { cn } from '../../util/cn';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  onClick,
  ...props
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300',
        hoverEffect && 'hover:shadow-xl hover:-translate-y-1 hover:border-sky-100',
        onClick && 'cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
