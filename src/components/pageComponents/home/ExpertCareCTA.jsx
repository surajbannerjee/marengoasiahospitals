import React from 'react';
import { Calendar, UserCheck, Phone, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Container } from '../../common/Container';
import { Button } from '../../common/Button';
import { SITE_CONFIG } from '../../../constants/config';

export const ExpertCareCTA = ({ onOpenAppointment }) => {
  return (
    <section className="py-12 sm:py-16 bg-slate-100">
      <Container>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#003B73] via-[#004D99] to-[#0284C7] p-8 sm:p-12 lg:p-14 text-white">
          {/* Subtle background glow motif */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-orange-500/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-sky-200">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>We Are Here For You 24x7</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Looking for Expert Medical Care?
              </h2>

              <p className="text-sm sm:text-base text-slate-100 max-w-2xl leading-relaxed">
                Connect with our renowned super-specialists across 30+ medical departments or visit your nearest Marengo Asia Hospital for compassionate, world-class treatment.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Button
                variant="accent"
                size="lg"
                icon={Calendar}
                onClick={onOpenAppointment}
                className="w-full shadow-lg shadow-orange-500/30"
              >
                Book an Appointment
              </Button>

              <Button
                variant="white"
                size="lg"
                icon={UserCheck}
                href="#doctors"
                className="w-full font-bold"
              >
                Find a Doctor
              </Button>

              <div className="pt-2 text-center text-xs text-sky-200 flex items-center justify-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#FDBA74]" />
                <span>Emergency Helpline: <a href={`tel:${SITE_CONFIG.emergencyNumber}`} className="font-bold text-white hover:underline">{SITE_CONFIG.emergencyNumber}</a></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExpertCareCTA;
