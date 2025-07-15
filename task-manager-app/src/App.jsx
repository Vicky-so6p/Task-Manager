import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import FilterControls from './components/FilterControls';
import Statistics from './components/Statistics';
import TaskList from './components/TaskList';
import EmptyState from './components/EmptyState';
import './styles/globals.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete design specification", completed: true },
    { id: 2, title: "Build task manager interface", completed: false },
    { id: 3, title: "Add animations and styling", completed: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [animatingTasks, setAnimatingTasks] = useState(new Set());

  const addTask = () => {
    if (inputValue.trim()) {
      const newTask = {
        id: Date.now(),
        title: inputValue.trim(),
        completed: false
      };
      setTasks([newTask, ...tasks]);
      setInputValue('');
    }
  };

  const toggleTask = (id) => {
    setAnimatingTasks(prev => new Set(prev).add(id));
    setTimeout(() => {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
      setAnimatingTasks(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 150);
  };

  const deleteTask = (id) => {
    setAnimatingTasks(prev => new Set(prev).add(id));
    setTimeout(() => {
      setTasks(tasks.filter(task => task.id !== id));
      setAnimatingTasks(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 300);
  };

  const getFilteredTasks = () => {
    return tasks.filter(task => {
      if (filter === 'active') return !task.completed;
      if (filter === 'completed') return task.completed;
      return true;
    });
  };

  const filteredTasks = getFilteredTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-4">
      <div className="max-w-2xl mx-auto">
        <Header />
        
        <TaskInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          onAddTask={addTask}
        />
        
        <FilterControls
          filter={filter}
          setFilter={setFilter}
        />
        
        <Statistics tasks={tasks} />
        
        {filteredTasks.length === 0 ? (
          <EmptyState filter={filter} />
        ) : (
          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            animatingTasks={animatingTasks}
          />
        )}
      </div>
    </div>
  );
};

export default App;