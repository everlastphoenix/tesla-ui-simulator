
import React from 'react';
import { CheckSquare } from 'lucide-react';

interface TripCardProps {
  title: string;
  distance: string;
  duration?: string;
  totalEnergy: string;
  avgEnergy: string;
  showInCards: boolean;
}

const TripCard: React.FC<TripCardProps> = ({ title, distance, duration, totalEnergy, avgEnergy, showInCards }) => (
  <div className="border-b border-gray-200 pb-4">
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-center space-x-2">
        <h3 className="text-blue-500 font-medium">{title}</h3>
        <button className="text-blue-500 text-sm font-medium">Ripristina</button>
      </div>
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <CheckSquare size={16} className={showInCards ? 'text-blue-500' : 'text-gray-400'}/>
        <span>Mostra nella scheda Viaggi</span>
      </div>
    </div>
    <div className="grid grid-cols-3 text-center">
      <div>
        <p className="text-gray-500 text-sm">Distanza</p>
        <p className="text-2xl">{distance}</p>
      </div>
      {duration && (
        <div>
          <p className="text-gray-500 text-sm">Durata</p>
          <p className="text-2xl">{duration}</p>
        </div>
      )}
      <div>
        <p className="text-gray-500 text-sm">{duration ? 'Energia Media' : 'Energia Totale'}</p>
        <p className="text-2xl">{totalEnergy}</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm">{duration ? '' : 'Energia Media'}</p>
        {duration ? null : <p className="text-2xl">{avgEnergy}</p>}
      </div>
    </div>
  </div>
);

const Trips: React.FC = () => {
  return (
    <div className="space-y-6">
      <TripCard 
        title="Guida corrente"
        distance="0 km"
        duration="6 min"
        totalEnergy="0 Wh/km"
        avgEnergy=""
        showInCards={true}
      />
      <TripCard 
        title="Da ricarica"
        distance="35 km"
        totalEnergy="7 kWh"
        avgEnergy="191 Wh/km"
        showInCards={true}
      />
      <TripCard 
        title="Viaggio A"
        distance="619 km"
        totalEnergy="138 kWh"
        avgEnergy="223 Wh/km"
        showInCards={true}
      />
      <TripCard 
        title="Viaggio B"
        distance="3.036 km"
        totalEnergy="592 kWh"
        avgEnergy="195 Wh/km"
        showInCards={true}
      />
      <div className="pt-4 flex justify-between items-center">
        <div>
            <p className="text-gray-500 text-sm">Contachilometri</p>
            <p className="text-lg">10.742 km</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-4 h-4 border border-gray-400 rounded-sm"></div>
            <span>Mostra nella scheda Viaggi</span>
        </div>
      </div>
    </div>
  );
};

export default Trips;
