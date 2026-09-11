import React from 'react';
import { Container } from '../../common/Container';

export const ExpertCareCTA = ({ onOpenAppointment }) => {
  return (
    <section className="pb-6 min-[360px]:pb-7 min-[400px]:pb-8 sm:pb-9 md:pb-11 lg:pb-14 xl:pb-16 2xl:pb-[80px] 3xl:pb-[70px] 4k:pb-[85px] bg-white relative">
      <Container>
        <div className="bg-[#EDEDED] rounded-xl sm:rounded-2xl px-6 py-6 sm:px-10 sm:py-8 lg:px-12 lg:py-9 flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
          {/* Left Text Content */}
          <div className="flex flex-col text-left">
            <h3 className="text-lg sm:text-xl md:text-[22px] lg:text-[23px] font-bold text-[#224F9F] tracking-tight leading-snug">
              Looking for Expert Medical Care?
            </h3>
            <p className="text-xs sm:text-[13px] md:text-sm text-[#666666] mt-1.5 sm:mt-2 font-normal leading-relaxed">
              Your health matters. That's why we make finding and booking the right doctor easy.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button
              onClick={onOpenAppointment}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-[#224F9F] text-[#224F9F] bg-transparent hover:bg-[#224F9F]/5 font-medium text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Book Appointment
            </button>

            <a
              href="#hospitals"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#224F9F] hover:bg-[#1B3F80] text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer shadow-xs text-center"
            >
              Find Our Hospital
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExpertCareCTA;
