import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { HowItWorks } from './components/HowItWorks';
import { InterviewExperience } from './components/InterviewExperience';
import { PersonalizedForYou } from './components/PersonalizedForYou';

export function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0b0f19';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
    }
  }, [isDark]);

  const handleGetStarted = () => {
    setActiveModal('get-started');
  };

  const handleWatchDemo = () => {
    setActiveModal('watch-demo');
  };

  const handleUploadResume = () => {
    setActiveModal('upload-resume');
  };

  return (
    <div
      className={`min-h-screen flex flex-col relative overflow-hidden font-sans transition-colors duration-300 ${
        isDark
          ? 'bg-[#0b0f19] text-slate-100 selection:bg-blue-600 selection:text-white'
          : 'bg-[#f8fafc] text-slate-900 selection:bg-blue-500 selection:text-white'
      }`}
    >
      {/* Background ambient lighting */}
      {isDark ? (
        <>
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[160px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-20 -right-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />
        </>
      )}

      {/* Floating Modern Header / Navbar */}
      <Navbar isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />

      {/* Main Hero Section matching user design */}
      <main className="flex-1 flex flex-col justify-start">
        <Hero
          isDark={isDark}
          onGetStarted={handleGetStarted}
          onWatchDemo={handleWatchDemo}
          onUploadResume={handleUploadResume}
        />

        {/* Trusted By Top Companies Section */}
        <TrustedBy isDark={isDark} />

        {/* How It Works 4-Step Flow Section */}
        <HowItWorks
          isDark={isDark}
          onUploadResume={handleUploadResume}
          onStartInterview={handleGetStarted}
        />

        {/* A Real Interview Experience Showcase */}
        <InterviewExperience
          isDark={isDark}
          onTrySample={handleGetStarted}
        />

        {/* Personalized For You Section */}
        <PersonalizedForYou
          isDark={isDark}
        />
      </main>

      {/* Interactive Modal Handler */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className={`rounded-3xl p-8 max-w-md w-full shadow-2xl border animate-in zoom-in-95 duration-200 ${
              isDark
                ? 'bg-[#0f172a] border-slate-800 text-slate-100'
                : 'bg-white border-slate-100 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold mb-2">
              {activeModal === 'get-started' && '🚀 Start Your AI Interview'}
              {activeModal === 'watch-demo' && '🎬 Watch Platform Demo'}
              {activeModal === 'upload-resume' && '📄 Upload Resume for ATS Analysis'}
            </h3>
            <p className={`text-sm mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {activeModal === 'get-started' && 'Choose your role, experience level, and start practicing with real-time AI voice evaluation.'}
              {activeModal === 'watch-demo' && 'Experience how the real-time AI interviewer asks dynamic questions and evaluates your responses.'}
              {activeModal === 'upload-resume' && 'Drag and drop your PDF or DOCX resume to get instant ATS scores and personalized interview questions.'}
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                  isDark
                    ? 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#8a2be2] shadow-md shadow-blue-500/20 cursor-pointer"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
