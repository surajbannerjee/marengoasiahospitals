import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight, X } from 'lucide-react';
import { Container } from '../../common/Container';
import { SPECIALTY_SEARCH_DATA } from '../../../constants/config';
import { cn } from '../../../util/cn';

export const SpecialtySearch = ({ onSelectCondition }) => {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle typing via virtual keyboard buttons (appends letter to form full words or names)
  const handleKeyClick = (letter) => {
    setSelectedLetter(letter);
    setSearchQuery((prev) => prev + letter);
    setIsDropdownOpen(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle manual typing in input
  const handleInputChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);

    if (val.trim().length > 0) {
      setIsDropdownOpen(true);
      const firstChar = val.trim()[0].toUpperCase();
      setSelectedLetter(firstChar);
    } else {
      setIsDropdownOpen(false);
      setSelectedLetter('');
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setSelectedLetter('');
    setIsDropdownOpen(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSelectDoctor = (doctor) => {
    if (onSelectCondition) {
      onSelectCondition(`${doctor.name} (${doctor.specialty})`);
    }
    setSearchQuery(doctor.name);
    setIsDropdownOpen(false);
  };

  const handleSelectSpecialty = (item) => {
    if (onSelectCondition) {
      onSelectCondition(item);
    }
    setSearchQuery(item);
    setIsDropdownOpen(false);
  };

  // Filter Doctors and Specialties dynamically based on searchQuery
  const cleanQuery = searchQuery.trim().toLowerCase();

  const filteredDoctors = cleanQuery
    ? (SPECIALTY_SEARCH_DATA.doctors || []).filter((doc) => {
      return (
        doc.name.toLowerCase().includes(cleanQuery) ||
        doc.specialty.toLowerCase().includes(cleanQuery) ||
        doc.department.toLowerCase().includes(cleanQuery) ||
        doc.hospital.toLowerCase().includes(cleanQuery)
      );
    })
    : [];

  const filteredSpecialties = cleanQuery
    ? Object.entries(SPECIALTY_SEARCH_DATA.dictionary).flatMap(([letter, list]) =>
      list.filter((item) => item.toLowerCase().includes(cleanQuery))
    )
    : [];

  const hasResults = filteredDoctors.length > 0 || filteredSpecialties.length > 0;

  // Exact 3 rows x 8 columns keyboard layout matching the reference design
  const keyboardRows = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    ['I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X'],
  ];

  return (
    <section className="py-12 sm:py-16 bg-white" ref={containerRef}>
      <Container>
        {/* Main Ice-Blue Search Card */}
        <div className="rounded-[2rem] sm:rounded-3xl bg-[#EEF5FB] border border-sky-100/80 p-3 sm:p-6 md:p-8 xl:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Left Column: Heading, Subtitle & Search Bar with Bottom Dropdown */}
            <div className="space-y-6">
              <div className='md:text-left text-center'>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#10477A] tracking-tight leading-[1.2]">
                  Search by Specialty,<br className="hidden sm:inline" /> Condition or Treatment
                </h2>
                <p className="text-sm sm:text-base text-[#5B738B] mt-3 leading-relaxed max-w-lg">
                  Search by doctor, specialty, condition, treatment or<br className="hidden sm:inline" /> procedure to quickly connect with the care you need
                </p>
              </div>

              {/* Search input container with anchored real-time dropdown */}
              <div className="relative w-full max-w-xl">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onFocus={() => {
                      if (searchQuery.trim().length > 0) {
                        setIsDropdownOpen(true);
                      }
                    }}
                    placeholder="Search for doctors, specialties..."
                    className="w-full bg-white text-slate-800 text-sm sm:text-base pl-4 sm:pl-5 pr-11 py-3 sm:py-3.5 rounded-[8px] shadow-none border-none focus:outline-none! focus:ring-none! placeholder:text-slate-400 font-medium"
                  />
                  {searchQuery ? (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="absolute right-10 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer transition-colors"
                      title="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : null}
                  <Search className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                {/* Instant Search Dropdown - Opens on top of input on mobile to prevent covering the keyboard, and below input on desktop */}
                {isDropdownOpen && searchQuery.trim().length > 0 && (
                  <div className="absolute left-0 right-0 bottom-full mb-2 md:bottom-auto md:top-full md:mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-in fade-in-50 duration-150">
                    <div className="max-h-60 sm:max-h-72 overflow-y-auto divide-y divide-slate-100 py-1">

                      {/* Doctors Section */}
                      {filteredDoctors.length > 0 && (
                        <div className="py-2">
                          <div className="px-5 py-1 text-xs font-bold text-[#0088CC] uppercase tracking-wider">
                            Doctors
                          </div>
                          <div className="mt-1">
                            {filteredDoctors.map((doc) => (
                              <div
                                key={doc.name}
                                onClick={() => handleSelectDoctor(doc)}
                                className="px-5 py-2.5 hover:bg-sky-50/80 cursor-pointer transition-colors duration-150 flex items-center justify-between group"
                              >
                                <div>
                                  <div className="text-sm font-bold text-slate-800 group-hover:text-[#003B73] transition-colors">
                                    {doc.name}
                                  </div>
                                  <div className="text-xs text-slate-500 font-medium">
                                    {doc.specialty}
                                  </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0088CC] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Specialties & Treatments Section */}
                      {filteredSpecialties.length > 0 && (
                        <div className="py-2">
                          <div className="px-5 py-1 text-xs font-bold text-[#0088CC] uppercase tracking-wider">
                            Specialties & Treatments
                          </div>
                          <div className="mt-1">
                            {filteredSpecialties.map((item) => (
                              <div
                                key={item}
                                onClick={() => handleSelectSpecialty(item)}
                                className="px-5 py-2.5 hover:bg-sky-50/80 cursor-pointer transition-colors duration-150 flex items-center justify-between group"
                              >
                                <span className="text-sm font-medium text-slate-700 group-hover:text-[#003B73] transition-colors">
                                  {item}
                                </span>
                                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0088CC] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* No Results Found */}
                      {!hasResults && (
                        <div className="px-5 py-8 text-center text-sm text-slate-500">
                          <p className="font-semibold text-slate-700">No matches found for "{searchQuery}"</p>
                          <p className="text-xs text-slate-400 mt-1">Try searching another doctor or specialty name.</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Exact Keyboard Design Matching User Reference Image */}
            <div className="bg-[#1A549F] rounded-lg p-3 sm:p-4 lg:p-6 text-white shadow-lg border border-[#1d5ca8]">
              <div className="space-y-3 sm:space-y-3.5">
                {keyboardRows.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-8 gap-2 sm:gap-2 md:gap-3">
                    {row.map((letter) => {
                      const isSelected = selectedLetter === letter;
                      return (
                        <button
                          key={letter}
                          type="button"
                          onClick={() => handleKeyClick(letter)}
                          className={cn(
                            'aspect-square w-full rounded-[8px] md:rounded-xl text-[14px] sm:text-base font-medium flex items-center border-2! border-white/40! justify-center transition-all duration-150 cursor-pointer select-none backdrop-blur-sm',
                            'bg-white/15 hover:bg-white/25 active:scale-95 text-white',
                            'border border-white/20 shadow-[inset_5px_-5px_15px_rgba(255,255,255,0.35),_5px_5px_5px_rgba(0,0,0,0.12)]',
                            isSelected &&
                            'bg-white/35 text-white font-bold border-2! border-white/40! ring-2 ring-white/50 shadow-[inset_5px_-5px_15px_rgba(255,255,255,0.35),_5px_5px_5px_rgba(0,0,0,0.12)] scale-105'
                          )}
                        >
                          {letter}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default SpecialtySearch;
