import React from 'react';
import { Users, Award, Building2, ShieldCheck, HeartHandshake, Sparkles, Cpu, FileText } from 'lucide-react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { WHY_CHOOSE_US_DATA } from '../../../constants/config';
import { Card } from '../../common/Card';

const statsIconMap = {
  Users: Users,
  Award: Award,
  Building2: Building2,
  ShieldCheck: ShieldCheck,
};

const pillarIconMap = {
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
  Cpu: Cpu,
  FileText: FileText,
};

export const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        {/* Section Header */}
        <SectionTitle
          badge="The Marengo Difference"
          title={WHY_CHOOSE_US_DATA.heading}
          subtitle={WHY_CHOOSE_US_DATA.subtitle}
          align="center"
        />

        {/* 4 Big Animated Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {WHY_CHOOSE_US_DATA.stats.map((stat) => {
            const Icon = statsIconMap[stat.icon] || ShieldCheck;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center group hover:border-sky-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3 group-hover:bg-[#003B73] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#003B73] tracking-tight group-hover:text-[#0284C7] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* 4 Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_DATA.pillars.map((pillar) => {
            const Icon = pillarIconMap[pillar.icon] || Sparkles;
            return (
              <Card
                key={pillar.title}
                className="p-6 border border-slate-200/70 hover:border-sky-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F37023]/10 text-[#F37023] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
