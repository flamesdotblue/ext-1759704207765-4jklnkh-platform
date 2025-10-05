import React from 'react';
import Spline from '@splinetool/react-spline';
import { Lock, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate" aria-label="Hero">
      <div className="relative h-[72vh] sm:h-[78vh] w-full overflow-hidden">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
      </div>

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto mb-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="w-full rounded-2xl border border-white/10 bg-black/50 p-5 sm:p-8 backdrop-blur">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <Lock className="h-4 w-4" />
              <span className="text-xs font-medium tracking-wide uppercase">Secure Tech • Cyber + Fintech</span>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
              Hacker News, distilled — with a security-first vibe
            </h1>
            <p className="mt-3 text-sm sm:text-base text-white/70 max-w-2xl">
              Track trending stories from Hacker News in a sleek, modern interface. Focus on what matters across cybersecurity, digital identity, and cutting‑edge tech.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a href="#feed" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition">
                Browse Top Stories
              </a>
              <a href="https://news.ycombinator.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">
                Visit HN <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
