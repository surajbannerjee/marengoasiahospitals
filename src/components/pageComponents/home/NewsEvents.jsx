import React from 'react';
import { Calendar, ArrowRight, Newspaper, ChevronRight } from 'lucide-react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { NEWS_AND_EVENTS } from '../../../constants/config';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

export const NewsEvents = () => {
  const featuredNews = NEWS_AND_EVENTS.find((n) => n.isFeatured) || NEWS_AND_EVENTS[0];
  const sideNews = NEWS_AND_EVENTS.filter((n) => !n.isFeatured);

  return (
    <section id="news" className="py-12 sm:py-16 bg-white">
      <Container>
        {/* Section Header */}
        <SectionTitle
          badge="Press & Updates"
          title="News & Events"
          subtitle="Latest clinical milestones, academic conferences, hospital expansions, and recognitions"
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 1 Big Featured Story */}
          <div className="lg:col-span-6 flex">
            <Card className="flex flex-col justify-between overflow-hidden border border-slate-200 hover:border-sky-300 w-full group">
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="blue" className="bg-white/90 backdrop-blur-sm font-bold shadow-sm">
                      {featuredNews.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0284C7] mb-2.5">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredNews.date}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 group-hover:text-[#003B73] transition-colors mb-3 leading-snug">
                    {featuredNews.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {featuredNews.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between text-sm font-bold text-[#003B73] group-hover:text-[#0284C7]">
                <span>Read Full Press Release</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Card>
          </div>

          {/* Right: 4 Smaller News Cards (2x2 Grid) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sideNews.map((item) => (
              <Card
                key={item.id}
                className="flex flex-col justify-between p-4 sm:p-5 border border-slate-200 hover:border-sky-200 group"
              >
                <div>
                  <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden mb-3.5 bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/95 text-[#003B73] shadow-xs">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mb-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>{item.date}</span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#003B73] line-clamp-2 leading-snug transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center text-xs font-bold text-[#0284C7] group-hover:text-[#003B73]">
                  <span>Read Story</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewsEvents;
