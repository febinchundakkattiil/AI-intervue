import React from 'react';
import { ArrowRight, Sparkles, Mic, PhoneOff, Video, Clock } from 'lucide-react';

interface InterviewExperienceProps {
  isDark?: boolean;
  onTrySample?: () => void;
}

export const InterviewExperience: React.FC<InterviewExperienceProps> = ({
  isDark = false,
  onTrySample,
}) => {
  const checklistItems = [
    'Resume-based questions',
    'Voice or text interviews',
    'Real-time AI feedback',
    'Track your progress',
  ];

  const metrics = [
    { label: 'Communication', score: 85, color: 'bg-[#10b981]' },
    { label: 'Confidence', score: 78, color: 'bg-[#2563eb]' },
    { label: 'Technical Accuracy', score: 92, color: 'bg-[#9333ea]' },
    { label: 'Fluency', score: 80, color: 'bg-[#f97316]' },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Heading, features & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2
            className={`text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            A Real Interview <br className="hidden sm:inline" />
            Experience
          </h2>

          <p
            className={`text-base sm:text-[17px] leading-relaxed mb-8 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Practice in a realistic environment with AI-powered interviews that feel real.
          </p>

          {/* Checklist with concentric green icons */}
          <div className="space-y-4 mb-10 select-none">
            {checklistItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                {/* Concentric green circle icon */}
                <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <span
                  className={`text-[15px] font-medium ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <button
              type="button"
              onClick={onTrySample}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-[14.5px] font-semibold text-white bg-[#0b0f19] hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-black/10 hover:shadow-black/20 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <span>Try a Sample Interview</span>
              <ArrowRight size={16} className="stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Right Column: Visual Interview Mockup & Feedback Card */}
        <div className="lg:col-span-7 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 w-full">
          
          {/* Card 1: Interactive Video Call Box */}
          <div
            className={`relative flex-1 min-h-[360px] sm:min-h-[400px] rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-2xl border select-none group transition-all duration-300 ${
              isDark
                ? 'border-slate-800/80 bg-slate-950 shadow-black/60'
                : 'border-slate-200/80 bg-slate-900 shadow-slate-300/40'
            }`}
          >
            {/* Background Image: Interviewer */}
            <img
              src="/interviewer.jpg"
              alt="AI Interviewer"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark vignette gradient for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

            {/* Top-Left: AI Interview Badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b1220]/75 backdrop-blur-md border border-white/10 text-white shadow-md">
                <div className="w-5 h-5 rounded-full bg-[#1864f3] flex items-center justify-center text-[10px] font-bold">
                  AI
                </div>
                <span className="text-xs font-semibold tracking-wide">AI Interview</span>
              </div>
            </div>

            {/* Top-Right: Call Duration Timer */}
            <div className="absolute top-4 right-4 z-10">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0b1220]/75 backdrop-blur-md border border-white/10 text-white text-xs font-mono font-medium shadow-md">
                <Clock size={12} className="text-slate-300" />
                <span>01:46</span>
              </div>
            </div>

            {/* Speech Bubble: Interviewer Question */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 max-w-[210px] sm:max-w-[225px] z-10 animate-in fade-in slide-in-from-right-2 duration-300">
              <div className="relative bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-2xl border border-white/80">
                <p className="text-xs sm:text-[12.5px] font-semibold text-slate-800 leading-snug">
                  Can you explain the key features of your e-commerce project?
                </p>
                {/* Speech tail */}
                <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white/95 rotate-45 border-l border-b border-white/80" />
              </div>

              {/* Audio Waveform Indicator */}
              <div className="mt-2.5 flex justify-end">
                <div className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#0b101e]/90 backdrop-blur-md border border-white/10 shadow-md">
                  <span className="w-1 h-2.5 bg-[#38bdf8] rounded-full animate-pulse" />
                  <span className="w-1 h-4 bg-[#38bdf8] rounded-full animate-pulse delay-75" />
                  <span className="w-1 h-3 bg-[#38bdf8] rounded-full animate-pulse delay-150" />
                  <span className="w-1 h-4.5 bg-[#38bdf8] rounded-full animate-pulse delay-200" />
                  <span className="w-1 h-2 bg-[#38bdf8] rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Bottom Video Controls Bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
                title="Mute/Unmute Mic"
              >
                <Mic size={14} />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-full bg-[#ef4444] hover:bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/30 transition-colors cursor-pointer"
                title="End Call"
              >
                <PhoneOff size={15} />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
                title="Toggle Camera"
              >
                <Video size={14} />
              </button>
            </div>
          </div>

          {/* Card 2: AI Feedback Real-time Analytics Card */}
          <div
            className={`w-full sm:w-[260px] lg:w-[270px] xl:w-[290px] rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 border flex flex-col justify-between select-none shadow-xl transition-all duration-300 ${
              isDark
                ? 'bg-[#0f172a] border-slate-800/80 shadow-black/40 text-slate-100'
                : 'bg-white border-slate-100 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.06)] text-slate-900'
            }`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-2 mb-5">
                <Sparkles size={16} className="text-[#3b82f6]" />
                <h3 className="font-bold text-sm sm:text-[15px] tracking-tight">AI Feedback</h3>
              </div>

              {/* Metric Progress Bars */}
              <div className="space-y-3.5">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                        {metric.label}
                      </span>
                      <span className="font-bold">{metric.score}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div
                      className={`w-full h-1.5 rounded-full overflow-hidden ${
                        isDark ? 'bg-slate-800' : 'bg-slate-100'
                      }`}
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${metric.color}`}
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Evaluation Box: Great Answer */}
            <div
              className={`rounded-2xl p-3.5 sm:p-4 mt-5 border ${
                isDark
                  ? 'bg-emerald-950/40 border-emerald-900/60 text-emerald-300'
                  : 'bg-[#f0fdf4] border-emerald-100 text-emerald-900'
              }`}
            >
              <div className="flex items-center gap-1.5 mb-1.5">
                <span className="text-xs">💡</span>
                <span className="font-bold text-[12px] tracking-tight">Great Answer!</span>
              </div>
              <p
                className={`text-[11.5px] leading-relaxed ${
                  isDark ? 'text-emerald-300/80' : 'text-emerald-900/80'
                }`}
              >
                You explained your project clearly. Try to add more details about the challenges you faced.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
