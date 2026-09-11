import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { cn } from '../../util/cn';

export const BlogCard = ({ blog, onClick, className = '' }) => {
  return (
    <div
      onClick={() => onClick && onClick(blog)}
      className={cn(
        'group flex flex-col justify-between w-full select-none cursor-pointer',
        className
      )}
    >

      {/* Blog Image Inside */}
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Date situated in the bottom-right notch step */}
      <div className="flex justify-end items-center -mt-3 sm:-mt-3 lg:-mt-7 mb-0 pr-2 text-xs sm:text-[13px] text-[#2563EB] font-medium gap-1.5">
        <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
        <span>{blog.date}</span>
      </div>

      {/* Text & Link Area Below the Notched Box */}
      <div className="flex flex-col text-left pt-2 sm:pt-5 px-1">
        {/* Blog Title */}
        <h4 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-[#224F9F] group-hover:text-[#003B73] transition-colors leading-snug line-clamp-1">
          {blog.title}
        </h4>

        {/* Read More Link */}
        <div className="flex items-center mt-2.5 sm:mt-3">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-[13.5px] font-medium text-[#2563EB] group-hover:text-[#003B73] transition-colors">
            Read More
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
