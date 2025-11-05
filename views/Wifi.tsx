
import React from 'react';
import { ToggleButton } from '../components/ToggleButton';
import { Wifi as WifiIcon, Lock, RefreshCw } from 'lucide-react';

const Wifi: React.FC = () => {
    const [wifiEnabled, setWifiEnabled] = React.useState(true);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4">
        <div className="flex items-center space-x-3">
          <WifiIcon size={24}/>
          <div>
            <p className="font-medium">Wi-Fi</p>
            <p className="text-xs text-gray-500">0c:29:8f:17:c4:22</p>
          </div>
        </div>
        <ToggleButton checked={wifiEnabled} onChange={setWifiEnabled} />
      </div>

      <button className="text-blue-500 text-sm font-medium">Aggiungi rete Wi-Fi nascosta</button>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-gray-500">
            <span className="text-sm">Ricerca reti Wi-Fi in corso</span>
            <RefreshCw size={16} className="animate-spin" />
        </div>
        <button className="text-blue-500 text-sm font-medium">Aggiorna</button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100">
            <span className="text-sm font-medium">B628_F2E4</span>
            <div className="flex items-center space-x-2 text-gray-500"><Lock size={16} /><WifiIcon size={20} /></div>
        </div>
         <div className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100">
            <span className="text-sm font-medium">B628_F2E4_5G</span>
            <div className="flex items-center space-x-2 text-gray-500"><Lock size={16} /><WifiIcon size={20} /></div>
        </div>
         <div className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100">
            <span className="text-sm font-medium">BBBELL-E070_5GHz-2G</span>
            <div className="flex items-center space-x-2 text-gray-500"><Lock size={16} /><WifiIcon size={20} /></div>
        </div>
         <div className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100">
            <span className="text-sm font-medium">BBBELL-E070</span>
            <div className="flex items-center space-x-2 text-gray-500"><Lock size={16} /><WifiIcon size={20} /></div>
        </div>
      </div>

    </div>
  );
};

export default Wifi;
