
import React, { useState, useRef, useCallback } from 'react';
import Chest from './components/Chest';
import Confetti from './components/Confetti';
import ShiningLights from './components/ShiningLights';

const App: React.FC = () => {
  const [isChestOpen, setIsChestOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const clickSoundRef = useRef<HTMLAudioElement>(null);
  const victorySoundRef = useRef<HTMLAudioElement>(null);

  const handleOpenChest = useCallback(() => {
    if (isAnimating || isChestOpen) return;

    setIsAnimating(true);
    
    const clickSound = clickSoundRef.current;
    const victorySound = victorySoundRef.current;

    if (clickSound) {
      clickSound.currentTime = 0;
      clickSound.play().catch(e => console.error("Error playing click sound:", e));
    }

    setTimeout(() => {
      setIsChestOpen(true);
      if (victorySound) {
        victorySound.currentTime = 0;
        victorySound.play().catch(e => console.error("Error playing victory sound:", e));
      }
    }, 500);
  }, [isAnimating, isChestOpen]);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-slate-900 to-indigo-900 text-white overflow-hidden p-4">
      {isChestOpen && (
        <>
          <ShiningLights />
          <Confetti />
          <div className="absolute top-[15%] text-center z-30 animate-text-appear">
            <h1 className="text-7xl md:text-9xl font-black text-white mb-4 animate-text-glow drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
              TARCT
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-500 drop-shadow-[0_5px_15px_rgba(255,255,150,0.5)]">
              VOCÊ VENCEU
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-200 mt-4 drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]">
              PARABÉNS!
            </p>
          </div>
        </>
      )}

      <div className="z-10 flex flex-col items-center justify-center" style={{ perspective: '1000px' }}>
         <Chest isOpen={isChestOpen} />
      </div>

      {!isChestOpen && !isAnimating && (
        <button
          onClick={handleOpenChest}
          className="mt-12 px-10 py-4 bg-yellow-500 text-slate-900 text-2xl font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110 z-20"
        >
          Abrir
        </button>
      )}
      
      <audio ref={clickSoundRef} src="https://www.soundjay.com/misc/sounds/chest-opening-1.mp3" preload="auto" className="hidden"></audio>
      <audio ref={victorySoundRef} src="https://cdn.pixabay.com/download/audio/2023/04/13/audio_f4865f179c.mp3?filename=brass-fanfare-reverberated-146263.mp3" preload="auto" className="hidden"></audio>
    </main>
  );
};

export default App;