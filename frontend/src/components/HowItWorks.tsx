import React from 'react';
import { ArrowRight, Cpu, HelpCircle, Play, FileText, Plus } from 'lucide-react';

interface HowItWorksProps {
  isDark?: boolean;
  onUploadResume?: () => void;
  onStartInterview?: () => void;
}

interface StepItem {
  number: number;
  title: string;
  description: string;
  iconBg: string;
  iconDarkBg: string;
  iconColor: string;
  renderIcon: () => React.ReactNode;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  isDark = false,
  onUploadResume,
  onStartInterview,
}) => {
  const steps: StepItem[] = [
    {
      number: 1,
      title: 'Upload Your Resume',
      description: 'Upload your resume (PDF, DOC, or DOCX).',
      iconBg: 'bg-blue-50/90',
      iconDarkBg: 'bg-blue-950/50',
      iconColor: 'text-blue-600',
      renderIcon: () => (
        <div className="relative flex items-center justify-center">
          <FileText size={26} className="text-blue-500 stroke-[1.8]" />
          <div className="absolute -bottom-1.5 -right-2 w-4 h-4 rounded-full bg-[#8a2be2] text-white flex items-center justify-center shadow-xs">
            <Plus size={10} className="stroke-[3]" />
          </div>
        </div>
      ),
    },
    {
      number: 2,
      title: 'We Analyze It',
      description: 'Our AI reads your skills, experience, and projects.',
      iconBg: 'bg-indigo-50/90',
      iconDarkBg: 'bg-indigo-950/50',
      iconColor: 'text-indigo-600',
      renderIcon: () => (
        <Cpu size={26} className="text-indigo-500 stroke-[1.8]" />
      ),
    },
    {
      number: 3,
      title: 'Get Personalized Questions',
      description: 'Receive interview questions tailored to your resume.',
      iconBg: 'bg-sky-50/90',
      iconDarkBg: 'bg-sky-950/50',
      iconColor: 'text-sky-600',
      renderIcon: () => (
        <HelpCircle size={26} className="text-sky-500 stroke-[1.8]" />
      ),
    },
    {
      number: 4,
      title: 'Start Interviewing',
      description: 'Answer with voice or text and get instant feedback.',
      iconBg: 'bg-purple-50/90',
      iconDarkBg: 'bg-purple-950/50',
      iconColor: 'text-purple-600',
      renderIcon: () => (
        <Play size={22} className="text-[#8a2be2] fill-[#8a2be2] ml-0.5" />
      ),
    },
  ];

  return (
    <section id="how-it-works" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 transition-colors duration-300">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <h2
          className={`text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-tight mb-3 sm:mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          How It Works
        </h2>
        <p
          className={`text-base sm:text-lg font-normal ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Get from your resume to a personalized interview in just a few steps.
        </p>
      </div>

      {/* Steps Flow Grid */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 lg:gap-2">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            {/* Step Card */}
            <div
              className={`relative flex-1 min-h-[250px] sm:min-h-[270px] p-6 sm:p-7 rounded-[26px] sm:rounded-3xl border transition-all duration-300 flex flex-col items-center text-center justify-center group ${
                isDark
                  ? 'bg-[#0f172a] border-slate-800/80 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] hover:border-slate-700'
                  : 'bg-white border-slate-100 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.06)]'
              }`}
              onClick={
                step.number === 1
                  ? onUploadResume
                  : step.number === 4
                  ? onStartInterview
                  : undefined
              }
              role={step.number === 1 || step.number === 4 ? 'button' : undefined}
              tabIndex={step.number === 1 || step.number === 4 ? 0 : undefined}
            >
              {/* Step Number Badge (Top-Left) */}
              <div className="absolute top-5 left-5 w-6 h-6 rounded-full bg-[#1864f3] text-white text-[12px] font-bold flex items-center justify-center shadow-xs select-none">
                {step.number}
              </div>

              {/* Icon Container */}
              <div
                className={`w-15 h-15 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-105 select-none ${
                  isDark ? step.iconDarkBg : step.iconBg
                }`}
              >
                {step.renderIcon()}
              </div>

              {/* Step Title */}
              <h3
                className={`text-[17px] sm:text-lg font-bold tracking-tight mb-2 sm:mb-2.5 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {step.title}
              </h3>

              {/* Step Description */}
              <p
                className={`text-xs sm:text-[13.5px] leading-relaxed max-w-[230px] mx-auto ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {step.description}
              </p>
            </div>

            {/* Right Flow Arrow between cards (hidden on mobile, visible on desktop) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center px-1 text-slate-300 flex-shrink-0 select-none">
                <ArrowRight size={18} className={`${isDark ? 'text-slate-700' : 'text-slate-300'} stroke-[1.8]`} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
