import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete, animatingTasks }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 text-center shadow-2xl border border-white/20">
        <div className="text-gray-400 text-lg">No tasks found!</div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          index={index}
          isAnimating={animatingTasks.has(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;