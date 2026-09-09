import React from 'react';
import { Plane, FileText, Globe, ShieldCheck, CheckCircle2, ArrowRight, UserPlus } from 'lucide-react';
import { Container } from '../../common/Container';
import { Button } from '../../common/Button';
import { INTERNATIONAL_PATIENTS_DATA } from '../../../constants/config';
import { IMAGES } from '../../../constants/images';

export const InternationalPatients = ({ onOpenAppointment }) => {
  return (
    <section id="international" className="py-12 sm:py-16 bg-[#F0F6FA] relative overflow-hidden border-y border-slate-200/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Heading, Flags, Description, CTAs, Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-[#003B73] mb-3">
                <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Global Patient Services</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003B73] tracking-tight">
                {INTERNATIONAL_PATIENTS_DATA.heading}
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#0284C7] to-[#F37023] rounded-full my-3" />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {INTERNATIONAL_PATIENTS_DATA.description}
              </p>
            </div>

            {/* Country Flag Badges Carousel/Grid */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Global Patient Regions:
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
                {INTERNATIONAL_PATIENTS_DATA.countries.map((c) => (
                  <div
                    key={c.code}
                    className="flex flex-col items-center gap-1.5 p-2 bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-sky-300 hover:scale-105 transition-all cursor-pointer group"
                  >
                    <img
                      src={c.image}
                      alt={c.name}
                      className="w-7 h-7 rounded-full shadow-2xs object-cover"
                    />
                    <span className="text-[11px] font-semibold text-slate-700 group-hover:text-[#003B73] text-center truncate w-full">
                      {c.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                size="md"
                icon={Plane}
                onClick={onOpenAppointment}
                className="shadow-md shadow-sky-900/10"
              >
                Plan Your Medical Visit
              </Button>
              <Button
                variant="outline"
                size="md"
                icon={FileText}
                onClick={onOpenAppointment}
              >
                Get a Free Medical Opinion & Quote
              </Button>
            </div>

            {/* Bottom 3 Big Stats */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              {INTERNATIONAL_PATIENTS_DATA.stats.map((stat) => (
                <div key={stat.label} className="text-left">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#003B73]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive World Map Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-200/80 relative overflow-hidden group">
              {/* Map Title Tag */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Global Patient Network Map
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-full">
                  30+ International Desks
                </span>
              </div>

              {/* Map SVG */}
              <div className="relative w-full aspect-2/1 flex items-center justify-center">
                <img
                  src={IMAGES.common.worldMap}
                  alt="Marengo Asia Hospitals International Patient Route Map"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Highlights Feature Bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Free Visa Assistance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Airport Transfers & Guest House</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Multilingual Translators</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Tele-Consultation Follow-ups</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InternationalPatients;
