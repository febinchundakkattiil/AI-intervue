import React from 'react';
import { Play, Upload, Video, Sparkles, BarChart2, CheckCircle } from 'lucide-react';

interface HeroProps {
  onGetStarted?: () => void;
  onWatchDemo?: () => void;
  onUploadResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onGetStarted,
  onWatchDemo,
  onUploadResume,
}) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 sm:mt-6 mb-16">
      {/* Outer Rounded Hero Card Container */}
      <div className="relative bg-white rounded-[32px] sm:rounded-[40px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.02)] border border-slate-100/90 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[540px] lg:min-h-[580px]">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col justify-center z-10 bg-white">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f7ff] border border-blue-100 text-[#0080ff] text-xs font-semibold w-fit mb-7 shadow-xs select-none">
              <span className="text-amber-500 font-bold text-sm leading-none">✦</span>
              <span>AI-Powered Interview Practice</span>
            </div>

            {/* Main Headline - exact line breaks as screenshot */}
            <h1 className="text-4xl sm:text-5xl xl:text-[58px] font-black tracking-tight text-slate-900 leading-[1.08] mb-6">
              Practice Today. <br />
              <span className="text-[#0080ff] inline-block mt-1">Get Hired</span> <br />
              <span className="text-[#7c3aed] inline-block mt-1">Tomorrow.</span>
            </h1>

            {/* Sub-tagline */}
            <p className="text-base sm:text-lg text-slate-500 font-normal mb-8 leading-relaxed">
              Real interviews. Real feedback. Real opportunities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={onGetStarted}
                className="px-8 py-3.5 rounded-2xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#8a2be2] shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Get Started
              </button>

              {/* Watch Demo Button */}
              <button
                type="button"
                onClick={onWatchDemo}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-[15px] font-semibold text-slate-800 bg-white border border-slate-200/90 hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-all duration-200 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-[#0080ff] group-hover:scale-105 flex items-center justify-center text-white transition-transform">
                  <Play size={11} className="fill-white ml-0.5" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Direct Resume Upload Prompt */}
            <div className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5 select-none">
              <span>Have a resume ready?</span>
              <button
                type="button"
                onClick={onUploadResume}
                className="text-[#0080ff] font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
              >
                <Upload size={14} className="stroke-[2.5]" />
                <span>Upload Resume directly</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Image & Floating Badges */}
          <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[500px] lg:min-h-full w-full overflow-hidden bg-slate-100">
            {/* Candidate Image */}
            <img
              src="/hero-candidate.jpg"
              alt="Candidate practicing AI interview"
              className="w-full h-full object-cover object-[center_25%] select-none"
              loading="eager"
            />

            {/* Seamless gradient blend between white text area and image */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />

            {/* Stacked Floating Badges Overlay (Top-Right) */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-10 flex flex-col gap-3.5 z-20 select-none">
              
              {/* Badge 1: Mock Interviews */}
              <div className="flex items-center gap-3 bg-white/70 hover:bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 hover:translate-x-[-2px]">
                <div className="w-8 h-8 rounded-full bg-[#00b4db] flex items-center justify-center text-white shadow-xs flex-shrink-0">
                  <Video size={16} />
                </div>
                <span className="text-[14px] font-semibold text-slate-800 pr-1.5">
                  Mock Interviews
                </span>
              </div>

              {/* Badge 2: AI Feedback */}
              <div className="flex items-center gap-3 bg-white/70 hover:bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 hover:translate-x-[-2px]">
                <div className="w-8 h-8 rounded-full bg-[#8a2be2] flex items-center justify-center text-white shadow-xs flex-shrink-0">
                  <Sparkles size={16} />
                </div>
                <span className="text-[14px] font-semibold text-slate-800 pr-1.5">
                  AI Feedback
                </span>
              </div>

              {/* Badge 3: Track Progress */}
              <div className="flex items-center gap-3 bg-white/70 hover:bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 hover:translate-x-[-2px]">
                <div className="w-8 h-8 rounded-full bg-[#0072ff] flex items-center justify-center text-white shadow-xs flex-shrink-0">
                  <BarChart2 size={16} />
                </div>
                <span className="text-[14px] font-semibold text-slate-800 pr-1.5">
                  Track Progress
                </span>
              </div>

              {/* Badge 4: Get Hired */}
              <div className="flex items-center gap-3 bg-white/70 hover:bg-white/85 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/50 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-200 hover:translate-x-[-2px]">
                <div className="w-8 h-8 rounded-full bg-[#00b894] flex items-center justify-center text-white shadow-xs flex-shrink-0">
                  <CheckCircle size={16} />
                </div>
                <span className="text-[14px] font-semibold text-slate-800 pr-1.5">
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
