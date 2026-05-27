import React, { useState } from "react";
import heroImg from "@/assets/hero.png";
import { Globe, Calendar, User, Plane, ChevronDown } from "lucide-react";

const regions = ["Asia", "Europe", "Africa", "North America", "South America", "Australia"];
const guestsOptions = ["Solo", "Couple", "Family", "Friends"];

export function Hero() {
  const [selectedRegion, setSelectedRegion] = useState("Africa");
  const [selectedDate, setSelectedDate] = useState("2026-05-28");
  const [selectedGuests, setSelectedGuests] = useState("Couple");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", {
      region: selectedRegion,
      date: selectedDate,
      guests: selectedGuests,
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden font-sans">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Mountain lake travel destination"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Soft Overlay Blends */}
      <div className="absolute inset-0 bg-black/5" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10,20,40,0.1), rgba(10,20,40,0.35))",
        }}
      />

      {/* YATRIKA Background Text - Shifted Higher */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center pt-[10vh]">
        <span className="font-display text-[clamp(5rem,14vw,12rem)] font-semibold uppercase tracking-[0.25em] text-white/80 blur-[1px] select-none">
          YATRIKA
        </span>
      </div>

      {/* Interactive Main Foreground Content Grid */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-16 w-full">
        <form onSubmit={handleSearch} className="w-full flex flex-col gap-4 relative">
          {/* Upper Typography Layout Block - Split Alignment */}
          <div className="relative w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            {/* Left Column: "Explore the Unseen" positioned over the left side of the search box */}
            <div className="shrink-0 text-left md:translate-y-2">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl whitespace-nowrap">
                Explore the Unseen
              </h1>
            </div>

            {/* Right Column: Paragraph placed on the right side, lifted higher up */}
            <div className="relative z-30 text-left md:text-right md:-translate-y-8 max-w-xs md:ml-auto">
              <p className="text-xs md:text-sm leading-relaxed text-gray-200 drop-shadow-sm">
                Discover unique places beyond the tourist path, with carefully planned journeys
                balancing adventure, comfort, and authenticity.
              </p>
            </div>

            {/* FLIPPED ANGULAR CONNECTING LINE WITH ARROWHEAD (Visible on desktop) */}
            {/* Out of the left side of the paragraph, moving left, and dropping into the search bar */}
            <div className="hidden md:block absolute right-[260px] top-[20%] w-[200px] h-[75px] pointer-events-none z-10">
              <svg
                className="w-full h-full text-white/40"
                viewBox="0 0 200 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker
                    id="arrow-left-drop"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="currentColor" />
                  </marker>
                </defs>

                {/* Line draws from right to left, then drops downward */}
                <path
                  d="M 200 10 L 40 10 L 40 68"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                  markerEnd="url(#arrow-left-drop)"
                />
              </svg>
            </div>
          </div>

          {/* COMPACT HIGH-GLASSMORPHISM SEARCH WIDGET CONTAINER */}
          <div className="relative z-20 w-full bg-white/15 backdrop-blur-xl rounded-[24px] shadow-2xl border border-white/25 flex flex-col md:flex-row items-center p-2 gap-1 md:gap-0 select-none">
            {/* CONTINENT / REGION CONTAINER ELEMENT */}
            <div className="relative w-full md:w-[30%] flex items-center justify-between px-4 py-2.5 hover:bg-white/10 rounded-xl transition-all duration-200 group">
              <div className="flex items-center gap-3 w-full">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shrink-0">
                  <Globe size={16} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-200/80 mb-0.5">
                    Continent
                  </span>
                  <select
                    value={selectedRegion}
                    onChange={(e) => setSelectedRegion(e.target.value)}
                    className="block w-full bg-transparent text-sm font-semibold text-white outline-none cursor-pointer appearance-none pr-4"
                  >
                    {regions.map((item) => (
                      <option key={item} value={item} className="text-slate-900">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <ChevronDown
                size={16}
                className="text-gray-300 group-hover:text-white pointer-events-none absolute right-4"
              />
            </div>

            {/* Tight Layout Micro-Divider Line 1 */}
            <div className="hidden md:block w-[1px] h-8 bg-white/20" />

            {/* DATE SELECTOR BLOCK */}
            <div className="relative w-full md:w-[30%] flex items-center justify-between px-4 py-2.5 hover:bg-white/10 rounded-xl transition-all duration-200 group">
              <div className="flex items-center gap-3 w-full">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shrink-0">
                  <Calendar size={16} strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-200/80 mb-0.5">
                    When
                  </span>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="block w-full bg-transparent text-sm font-semibold text-white outline-none cursor-pointer [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            {/* Tight Layout Micro-Divider Line 2 */}
            <div className="hidden md:block w-[1px] h-8 bg-white/20" />

            {/* GUESTS & LIGHTER BLUE DISCOVER BOX */}
            <div className="w-full md:w-[40%] flex flex-col sm:flex-row items-center justify-between pl-4 pr-1.5 py-1 sm:py-0 gap-2 sm:gap-0">
              {/* Guest Options Dropdown */}
              <div className="relative w-full sm:w-auto flex items-center justify-between gap-3 hover:bg-white/10 sm:hover:bg-transparent rounded-xl sm:rounded-none py-1.5 sm:py-0 group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shrink-0">
                    <User size={16} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-gray-200/80 mb-0.5">
                      Guests
                    </span>
                    <select
                      value={selectedGuests}
                      onChange={(e) => setSelectedGuests(e.target.value)}
                      className="block w-full bg-transparent text-sm font-semibold text-white outline-none cursor-pointer appearance-none pr-4"
                    >
                      {guestsOptions.map((item) => (
                        <option key={item} value={item} className="text-slate-900">
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <ChevronDown
                  size={16}
                  className="text-gray-300 group-hover:text-white pointer-events-none absolute right-2 sm:static sm:ml-1"
                />
              </div>

              {/* VIBRANT LIGHTER BLUE ACTION DISCOVER BUTTON */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 active:scale-[0.97] text-white flex items-center justify-center gap-2 px-6 py-3 rounded-[18px] font-semibold text-sm tracking-wide transition-all shadow-lg shadow-sky-500/20"
              >
                <Plane size={16} className="rotate-45" />
                <span>Discover</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
