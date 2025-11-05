
import React from 'react';
import { SettingsRow } from '../components/SettingsRow';
import { ToggleButton } from '../components/ToggleButton';
import { SegmentedControl } from '../components/SegmentedControl';
import { Sun } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';
import { descriptions } from '../data/descriptions';

const Select: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <select className="bg-gray-200/75 border border-transparent rounded-md px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
        {children}
    </select>
);

const Display: React.FC = () => {
  const [blueLight, setBlueLight] = React.useState(true);
  const popup = usePopup();

  const handleScreenCleanClick = () => {
    popup.showPopup({
        title: 'Pulizia schermo',
        description: descriptions['Pulizia schermo']
    });
  };


  return (
    <div className="space-y-4">
      <SettingsRow title="Aspetto">
        <SegmentedControl
          options={[
            { value: 'light', label: 'Chiaro' },
            { value: 'dark', label: 'Scuro' },
            { value: 'auto', label: 'Auto' },
          ]}
          value="auto"
          onChange={() => {}}
        />
      </SettingsRow>
      <SettingsRow title="Riduci luce blu" description="Si regola automaticamente con colori più caldi di notte">
        <ToggleButton checked={blueLight} onChange={setBlueLight} />
      </SettingsRow>
      <SettingsRow title="Luminosità">
        <div className="flex items-center space-x-3">
            <Sun size={20} className="text-gray-400" />
            <input type="range" min="0" max="100" defaultValue="94" className="w-48 accent-blue-500" />
            <span className="w-12 text-center text-sm">94%</span>
            <button className="bg-gray-200/75 hover:bg-gray-300/75 px-4 py-2.5 rounded-md text-sm font-medium">Auto</button>
        </div>
      </SettingsRow>
      
      <div className="py-4 flex flex-col items-center space-y-4">
        <button 
            onClick={handleScreenCleanClick}
            className="bg-gray-200/75 hover:bg-gray-300/75 text-gray-800 font-medium py-2.5 px-6 rounded-md"
        >
            Pulizia schermo
        </button>
        <button className="bg-gray-200/75 hover:bg-gray-300/75 text-gray-800 font-medium py-2.5 px-6 rounded-md">
            Blocca display posteriore
        </button>
      </div>

      <SettingsRow title="Funzione della rotellina" description="Premere a lungo la rotellina sinistra per un accesso rapido">
        <div className="flex items-center space-x-4">
            <Select><option>Nessuno</option></Select>
            <div className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 rounded text-blue-600 bg-gray-200 border-transparent focus:ring-blue-500" />
                <span className="text-sm">Chiedi ogni volta</span>
            </div>
        </div>
      </SettingsRow>
      <SettingsRow title="Lingua touchscreen" description="Visualizzare il display in questa lingua">
        <Select><option>Italiano</option></Select>
      </SettingsRow>
      <SettingsRow title="Lingua per comandi vocali" description="Riconoscere i comandi in questa lingua">
        <Select><option>Italiano</option></Select>
      </SettingsRow>
      <SettingsRow title="Lingua per navigazione vocale" description="Dare le istruzioni in questa lingua">
        <Select><option>Italiano</option></Select>
      </SettingsRow>
      <SettingsRow title="Formato regione" description="lunedì 1 aprile 2024 1.234,56">
        <Select><option>Italia</option></Select>
      </SettingsRow>
      <SettingsRow title="Dimensioni Testo">
        <SegmentedControl options={[{value: 'std', label: 'Standard'}, {value: 'large', label: 'Grande'}]} value="std" onChange={() => {}} />
      </SettingsRow>
      <SettingsRow title="Ora">
        <SegmentedControl options={[{value: '12', label: '12 ore'}, {value: '24', label: '24 ore'}]} value="24" onChange={() => {}} />
      </SettingsRow>
      <SettingsRow title="Visualizzazione energia">
        <SegmentedControl options={[{value: 'rel', label: 'Relativa'}, {value: 'dist', label: 'Distanza'}]} value="rel" onChange={() => {}} />
      </SettingsRow>
      <SettingsRow title="Distanza">
        <SegmentedControl options={[{value: 'km', label: 'Chilometri'}, {value: 'mi', label: 'Miglia'}]} value="km" onChange={() => {}} />
      </SettingsRow>
      <SettingsRow title="Temperatura">
        <SegmentedControl options={[{value: 'c', label: '°C'}, {value: 'f', label: '°F'}]} value="c" onChange={() => {}} />
      </SettingsRow>
      <SettingsRow title="Pressione pneumatici" border={false}>
        <SegmentedControl options={[{value: 'bar', label: 'Bar'}, {value: 'psi', label: 'PSI'}]} value="bar" onChange={() => {}} />
      </SettingsRow>
    </div>
  );
};

export default Display;