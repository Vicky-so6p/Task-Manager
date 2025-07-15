import React from 'react';
import { Circle, CheckCircle2, List } from 'lucide-react';

const FilterControls = ({ filter, setFilter }) => {
  const filterOptions = [
    { key: 'all', label: 'All Tasks', icon: List },
    { key: 'active', label: 'Active', icon: Circle },
    { key: 'completed', label: 'Completed', icon: CheckCircle2 }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-2xl border border-white/20">
      <div className="flex flex-wrap gap-2 justify-center">
        {filterOptions.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              filter === key
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                : 'bg-white/20 text-gray-300 hover:bg-white/30'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterControls;