import React, { useEffect, useRef, useState } from 'react';
import { IMAGES } from '../../../constants/images';
import { Container } from '../../common/Container';
import { Search } from 'lucide-react';
import { Button } from '../../common/Button';

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({
    hospitals: [],
    specialties: [],
    doctors: [],
    procedures: [],
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null);

  const searchTimeout = useRef(null);
  const searchContainerRef = useRef(null);
  const inputRef = useRef(null);
  const resultSelectedRef = useRef(false);

  // Live global search using the same Marengo API as the original website
  useEffect(() => {
    const query = searchQuery.trim();

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    if (query.length < 1) {
      setSearchResults({
        hospitals: [],
        specialties: [],
        doctors: [],
        procedures: [],
      });
      setIsSearching(false);
      return;
    }

    // If the user is editing the selected result, clear the previous selection

    searchTimeout.current = setTimeout(async () => {
      try {
        setIsSearching(true);

        const response = await fetch(
          `/api/search/getsearchbystring?searchQuery=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
          throw new Error('Search request failed');
        }

        const result = await response.json();

        if (result.success && result.data) {
          const hospitals = (result.data.hospitallist || [])
            .filter((item) => item && item.checked === true && item.slug)
            .map((item) => ({
              ...item,
              type: 'hospital',
              title: item.title || item.name || 'Hospital',
            }));

          const specialties = [
            ...(result.data.speciality || []),
            ...(result.data.doctors || []).flatMap(
              (doctor) => doctor?.doctorSpeciality || []
            ),
          ]
            .filter((item) => item && item.checked === true && item.title)
            .map((item) => ({
              ...item,
              type: 'specialty',
              title: item.title,
              slug: item.slug || '',
            }));

          const uniqueSpecialties = Array.from(
            new Map(
              specialties
                .filter((item) => item.slug || item.title)
                .map((item) => [
                  (item.slug || item.title).trim().toLowerCase(),
                  item,
                ])
            ).values()
          );

          const doctors = (result.data.doctors || [])
            .filter((item) => item && (item.doctorName || item.title || item.name))
            .map((item) => ({
              ...item,
              type: 'doctor',
              title:
                item.doctorName ||
                item.title ||
                item.name ||
                'Doctor',
            }));

          const procedures = (result.data.procedures || [])
            .filter((item) => item && item.checked === true && item.slug)
            .map((item) => ({
              ...item,
              type: 'procedure',
              title: item.title || 'Procedure',
            }));

          // Filter global search results against the user's actual query
          // so only relevant Doctors, Specialties, Hospitals and Procedures appear.
          const normalizedQuery = query.toLowerCase();

          const filteredHospitals = hospitals.filter((item) =>
            (item.title || item.name || '').toLowerCase().startsWith(normalizedQuery)
          );

          const filteredSpecialties = uniqueSpecialties.filter((item) =>
            (item.title || '').toLowerCase().startsWith(normalizedQuery)
          );

          const filteredDoctors = doctors.filter((item) => {
            const doctorName = (
              item.doctorName ||
              item.title ||
              item.name ||
              ''
            )
              .toLowerCase()
              .replace(/^dr\.?\s+/i, '')
              .trim();

            return doctorName.startsWith(normalizedQuery);
          });

          const filteredProcedures = procedures.filter((item) =>
            (item.title || '').toLowerCase().startsWith(normalizedQuery)
          );

          setSearchResults({
            hospitals: filteredHospitals,
            specialties: filteredSpecialties,
            doctors: filteredDoctors,
            procedures: filteredProcedures,
          });
        } else {
          setSearchResults({
            hospitals: [],
            specialties: [],
            doctors: [],
            procedures: [],
          });
        }
      } catch (error) {
        console.error('Error fetching global search results:', error);
        setSearchResults({
          hospitals: [],
          specialties: [],
          doctors: [],
          procedures: [],
        });
      } finally {
        setIsSearching(false);
      }
    }, 400);

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, [searchQuery]);

  // Close dropdown when clicking outside the search box
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const totalResults =
    searchResults.hospitals.length +
    searchResults.specialties.length +
    searchResults.doctors.length +
    searchResults.procedures.length;

  const getDoctorUrl = (doctor) => {
    if (doctor.newSlug && doctor.specLocation) {
      return `/doctors/${doctor.specLocation}/${doctor.newSlug}`;
    }

    return `/doctor/${doctor.slug || doctor._id}`;
  };

  const getResultUrl = (item) => {
    if (!item) return '';

    if (item.type === 'hospital') {
      return `/hospital/${item.slug}`;
    }

    if (item.type === 'specialty') {
      return `/speciality/${item.slug}`;
    }

    if (item.type === 'procedure') {
      return `/procedure/${item.slug}`;
    }

    if (item.type === 'doctor') {
      return getDoctorUrl(item);
    }

    return '';
  };

  const handleResultClick = (item) => {
    resultSelectedRef.current = true;
    inputRef.current?.blur();
    setSearchQuery(item.title || '');
    setSelectedResult(item);
    setIsDropdownOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (selectedResult) {
      const url = getResultUrl(selectedResult);

      if (url) {
        window.location.href = url;
      }

      return;
    }

    // If user typed manually, use the existing global search page.
    if (query.length >= 1) {
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <section className="relative z-50 flex h-[428px] min-[400px]:h-[428px] sm:h-[70dvh] md:h-[80dvh] lg:h-[90dvh] xl:h-[100dvh] 2xl:h-[100dvh] 3xl:h-[100dvh] 4k:h-[100dvh] w-full flex-col items-center justify-end bg-cover bg-center bg-no-repeat px-4 pb-6 sm:pb-7 md:pb-8 lg:pb-12 xl:pb-16 2xl:pb-20 3xl:pb-20 4k:pb-24 md:px-8 lg:px-12 xl:px-16 3xl:px-[60px] 4k:px-8">
      {/* Background Hero Image with Soft Cinematic Gradients */}
      <div className="absolute inset-0 z-0 md:block hidden">
        <img
          src={IMAGES.hero.home}
          alt="Trusted Care, Every Step - Marengo Asia Hospitals"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
      </div>
      <div className="absolute inset-0 z-0 md:hidden block">
        <img
          src={IMAGES.hero.homeMobile}
          alt="Trusted Care, Every Step - Marengo Asia Hospitals"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
      </div>

      {/* Soft white gradient to improve logo visibility */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(126deg, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.25) 12%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0) 42%)",
        }}
      />

      {/* Hero Content Aligned to Bottom Center */}
      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center text-center space-y-4 sm:space-y-6">
          {/* Main Centered Headline */}
          <h1 className="text-center w-full text-[22px] min-[360px]:text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[68px] 3xl:text-[60px] 4k:text-[64px] font-bold leading-[1.2] text-white [text-shadow:0px_17px_39px_rgba(34,79,159,1)] lg:leading-tight lg:whitespace-nowrap">
            Trusted Care, Every Step
          </h1>

          {/* Search Input and Book Appointment Button Form */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full max-w-[420px] min-[400px]:max-w-[480px] sm:max-w-[560px] md:max-w-[620px] lg:max-w-[700px] xl:max-w-[780px] 2xl:max-w-[80%] 3xl:max-w-[80%] flex-col items-center justify-center gap-2 sm:gap-2.5 md:gap-3 2xl:gap-5 3xl:gap-6 4k:gap-7 sm:flex-row"
          >
            {/* Search Input Box with Magnifying Glass on the Right */}
            <div
              ref={searchContainerRef}
              className="relative z-[9999] w-full min-w-0 flex-1"
            >
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  const value = e.target.value;

                  if (resultSelectedRef.current) {
                    resultSelectedRef.current = false;
                    setSearchQuery(value);
                    setIsDropdownOpen(false);
                    return;
                  }

                  setSearchQuery(value);
                  setSelectedResult(null);
                  setIsDropdownOpen(value.trim().length > 0);
                }}
                placeholder="Find A Doctor, Specialty, Hospital, Treatment or Procedure..."
                className="w-full bg-white text-slate-800 text-sm sm:text-base pl-4 sm:pl-5 pr-11 py-3 sm:py-3.5 rounded-[8px] shadow-xl border border-slate-200/80 focus:outline-none! focus:ring-none! placeholder:text-slate-400 font-medium"
              />

              <button
                type="submit"
                aria-label="Search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#1D4ED8] transition-colors p-1 cursor-pointer"
              >
                <Search className="w-5 h-5" />
              </button>

              {isDropdownOpen && searchQuery.trim().length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-xl shadow-2xl border border-slate-200 z-[9999] overflow-x-hidden max-h-[360px] overflow-y-auto overscroll-contain">
                  {isSearching && (
                    <div className="px-5 py-4 text-sm text-slate-500 text-center">
                      Searching...
                    </div>
                  )}

                  {!isSearching && totalResults > 0 && (
                    <div className="py-2">

                      {searchResults.doctors.length > 0 && (
                        <div>
                          <div className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#034ea1]">
                            Doctors
                          </div>

                          {searchResults.doctors.map((item) => (
                            <button
                              key={`doctor-${item._id || item.slug || item.doctorId}`}
                              type="button"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => handleResultClick(item)}
                              className="w-full px-5 py-2.5 text-left hover:bg-slate-50 transition-colors"
                            >
                              <span className="text-sm font-medium text-slate-700">
                                {item.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {searchResults.specialties.length > 0 && (
                        <div>
                          <div className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#034ea1]">
                            Specialties
                          </div>

                          {searchResults.specialties.map((item) => (
                            <button
                              key={`specialty-${item._id || item.slug || item.title}`}
                              type="button"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => handleResultClick(item)}
                              className="w-full px-5 py-2.5 text-left hover:bg-slate-50 transition-colors"
                            >
                              <span className="text-sm font-medium text-slate-700">
                                {item.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {searchResults.hospitals.length > 0 && (
                        <div>
                          <div className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#034ea1]">
                            Hospitals
                          </div>

                          {searchResults.hospitals.map((item) => (
                            <button
                              key={`hospital-${item._id || item.slug}`}
                              type="button"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => handleResultClick(item)}
                              className="w-full px-5 py-2.5 text-left hover:bg-slate-50 transition-colors"
                            >
                              <span className="text-sm font-medium text-slate-700">
                                {item.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}

                      {searchResults.procedures.length > 0 && (
                        <div>
                          <div className="px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#034ea1]">
                            Treatments & Procedures
                          </div>

                          {searchResults.procedures.map((item) => (
                            <button
                              key={`procedure-${item._id || item.slug}`}
                              type="button"
                              onMouseDown={(e) => e.preventDefault()}
                              onClick={() => handleResultClick(item)}
                              className="w-full px-5 py-2.5 text-left hover:bg-slate-50 transition-colors"
                            >
                              <span className="text-sm font-medium text-slate-700">
                                {item.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {!isSearching && totalResults === 0 && searchQuery.trim().length >= 3 && (
                    <div className="px-5 py-6 text-center text-sm text-slate-500">
                      No matches found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Book Appointment CTA Button */}
            <Button
              variant="primary"
              size="lg"
              type="button"
              onClick={handleSearchSubmit}
              className="w-full sm:w-auto font-bold bg-[#224F9F] hover:bg-[#1E40AF] text-white py-3 sm:py-3.5 px-7 sm:px-8 rounded-[8px] shadow-xl text-sm sm:text-base shrink-0 whitespace-nowrap transition-all duration-200 hover:scale-102 cursor-pointer"
            >
              Book Appointment
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
