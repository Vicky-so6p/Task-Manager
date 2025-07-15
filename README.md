# Task Manager Application

## Project Overview

This is a simple, yet functional, Task Manager application built with React, designed to help users organize and manage their daily tasks efficiently. The application provides a clean user interface to add, view, filter, mark as complete, and delete tasks.

This project was developed as part of a Frontend Task assignment to demonstrate proficiency in core JavaScript concepts within a modern frontend framework, focusing on state management, list rendering, user interaction, and UI logic.

## Features

* **Add New Tasks**: Quickly add new tasks via an input field.
* **Toggle Completion Status**: Mark tasks as completed or active with a simple click.
* **Delete Tasks**: Remove tasks from the list.
* **Filter Tasks**: View all tasks, only active tasks, or only completed tasks.
* **Real-time Statistics**: Displays the total number of tasks, completed tasks, and remaining tasks, along with completion percentage.
* **Dynamic UI**: Includes subtle animations for task addition, completion, and deletion, enhancing user experience.
* **Empty State Handling**: Provides a clear message when there are no tasks to display based on the selected filter.

## Technologies Used

* **React**: A JavaScript library for building user interfaces.
* **Vite**: A fast build tool that provides a rapid development experience for modern web projects.
* **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs. Integrated using `@tailwindcss/vite` for optimized JIT compilation.
* **Lucide React**: A collection of beautiful open-source icons, used for various UI elements like checkboxes, add buttons, and trash icons.

## Project Structure

The project follows a component-based architecture for maintainability and scalability:
```
src/
├── components/
│   ├── Header.jsx
│   ├── TaskInput.jsx
│   ├── FilterControls.jsx
│   ├── Statistics.jsx
│   ├── TaskItem.jsx
│   ├── TaskList.jsx
│   └── EmptyState.jsx
├── styles/
│   └── globals.css
├── App.jsx
└── main.jsx
```

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

1.  **Clone the repository (if applicable):**
    ```bash
    git clone <repository-url>
    cd task-manager-app # Or your project folder name
    ```

2.  **Install dependencies:**
    Navigate to the project root directory in your terminal and install all required Node.js packages:
    ```bash
    npm install
    ```
    This will install: `react`, `react-dom`, `lucide-react`, `tailwindcss`, `@vitejs/plugin-react`, and `@tailwindcss/vite`.

3.  **Run the development server:**
    Once dependencies are installed, start the development server:
    ```bash
    npm run dev
    ```
    The application will typically open in your browser at `http://localhost:xxxx`.

## Usage

* **Adding a Task**: Type your task into the input field and click the "Add" button (or press Enter).
* **Marking as Complete**: Click the checkbox next to a task to toggle its completion status.
* **Filtering Tasks**: Use the "All Tasks", "Active", and "Completed" buttons to filter the task list.
* **Deleting a Task**: Click the trash can icon next to a task to remove it.

## Custom Styling and Animations

The application leverages Tailwind CSS for utility-first styling, providing a responsive and modern look. Custom animations are defined in `src/styles/globals.css` using `@keyframes` and applied via CSS classes like `animate-fade-in` to enhance the user experience during task interactions.

## Assignment Objectives Covered

* **View a list of tasks**: Implemented in `TaskList.jsx`.
* **Add a new task**: Handled by `TaskInput.jsx` and `TaskManager.jsx` state logic.
* **Mark a task as completed/toggle**: Logic in `TaskManager.jsx`, rendered by `TaskItem.jsx`.
* **Delete a task**: Logic in `TaskManager.jsx`, handled by `TaskItem.jsx`.
* **Filter tasks**: `FilterControls.jsx` manages filter state, `TaskManager.jsx` applies filtering logic.
* **Empty task list handling**: `EmptyState.jsx` component displays when no tasks match the filter.
* **Unique ID/timestamp**: Tasks are assigned unique IDs using `Date.now()`.
* **Title and Completed properties**: Each task object maintains `title` (string) and `completed` (boolean) properties.

## Future Enhancements (Optional)

* Persistent storage (e.g., Local Storage or a backend API).
* Editing existing tasks.
* Drag-and-drop reordering of tasks.
* Due dates or priorities for tasks.
* User authentication.

---

**Author:**

VIGNESH M
```
www.linkedin.com/in/m-vignesh7 
```
