import React from 'react';

interface TrustedByProps {
  isDark?: boolean;
}

export const TrustedBy: React.FC<TrustedByProps> = ({ isDark = false }) => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 select-none">
      {/* Dark sleek pill/card container */}
      <div
        className={`rounded-[28px] sm:rounded-[36px] py-7 px-6 sm:px-10 lg:px-14 border transition-all duration-300 shadow-xl ${
          isDark
            ? 'bg-[#0b101d] border-slate-800/80 shadow-black/40'
            : 'bg-[#0b101d] border-slate-900/90 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.18)]'
        }`}
      >
        {/* Header subtitle */}
        <p className="text-center text-xs sm:text-sm font-medium text-slate-400 tracking-wide mb-6 sm:mb-8">
          Trusted by students and professionals from top companies
        </p>

        {/* Company Logos Row */}
        <div className="flex items-center justify-center sm:justify-between flex-wrap gap-y-6 gap-x-8 sm:gap-x-9 lg:gap-x-11">
          
          {/* 1. Google */}
          <div className="flex items-center text-lg sm:text-xl font-bold tracking-tight select-none">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>

          {/* 2. Microsoft */}
          <div className="flex items-center gap-2 select-none">
            <div className="grid grid-cols-2 gap-[2px] w-4 h-4 sm:w-[17px] sm:h-[17px]">
              <div className="bg-[#F25022] w-full h-full rounded-[1px]" />
              <div className="bg-[#7FBA00] w-full h-full rounded-[1px]" />
              <div className="bg-[#00A4EF] w-full h-full rounded-[1px]" />
              <div className="bg-[#FFB900] w-full h-full rounded-[1px]" />
            </div>
            <span className="text-white font-semibold text-sm sm:text-base tracking-tight">Microsoft</span>
          </div>

          {/* 3. amazon */}
          <div className="flex flex-col items-center select-none pt-0.5">
            <span className="text-white font-bold text-base sm:text-lg tracking-tight leading-none">amazon</span>
            <svg
              className="w-13 sm:w-15 h-2.5 text-[#FF9900] mt-0.5"
              viewBox="0 0 100 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6 C 35 22, 68 22, 92 8"
                stroke="#FF9900"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M87 4 L 95 8 L 89 15"
                fill="#FF9900"
                stroke="#FF9900"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* 4. Meta */}
          <div className="flex items-center gap-2 select-none">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-[#0081FB] flex-shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12.87c-1.39-1.93-2.73-3.1-4.2-3.1-2.02 0-3.6 1.77-3.6 4.18 0 2.65 1.78 4.3 4.02 4.3 1.63 0 3.03-1.07 4.54-3.07.3-.4.59-.81.87-1.22l.14-.2.15.2c.28.41.57.82.87 1.22 1.51 2 2.91 3.07 4.54 3.07 2.24 0 4.02-1.65 4.02-4.3 0-2.41-1.58-4.18-3.6-4.18-1.47 0-2.81 1.17-4.2 3.1-.48.67-.93 1.34-1.37 2.01-.44-.67-.89-1.34-1.37-2.01zm-5.78 3.51c-1.29 0-2.19-1.03-2.19-2.43 0-1.43.91-2.46 2.19-2.46 1.05 0 2.09.95 3.2 2.45-1.07 1.45-2.09 2.44-3.2 2.44zm11.56 0c-1.11 0-2.13-.99-3.2-2.44 1.11-1.5 2.15-2.45 3.2-2.45 1.28 0 2.19 1.03 2.19 2.46 0 1.4-.9 2.43-2.19 2.43z" />
            </svg>
            <span className="text-white font-semibold text-sm sm:text-base tracking-tight">Meta</span>
          </div>

          {/* 5. Apple */}
          <div className="flex items-center select-none text-white/95 hover:text-white transition-colors">
            <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-current" viewBox="0 0 170 170">
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.85-12-14.42-6.09-9.35-10.88-20.08-14.37-32.18-3.48-12.1-5.23-23.47-5.23-34.12 0-14.88 3.82-27.18 11.45-36.88 7.64-9.7 17.07-14.67 28.3-14.92 4.9.06 10.15 1.34 15.75 3.82 5.61 2.49 9.38 3.82 11.32 4 1.7-.24 5.63-1.63 11.78-4.17 6.16-2.54 11.75-3.7 16.78-3.48 12.83.67 23.36 5.38 31.6 14.13-11.19 6.81-16.66 16.3-16.42 28.47.24 9.68 3.96 17.75 11.17 24.21 7.21 6.46 15.79 10.08 25.74 10.86-2.24 6.74-4.88 13.52-7.92 20.35zM119.22 31.84c0-7.38 2.65-14.16 7.95-20.35 5.3-6.18 11.96-10.3 19.98-12.35.37 1.48.56 2.9.56 4.25 0 7.33-2.82 14.34-8.47 21.03-5.65 6.69-12.59 10.74-20.82 12.14.2-1.62.8-3.19.8-4.72z" />
            </svg>
          </div>

          {/* 6. Adobe */}
          <div className="flex items-center gap-2 select-none">
            <div className="w-5 h-5 sm:w-[22px] sm:h-[22px] bg-[#EB1000] flex items-center justify-center rounded-[3px]">
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                <path d="M13.96 22H10.04L2 2h4.52l4.8 12.28L15.94 2h4.52L13.96 22zm-1.96-6.68l-2.6-6.64h5.2l-2.6 6.64z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-sm sm:text-base tracking-tight">Adobe</span>
          </div>

          {/* 7. TCS */}
          <div className="flex items-center select-none">
            <span className="text-white font-bold text-base sm:text-lg tracking-wider">TCS</span>
          </div>

          {/* 8. Infosys */}
          <div className="flex items-center select-none">
            <span className="text-[#007cc3] font-semibold text-base sm:text-lg tracking-tight">Infosys</span>
          </div>

          {/* 9. accenture */}
          <div className="flex items-center select-none font-semibold text-sm sm:text-base tracking-tight text-white">
            <span>accenture</span>
            <span className="text-[#a100ff] font-bold text-base sm:text-lg ml-0.5">&gt;</span>
          </div>

        </div>
      </div>
    </section>
  );
};
