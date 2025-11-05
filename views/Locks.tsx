import React from 'react';
import { Smartphone, CreditCard, Key, Edit, Trash2, User, Plus } from 'lucide-react';
import { SettingsRow } from '../components/SettingsRow';
import { ToggleButton } from '../components/ToggleButton';
import { SegmentedControl } from '../components/SegmentedControl';

const Locks: React.FC = () => {
    const [walkAwayLock, setWalkAwayLock] = React.useState(true);
    const [unlockOnPark, setUnlockOnPark] = React.useState(true);
    const [childLock, setChildLock] = React.useState<'off' | 'both' | 'left' | 'right'>('off');

    return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Chiavi</h2>
        <button className="flex items-center space-x-2 bg-gray-200/75 hover:bg-gray-300/75 text-gray-800 font-medium py-2.5 px-4 rounded-md">
          <Plus size={16} />
          <span>Aggiungi chiave</span>
        </button>
      </div>
      <div className="bg-gray-100 rounded-lg p-4 space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <CreditCard size={24} className="text-gray-500" />
                <div>
                    <p className="font-medium">Key Card</p>
                    <p className="text-xs text-gray-500">Attiva | Chiova a solliolla / Prova</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
                <button className="hover:text-black"><User size={18} /></button>
                <button className="hover:text-black"><Edit size={18} /></button>
                <button className="hover:text-black"><Trash2 size={18} /></button>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <Smartphone size={24} className="text-gray-500" />
                <div>
                    <p className="font-medium">iPhone 13 Prova</p>
                    <p className="text-xs text-gray-500">09:49 | Apple iPhone 13</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
                <button className="hover:text-black"><User size={18} /></button>
                <button className="hover:text-black"><Edit size={18} /></button>
                <button className="hover:text-black"><Trash2 size={18} /></button>
            </div>
        </div>
         <div className="flex items-center justify-between opacity-50">
            <div className="flex items-center space-x-4">
                <CreditCard size={24} className="text-gray-500" />
                <div>
                    <p className="font-medium">Key Card</p>
                    <p className="text-xs text-gray-500">2 Gifi | Chiovo a schella</p>
                </div>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
                 <button className="hover:text-black"><User size={18} /></button>
                <button className="hover:text-black"><Edit size={18} /></button>
                <button className="hover:text-black"><Trash2 size={18} /></button>
            </div>
        </div>
      </div>
      
      <SettingsRow title="Blocco bambini">
        <SegmentedControl 
            options={[
                {value: 'off', label: 'Off'},
                {value: 'both', label: 'Entrambi'},
                {value: 'left', label: 'Sinistra'},
                {value: 'right', label: 'Destra'}
            ]}
            value={childLock}
            onChange={setChildLock}
        />
      </SettingsRow>
      <SettingsRow title="Blocco portiere dopo allontanamento" description="Bloccare automaticamente le portiere e i vani posteriori quando si esce dal veicolo con la chiave o il telefono.">
          <ToggleButton checked={walkAwayLock} onChange={setWalkAwayLock} />
      </SettingsRow>
       <SettingsRow title="Modalità sblocco portiere conducente" showInfo>
          <ToggleButton checked={false} onChange={() => {}} />
      </SettingsRow>
      <SettingsRow title="Sblocco automatico bagagliaio" showInfo>
          <ToggleButton checked={true} onChange={() => {}} />
      </SettingsRow>
      <SettingsRow title="Sblocco all'innesto della marcia P">
          <ToggleButton checked={unlockOnPark} onChange={setUnlockOnPark} />
      </SettingsRow>
      <SettingsRow title="Notifiche per veicolo rimasto aperto" showInfo>
        <SegmentedControl 
            options={[
                {value: 'off', label: 'Off'},
                {value: 'portiere', label: 'Portiere'},
                {value: 'finestrini', label: 'Portiere & Finestrini'},
            ]}
            value={'finestrini'}
            onChange={() => {}}
        />
      </SettingsRow>
    </div>
  );
};

export default Locks;