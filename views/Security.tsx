import React from 'react';
import { SettingsRow } from '../components/SettingsRow';
import { ToggleButton } from '../components/ToggleButton';
import { SegmentedControl } from '../components/SegmentedControl';
import { Info } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';
import { descriptions } from '../data/descriptions';

const Security: React.FC = () => {
    const [sentryMode, setSentryMode] = React.useState<'on' | 'off'>('on');
    const [cameraDetection, setCameraDetection] = React.useState(true);
    const [disableSentrySounds, setDisableSentrySounds] = React.useState(false);
    const [liveWebcam, setLiveWebcam] = React.useState(true);
    const [dashcamMode, setDashcamMode] = React.useState<'auto' | 'off' | 'manuale'>('auto');
    const [valetMode, setValetMode] = React.useState(false);
    const [pinToDrive, setPinToDrive] = React.useState(false);
    const [gloveboxPin, setGloveboxPin] = React.useState(false);
    const [speedLimitMode, setSpeedLimitMode] = React.useState(false);
    const [joeMode, setJoeMode] = React.useState(false);
    const [parkingAssistSounds, setParkingAssistSounds] = React.useState(true);
    const [cabinOverheatProtection, setCabinOverheatProtection] = React.useState<'off' | 'no_ac' | 'on'>('on');
    const [overheatActivationTemp, setOverheatActivationTemp] = React.useState<'40'>('40');
    const [cabinIntrusion, setCabinIntrusion] = React.useState(true);
    const [powerOff, setPowerOff] = React.useState(false);
    const [blindSpotCam, setBlindSpotCam] = React.useState(true);
    const popup = usePopup();

    const handleTitleClick = (title: keyof typeof descriptions) => {
      const description = descriptions[title];
      if (description) {
          popup.showPopup({ title, description });
      }
    };

  return (
    <div className="space-y-4">
      <div className="py-5 border-b border-gray-200">
        <div 
          className="flex items-center space-x-2 mb-4 cursor-pointer w-fit" 
          onClick={() => handleTitleClick('Modalità sentinella')}
        >
          <h3 className="font-medium text-gray-800">Modalità Sentinella</h3>
          <Info size={16} className="text-gray-400" />
        </div>
        <div className="flex justify-between items-start">
            <div className="w-fit"> {/* <-- ECCO LA MODIFICA */}
              <SegmentedControl
                  options={[{ value: 'off', label: 'Off' }, { value: 'on', label: 'On' }]}
                  value={sentryMode}
                  onChange={setSentryMode}
              />
              <p className="text-gray-500 text-xs mt-2 max-w-[200px]">
                  La modalità Sentinella si attiverà quando esci dal veicolo
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
                <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 bg-gray-200 rounded-sm border-transparent text-blue-600 focus:ring-blue-500 focus:ring-offset-0" />
                    <span>Escludi abitazione</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 bg-gray-200 rounded-sm border-transparent text-blue-600 focus:ring-blue-500 focus:ring-offset-0" />
                    <span>Escludi lavoro</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" className="form-checkbox h-5 w-5 bg-gray-200 rounded-sm border-transparent text-blue-600 focus:ring-blue-500 focus:ring-offset-0" />
                    <span>Escludi preferiti</span>
                </label>
            </div>
        </div>
      </div>

      <SettingsRow title="Rilevamento con telecamera" showInfo>
        <ToggleButton checked={cameraDetection} onChange={setCameraDetection} />
      </SettingsRow>
      
      <SettingsRow title="Disattiva suoni Sentinella" showInfo>
        <ToggleButton checked={disableSentrySounds} onChange={setDisableSentrySounds} />
      </SettingsRow>

      <SettingsRow title="Visualizza webcam live tramite app mobile">
        <ToggleButton checked={liveWebcam} onChange={setLiveWebcam} />
      </SettingsRow>

      <SettingsRow title="Telecamera per punto cieco automatica" description="Mostra telecamera laterale su indicatore di cambio direzione." showInfo>
        <ToggleButton checked={blindSpotCam} onChange={setBlindSpotCam} />
      </SettingsRow>

      <div className="py-5 border-b border-gray-200">
        <div className="flex items-center space-x-2 mb-4 cursor-pointer w-fit" onClick={() => handleTitleClick('Dashcam')}>
            <h3 className="font-medium text-gray-800">Dashcam</h3>
            <Info size={16} className="text-gray-400" />
        </div>
        <div className="flex items-center space-x-2">
         <SegmentedControl
            options={[
                {value: 'off', label: 'Off'},
                {value: 'manuale', label: 'Manuale'},
                {value: 'auto', label: 'Auto'},
            ]}
            value={dashcamMode}
            onChange={setDashcamMode}
        />
        <button className="bg-blue-600 text-white px-4 py-2.5 text-sm font-medium rounded-md hover:bg-blue-700">
            Col clacson
        </button>
        </div>
      </div>
      
      <div className="py-5 flex justify-center items-center space-x-4 border-b border-gray-200">
        <button className="bg-gray-200/75 hover:bg-gray-300/75 text-gray-800 font-medium py-2.5 px-6 rounded-md text-sm">
            Cancella Clips Dashcam
        </button>
        <button className="bg-gray-200/75 hover:bg-gray-300/75 text-gray-800 font-medium py-2.5 px-6 rounded-md text-sm">
            Formattare unità USB
        </button>
      </div>
      
      <SettingsRow title="Modalità Valet" description="Limita l'accelerazione, la velocità e blocca vano bagagli.">
        <ToggleButton checked={valetMode} onChange={setValetMode} />
      </SettingsRow>

      <SettingsRow title="PIN per guidare" description="Richiede l'inserimento di un PIN a 4 cifre per poter guidare il veicolo.">
        <ToggleButton checked={pinToDrive} onChange={setPinToDrive} />
      </SettingsRow>
      
      <SettingsRow title="PIN porta oggetti" description="Protegge l'apertura del vano portaoggetti con un codice.">
        <ToggleButton checked={gloveboxPin} onChange={setGloveboxPin} />
      </SettingsRow>

      <SettingsRow title="Modalità Limite di velocità" description="Limita la velocità massima e l'accelerazione; richiede un PIN.">
        <ToggleButton checked={speedLimitMode} onChange={setSpeedLimitMode} />
      </SettingsRow>

      <SettingsRow title="Joe Mode" description="Riduce il volume dei segnali acustici non critici per la sicurezza.">
        <ToggleButton checked={joeMode} onChange={setJoeMode} />
      </SettingsRow>

      <SettingsRow title="Suoni Sistema Assistenza al Parcheggio">
        <ToggleButton checked={parkingAssistSounds} onChange={setParkingAssistSounds} />
      </SettingsRow>

      <SettingsRow 
        title="Protezione Surriscaldamento Abitacolo" 
        description="Mantiene la temperatura dell'abitacolo a un livello di sicurezza. 'On' usa l'A/C, 'Senza A/C' usa solo la ventola."
      >
        <SegmentedControl
            options={[
                {value: 'off', label: 'Off'},
                {value: 'no_ac', label: 'Senza A/C'},
                {value: 'on', label: 'On'}
            ]}
            value={cabinOverheatProtection}
            onChange={setCabinOverheatProtection}
        />
      </SettingsRow>
      
      {cabinOverheatProtection !== 'off' && (
          <SettingsRow title="Attiva a">
            <SegmentedControl
              options={[
                { value: '35', label: '35°C' },
                { value: '40', label: '40°C' },
                { value: '45', label: '45°C' },
              ]}
              value={overheatActivationTemp}
              onChange={setOverheatActivationTemp as any}
            />
          </SettingsRow>
      )}

      <SettingsRow title="Inclinazione/Intrusione" description="Attiva l'allarme se rileva movimento interno o inclinazione del veicolo.">
        <ToggleButton checked={cabinIntrusion} onChange={setCabinIntrusion} />
      </SettingsRow>
      
      <SettingsRow title="Spegnimento" description="Spegne il veicolo quando non in movimento." border={false}>
        <ToggleButton checked={powerOff} onChange={setPowerOff} />
      </SettingsRow>

    </div>
  );
};

export default Security;