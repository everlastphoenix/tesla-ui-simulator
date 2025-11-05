// FIX: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export type MenuItemKey = 
  | 'Comandi'
  | 'Dinamica'
  | 'Ricarica'
  | 'Autopilot'
  | 'Blocchi'
  | 'Luci'
  | 'Display'
  | 'Viaggi'
  | 'Navigazione'
  | 'Imposta'
  | 'Sicurezza'
  | 'Assistenza'
  | 'Software'
  | 'Wi-Fi'
  | 'Bluetooth'
  | 'Upgrade';
  
export interface MenuItem {
  key: MenuItemKey;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}