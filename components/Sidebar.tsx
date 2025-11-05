
import React from 'react';
import type { MenuItem, MenuItemKey } from '../types';

interface SidebarProps {
  menuItems: MenuItem[];
  activeMenu: MenuItemKey;
  setActiveMenu: (menu: MenuItemKey) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ menuItems, activeMenu, setActiveMenu }) => {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => setActiveMenu(item.key)}
              className={`w-full text-left flex items-center space-x-3 px-4 py-2 my-1 rounded-md transition-colors duration-200 ${
                activeMenu === item.key
                  ? 'bg-gray-200 text-gray-900'
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
