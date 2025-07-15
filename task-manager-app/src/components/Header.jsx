import React from 'react';
import { Target } from 'lucide-react';

const Header = () => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
          <Target className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-white">Task Manager</h1>
      </div>
      <p className="text-gray-300 text-lg">Stay organized and productive</p>
    </div>
  );
};

export default Header;