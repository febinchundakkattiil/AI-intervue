import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

export function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-500 selection:text-white flex flex-col relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 -right-40 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-indigo-300/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Modern Header / Navbar */}
      <Navbar />

      {/* Main Hero Section matching user design */}
      <main className="flex-1 flex flex-col justify-start">
        <Hero
          onGetStarted={handleGetStarted}
          onWatchDemo={handleWatchDemo}
          onUploadResume={handleUploadResume}
        />
      </main>

      {/* Interactive Modal Handler */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {activeModal === 'get-started' && '🚀 Start Your AI Interview'}
              {activeModal === 'watch-demo' && '🎬 Watch Platform Demo'}
              {activeModal === 'upload-resume' && '📄 Upload Resume for ATS Analysis'}
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              {activeModal === 'get-started' && 'Choose your role, experience level, and start practicing with real-time AI voice evaluation.'}
              {activeModal === 'watch-demo' && 'Experience how the real-time AI interviewer asks dynamic questions and evaluates your responses.'}
              {activeModal === 'upload-resume' && 'Drag and drop your PDF or DOCX resume to get instant ATS scores and personalized interview questions.'}
            </p>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#00c6ff] via-[#0072ff] to-[#8a2be2] shadow-md shadow-blue-500/20"
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
