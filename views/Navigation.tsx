
import React from 'react';
import { SettingsRow } from '../components/SettingsRow';
import { ToggleButton } from '../components/ToggleButton';
import { Minus, Plus, Volume2 } from 'lucide-react';

const Navigation: React.FC = () => {
  const [autoNav, setAutoNav] = React.useState(true);
  const [tripPlanner, setTripPlanner] = React.useState(true);
  const [onlineRouting, setOnlineRouting] = React.useState(true);
  const [speedCamWarning, setSpeedCamWarning] = React.useState(true);
  const [avoidTolls, setAvoidTolls] = React.useState(false);
  const [avoidFerries, setAvoidFerries] = React.useState(false);
  const [showThirdPartyChargers, setShowThirdPartyChargers] = React.useState(true);

  return (
    <div className="space-y-4">
      <SettingsRow title="Guida alla navigazione (Volume)">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 bg-gray-200/75 rounded-md p-1">
            <button className="p-2 hover:bg-gray-300/75 rounded"><Minus size={16} /></button>
            <div className="w-32 h-1 bg-gray-400 rounded-full mx-2">
                <div className="w-3/4 h-full bg-gray-800 rounded-full"></div>
            </div>
            <button className="p-2 hover:bg-gray-300/75 rounded"><Plus size={16} /></button>
          </div>
          <button className="p-3 bg-gray-200/75 hover:bg-gray-300/75 rounded-md"><Volume2 size={16} /></button>
        </div>
      </SettingsRow>

      <SettingsRow title="Navigazione automatica" description="Vai automaticamente a Casa, Lavoro o al prossimo evento in calendario quando si accede al veicolo.">
        <ToggleButton checked={autoNav} onChange={setAutoNav} />
      </SettingsRow>

      <SettingsRow title="Pianificatore viaggio" description="Aggiunge fermata a Supercharger se necessario.">
        <ToggleButton checked={tripPlanner} onChange={setTripPlanner} />
      </SettingsRow>
      
      <SettingsRow title="Calcolo percorso in tempo reale" description="Trova percorso ottimale in base al traffico." showInfo>
        <ToggleButton checked={onlineRouting} onChange={setOnlineRouting} />
      </SettingsRow>

      <div className="pl-8 pb-4 border-b border-gray-200">
        <p className="text-gray-500 text-sm mb-2">Ricalcola percorso per risparmiare</p>
        <div className="flex items-center space-x-2 bg-gray-200/75 rounded-md p-1 w-fit">
            <button className="p-1 hover:bg-gray-300/75 rounded"><Minus size={16} /></button>
            <span className="px-2 font-medium text-sm">10 min</span>
            <button className="p-1 hover:bg-gray-300/75 rounded"><Plus size={16} /></button>
        </div>
      </div>
      
      <SettingsRow title="Segnale acustico autovelox" showInfo>
        <ToggleButton checked={speedCamWarning} onChange={setSpeedCamWarning} />
      </SettingsRow>

       <SettingsRow title="Stazioni di ricarica di terze parti" description="Abilita la visualizzazione delle stazioni di ricarica non-Tesla sulla mappa.">
        <ToggleButton checked={showThirdPartyChargers} onChange={setShowThirdPartyChargers} />
      </SettingsRow>

      <SettingsRow title="Evita traghetti / Evita pedaggi">
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
                <ToggleButton checked={avoidFerries} onChange={setAvoidFerries} />
                <span className="text-xs mt-1 text-gray-500">Traghetti</span>
            </div>
             <div className="flex flex-col items-center">
                <ToggleButton checked={avoidTolls} onChange={setAvoidTolls} />
                 <span className="text-xs mt-1 text-gray-500">Pedaggi</span>
            </div>
          </div>
      </SettingsRow>

    </div>
  );
};

export default Navigation;