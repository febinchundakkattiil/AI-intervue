import React from 'react';
import { Navbar } from './components/Navbar';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-500 selection:text-white flex flex-col relative overflow-hidden font-sans">
      {/* Background ambient decorative light orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -right-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Modern Header / Navbar */}
      <Navbar />

      {/* Hero Showcase Container */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-24 max-w-5xl mx-auto text-center z-10">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/50 text-blue-600 text-xs sm:text-sm font-semibold mb-8 shadow-sm backdrop-blur-sm">
          <Sparkles size={16} className="text-blue-500 animate-pulse" />
          <span>Next-Gen AI Mock Interview & Career Coach</span>
        </div>

        {/* Hero headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.15]">
          Master Your Next Tech Interview with{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Real-Time AI
          </span>
        </h1>

        {/* Tagline / Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
          Practice dynamic voice interviews, sharpen live coding in Monaco editor, and get instant ATS resume scoring with actionable feedback.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            type="button"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#8a2be2] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Start Free Mock Interview
            <ArrowRight size={18} />
          </button>
          <button
            type="button"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all duration-200 cursor-pointer"
          >
            Explore Question Bank
          </button>
        </div>

        {/* Feature Highlights Badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>Voice & Audio AI Interviewer</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>Monaco Coding Sandbox</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <span>ATS Resume Optimizer</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
