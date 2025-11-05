
import React from 'react';
import { Smartphone, ChevronUp, ChevronDown, Star } from 'lucide-react';
import { SettingsRow } from '../components/SettingsRow';
import { ToggleButton } from '../components/ToggleButton';

const Bluetooth: React.FC = () => {
  const [expandedDevice, setExpandedDevice] = React.useState<string | null>('iPhone 13 Prova');
  const [reduceFanSpeed, setReduceFanSpeed] = React.useState(true);

  const toggleExpand = (deviceName: string) => {
    setExpandedDevice(expandedDevice === deviceName ? null : deviceName);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold border-b border-gray-200 pb-4">Dispositivi abbinati</h2>
      
      <div className="bg-gray-100 rounded-lg">
        <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => toggleExpand('iPhone 13 Prova')}>
          <div className="flex items-center space-x-4">
            <Smartphone size={24} />
            <div>
              <div className="flex items-center space-x-2">
                <p className="font-medium">iPhone 13 Prova</p>
                <Star size={14} className="text-yellow-400 fill-current" />
              </div>
              <p className="text-xs text-gray-500">Non connesso</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-blue-500">Connetti</span>
            {expandedDevice === 'iPhone 13 Prova' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
        {expandedDevice === 'iPhone 13 Prova' && (
          <div className="px-4 pb-4 border-t border-gray-200 space-y-4">
            <SettingsRow title="Dispositivo prioritario" border={false} description="il veicolo tenterà di connettersi al dispositivo prioritario prima degli altri quando usa i seguenti profili">
              <ToggleButton checked={true} onChange={()=>{}} />
            </SettingsRow>
            <SettingsRow title="Sincronizza contatti e chiamate recenti" border={false}>
              <ToggleButton checked={false} onChange={()=>{}} />
            </SettingsRow>
            <SettingsRow title="Sincronizza messaggi" border={false}>
              <ToggleButton checked={false} onChange={()=>{}} />
            </SettingsRow>
             <p className="text-sm text-gray-500 pt-2">Segnale acustico alla ricezione di nuovi messaggi</p>
            <div className="flex justify-end space-x-4">
              <button className="text-sm text-gray-500 font-medium">Scollegamento</button>
              <button className="text-sm bg-gray-200/75 hover:bg-gray-300/75 font-medium px-4 py-1.5 rounded-md">Dimentica</button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-100 rounded-lg">
        <div className="p-4 flex justify-between items-center cursor-pointer" onClick={() => toggleExpand('iPhone-DT2FYDY679')}>
          <div className="flex items-center space-x-4">
            <Smartphone size={24} />
            <div>
              <p className="font-medium">iPhone-DT2FYDY679</p>
              <p className="text-xs text-gray-500">Non connesso</p>
            </div>
          </div>
           <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-blue-500">Connetti</span>
            {expandedDevice === 'iPhone-DT2FYDY679' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
        {/* Expanded content for second device would go here */}
      </div>

      <SettingsRow title="Riduci la velocità della ventola during le chiamate" description="Il climatizzatore deve essere impostato su Auto. Le impostazioni verranno ripristinate al termine della chiamata.">
        <ToggleButton checked={reduceFanSpeed} onChange={setReduceFanSpeed} />
      </SettingsRow>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="font-medium" >Dispositivi nelle vicinanze</h3>
        <p className="text-xs text-gray-500 mt-2">Prima che sia possibile aggiungere il dispositivo, assicurati che sia acceso e rilevabile.</p>
        <p className="text-xs text-gray-500 mt-2">È possibile abbinare i controller wireless se supportano Bluetooth Classic. Consultare il manuale d'uso per informazioni aggiuntive sulla compatibilità dei controller.</p>
      </div>

    </div>
  );
};

export default Bluetooth;
