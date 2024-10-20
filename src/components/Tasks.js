import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tasks.css';

function Tasks() {
  const [dailyTasks, setDailyTasks] = useState([
    { id: 1, description: 'Play 3 PvP matches', reward: 50, completed: false },
    { id: 2, description: 'Defeat a boss', reward: 100, completed: false },
    { id: 3, description: 'Use 5 cards in battles', reward: 30, completed: false },
  ]);

  const [weeklyTasks, setWeeklyTasks] = useState([
    { id: 4, description: 'Win 10 PvP matches', reward: 200, completed: false },
    { id: 5, description: 'Defeat 5 different bosses', reward: 300, completed: false },
    { id: 6, description: 'Earn 1000 coins', reward: 150, completed: false },
  ]);

  const completeTask = (taskId, isDaily) => {
    const updateTasks = (tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      );

    if (isDaily) {
      setDailyTasks(updateTasks);
    } else {
      setWeeklyTasks(updateTasks);
    }
  };

  const renderTasks = (tasks, isDaily) => (
    <div className="task-list">
      <h3>{isDaily ? 'Daily' : 'Weekly'} Tasks</h3>
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <span>{task.description}</span>
          <span>Reward: {task.reward} coins</span>
          <button
            onClick={() => completeTask(task.id, isDaily)}
            disabled={task.completed}
          >
            {task.completed ? 'Completed' : 'Complete'}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="tasks-container">
      <h2>Tasks</h2>
      {renderTasks(dailyTasks, true)}
      {renderTasks(weeklyTasks, false)}
      <Link to="/" className="back-button">Back to Main Menu</Link>
    </div>
  );
}

export default Tasks;
