
import React from 'react';
import { Bolt, Minus, Plus } from 'lucide-react';
import { SettingsRow } from '../components/SettingsRow';
import { ToggleButton } from '../components/ToggleButton';
import { usePopup } from '../contexts/PopupContext';
import { descriptions } from '../data/descriptions';

const Charging: React.FC = () => {
  const [chargeLimit, setChargeLimit] = React.useState(82);
  const [chargeCurrent, setChargeCurrent] = React.useState(16);
  const [solarCharging, setSolarCharging] = React.useState(false);
  const [keepPower, setKeepPower] = React.useState(false);
  const popup = usePopup();

  const handlePopupClick = (title: keyof typeof descriptions) => {
    const description = descriptions[title];
    if (description) {
      popup.showPopup({ title, description });
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <span className="text-6xl font-light text-gray-800">{chargeLimit}%</span>
      </div>
      
      <div>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span className="cursor-pointer" onClick={() => handlePopupClick('Distanza di guida / Impostare limite')}>Limite di carica: {chargeLimit}%</span>
        </div>
        <div className="relative pt-4">
          <input
            type="range"
            min="0"
            max="100"
            value={chargeLimit}
            onChange={(e) => setChargeLimit(Number(e.target.value))}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
            style={{ 
              background: `linear-gradient(to right, #10B981 0%, #10B981 ${chargeLimit}%, #D1D5DB ${chargeLimit}%, #D1D5DB 100%)`
            }}
          />
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-1 text-xs text-gray-400 pointer-events-none">
            {[0, 20, 40, 60, 80, 100].map(v => <span key={v} className="relative pt-4">|</span>)}
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handlePopupClick('Corrente di carica in questa posizione')}>
            <Bolt size={20} />
            <h3 className="font-medium">Corrente di carica in questa posizione</h3>
          </div>
          <div className="flex items-center space-x-2 bg-gray-200/75 rounded-md p-1">
            <button className="p-1 hover:bg-gray-300/75 rounded"><Minus size={16} /></button>
            <span className="px-2 font-medium">{chargeCurrent} A</span>
            <button className="p-1 hover:bg-gray-300/75 rounded"><Plus size={16} /></button>
          </div>
        </div>
      </div>
      
      <div className="cursor-pointer" onClick={() => handlePopupClick('Sportello di ricarica aperto/chiuso')}>
        <span className="text-blue-500 text-sm font-medium">Aprire sportello</span>
      </div>
      
      
      <div className="border-t border-gray-200 pt-6 cursor-pointer" onClick={() => handlePopupClick('Programma (Ricarica e Precondizionamento Pianificati)')}>
        <h3 className="font-medium">Programma la ricarica in questa posizione</h3>
        <button className="text-blue-500 text-sm font-medium mt-1">Imposta</button>
      </div>
      
      <SettingsRow title="Carica con energia fotovoltaica" description="(Se disponibile nella regione) Permette di ricaricare il veicolo utilizzando l'energia solare in eccesso.">
          <ToggleButton checked={solarCharging} onChange={setSolarCharging} />
      </SettingsRow>
      
      <SettingsRow title="Tenere accesa l'alimentazione accessori" description="Mantiene alimentati i dispositivi quando nessuno è a bordo del veicolo." border={false}>
          <ToggleButton checked={keepPower} onChange={setKeepPower} />
      </SettingsRow>

      <div className="border-t border-gray-200 pt-6 text-sm">
        <h3 className="font-medium">Ultima sessione di ricarica a pagamento</h3>
        <div className="flex justify-between text-gray-500 mt-2">
          <span>31,05 €</span>
          <div className="text-right">
            <span>Moncalieri 2, Italy</span><br/>
            <span>dom 24 nov 09:47</span>
          </div>
        </div>
      </div>
      
      <button className="text-blue-500 text-sm font-medium">Suggerimenti su Supercharger</button>
    </div>
  );
};

export default Charging;