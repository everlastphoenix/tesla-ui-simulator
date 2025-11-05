
import React from 'react';
import { SettingsRow } from '../components/SettingsRow';
import { ToggleButton } from '../components/ToggleButton';
import { SegmentedControl } from '../components/SegmentedControl';

const Autopilot: React.FC = () => {
  const [navigateOnAutopilot, setNavigateOnAutopilot] = React.useState(true);
  const [trafficLightControl, setTrafficLightControl] = React.useState(true);
  const [laneDeparturePrevention, setLaneDeparturePrevention] = React.useState(true);
  const [forwardCollisionWarning, setForwardCollisionWarning] = React.useState<'ritardato' | 'intermedio' | 'anticipato'>('intermedio');
  const [automaticEmergencyBraking, setAutomaticEmergencyBraking] = React.useState(true);
  const [obstacleAwareAcceleration, setObstacleAwareAcceleration] = React.useState(true);
  const [smartSummon, setSmartSummon] = React.useState(true);
  const [autopark, setAutopark] = React.useState(true);
  const [laneAssistType, setLaneAssistType] = React.useState<'avvertenza'|'assistenza'>('assistenza');

  return (
    <div className="space-y-4">
      <SettingsRow title="Sistema di Autosterzatura (Beta)" showInfo>
        <SegmentedControl
          options={[
            { value: 'adaptive', label: 'Cruise Control adattivo' },
            { value: 'autosteer', label: 'Autosterzatura (Beta)' },
          ]}
          value="autosteer"
          onChange={() => {}}
        />
      </SettingsRow>
      <p className="text-xs text-gray-500 -mt-2 pb-4 border-b border-gray-200">
        Il Sistema di Autosterzatura (Beta) non funzionerà più, se appare un avviso dell'Autopilot per utilizzo improprio per 5 volte. Nessuno di tali eventi è stato registrato in questo veicolo.
      </p>
      
      <SettingsRow title="Attivazione Autopilot" showInfo>
        <SegmentedControl
          options={[
            { value: 'single', label: 'Singolo click' },
            { value: 'double', label: 'Doppio click' },
          ]}
          value="double"
          onChange={() => {}}
        />
      </SettingsRow>

      <SettingsRow title="Navigare con Autopilot (Beta)" description="Ulteriori informazioni in Tesla Tutorials" showInfo>
        <ToggleButton checked={navigateOnAutopilot} onChange={setNavigateOnAutopilot} />
      </SettingsRow>

      <div className="pl-8 pb-4 border-b border-gray-200">
        <button className="bg-gray-200/75 hover:bg-gray-300/75 text-gray-800 font-medium py-2 px-4 rounded-md">
          Personalizzare Navigazione Autopilot
        </button>
      </div>

      <SettingsRow title="Controllo dei semafori e degli stop" showInfo>
        <ToggleButton checked={trafficLightControl} onChange={setTrafficLightControl} />
      </SettingsRow>
      
      <SettingsRow title="Velocità impostata" showInfo>
        <SegmentedControl
          options={[
            { value: 'limit', label: 'Limite di velocità' },
            { value: 'current', label: 'Velocità attuale' },
          ]}
          value="current"
          onChange={() => {}}
        />
      </SettingsRow>

      <SettingsRow title="Sistema prevenzione uscita di corsia" description="Controlla come il veicolo interviene se si avvicina o oltrepassa l'estremità della corsia.">
        <ToggleButton checked={laneDeparturePrevention} onChange={setLaneDeparturePrevention} />
      </SettingsRow>

      <SettingsRow title="Tipo di Intervento Lane Assist" description="Avvertenza: vibrazione del volante. Assistenza: sterzata correttiva.">
        <SegmentedControl 
          options={[
            { value: 'avvertenza', label: 'Avvertenza' },
            { value: 'assistenza', label: 'Assistenza' },
          ]}
          value={laneAssistType}
          onChange={setLaneAssistType}
        />
      </SettingsRow>
      
      <SettingsRow title="Sistema di avvertimento di collisione frontale" description="Regola la sensibilità dell'avviso visivo/acustico.">
        <SegmentedControl 
          options={[
            { value: 'ritardato', label: 'Ritardato' },
            { value: 'intermedio', label: 'Intermedio' },
            { value: 'anticipato', label: 'Anticipato' },
          ]}
          value={forwardCollisionWarning}
          onChange={setForwardCollisionWarning}
        />
      </SettingsRow>

      <SettingsRow title="Frenata Automatica d'Emergenza" description="Azione automaticamente i freni se una collisione è ritenuta imminente.">
        <ToggleButton checked={automaticEmergencyBraking} onChange={setAutomaticEmergencyBraking} />
      </SettingsRow>

      <SettingsRow title="Accelerazione con Rilevamento ostacoli" description="Riduco la coppia/applica i freni se rileva un oggetto nel percorso a bassa velocità.">
        <ToggleButton checked={obstacleAwareAcceleration} onChange={setObstacleAwareAcceleration} />
      </SettingsRow>

      <SettingsRow title="ASS (Actually Smart Summon)" description="Attivazione della funzione Richiamo automatico e Di fatto Smart Summon (Beta).">
        <ToggleButton checked={smartSummon} onChange={setSmartSummon} />
      </SettingsRow>

      <SettingsRow title="Autopark" description="Abilitazione del sistema che parcheggia in parallelo o perpendicolare." border={false}>
        <ToggleButton checked={autopark} onChange={setAutopark} />
      </SettingsRow>

    </div>
  );
};

export default Autopilot;