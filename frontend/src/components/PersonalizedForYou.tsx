import React from 'react';
import { ArrowRight, Code2, FolderGit2, Briefcase, Target } from 'lucide-react';

interface PersonalizedForYouProps {
  isDark?: boolean;
}

export const PersonalizedForYou: React.FC<PersonalizedForYouProps> = ({
  isDark = false,
}) => {
  const detectedData = [
    {
      label: 'Skills',
      value: 'React, Node.js, MongoDB, JavaScript',
      icon: <Code2 size={15} className="text-white" />,
      iconBg: 'bg-[#2563eb]',
    },
    {
      label: 'Projects',
      value: 'E-commerce Website, Chat Application',
      icon: <FolderGit2 size={15} className="text-white" />,
      iconBg: 'bg-[#10b981]',
    },
    {
      label: 'Experience',
      value: '1 Year',
      icon: <Briefcase size={15} className="text-white" />,
      iconBg: 'bg-[#6366f1]',
    },
    {
      label: 'Target Role',
      value: 'Frontend Developer',
      icon: <Target size={15} className="text-white" />,
      iconBg: 'bg-[#9333ea]',
    },
  ];

  const sampleQuestions = [
    'Tell me about your e-commerce project.',
    'Why did you use Context API instead of Redux?',
    'How did you handle authentication?',
    'What challenges did you face during deployment?',
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-28 transition-colors duration-300">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10">
        <h2
          className={`text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-2 sm:mb-2.5 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Personalized for You
        </h2>
        <p
          className={`text-sm sm:text-base font-normal ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Questions are generated based on the information in your resume.
        </p>
      </div>

      {/* Main Interactive Showcase Card */}
      <div
        className={`rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 lg:p-12 border transition-all duration-300 shadow-xl ${
          isDark
            ? 'bg-[#0f172a] border-slate-800/80 shadow-black/40'
            : 'bg-white border-slate-100 shadow-[0_16px_50px_-12px_rgba(0,0,0,0.04)]'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8">
          
          {/* Left Column: Detected from your resume */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 block select-none">
              Detected from your resume
            </span>

            <div className="space-y-3">
              {detectedData.map((item) => (
                <div
                  key={item.label}
                  className={`p-3.5 sm:p-4 rounded-2xl border flex items-center gap-3.5 transition-all duration-200 ${
                    isDark
                      ? 'bg-[#131d31] border-slate-800/80 hover:border-slate-700'
                      : 'bg-white border-slate-100/90 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] hover:border-slate-200'
                  }`}
                >
                  {/* Icon badge */}
                  <div
                    className={`w-8 h-8 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0 shadow-xs`}
                  >
                    {item.icon}
                  </div>

                  {/* Text details */}
                  <div className="flex flex-col min-w-0">
                    <span
                      className={`text-[11px] font-semibold ${
                        isDark ? 'text-slate-400' : 'text-slate-400'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      className={`text-[13px] sm:text-[13.5px] font-bold truncate ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Connector: Arrow */}
          <div className="lg:col-span-2 flex items-center justify-center py-2 lg:py-0 select-none">
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
                isDark ? 'bg-blue-950/60 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}
            >
              <ArrowRight size={22} className="stroke-[2.5]" />
            </div>
          </div>

          {/* Right Column: Sample Questions */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[11px] sm:text-xs font-semibold text-[#8a2be2] uppercase tracking-wider mb-4 block select-none">
              Sample Questions
            </span>

            <div className="space-y-3">
              {sampleQuestions.map((question) => (
                <div
                  key={question}
                  className={`p-3.5 sm:p-4 rounded-2xl border flex items-center gap-3 transition-all duration-200 group cursor-pointer ${
                    isDark
                      ? 'bg-[#131d31] border-slate-800/80 hover:border-purple-500/40 hover:bg-[#16233b]'
                      : 'bg-white border-slate-100/90 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.03)] hover:border-purple-200 hover:shadow-xs'
                  }`}
                >
                  <ArrowRight
                    size={14}
                    className="text-[#8a2be2] flex-shrink-0 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                  <span
                    className={`text-xs sm:text-[13.5px] font-medium leading-snug ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}
                  >
                    {question}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
