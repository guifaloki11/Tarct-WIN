import React, { useMemo } from 'react';

const CONFETTI_COUNT = 150;
const COLORS = ['bg-red-500', 'bg-yellow-400', 'bg-green-500', 'bg-blue-500', 'bg-pink-500', 'bg-purple-500', 'bg-orange-500'];

const Confetti: React.FC = () => {
  const confettiPieces = useMemo(() => {
    return Array.from({ length: CONFETTI_COUNT }).map((_, i) => {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const left = `${Math.random() * 100}vw`;
      const animationDuration = `${Math.random() * 3 + 2}s`; // 2s to 5s
      const animationDelay = `${Math.random() * 3}s`; // 0s to 3s delay
      const size = Math.random() > 0.5 ? 'w-3 h-3' : 'w-2 h-5';
      const shape = Math.random() > 0.5 ? 'rounded-full' : '';

      return (
        <div
          key={i}
          className={`absolute ${size} ${color} ${shape} animate-flutter`}
          style={{
            left,
            animationDuration,
            animationDelay,
            top: '-10vh'
          }}
        />
      );
    });
  }, []);

  return <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20 pointer-events-none">{confettiPieces}</div>;
};

export default Confetti;
