import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#', isActive: true },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

export const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-6 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className="relative bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-100 shadow-[0_10px_35px_-4px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.03)] px-5 sm:px-8 py-3 sm:py-3.5 transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Subtitle */}
          <a
            href="#"
            className="flex items-center gap-3.5 group cursor-pointer select-none"
          >
            {/* SVG Logo Icon matching the custom 'iv' gradient badge in screenshot */}
            <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <svg
                width="38"
                height="38"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-sm"
              >
                <defs>
                  {/* Dot gradient: cyan to royal blue */}
                  <linearGradient id="dotGrad" x1="6" y1="4" x2="16" y2="14" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#00c6ff" />
                    <stop offset="100%" stopColor="#0072ff" />
                  </linearGradient>

                  {/* Dynamic 'v' glyph gradient: cyan to vivid purple */}
                  <linearGradient id="bodyGrad" x1="4" y1="12" x2="32" y2="34" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0072ff" />
                    <stop offset="45%" stopColor="#3b82f6" />
                    <stop offset="75%" stopColor="#7c3aed" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>

                  <linearGradient id="highlightGrad" x1="10" y1="14" x2="26" y2="32" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>

                {/* Dot for 'i' */}
                <circle cx="11" cy="8" r="3.2" fill="url(#dotGrad)" />

                {/* Left stem of 'i' transitioning into bottom sweep */}
                <path
                  d="M8.5 15.5C8.5 14.12 9.62 13 11 13C12.38 13 13.5 14.12 13.5 15.5V23.5C13.5 25.8 15.2 27.8 17.5 28C19.8 28.2 21.8 26.5 22 24.2L22.5 18.5C22.6 17.12 23.8 16.1 25.2 16.2C26.6 16.3 27.6 17.5 27.5 18.9L26.5 25.5C25.8 30.5 21.2 34 16 33.5C11.5 33 8.5 29.2 8.5 24.5V15.5Z"
                  fill="url(#bodyGrad)"
                />

                {/* Right wing/swoosh of 'v' */}
                <path
                  d="M17.5 23L27.8 11.2C28.7 10.2 30.3 10.1 31.3 11C32.3 11.9 32.4 13.5 31.5 14.5L20.8 26.8C19.9 27.8 18.4 27.9 17.4 27C16.5 26.1 16.5 24.2 17.5 23Z"
                  fill="url(#highlightGrad)"
                />
              </svg>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <div className="flex items-center text-[22px] font-bold tracking-[-0.02em] leading-none">
                <span className="text-slate-900 font-extrabold">Inter</span>
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
                  vue
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-400 tracking-tight mt-1 select-none">
                Practice Today. Get Hired Tomorrow.
              </span>
            </div>
          </a>

          {/* Desktop Center Navigation Links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.name);
                  }}
                  className={`group relative text-[15px] font-medium transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-blue-600 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span>{item.name}</span>
                  {/* Underline Indicator */}
                  {isActive && (
                    <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-4 h-[2.5px] bg-blue-600 rounded-full shadow-[0_1px_4px_rgba(37,99,235,0.3)]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action / Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              className="text-[15px] font-medium text-slate-700 hover:text-slate-900 px-3.5 py-2 transition-colors duration-200 cursor-pointer"
            >
              Log in
            </button>
            <button
              type="button"
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-[14px] font-semibold text-white transition-all duration-300 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] cursor-pointer bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#8a2be2] hover:bg-gradient-to-r hover:from-[#00b4db] hover:to-[#9333ea]"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 border-t border-slate-100 flex flex-col gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.name);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </a>
              );
            })}

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                className="w-full text-center py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
              >
                Log in
              </button>
              <button
                type="button"
                className="w-full py-2.5 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#8a2be2] shadow-md shadow-blue-500/20"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
