import React, { useState } from 'react';
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

const getEmbedUrl = (url) => {
  if (!url) return 'https://www.youtube.com/embed/Bv-J4XSRLx4?autoplay=1';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const videoId = match && match[2].length === 11 ? match[2] : null;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
};

const renderBadge = (badge) => {
  if (!badge) return null;

  const isImagePath =
    typeof badge === 'string' &&
    (badge.startsWith('/') ||
      badge.includes('.') ||
      badge.startsWith('http') ||
      badge.startsWith('data:'));

  if (isImagePath) {
    return (
      <img
        src={badge}
        alt="Badge"
        className="w-full h-full object-contain pointer-events-none"
      />
    );
  }

  const IconComponent = iconMap[badge] || Smile;
  return <IconComponent className="w-7 h-7 text-[#00A896] stroke-[2]" />;
};

export const StoryCard = ({ story, onPlay, className = '' }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartPlay = () => {
    setIsPlaying(true);
    if (onPlay) {
      onPlay();
    }
  };

  if (story.type === 'video') {
    const videoSrc = getEmbedUrl(story.videoUrl);

    return (
      <div
        className={cn(
          'relative w-full h-[320px] sm:h-[350px] md:h-[370px] rounded-[22px] sm:rounded-3xl overflow-visible select-none group',
          className
        )}
      >
        {/* Main Video / Poster Container */}
        <div className="relative w-full h-full rounded-[22px] sm:rounded-3xl overflow-hidden shadow-xs border border-slate-200/60 bg-slate-900">
          {isPlaying ? (
            <iframe
              src={videoSrc}
              title={story.title || `${story.patientName || 'Patient'} Recovery Story`}
              className="w-full h-full object-cover border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div
              onClick={handleStartPlay}
              className="relative w-full h-full cursor-pointer overflow-hidden"
            >
              {/* Video Poster Image */}
              <img
                src={story.image}
                alt={story.patientName || 'Patient Video Story'}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors" />

              {/* Center Circular Play Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStartPlay();
                }}
                aria-label={`Watch video story of ${story.patientName || 'patient'}`}
                className="absolute inset-0 m-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1E4E98] shadow-lg group-hover:scale-110 group-hover:bg-white transition-all cursor-pointer z-10"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#1E4E98] translate-x-0.5" />
              </button>
            </div>
          )}
        </div>

        {/* Floating Overlapping Circular Badge on the Right */}
        {story.badgeIcon && (
          <div className="absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-slate-100/90 flex items-center justify-center p-1.5 z-20 hover:scale-110 transition-transform overflow-hidden">
            {renderBadge(story.badgeIcon)}
          </div>
        )}
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
      {story.badgeIcon && (
        <div className="absolute -right-8 sm:-right-10 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-md border border-slate-100/90 flex items-center justify-center p-1.5 z-20 hover:scale-110 transition-transform overflow-hidden">
          {renderBadge(story.badgeIcon)}
        </div>
      )}
    </div>
  );
};

export default StoryCard;
