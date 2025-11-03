
import React from 'react';
import TtsSection from './components/TtsSection';
import TranscriptionSection from './components/TranscriptionSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-dark-text p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent">
            AI Voice & Script Studio
          </h1>
          <p className="mt-4 text-lg text-dark-subtext">
            Transform text into lifelike speech and capture spoken words with real-time transcription.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TtsSection />
          <TranscriptionSection />
        </main>
        
        <footer className="text-center mt-12 text-dark-subtext text-sm">
            <p>Powered by Gemini AI</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
