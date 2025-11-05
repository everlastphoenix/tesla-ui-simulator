
import React from 'react';
import { Plus, X } from 'lucide-react';
import { ToggleButton } from '../components/ToggleButton';

const ScheduleModal: React.FC<{onClose: () => void}> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[450px] text-black relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-black">
                    <X size={20} />
                </button>
                <h2 className="text-xl font-semibold mb-6">Crea programma</h2>
                
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                    <div>
                        <h3 className="font-medium">Precondizionamento</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        <ToggleButton checked={true} onChange={() => {}}/>
                        <span className="text-sm">Inizia alle</span>
                        <div className="bg-gray-100 p-2 rounded-md text-sm">0 : 00</div>
                    </div>
                </div>

                <div className="flex items-center justify-between py-4">
                    <h3 className="font-medium">Ricarica</h3>
                    <div className="flex items-center space-x-2">
                        <ToggleButton checked={false} onChange={() => {}}/>
                        <span className="text-sm">Termina entro</span>
                        <div className="bg-gray-100 p-2 rounded-md text-sm">0 : 15</div>
                    </div>
                </div>

                <div className="flex justify-center space-x-3 my-4 text-sm">
                    {['D', 'L', 'Ma', 'Me', 'G', 'V', 'S'].map(day => (
                        <button key={day} className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 font-medium">{day}</button>
                    ))}
                </div>

                <div className="flex items-center space-x-3 mb-6">
                    <ToggleButton checked={false} onChange={() => {}}/>
                    <span className="text-sm">Ripeti settimanalmente</span>
                </div>
                
                <button className="w-full bg-blue-600/20 text-blue-800 font-semibold py-2.5 rounded-md">
                    Salva
                </button>
            </div>
        </div>
    );
};


const Schedule: React.FC = () => {
    const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <div className="space-y-6">
      {modalOpen && <ScheduleModal onClose={() => setModalOpen(false)} />}
      <div className="border-b border-gray-200 pb-4">
        <h3 className="font-medium" >Imposta</h3>
        <p className="text-sm text-gray-500">Località attuale</p>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">Precondizionamento</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm">Regola automaticamente la temperatura dell'abitacolo e riscalda la batteria per un tempo prestabilito.</p>
        </div>
        <button onClick={() => setModalOpen(true)} className="p-2 bg-gray-200/75 hover:bg-gray-300/75 rounded-md">
          <Plus size={20} />
        </button>
      </div>
      
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">Ricarica</h3>
          <p className="text-xs text-gray-500 mt-1 max-w-sm">Pianifica l'avvio e/o l'interruzione della ricarica del veicolo.</p>
        </div>
        <button onClick={() => setModalOpen(true)} className="p-2 bg-gray-200/75 hover:bg-gray-300/75 rounded-md">
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default Schedule;
