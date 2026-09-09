import React, { useState } from 'react';
import { Search, MapPin, Stethoscope, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { cn } from '../../util/cn';

export const SearchBar = ({ onSearch, className = '', variant = 'hero' }) => {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ query, location });
    }
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={cn('relative w-full max-w-xs', className)}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search doctors, treatments..."
          className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0284C7]/50 focus:border-[#0284C7] shadow-sm"
        />
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'w-full max-w-3xl bg-white rounded-2xl shadow-xl p-2 sm:p-2.5 border border-slate-100/80 flex flex-col sm:flex-row items-center gap-2',
        className
      )}
    >
      {/* Search text input */}
      <div className="relative flex-1 w-full flex items-center">
        <Search className="w-5 h-5 text-slate-400 absolute left-3.5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by Doctor, Hospital, Specialty, or Treatment..."
          className="w-full pl-11 pr-4 py-3 text-sm sm:text-base text-slate-800 placeholder-slate-400 bg-transparent focus:outline-none"
        />
      </div>

      <div className="hidden sm:block w-px h-8 bg-slate-200" />

      {/* Location Selector */}
      <div className="relative w-full sm:w-48 flex items-center">
        <MapPin className="w-4 h-4 text-[#0284C7] absolute left-3.5" />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full pl-9 pr-8 py-3 text-xs sm:text-sm text-slate-700 bg-transparent focus:outline-none appearance-none cursor-pointer"
        >
          <option value="all">All Locations</option>
          <option value="ahmedabad">Ahmedabad</option>
          <option value="gurgaon">Gurugram</option>
          <option value="faridabad">Faridabad</option>
          <option value="surat">Surat</option>
          <option value="kolkata">Kolkata</option>
          <option value="noida">Noida</option>
          <option value="delhi">Delhi NCR</option>
        </select>
      </div>

      {/* Search Button */}
      <Button
        type="submit"
        variant="secondary"
        size="md"
        icon={ArrowRight}
        iconPosition="right"
        className="w-full sm:w-auto px-6 py-3 shrink-0 rounded-xl"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
