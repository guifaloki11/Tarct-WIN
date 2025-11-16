import React from 'react';

interface ChestProps {
  isOpen: boolean;
}

const Chest: React.FC<ChestProps> = ({ isOpen }) => {
  const woodColor = 'bg-amber-800';
  const woodDarkColor = 'bg-amber-900';
  const metalColor = 'bg-stone-600';
  const metalHighlight = 'border-stone-500';

  return (
    <div className="relative w-64 h-48 md:w-80 md:h-60" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-10deg)' }}>
      {/* Chest Lid */}
      <div 
        className={`absolute w-full h-1/2 top-0 left-0`}
        style={{ 
          transformOrigin: 'bottom center', 
          transform: isOpen ? 'translateY(-50%) rotateX(-140deg)' : 'rotateX(0deg)', 
          transformStyle: 'preserve-3d',
          transition: 'transform 1.2s cubic-bezier(0.68, -0.6, 0.32, 1.6)'
        }}
      >
        {/* Top of Lid */}
        <div className={`absolute w-full h-full ${woodColor} rounded-t-xl border-b-4 border-amber-950 flex items-center justify-center`} style={{backfaceVisibility: 'hidden'}}>
           {/* Metal Lock */}
          <div className={`w-1/4 h-8 ${metalColor} rounded-md border-2 ${metalHighlight} shadow-inner`}></div>
          {/* Metal Straps on Lid */}
          <div className={`absolute w-full h-3 ${metalColor} top-2 border-y ${metalHighlight}`}></div>
        </div>
         {/* Inside of Lid */}
        <div className={`absolute w-full h-full ${woodDarkColor} rounded-t-xl`} style={{ transform: 'rotateX(180deg)', backfaceVisibility: 'hidden' }}></div>
      </div>

      {/* Chest Body */}
      <div className={`absolute bottom-0 w-full h-1/2 ${woodDarkColor} rounded-b-xl border-t-2 border-black/50`}>
        {/* Front panel */}
        <div className={`absolute w-full h-full ${woodColor} rounded-b-xl flex items-center justify-center`} style={{ transform: 'translateZ(32px)' }}>
           {/* Keyhole */}
           <div className={`absolute top-[-1rem] w-12 h-12 ${metalColor} rounded-full border-2 ${metalHighlight} shadow-md flex items-center justify-center`}>
             <div className="w-2 h-4 bg-slate-900 rounded-t-full"></div>
             <div className="w-4 h-2 bg-slate-900 -mt-2"></div>
           </div>
           {/* Metal Frame on Body */}
           <div className={`w-full h-3 ${metalColor} absolute top-0 border-b ${metalHighlight}`}></div>
           <div className={`w-full h-3 ${metalColor} absolute bottom-0 border-t ${metalHighlight}`}></div>
           <div className={`w-3 h-full ${metalColor} absolute left-0 border-r ${metalHighlight}`}></div>
           <div className={`w-3 h-full ${metalColor} absolute right-0 border-l ${metalHighlight}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Chest;
