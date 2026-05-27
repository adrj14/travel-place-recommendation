import { Link } from "@tanstack/react-router";
import { Heart, User, Search } from "lucide-react";
import logo from "/src/assets/logo.png";

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/15 bg-white/10 px-5 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300">
        <Link
          to="/"
          className="flex items-center gap-3 text-slate-950 transition hover:scale-[1.02]"
        >
          <img
            src={logo}
            alt="Yatrika"
            className="h-10 w-10 rounded-full border border-white/30 object-cover shadow-sm"
          />
          <span className="font-display text-lg font-Jim_Nightshade">YATRIKA</span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-6 text-sm font-medium text-slate-800/85 md:flex">
          <a
            href="#planner"
            className="transition duration-300 hover:text-slate-950 hover:scale-[1.02]"
          >
            Explore
          </a>
          <a
            href="#categories"
            className="transition duration-300 hover:text-slate-950 hover:scale-[1.02]"
          >
            Destinations
          </a>
          <a
            href="#trending"
            className="transition duration-300 hover:text-slate-950 hover:scale-[1.02]"
          >
            Trending
          </a>
          <a
            href="#map-explorer"
            className="transition duration-300 hover:text-slate-950 hover:scale-[1.02]"
          >
            Map Explorer
          </a>
          <a
            href="#footer"
            className="transition duration-300 hover:text-slate-950 hover:scale-[1.02]"
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-slate-950 transition duration-300 hover:bg-white/20 hover:scale-[1.05]"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-slate-950 transition duration-300 hover:bg-white/20 hover:scale-[1.05]"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-950 transition duration-300 hover:bg-white">
            <User className="h-4 w-4" />
            Sign In
          </button>
        </div>
      </nav>
    </header>
  );
}
