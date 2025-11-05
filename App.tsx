
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { menuItems } from './constants';
import type { MenuItemKey } from './types';
import Controls from './views/Controls';
import Dynamics from './views/Dynamics';
import Charging from './views/Charging';
import Autopilot from './views/Autopilot';
import Locks from './views/Locks';
import Lights from './views/Lights';
import Display from './views/Display';
import Trips from './views/Trips';
import Navigation from './views/Navigation';
import Schedule from './views/Schedule';
import Security from './views/Security';
import Service from './views/Service';
import Software from './views/Software';
import Wifi from './views/Wifi';
import Bluetooth from './views/Bluetooth';
import Upgrade from './views/Upgrade';
import { User, Download, Bell, Signal } from 'lucide-react';
import InfoPopup from './components/InfoPopup';

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MenuItemKey>('Assistenza');

  const renderContent = () => {
    switch (activeMenu) {
      case 'Comandi':
        return <Controls />;
      case 'Dinamica':
        return <Dynamics />;
      case 'Ricarica':
        return <Charging />;
      case 'Autopilot':
        return <Autopilot />;
      case 'Blocchi':
        return <Locks />;
      case 'Luci':
        return <Lights />;
      case 'Display':
        return <Display />;
      case 'Viaggi':
        return <Trips />;
      case 'Navigazione':
        return <Navigation />;
      case 'Imposta':
        return <Schedule />;
      case 'Sicurezza':
        return <Security />;
      case 'Assistenza':
        return <Service />;
      case 'Software':
        return <Software />;
      case 'Wi-Fi':
        return <Wifi />;
      case 'Bluetooth':
        return <Bluetooth />;
      case 'Upgrade':
        return <Upgrade />;
      default:
        return <div className="p-8">Select a menu item</div>;
    }
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col text-gray-800 overflow-hidden">
      <InfoPopup />
      <header className="flex justify-between items-center px-6 py-3 border-b border-gray-200 flex-shrink-0">
        <div className="w-1/3">
          <input 
            type="text" 
            placeholder="Tesla Model 3 Highland IT"
            className="bg-gray-100 text-sm rounded-md px-4 py-1.5 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
        </div>
        <div className="w-1/3 flex justify-center items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 text-sm">
            <User size={16} />
            <span>ModERD</span>
          </div>
          <Download size={20} className="cursor-pointer text-gray-600" />
          <Bell size={20} className="cursor-pointer text-gray-600" />
        </div>
        <div className="w-1/3 flex justify-end items-center space-x-2 text-xs">
          <span className="text-gray-600">LTE</span>
          <Signal size={16} className="text-gray-600" />
        </div>
      </header>
      
      <div className="flex flex-grow overflow-hidden">
        <aside className="w-64 flex-shrink-0 overflow-y-auto scrollbar-hide py-4 pl-4">
          <Sidebar menuItems={menuItems} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </aside>
        <main className="flex-grow overflow-y-auto scrollbar-hide p-8 pr-12 bg-[#F9F9F9]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;