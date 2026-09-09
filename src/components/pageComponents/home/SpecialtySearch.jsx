import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight, X } from 'lucide-react';
import { Container } from '../../common/Container';
import { SPECIALTY_SEARCH_DATA } from '../../../constants/config';
import { cn } from '../../../util/cn';
import { IMAGES } from '../../../constants/images';

export const SpecialtySearch = ({ onSelectCondition }) => {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);
  const inputRef = useRef(null);

  // Close dropdown and empty input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setSearchQuery('');
        setSelectedLetter('');
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
    <section className="pb-6 min-[360px]:pb-7 min-[400px]:pb-8 sm:pb-9 md:pb-11 lg:pb-14 xl:pb-16 2xl:pb-[80px] 3xl:pb-[70px] 4k:pb-[85px] bg-white">
      <Container>
        {/* Main Ice-Blue Search Card */}
        <div ref={containerRef} className="rounded-[2rem] sm:rounded-3xl bg-[#EEF5FB] border border-sky-100/80 p-3 sm:p-6 md:p-6 xl:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Left Column: Heading, Subtitle & Search Bar with Bottom Dropdown */}
            <div className="space-y-6">
              <div className='md:text-left text-center'>
                <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-extrabold text-[#10477A] tracking-tight leading-[1.2]">
                  Search by Specialty,<br className="hidden lg:inline" /> Condition or Treatment
                </h2>
                <p className="text-sm sm:text-base text-[#5B738B] mt-3 leading-relaxed max-w-lg">
                  Search by doctor, specialty, condition, treatment or<br className="hidden lg:inline" /> procedure to quickly connect with the care you need
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
                  <div className="absolute left-0 right-0 bottom-full mb-2 lg:bottom-auto lg:top-full lg:mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-in fade-in-50 duration-150">
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
                            'aspect-square w-full rounded-[8px] md:rounded-xl text-[18px] sm:text-[20px] md:text-[20px] 2lg:text-[24px] font-medium flex items-center border-2! border-white/40! justify-center transition-all duration-150 cursor-pointer select-none backdrop-blur-sm',
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
        {/* What people are searching for area */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          {/* Centered Section Subtitle */}
          <div className="text-center text-xs sm:text-sm font-medium text-slate-500 mb-4 sm:mb-5">
            What people are searching for:
          </div>

          {/* Cards Grid Container - Mapped Buttons with SVG Backgrounds */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
            {[
              {
                id: 'cardiology',
                title: 'Cardiology',
                query: 'Cardiology',
                specialty: 'Cardiology',
                svgType: 'first',
                icon: IMAGES.svgs.cardiology1,
              },
              {
                id: 'neurologist',
                title: 'Neurologist',
                query: 'Neurology',
                specialty: 'Neurology',
                svgType: 'middle',
                icon: IMAGES.svgs.neurologist1,
              },
              {
                id: 'cancer',
                title: 'Cancer',
                query: 'Cancer',
                specialty: 'Oncology',
                svgType: 'middle',
                icon: IMAGES.svgs.oncology1,
              },
              {
                id: 'orthopaedics',
                title: 'Orthopaedics',
                query: 'Orthopaedics',
                specialty: 'Orthopaedics',
                svgType: 'middle',
                icon: IMAGES.svgs.orthopedic1,
              },
              {
                id: 'gastroenterology',
                title: 'Gastroenterology',
                query: 'Gastroenterology',
                specialty: 'Gastroenterology',
                svgType: 'last',
                icon: IMAGES.svgs.gastroenterology1,
              },
            ].map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSearchQuery(item.query);
                  setIsDropdownOpen(true);
                  if (onSelectCondition) onSelectCondition(item.specialty);
                }}
                className="group relative flex items-center px-4 sm:px-5 py-3 sm:py-3.5 min-h-[58px] sm:min-h-[64px] transition-all hover:scale-105 duration-200 cursor-pointer text-left"
              >
                {/* 1. First SVG Background (Cardiology) */}
                {item.svgType === 'first' && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    viewBox="0 0 304 91"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_first_card" fill="white">
                      <path d="M288.379 37.9295C288.379 39.6644 289.396 41.2381 290.979 41.95L301.4 46.6389C302.982 47.3508 304 48.9244 304 50.6594V75.4985C304 77.9334 302.026 79.9072 299.591 79.9072H292.788C290.353 79.9072 288.379 81.8811 288.379 84.3159V85.9692C288.379 88.4041 286.405 90.3779 283.97 90.3779H4.40868C1.97383 90.3779 0 88.4041 0 85.9692V4.4087C0 1.97384 1.97384 0 4.4087 0H283.97C286.405 0 288.379 1.97384 288.379 4.4087V37.9295Z" />
                    </mask>
                    <path
                      d="M288.379 37.9295C288.379 39.6644 289.396 41.2381 290.979 41.95L301.4 46.6389C302.982 47.3508 304 48.9244 304 50.6594V75.4985C304 77.9334 302.026 79.9072 299.591 79.9072H292.788C290.353 79.9072 288.379 81.8811 288.379 84.3159V85.9692C288.379 88.4041 286.405 90.3779 283.97 90.3779H4.40868C1.97383 90.3779 0 88.4041 0 85.9692V4.4087C0 1.97384 1.97384 0 4.4087 0H283.97C286.405 0 288.379 1.97384 288.379 4.4087V37.9295Z"
                      fill="white"
                    />
                    <path
                      d="M301.4 46.6389L301.852 45.6338L301.4 46.6389ZM290.979 41.95L290.526 42.9551L290.979 41.95ZM290.979 41.95L290.526 42.9551L300.948 47.644L301.4 46.6389L301.852 45.6338L291.431 40.9449L290.979 41.95ZM304 50.6594H302.898V75.4985H304H305.102V50.6594H304ZM299.591 79.9072V78.8051H292.788V79.9072V81.0094H299.591V79.9072ZM288.379 84.3159H287.277V85.9692H288.379H289.481V84.3159H288.379ZM283.97 90.3779V89.2758H4.40868V90.3779V91.4801H283.97V90.3779ZM0 85.9692H1.10217V4.4087H0H-1.10217V85.9692H0ZM4.4087 0V1.10217H283.97V0V-1.10217H4.4087V0ZM288.379 4.4087H287.277V37.9295H288.379H289.481V4.4087H288.379ZM283.97 0V1.10217C285.796 1.10217 287.277 2.58255 287.277 4.4087H288.379H289.481C289.481 1.36513 287.014 -1.10217 283.97 -1.10217V0ZM0 4.4087H1.10217C1.10217 2.58256 2.58255 1.10217 4.4087 1.10217V0V-1.10217C1.36513 -1.10217 -1.10217 1.36513 -1.10217 4.4087H0ZM4.40868 90.3779V89.2758C2.58255 89.2758 1.10217 87.7954 1.10217 85.9692H0H-1.10217C-1.10217 89.0128 1.36511 91.4801 4.40868 91.4801V90.3779ZM288.379 85.9692H287.277C287.277 87.7954 285.796 89.2758 283.97 89.2758V90.3779V91.4801C287.014 91.4801 289.481 89.0128 289.481 85.9692H288.379ZM292.788 79.9072V78.8051C289.744 78.8051 287.277 81.2724 287.277 84.3159H288.379H289.481C289.481 82.4898 290.961 81.0094 292.788 81.0094V79.9072ZM304 75.4985H302.898C302.898 77.3247 301.417 78.8051 299.591 78.8051V79.9072V81.0094C302.635 81.0094 305.102 78.5421 305.102 75.4985H304ZM301.4 46.6389L300.948 47.644C302.135 48.1779 302.898 49.3582 302.898 50.6594H304H305.102C305.102 48.4907 303.83 46.5236 301.852 45.6338L301.4 46.6389ZM290.979 41.95L291.431 40.9449C290.244 40.4109 289.481 39.2307 289.481 37.9295H288.379H287.277C287.277 40.0982 288.549 42.0653 290.526 42.9551L290.979 41.95Z"
                      fill="#224F9F"
                      mask="url(#path-1-inside-1_first_card)"
                    />
                  </svg>
                )}

                {/* 2. Middle SVG Background (Neurologist, Cancer, Orthopaedics) */}
                {item.svgType === 'middle' && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    viewBox="0 0 317 91"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id={`path-1-inside-1_mid_${index}`} fill="white">
                      <path d="M300.395 37.9305C300.395 39.6654 301.412 41.2391 302.994 41.951L313.416 46.6399C314.998 47.3517 316.016 48.9254 316.016 50.6604V75.4995C316.016 77.9344 314.042 79.9082 311.607 79.9082H304.803C302.368 79.9082 300.395 81.882 300.395 84.3169V85.9702C300.395 88.4051 298.421 90.3789 295.986 90.3789H16.4243C13.9895 90.3789 12.0156 88.4051 12.0156 85.9702V48.0715C12.0156 46.3365 10.9981 44.7629 9.41588 44.051L2.59974 40.9842C1.01756 40.2723 0 38.6986 0 36.9637V12.1245C0 9.68966 1.97384 7.71582 4.4087 7.71582H8.15772C10.2884 7.71582 12.0156 5.98858 12.0156 3.85791C12.0156 1.72725 13.7429 0 15.8735 0H295.986C298.421 0 300.395 1.97384 300.395 4.4087V37.9305Z" />
                    </mask>
                    <path
                      d="M300.395 37.9305C300.395 39.6654 301.412 41.2391 302.994 41.951L313.416 46.6399C314.998 47.3517 316.016 48.9254 316.016 50.6604V75.4995C316.016 77.9344 314.042 79.9082 311.607 79.9082H304.803C302.368 79.9082 300.395 81.882 300.395 84.3169V85.9702C300.395 88.4051 298.421 90.3789 295.986 90.3789H16.4243C13.9895 90.3789 12.0156 88.4051 12.0156 85.9702V48.0715C12.0156 46.3365 10.9981 44.7629 9.41588 44.051L2.59974 40.9842C1.01756 40.2723 0 38.6986 0 36.9637V12.1245C0 9.68966 1.97384 7.71582 4.4087 7.71582H8.15772C10.2884 7.71582 12.0156 5.98858 12.0156 3.85791C12.0156 1.72725 13.7429 0 15.8735 0H295.986C298.421 0 300.395 1.97384 300.395 4.4087V37.9305Z"
                      fill="white"
                    />
                    <path
                      d="M2.59974 40.9842L3.05198 39.979L2.59974 40.9842ZM9.41588 44.051L8.96365 45.0561L9.41588 44.051ZM313.416 46.6399L313.868 45.6347L313.416 46.6399ZM302.994 41.951L302.542 42.9561L302.994 41.951ZM302.994 41.951L302.542 42.9561L312.964 47.645L313.416 46.6399L313.868 45.6347L303.447 40.9458L302.994 41.951ZM316.016 50.6604H314.913V75.4995H316.016H317.118V50.6604H316.016ZM311.607 79.9082V78.806H304.803V79.9082V81.0104H311.607V79.9082ZM300.395 84.3169H299.292V85.9702H300.395H301.497V84.3169H300.395ZM295.986 90.3789V89.2767H16.4243V90.3789V91.4811H295.986V90.3789ZM12.0156 85.9702H13.1178V48.0715H12.0156H10.9135V85.9702H12.0156ZM9.41588 44.051L9.86812 43.0459L3.05198 39.979L2.59974 40.9842L2.1475 41.9893L8.96365 45.0561L9.41588 44.051ZM0 36.9637H1.10217V12.1245H0H-1.10217V36.9637H0ZM4.4087 7.71582V8.81799H8.15771V7.71582V6.61365H4.4087V7.71582ZM15.8735 0V1.10217H295.986V0V-1.10217H15.8735V0ZM300.395 4.4087H299.292V37.9305H300.395H301.497V4.4087H300.395ZM295.986 0V1.10217C297.812 1.10217 299.292 2.58255 299.292 4.4087H300.395H301.497C301.497 1.36513 299.029 -1.10217 295.986 -1.10217V0ZM12.0156 3.85791H13.1178C13.1178 2.33596 14.3516 1.10217 15.8735 1.10217V0V-1.10217C13.1342 -1.10217 10.9135 1.11853 10.9135 3.85791H12.0156ZM8.15771 7.71582V8.81799C10.8971 8.81799 13.1178 6.59729 13.1178 3.85791H12.0156H10.9135C10.9135 5.37986 9.67967 6.61365 8.15771 6.61365V7.71582ZM0 12.1245H1.10217C1.10217 10.2984 2.58255 8.81799 4.4087 8.81799V7.71582V6.61365C1.36513 6.61365 -1.10217 9.08095 -1.10217 12.1245H0ZM2.59974 40.9842L3.05198 39.979C1.86534 39.4451 1.10217 38.2649 1.10217 36.9637H0H-1.10217C-1.10217 39.1324 0.169775 41.0994 2.1475 41.9893L2.59974 40.9842ZM12.0156 48.0715H13.1178C13.1178 45.9028 11.8458 43.9357 9.86812 43.0459L9.41588 44.051L8.96365 45.0561C10.1503 45.59 10.9135 46.7703 10.9135 48.0715H12.0156ZM16.4243 90.3789V89.2767C14.5982 89.2767 13.1178 87.7964 13.1178 85.9702H12.0156H10.9135C10.9135 89.0138 13.3807 91.4811 16.4243 91.4811V90.3789ZM300.395 85.9702H299.292C299.292 87.7963 297.812 89.2767 295.986 89.2767V90.3789V91.4811C299.029 91.4811 301.497 89.0138 301.497 85.9702H300.395ZM304.803 79.9082V78.806C301.76 78.806 299.292 81.2733 299.292 84.3169H300.395H301.497C301.497 82.4908 302.977 81.0104 304.803 81.0104V79.9082ZM316.016 75.4995H314.913C314.913 77.3257 313.433 78.806 311.607 78.806V79.9082V81.0104C314.651 81.0104 317.118 78.5431 317.118 75.4995H316.016ZM313.416 46.6399L312.964 47.645C314.15 48.1789 314.913 49.3591 314.913 50.6604H316.016H317.118C317.118 48.4917 315.846 46.5246 313.868 45.6347L313.416 46.6399ZM302.994 41.951L303.447 40.9458C302.26 40.4119 301.497 39.2317 301.497 37.9305H300.395H299.292C299.292 40.0992 300.564 42.0662 302.542 42.9561L302.994 41.951Z"
                      fill="#224F9F"
                      mask={`url(#path-1-inside-1_mid_${index})`}
                    />
                  </svg>
                )}

                {/* 3. Last SVG Background (Gastroenterology) */}
                {item.svgType === 'last' && (
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                    viewBox="0 0 305 91"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask id="path-1-inside-1_last_card" fill="white">
                      <path d="M304.2 85.9692C304.2 88.4041 302.226 90.3779 299.792 90.3779H15.4302C12.9953 90.3779 11.0215 88.4041 11.0215 85.9692V47.9677C11.0215 46.2857 10.0644 44.7503 8.55434 44.0095L2.46714 41.0237C0.957044 40.2829 0 38.7475 0 37.0655V12.1235C0 9.68868 1.97384 7.71484 4.4087 7.71484H7.16406C9.29446 7.71484 11.0215 5.98782 11.0215 3.85742C11.0215 1.72703 12.7485 0 14.8789 0H299.792C302.226 0 304.2 1.97384 304.2 4.4087V85.9692Z" />
                    </mask>
                    <path
                      d="M304.2 85.9692C304.2 88.4041 302.226 90.3779 299.792 90.3779H15.4302C12.9953 90.3779 11.0215 88.4041 11.0215 85.9692V47.9677C11.0215 46.2857 10.0644 44.7503 8.55434 44.0095L2.46714 41.0237C0.957044 40.2829 0 38.7475 0 37.0655V12.1235C0 9.68868 1.97384 7.71484 4.4087 7.71484H7.16406C9.29446 7.71484 11.0215 5.98782 11.0215 3.85742C11.0215 1.72703 12.7485 0 14.8789 0H299.792C302.226 0 304.2 1.97384 304.2 4.4087V85.9692Z"
                      fill="white"
                    />
                    <path
                      d="M299.792 90.3779V89.2758H15.4302V90.3779V91.4801H299.792V90.3779ZM11.0215 85.9692H12.1237V47.9677H11.0215H9.91931V85.9692H11.0215ZM8.55434 44.0095L9.03973 43.02L2.95253 40.0341L2.46714 41.0237L1.98176 42.0132L8.06895 44.9991L8.55434 44.0095ZM0 37.0655H1.10217V12.1235H0H-1.10217V37.0655H0ZM4.4087 7.71484V8.81702H7.16406V7.71484V6.61267H4.4087V7.71484ZM14.8789 0V1.10217H299.792V0V-1.10217H14.8789V0ZM304.2 4.4087H303.098V85.9692H304.2H305.302V4.4087H304.2ZM299.792 0V1.10217C301.618 1.10217 303.098 2.58255 303.098 4.4087H304.2H305.302C305.302 1.36513 302.835 -1.10217 299.792 -1.10217V0ZM11.0215 3.85742H12.1237C12.1237 2.33574 13.3572 1.10217 14.8789 1.10217V0V-1.10217C12.1398 -1.10217 9.91931 1.11831 9.91931 3.85742H11.0215ZM7.16406 7.71484V8.81702C9.90317 8.81702 12.1237 6.59653 12.1237 3.85742H11.0215H9.91931C9.91931 5.3791 8.68574 6.61267 7.16406 6.61267V7.71484ZM0 12.1235H1.10217C1.10217 10.2974 2.58255 8.81702 4.4087 8.81702V7.71484V6.61267C1.36513 6.61267 -1.10217 9.07997 -1.10217 12.1235H0ZM2.46714 41.0237L2.95253 40.0341C1.81996 39.4786 1.10217 38.327 1.10217 37.0655H0H-1.10217C-1.10217 39.168 0.0941306 41.0873 1.98176 42.0132L2.46714 41.0237ZM11.0215 47.9677H12.1237C12.1237 45.8652 10.9274 43.9459 9.03973 43.02L8.55434 44.0095L8.06895 44.9991C9.20153 45.5546 9.91931 46.7062 9.91931 47.9677H11.0215ZM15.4302 90.3779V89.2758C13.604 89.2758 12.1237 87.7954 12.1237 85.9692H11.0215H9.91931C9.91931 89.0128 12.3866 91.4801 15.4302 91.4801V90.3779ZM299.792 90.3779V91.4801C302.835 91.4801 305.302 89.0128 305.302 85.9692H304.2H303.098C303.098 87.7954 301.618 89.2758 299.792 89.2758V90.3779Z"
                      fill="#224F9F"
                      mask="url(#path-1-inside-1_last_card)"
                    />
                  </svg>
                )}

                {/* Inner Content Area - z-10 */}
                <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 w-full">
                  {/* Left Blue Icon Badge */}
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-[#1A549F] flex items-center justify-center text-white shrink-0">
                    <img src={item.icon} className='w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10' alt={item.title} />
                  </div>

                  {/* Text Label */}
                  <span className="text-xs sm:text-sm md:text-[14px] xl:text-[15px] font-semibold text-[#636466] transition-colors truncate">
                    {item.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SpecialtySearch;
