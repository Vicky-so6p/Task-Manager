import React from 'react';

const EmptyState = ({ filter }) => {
  const getMessage = () => {
    switch (filter) {
      case 'active':
        return 'No active tasks!';
      case 'completed':
        return 'No completed tasks!';
      default:
        return 'No tasks yet. Add one above!';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center shadow-2xl border border-white/20">
      <div className="text-gray-400 text-lg">{getMessage()}</div>
    </div>
  );
};

export default EmptyState;