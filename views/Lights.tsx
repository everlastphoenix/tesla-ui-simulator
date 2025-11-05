
import React from 'react';
import { SettingsRow } from '../components/SettingsRow';
import { ToggleButton } from '../components/ToggleButton';
import { SegmentedControl } from '../components/SegmentedControl';
import { Lightbulb, Sun, Moon } from 'lucide-react';

const Lights: React.FC = () => {
    const [adaptiveHeadlights, setAdaptiveHeadlights] = React.useState(true);
    const [headlightsAfterExit, setHeadlightsAfterExit] = React.useState(true);

  return (
    <div className="space-y-6">
      <SettingsRow title="Fari anteriori">
        <SegmentedControl
            options={[
                {value: 'off', label: 'Off'},
                {value: 'pos', label: <Lightbulb size={16}/>},
                {value: 'on', label: <Lightbulb size={16} />},
                {value: 'auto', label: 'Auto'}
            ]}
            value='auto'
            onChange={() => {}}
        />
      </SettingsRow>
      <SettingsRow title="Retronebbia">
        <ToggleButton checked={false} onChange={() => {}} />
      </SettingsRow>
      <SettingsRow title="Indicatori automatici di direzione" showInfo>
         <SegmentedControl
            options={[
                {value: 'off', label: 'Off'},
                {value: 'auto', label: 'Annullamento automatico'},
            ]}
            value='auto'
            onChange={() => {}}
        />
      </SettingsRow>
      <SettingsRow title="Fari anteriori adattivi" description="Attenua automaticamente i singoli pixel dei fari abbaglianti per ridurre il riverbero per gli altri veicoli e regola i fari per le curve.">
          <ToggleButton checked={adaptiveHeadlights} onChange={setAdaptiveHeadlights} />
      </SettingsRow>
      <SettingsRow title="Fari anteriori dopo l'uscita">
          <ToggleButton checked={headlightsAfterExit} onChange={setHeadlightsAfterExit} />
      </SettingsRow>

      <SettingsRow title="Luci decorative">
        <div className="flex items-center space-x-2">
            <SegmentedControl
                options={[
                    {value: 'off', label: 'Off'},
                    {value: 'on', label: 'On'},
                    {value: 'night', label: 'Solo notte'},
                ]}
                value='on'
                onChange={() => {}}
            />
            <div className="w-10 h-10 rounded-md cursor-pointer" style={{background: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)'}}></div>
        </div>
      </SettingsRow>
       <div className="flex items-center justify-center space-x-4 pt-4 border-b border-gray-200 pb-6">
        <Sun size={20} className="text-gray-400" />
        <input type="range" min="0" max="100" defaultValue="50" className="w-64 accent-blue-500" />
        <Moon size={20} className="text-gray-400" />
      </div>

      <SettingsRow title="Luci di cortesia">
         <SegmentedControl
            options={[
                {value: 'off', label: 'Off'},
                {value: 'on', label: 'On'},
                {value: 'auto', label: 'Auto'},
            ]}
            value='auto'
            onChange={() => {}}
        />
      </SettingsRow>
      <SettingsRow title="Luci vano piedi" border={false}>
          <ToggleButton checked={true} onChange={() => {}} />
      </SettingsRow>
    </div>
  );
};

export default Lights;
