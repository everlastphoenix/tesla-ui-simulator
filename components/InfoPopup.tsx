
import React from 'react';
import { usePopup } from '../contexts/PopupContext';
import { X } from 'lucide-react';

const InfoPopup: React.FC = () => {
  const { isOpen, content, hidePopup } = usePopup();

  if (!isOpen || !content) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={hidePopup}
    >
      <div 
        className="bg-white p-6 rounded-lg shadow-xl w-[450px] text-black relative"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing the popup
      >
        <button onClick={hidePopup} className="absolute top-4 right-4 text-gray-400 hover:text-black">
          <X size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">{content.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{content.description}</p>
      </div>
    </div>
  );
};

export default InfoPopup;
