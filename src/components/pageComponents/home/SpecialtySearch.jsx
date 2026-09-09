import React, { useState } from 'react';
import { Search, Heart, Brain, Bone, Activity, Baby, Crosshair, ShieldPlus, ChevronRight, Check } from 'lucide-react';
import { Container } from '../../common/Container';
import { SPECIALTY_SEARCH_DATA } from '../../../constants/config';
import { Button } from '../../common/Button';
import { cn } from '../../../util/cn';

const popularIconMap = {
  Heart: Heart,
  Brain: Brain,
  Bone: Bone,
  ShieldPlus: ShieldPlus,
  Activity: Activity,
  Baby: Baby,
  Crosshair: Crosshair,
};

export const SpecialtySearch = ({ onSelectCondition }) => {
  const [selectedLetter, setSelectedLetter] = useState('C');
  const [searchQuery, setSearchQuery] = useState('');

  const currentConditions = SPECIALTY_SEARCH_DATA.dictionary[selectedLetter] || [];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <Container>
        {/* Main Dual-Pane Search Box */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-sky-100 bg-gradient-to-br from-[#EBF5FF] via-[#F0F8FF] to-[#E6F4FE] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Pane: Search by text and condition listing */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-200/70 text-[#003B73] mb-3">
                  Comprehensive Health Directory
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#003B73] tracking-tight leading-tight">
                  Search by Specialty, Condition or Treatment
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2">
                  Browse through 150+ medical conditions, procedures, and super-specialty departments across Marengo Asia.
                </p>
              </div>

              {/* Search text input */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Angioplasty, Knee Replacement, Asthma, Chemotherapy..."
                  className="w-full pl-11 pr-24 py-3.5 text-sm sm:text-base bg-white rounded-xl border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg"
                >
                  Search
                </Button>
              </div>

              {/* Active Alphabet Filter Listing */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-100 space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                  <span>Specialties starting with letter '{selectedLetter}':</span>
                  <span className="text-[#0284C7] font-semibold">{currentConditions.length} Results</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentConditions.map((item) => (
                    <button
                      key={item}
                      onClick={() => onSelectCondition && onSelectCondition(item)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-sky-50 hover:bg-[#003B73] text-slate-700 hover:text-white text-xs font-medium transition-all duration-200 cursor-pointer shadow-2xs"
                    >
                      <span>{item}</span>
                      <ChevronRight className="w-3 h-3 opacity-60" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Pane: Navy Blue A-Z Alphabet Box */}
            <div className="lg:col-span-6 bg-[#003366] rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-sky-800">
              <div className="text-sm font-bold uppercase tracking-wider text-sky-300 mb-4 flex items-center justify-between">
                <span>Select Alphabet (A - Z)</span>
                <span className="text-xs text-slate-300 font-normal">Click any letter to filter</span>
              </div>

              {/* Grid of A-Z Buttons */}
              <div className="grid grid-cols-7 sm:grid-cols-9 gap-2">
                {SPECIALTY_SEARCH_DATA.letters.map((letter) => {
                  const isSelected = selectedLetter === letter;
                  return (
                    <button
                      key={letter}
                      type="button"
                      onClick={() => setSelectedLetter(letter)}
                      className={cn(
                        'h-10 sm:h-11 rounded-lg text-sm sm:text-base font-bold flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm',
                        isSelected
                          ? 'bg-[#F37023] text-white ring-2 ring-orange-300 scale-105 font-black shadow-orange-500/40 shadow-md'
                          : 'bg-white/10 hover:bg-white/20 text-white/90 hover:text-white border border-white/15 hover:border-white/40'
                      )}
                    >
                      {letter}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                <span>Active: <strong className="text-sky-300">Letter {selectedLetter}</strong></span>
                <span className="text-[11px] text-slate-400">Instant Specialty Index</span>
              </div>
            </div>
          </div>

          {/* Bottom Popular Specialties Bar */}
          <div className="mt-8 pt-6 border-t border-sky-200/60">
            <div className="text-xs font-bold uppercase tracking-wider text-[#003B73] mb-3">
              Popular Specialties:
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {SPECIALTY_SEARCH_DATA.popular.map((item) => {
                const Icon = popularIconMap[item.icon] || Heart;
                return (
                  <button
                    key={item.label}
                    onClick={() => onSelectCondition && onSelectCondition(item.label)}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-[#003B73] text-slate-700 hover:text-white border border-slate-200 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm cursor-pointer group"
                  >
                    <Icon className="w-4 h-4 text-[#0284C7] group-hover:text-[#F37023] transition-colors" />
                    <span>{item.label}</span>
                    <span className="text-[11px] text-slate-400 group-hover:text-slate-200 font-normal">
                      ({item.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SpecialtySearch;
