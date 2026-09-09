import React from 'react';
import { MapPin, Phone, Building2, ArrowRight, Bed } from 'lucide-react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { HOSPITALS_DATA } from '../../../constants/config';
import { Card } from '../../common/Card';

export const OurHospitals = () => {
  return (
    <section id="hospitals" className="py-12 sm:py-16 bg-white">
      <Container>
        {/* Section Header */}
        <SectionTitle
          badge="Network of Care"
          title="Our Hospitals"
          subtitle="Modern multi-speciality healthcare infrastructure accessible across major metropolitan centers"
          align="center"
        />

        {/* 8-Card Grid (4 cols on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOSPITALS_DATA.map((hosp) => (
            <Card
              key={hosp.id}
              className="flex flex-col justify-between overflow-hidden border border-slate-200 hover:border-sky-300 hover:shadow-xl group bg-white"
            >
              <div>
                {/* Hospital Building Photo */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={hosp.image}
                    alt={hosp.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 shadow-sm">
                    <MapPin className="w-3 h-3 text-[#38BDF8]" />
                    <span>{hosp.city}</span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-slate-800 px-2 py-0.5 rounded text-[10px] font-bold shadow-xs">
                    {hosp.beds}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[#003B73] transition-colors mb-1 line-clamp-1">
                    {hosp.name}
                  </h3>
                  <div className="text-xs text-slate-500 line-clamp-1 mb-3">
                    {hosp.address}
                  </div>

                  <div className="text-[11px] text-[#0284C7] bg-sky-50 p-2 rounded-lg font-medium line-clamp-2 mb-3">
                    <strong>Key Specialties:</strong> {hosp.specialties}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <a href={`tel:${hosp.phone}`} className="hover:text-[#003B73]">
                      {hosp.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* View Hospital CTA */}
              <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#003B73] group-hover:text-[#0284C7]">
                <span>View Hospital Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurHospitals;
