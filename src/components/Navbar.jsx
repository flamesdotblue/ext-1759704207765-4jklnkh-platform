import React from 'react';
import { Shield, Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-400 ring-1 ring-inset ring-emerald-400/20">
              <Shield className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-tight">Hacker News Radar</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#top" className="hover:text-white transition">Top</a>
            <a href="#new" className="hover:text-white transition">Latest</a>
            <a href="#about" className="hover:text-white transition">About</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10 transition">
            <Rocket className="h-4 w-4" />
            Submit
          </button>
        </div>
      </div>
    </header>
  );
}
