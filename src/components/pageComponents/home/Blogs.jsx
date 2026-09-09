import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, User } from 'lucide-react';
import { Container } from '../../common/Container';
import { SectionTitle } from '../../common/SectionTitle';
import { BLOGS_DATA } from '../../../constants/config';
import { Card } from '../../common/Card';
import { Badge } from '../../common/Badge';

export const Blogs = () => {
  return (
    <section id="blogs" className="py-12 sm:py-16 bg-slate-50">
      <Container>
        {/* Section Header */}
        <SectionTitle
          badge="Health Library"
          title="Medical Insights & Blogs"
          subtitle="Expert advice, health tips, and clinical updates authored by our senior consultants"
          align="center"
        />

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BLOGS_DATA.map((blog) => (
            <Card
              key={blog.id}
              className="flex flex-col justify-between overflow-hidden border border-slate-200/90 hover:border-sky-300 hover:shadow-xl group bg-white"
            >
              <div>
                {/* Blog Image */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="blue" className="bg-white/95 font-bold shadow-xs">
                      {blog.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Meta: Date & Read Time */}
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-2.5">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{blog.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-[#003B73] transition-colors mb-2 line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {blog.excerpt}
                  </p>

                  <div className="text-[11px] font-semibold text-slate-500 pt-3 border-t border-slate-100 flex items-center gap-1.5 truncate">
                    <User className="w-3.5 h-3.5 text-[#003B73] shrink-0" />
                    <span className="truncate">{blog.author}</span>
                  </div>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center justify-between text-xs sm:text-sm font-bold text-[#003B73] group-hover:text-[#0284C7]">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Blogs;
