import React from 'react';
import { cn } from '../../util/cn';

const SIZES = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

export const Container = ({
  children,
  className = '',
  fluid = false,
  size,
  maxWidth,
  width,
  style = {},
  as: Component = 'div',
  ...props
}) => {
  const sizeKey = size || (fluid ? 'full' : undefined);
  const sizeClass = sizeKey && SIZES[sizeKey] ? SIZES[sizeKey] : undefined;

  const isTailwindClass = (val) =>
    typeof val === 'string' && (val.startsWith('max-w-') || val.startsWith('w-'));

  const customClass = isTailwindClass(maxWidth)
    ? maxWidth
    : isTailwindClass(width)
    ? width
    : undefined;

  const customStyle = {
    ...style,
    ...(maxWidth && !isTailwindClass(maxWidth) ? { maxWidth } : {}),
    ...(width && !isTailwindClass(width) ? { width } : {}),
  };

  return (
    <Component
      className={cn(
        'w-full mx-auto px-4 sm:px-[70px]',
        sizeClass || (fluid ? 'max-w-full' : 'max-w-[1520px]'),
        customClass,
        className
      )}
      style={Object.keys(customStyle).length > 0 ? customStyle : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;

