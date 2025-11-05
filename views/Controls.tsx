import React, { useState } from 'react';
import { 
  Lightbulb, 
  ChevronsLeftRight,
  Move,
  UserLock, 
  XSquare,
  Box,
  Wind, 
  Command,
  Camera, 
  Sun,
  Sparkles
} from 'lucide-react';
import { SegmentedControl } from '../components/SegmentedControl';

// A more specific button component for the 4-icon grid
const QuickActionButton: React.FC<{ icon: React.ElementType; label: string; subLabel?: string; }> = ({ icon: Icon, label, subLabel }) => (
  <button className="flex flex-col items-center justify-center space-y-1 w-full h-20 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
    <Icon size={28} className="text-gray-700" />
    <span className="text-sm font-medium text-gray-800">{label}</span>
    {subLabel && <span className="text-xs text-gray-500">{subLabel}</span>}
  </button>
);

// A component for the buttons inside the two adjustment/status boxes
const AdjustmentButton: React.FC<{ icon: React.ElementType; label: string; }> = ({ icon: Icon, label }) => (
    <button className="flex items-center space-x-3 w-full text-left p-3 rounded-md hover:bg-gray-200 transition-colors">
        <Icon size={28} className="text-gray-700" />
        <span className="font-medium text-gray-800">{label}</span>
    </button>
);

const Controls: React.FC = () => {
    const [lights, setLights] = useState<'off' | 'parking' | 'on' | 'auto'>('auto');
    const [wipers, setWipers] = useState<'off' | '1' | '2' | '3' | '4' | 'auto'>('auto');
    
    const wiperOptions = [
        { value: 'off' as const, label: <div className="flex items-center justify-center space-x-2"><Wind size={20}/><span>Spenti</span></div> },
        { value: '1' as const, label: 'I' },
        { value: '2' as const, label: 'II' },
        { value: '3' as const, label: 'III' },
        { value: '4' as const, label: 'IIII' },
        { value: 'auto' as const, label: 'Auto' }
    ];

  return (
    <div className="space-y-4 max-w-xl mx-auto">
      {/* Headlights */}
      <div className="flex items-center gap-3">
        {/* --- MODIFICA APPLICATA QUI: rimossa la classe flex-grow --- */}
        <div>
            <SegmentedControl
                options={[
                    { value: 'off', label: 'Spenti' },
                    { value: 'parking', label: 'Parcheggio' },
                    { value: 'on', label: 'Accesi' },
                    { value: 'auto', label: 'Auto' }
                ]}
                value={lights}
                onChange={setLights}
            />
        </div>
        <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0">
            <Sparkles size={24} />
        </button>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-3">
        <QuickActionButton icon={ChevronsLeftRight} label="Chiudi Specchietti" />
        <QuickActionButton icon={UserLock} label="Blocco Bambini" subLabel="Disattivato" />
        <QuickActionButton icon={XSquare} label="Blocco Finestrini" />
        <QuickActionButton icon={Box} label="Cassetto" />
      </div>

      {/* Wipers */}
      <div className="flex items-center justify-between p-1 rounded-lg bg-gray-100 w-full">
        {wiperOptions.map((option, index) => (
            <React.Fragment key={option.value}>
                <button
                    onClick={() => setWipers(option.value)}
                    className={`flex-grow basis-0 text-center py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                        wipers === option.value ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:bg-gray-200'
                    }`}
                >
                    <div className="flex items-center justify-center h-full">
                      {option.label}
                    </div>
                </button>
                {index < wiperOptions.length - 1 && (
                    <div className="w-px h-6 bg-gray-300 self-center"></div>
                )}
            </React.Fragment>
        ))}
      </div>


      {/* Adjustment & Status Boxes */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-100 rounded-lg p-2 space-y-1">
            <AdjustmentButton icon={Move} label="Specchietti" />
            <AdjustmentButton icon={Command} label="Volante" />
        </div>
        <div className="bg-gray-100 rounded-lg p-2 space-y-1">
            <AdjustmentButton icon={Camera} label="Registrazione" />
            <button className="flex items-center space-x-3 w-full text-left p-3 rounded-md hover:bg-gray-200 transition-colors">
                <div className="w-7 h-7 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                </div>
                <span className="font-medium text-gray-800">Sentinella</span>
            </button>
        </div>
      </div>
      
      {/* Dome Light Slider */}
       <div className="flex items-center gap-3 pt-2">
            <div className="flex-grow bg-gray-100 rounded-lg p-2 flex items-center gap-3 h-[54px]">
                <Sun size={24} className="text-gray-500" />
                <input type="range" min="0" max="100" defaultValue="50" className="w-full accent-gray-500" />
            </div>
            <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-shrink-0">
                Auto
            </button>
        </div>
    </div>
  );
};

export default Controls;