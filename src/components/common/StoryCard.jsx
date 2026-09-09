import React from 'react';
import { Play, Star, Smile, SmilePlus, Award, HeartHandshake, Sparkles, Heart } from 'lucide-react';
import { cn } from '../../util/cn';

const iconMap = {
  SmilePlus: SmilePlus,
  Smile: Smile,
  Award: Award,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
  Heart: Heart,
};

export const StoryCard = ({ story, onPlayVideo, className = '' }) => {
  const BadgeIcon = iconMap[story.badgeIcon] || Smile;

  if (story.type === 'video') {
    return (
      <div
        className={cn(
          'relative w-full h-[320px] sm:h-[350px] md:h-[370px] rounded-[22px] sm:rounded-3xl overflow-visible select-none group',
          className
        )}
      >
        {/* Main Video Thumbnail Container */}
        <div className="relative w-full h-full rounded-[22px] sm:rounded-3xl overflow-hidden shadow-xs border border-slate-200/60 bg-slate-100">
          <img
            src={story.image}
            alt={story.patientName || 'Patient Video Story'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Dark Overlay on Hover */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />

          {/* Center Circular Play Button */}
          <button
            type="button"
            onClick={() => onPlayVideo && onPlayVideo(story)}
            aria-label={`Watch video story of ${story.patientName}`}
            className="absolute inset-0 m-auto w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-[#1E4E98] shadow-md group-hover:scale-110 group-hover:bg-white transition-all cursor-pointer z-10"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-[#1E4E98] translate-x-0.5" />
          </button>
        </div>

        {/* Floating Overlapping Circular Badge on the Right */}
        <div className="absolute -right-3.5 sm:-right-4.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-slate-100/90 flex items-center justify-center text-[#00A896] z-20 group-hover:scale-110 transition-transform">
          <BadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
        </div>
      </div>
    );
  }

  // Quote Card
  return (
    <div
      className={cn(
        'relative w-full h-[320px] sm:h-[350px] md:h-[370px] rounded-[22px] sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between select-none shadow-xs border border-slate-100/80 transition-shadow',
        className
      )}
      style={{ backgroundColor: story.cardBg || '#FFF9E6' }}
    >
      <div>
        {/* 5 Solid Blue Stars */}
        <div className="flex items-center gap-1 text-[#0258B9] mb-3 sm:mb-4">
          {Array.from({ length: story.rating || 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-[#0258B9]" />
          ))}
        </div>

        {/* Quote Paragraph */}
        <p className="text-xs sm:text-[13px] md:text-[13.5px] text-[#475569] leading-relaxed font-normal">
          {story.quote}
        </p>
      </div>

      {/* Author Name */}
      <div className="text-xs sm:text-sm font-bold text-[#334E68] mt-3">
        -{story.patientName}
      </div>

      {/* Floating Overlapping Circular Badge on the Right */}
      <div className="absolute -right-3.5 sm:-right-4.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-slate-100/90 flex items-center justify-center text-[#00A896] z-20 hover:scale-110 transition-transform">
        <BadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
      </div>
    </div>
  );
};

export default StoryCard;
