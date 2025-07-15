import React from 'react';
import { Check, Trash2 } from 'lucide-react';

const TaskItem = ({ task, onToggle, onDelete, index, isAnimating }) => {
  return (
    <div
      className={`bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20 transform transition-all duration-300 hover:scale-102 hover:shadow-3xl ${
        isAnimating ? 'animate-pulse opacity-50' : ''
      }`}
      style={{
        animation: `slideIn 0.3s ease-out ${index * 0.1}s both`
      }}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => onToggle(task.id)}
          className={`relative w-6 h-6 rounded-full border-2 transition-all duration-200 ${
            task.completed
              ? 'bg-green-500 border-green-500'
              : 'border-gray-400 hover:border-blue-400'
          }`}
        >
          {task.completed && (
            <Check className="w-4 h-4 text-white absolute top-0.5 left-0.5" />
          )}
        </button>
        
        <span className={`flex-1 text-lg transition-all duration-200 ${
          task.completed 
            ? 'text-gray-400 line-through' 
            : 'text-white'
        }`}>
          {task.title}
        </span>
        
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/20 rounded-lg transition-all duration-200"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;