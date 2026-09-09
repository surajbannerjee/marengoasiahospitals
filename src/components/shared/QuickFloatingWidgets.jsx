import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Siren, ArrowUp } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/config';

export const QuickFloatingWidgets = ({ onOpenAppointment }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const widgets = [
    {
      id: 'emergency',
      label: 'Emergency',
      number: '8003090309',
      href: 'tel:8003090309',
      icon: Siren,
      bgColor: 'bg-[#FF3333]',
      hoverColor: 'hover:bg-[#E60000]',
      isPulse: true,
    },
    {
      id: 'helpline',
      label: 'Helpline Support',
      number: '1800-309-5999',
      href: 'tel:18003095999',
      icon: Phone,
      bgColor: 'bg-[#1D4ED8]',
      hoverColor: 'hover:bg-[#1E40AF]',
      isPulse: false,
    },
    {
      id: 'chat',
      label: 'Chat with Us',
      number: '8003090309',
      href: 'https://wa.me/918003090309',
      icon: MessageCircle,
      bgColor: 'bg-[#F97316]',
      hoverColor: 'hover:bg-[#EA580C]',
      isPulse: false,
    },
  ];

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. DESKTOP & TABLET: Fixed Right Edge Floating Stack (Slides Out on Hover) */}
      {/* ========================================================================= */}
      <div className="hidden sm:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-2.5 font-sans pointer-events-none">
        {widgets.map((widget) => {
          const Icon = widget.icon;
          return (
            <a
              key={widget.id}
              href={widget.href}
              target={widget.id === 'chat' ? '_blank' : undefined}
              rel={widget.id === 'chat' ? 'noopener noreferrer' : undefined}
              className={`pointer-events-auto flex items-center gap-3.5 pl-4 pr-5 py-3 rounded-l-2xl ${widget.bgColor} ${widget.hoverColor} text-white shadow-2xl transition-all duration-300 ease-out transform translate-x-[calc(100%-70px)] hover:translate-x-0 cursor-pointer select-none`}
            >
              {/* Icon on Left (always visible in collapsed state) */}
              <div className="w-10 h-10 flex items-center justify-center shrink-0">
                <Icon
                  className={`w-8 h-8 text-white ${widget.isPulse ? 'animate-pulse' : ''
                    }`}
                />
              </div>

              {/* Content on Right (revealed smoothly on hover slide-out) */}
              <div className="flex flex-col justify-center whitespace-nowrap">
                <span className="text-xs font-bold uppercase tracking-wide leading-tight">
                  {widget.label}
                </span>
                <span className="text-xs font-extrabold tracking-wide text-white/95 mt-0.5">
                  {widget.number}
                </span>
              </div>
            </a>
          );
        })}

        {/* Scroll To Top Button (Desktop) */}
        {/* {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="pointer-events-auto mr-3 mt-2 w-10 h-10 rounded-full bg-slate-800/85 hover:bg-slate-900 text-white shadow-lg backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-in fade-in"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )} */}
      </div>

      {/* ========================================================================= */}
      {/* 2. MOBILE: Fixed Sticky Bottom 3-Column Action Bar (Matching 2nd Reference Image) */}
      {/* ========================================================================= */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-900 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] font-sans border-t border-slate-800/40">
        <div className="grid grid-cols-3 text-white text-center">
          {/* Emergency Column */}
          <a
            href="tel:8003090309"
            className="bg-[#FF3333] active:bg-[#E60000] py-2.5 px-1 flex flex-col items-center justify-center transition-colors cursor-pointer"
          >
            <Siren className="w-4 h-4 text-white animate-pulse mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider leading-none">Emergency</span>
            <span className="text-[10px] font-extrabold mt-0.5 tracking-tight">8003090309</span>
          </a>

          {/* Helpline Support Column */}
          <a
            href="tel:18003095999"
            className="bg-[#1D4ED8] active:bg-[#1E40AF] py-2.5 px-1 flex flex-col items-center justify-center transition-colors cursor-pointer border-x border-white/15"
          >
            <Phone className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider leading-none truncate w-full">Helpline Support</span>
            <span className="text-[10px] font-extrabold mt-0.5 tracking-tight truncate w-full">1800-309-5999</span>
          </a>

          {/* Chat with Us Column */}
          <a
            href="https://wa.me/918003090309"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F97316] active:bg-[#EA580C] py-2.5 px-1 flex flex-col items-center justify-center transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-wider leading-none">Chat with Us</span>
            <span className="text-[10px] font-extrabold mt-0.5 tracking-tight">8003090309</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default QuickFloatingWidgets;
