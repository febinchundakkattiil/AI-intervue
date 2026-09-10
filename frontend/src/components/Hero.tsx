import React from 'react';
import { Play, Upload, Video, Sparkles, BarChart2, CheckCircle } from 'lucide-react';

interface HeroProps {
  isDark?: boolean;
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
  onUploadResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isDark = true,
  onGetStarted,
  onWatchDemo,
  onUploadResume,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10 mb-6 sm:mb-8 transition-colors duration-300">
      {/* Outer Rounded Hero Card Container */}
      <div
        className={`relative rounded-[32px] sm:rounded-[42px] overflow-hidden transition-all duration-300 ${
          isDark
            ? 'bg-[#0f172a]/95 backdrop-blur-xl border border-slate-800/80 shadow-[0_24px_70px_-15px_rgba(0,0,0,0.6)]'
            : 'bg-white border border-slate-100/90 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[540px] lg:min-h-[580px]">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div
            className={`lg:col-span-5 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-center z-10 transition-colors duration-300 ${
              isDark ? 'bg-[#0f172a]' : 'bg-white'
            }`}
          >
            {/* Pill Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold w-fit mb-7 shadow-xs select-none ${
                isDark
                  ? 'bg-blue-950/60 border border-blue-800/50 text-blue-400'
                  : 'bg-[#f0f7ff] border border-blue-100 text-[#0080ff]'
              }`}
            >
              <span className="text-amber-400 font-bold text-sm leading-none">✦</span>
              <span>AI-Powered Interview Practice</span>
            </div>

            {/* Main Headline - exact line breaks */}
            <h1
              className={`text-4xl sm:text-5xl xl:text-[56px] font-black tracking-tight leading-[1.08] mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Practice Today. <br />
              <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent inline-block mt-1">
                Get Hired
              </span> <br />
              <span className="bg-gradient-to-r from-[#0072ff] to-[#8a2be2] bg-clip-text text-transparent inline-block mt-1">
                Tomorrow.
              </span>
            </h1>

            {/* Sub-tagline */}
            <p
              className={`text-base sm:text-lg font-normal mb-8 leading-relaxed ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Real interviews. Real feedback. Real opportunities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onGetStarted}
                className="px-8 py-3.5 rounded-2xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#8a2be2] shadow-md shadow-blue-500/20 hover:shadow-xl hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Get Started
              </button>

              {/* Watch Demo Button */}
              <button
                type="button"
                onClick={onWatchDemo}
                className={`group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-[15px] font-semibold transition-all duration-200 cursor-pointer shadow-xs ${
                  isDark
                    ? 'text-slate-200 bg-slate-800/80 border border-slate-700/80 hover:bg-slate-750 hover:border-slate-600'
                    : 'text-slate-800 bg-white border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-[#0080ff] group-hover:scale-105 flex items-center justify-center text-white transition-transform">
                  <Play size={11} className="fill-white ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Direct Resume Upload Prompt */}
            <div
              className={`text-xs sm:text-sm flex items-center gap-1.5 select-none ${
                isDark ? 'text-slate-400' : 'text-slate-400'
              }`}
            >
              <span>Have a resume ready?</span>
              <button
                type="button"
                onClick={onUploadResume}
                className="text-[#38bdf8] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Upload size={14} className="stroke-[2.5]" />
                <span>Upload Resume directly</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Image & Floating Badges */}
          <div
            className={`lg:col-span-7 relative min-h-[420px] sm:min-h-[500px] lg:min-h-full w-full overflow-hidden ${
              isDark ? 'bg-slate-900' : 'bg-slate-100'
            }`}
          >
            {/* Candidate Image - aligned left so the cup is fully visible */}
            <img
              src="/hero-candidate.jpg"
              alt="Candidate practicing AI interview"
              className="w-full h-full object-cover object-[0%_bottom] select-none"
              loading="eager"
            />

            {/* Subtle fade positioned strictly before the cup on the far-left edge */}
            <div
              className={`hidden lg:block absolute inset-y-0 left-0 w-12 pointer-events-none ${
                isDark
                  ? 'bg-gradient-to-r from-[#0f172a] via-[#0f172a]/50 to-transparent'
                  : 'bg-gradient-to-r from-white via-white/40 to-transparent'
              }`}
            />

            {/* Stacked Floating Badges Overlay (Top-Right) - Clean badges without background boxes */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-10 flex flex-col gap-4 z-20 select-none">
              
              {/* Badge 1: Mock Interviews */}
              <div className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-[-2px]">
                <div className="w-8 h-8 rounded-full bg-[#00b4db] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <Video size={16} />
                </div>
                <span className={`text-[14px] font-semibold ${
                  isDark ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : 'text-slate-800'
                }`}>
                  Mock Interviews
                </span>
              </div>

              {/* Badge 2: AI Feedback */}
              <div className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-[-2px]">
                <div className="w-8 h-8 rounded-full bg-[#8a2be2] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <Sparkles size={16} />
                </div>
                <span className={`text-[14px] font-semibold ${
                  isDark ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : 'text-slate-800'
                }`}>
                  AI Feedback
                </span>
              </div>

              {/* Badge 3: Track Progress */}
              <div className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-[-2px]">
                <div className="w-8 h-8 rounded-full bg-[#0072ff] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <BarChart2 size={16} />
                </div>
                <span className={`text-[14px] font-semibold ${
                  isDark ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : 'text-slate-800'
                }`}>
                  Track Progress
                </span>
              </div>

              {/* Badge 4: Get Hired */}
              <div className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-[-2px]">
                <div className="w-8 h-8 rounded-full bg-[#00b894] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <CheckCircle size={16} />
                </div>
                <span className={`text-[14px] font-semibold ${
                  isDark ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]' : 'text-slate-800'
                }`}>
                  Get Hired
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
