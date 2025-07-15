import React from 'react';

const Statistics = ({ tasks }) => {
  const totalCount = tasks.length;
  const completedCount = tasks.filter(task => task.completed).length;
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-6 shadow-2xl border border-white/20">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-white">{totalCount}</div>
          <div className="text-gray-300 text-sm">Total Tasks</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-400">{completedCount}</div>
          <div className="text-gray-300 text-sm">Completed</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-400">{totalCount - completedCount}</div>
          <div className="text-gray-300 text-sm">Remaining</div>
        </div>
      </div>
      {totalCount > 0 && (
        <div className="mt-4">
          <div className="bg-gray-700 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="text-center text-gray-300 text-sm mt-2">
            {progressPercentage}% Complete
          </div>
        </div>
      )}
    </div>
  );
};

export default Statistics;