import React from 'react';

export default function Footer() {
  return (
    <footer id="about" className="mt-12 border-t border-white/10 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>
            Built for exploring Hacker News with a modern, security-inspired UI. This site uses the public HN API.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://news.ycombinator.com/" target="_blank" rel="noreferrer" className="hover:text-white transition">Hacker News</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
