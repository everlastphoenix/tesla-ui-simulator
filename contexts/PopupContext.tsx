
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface PopupContent {
  title: string;
  description: string;
}

interface PopupContextType {
  isOpen: boolean;
  content: PopupContent | null;
  showPopup: (content: PopupContent) => void;
  hidePopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<PopupContent | null>(null);

  const showPopup = (newContent: PopupContent) => {
    setContent(newContent);
    setIsOpen(true);
  };

  const hidePopup = () => {
    setIsOpen(false);
    // Delay clearing content to allow for fade-out animations if any
    setTimeout(() => setContent(null), 300);
  };

  return (
    <PopupContext.Provider value={{ isOpen, content, showPopup, hidePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};
