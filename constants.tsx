
import React from 'react';
import type { MenuItem } from './types';
import { 
  SlidersHorizontal, 
  Car, 
  Bolt, 
  Waypoints, 
  Lock, 
  Lightbulb, 
  Monitor, 
  Route, 
  Map, 
  Clock, 
  Shield, 
  Wrench, 
  FileCode, 
  Wifi, 
  Bluetooth, 
  ArrowUpCircle 
} from 'lucide-react';

export const menuItems: MenuItem[] = [
  { key: 'Comandi', label: 'Comandi', icon: SlidersHorizontal },
  { key: 'Dinamica', label: 'Dinamica', icon: Car },
  { key: 'Ricarica', label: 'Ricarica', icon: Bolt },
  { key: 'Autopilot', label: 'Autopilot', icon: Waypoints },
  { key: 'Blocchi', label: 'Blocchi', icon: Lock },
  { key: 'Luci', label: 'Luci', icon: Lightbulb },
  { key: 'Display', label: 'Display', icon: Monitor },
  { key: 'Viaggi', label: 'Viaggi', icon: Route },
  { key: 'Navigazione', label: 'Navigazione', icon: Map },
  { key: 'Imposta', label: 'Imposta', icon: Clock },
  { key: 'Sicurezza', label: 'Sicurezza', icon: Shield },
  { key: 'Assistenza', label: 'Assistenza', icon: Wrench },
  { key: 'Software', label: 'Software', icon: FileCode },
  { key: 'Wi-Fi', label: 'Wi-Fi', icon: Wifi },
  { key: 'Bluetooth', label: 'Bluetooth', icon: Bluetooth },
  { key: 'Upgrade', label: 'Upgrade', icon: ArrowUpCircle },
];
