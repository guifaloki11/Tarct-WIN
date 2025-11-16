import React from 'react';

const BEAM_COUNT = 12;

const ShiningLights: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none">
      <div className="relative w-full h-full animate-beam-rotate">
        {Array.from({ length: BEAM_COUNT }).map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-0 w-full h-1 origin-center"
            style={{
              transform: `rotate(${i * (360 / BEAM_COUNT)}deg)`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-r from-transparent via-yellow-300/70 to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShiningLights;
