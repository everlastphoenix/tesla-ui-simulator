
import React from 'react';
import { SegmentedControl } from '../components/SegmentedControl';
import { SettingsRow } from '../components/SettingsRow';
import { ToggleButton } from '../components/ToggleButton';
import { usePopup } from '../contexts/PopupContext';
import { descriptions } from '../data/descriptions';

const Dynamics: React.FC = () => {
  const [acceleration, setAcceleration] = React.useState<'soft' | 'standard' | 'insane'>('soft');
  const [steering, setSteering] = React.useState<'leggero' | 'standard' | 'pesante'>('leggero');
  const [suspension, setSuspension] = React.useState<'standard' | 'sport'>('standard');
  const [autoExit, setAutoExit] = React.useState(false);
  const [trackMode, setTrackMode] = React.useState(false);
  const [towingMode, setTowingMode] = React.useState(false);
  const popup = usePopup();

  const handleTitleClick = (title: keyof typeof descriptions) => {
    const description = descriptions[title];
    if (description) {
        popup.showPopup({ title, description });
    }
  };


  return (
    <div className="space-y-4">
      <SettingsRow title="Accelerazione">
        <SegmentedControl
          options={[
            { value: 'soft', label: 'Soft' },
            { value: 'standard', label: 'Standard' },
            { value: 'insane', label: 'Insane' },
          ]}
          value={acceleration}
          onChange={setAcceleration}
        />
      </SettingsRow>
      <SettingsRow title="Guida e controllo" showInfo description="(Solo veicoli Performance) Regola il sistema di sospensioni in tempo reale.">
        <SegmentedControl
          options={[
            { value: 'standard', label: 'Standard' },
            { value: 'sport', label: 'Sport' },
          ]}
          value={suspension}
          onChange={setSuspension}
        />
      </SettingsRow>
      <SettingsRow title="Peso sterzo">
        <SegmentedControl
          options={[
            { value: 'leggero', label: 'Leggero' },
            { value: 'standard', label: 'Standard' },
            { value: 'pesante', label: 'Pesante' },
          ]}
          value={steering}
          onChange={setSteering}
        />
      </SettingsRow>
      
      <SettingsRow title="Modalità Track" description="Abilita impostazioni specifiche per la guida in pista.">
          <ToggleButton checked={trackMode} onChange={setTrackMode} />
      </SettingsRow>
      
      <SettingsRow title="Modalità rimorchio" description="Deve essere attivata quando si traina un rimorchio.">
          <ToggleButton checked={towingMode} onChange={setTowingMode} />
      </SettingsRow>

      <SettingsRow title="Marcia auto (Beta)" description="Permette al veicolo di selezionare automaticamente D o R in base all'ambiente circostante.">
        <ToggleButton checked={autoExit} onChange={setAutoExit} />
      </SettingsRow>
      
      <div className="pt-4 border-t border-gray-200 mt-4 cursor-pointer" onClick={() => handleTitleClick('Partenza con scarsa aderenza')}>
        <h3 className="font-medium text-gray-800">Partenza con scarsa aderenza</h3>
        <p className="text-gray-500 text-xs mt-1">Utilizzare la funzione per liberare il veicolo bloccato nella neve, nella sabbia o nel fango.</p>
      </div>
    </div>
  );
};

export default Dynamics;