
import React from 'react';
import { Info } from 'lucide-react';
import { usePopup } from '../contexts/PopupContext';
import { descriptions } from '../data/descriptions';

interface SettingsRowProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  showInfo?: boolean;
  border?: boolean;
}

export const SettingsRow: React.FC<SettingsRowProps> = ({ title, description, children, showInfo = false, border=true }) => {
  const popup = usePopup();
  const descriptionText = descriptions[title as keyof typeof descriptions];

  const handleTitleClick = () => {
    if (descriptionText) {
      popup.showPopup({ title, description: descriptionText });
    }
  };

  return (
    <div className={`flex items-center py-5 ${border ? 'border-b border-gray-200' : ''}`}>
      <div className="flex-shrink-0">{children}</div>
      <div className="flex-grow pl-6">
        <div 
          className={`flex items-center space-x-2 ${descriptionText ? 'cursor-pointer' : ''}`}
          onClick={handleTitleClick}
        >
          <h3 className="font-medium text-gray-800">{title}</h3>
          {showInfo && <Info size={16} className="text-gray-400" />}
        </div>
        {description && <p className="text-gray-500 text-xs mt-1">{description}</p>}
      </div>
    </div>
  );
};