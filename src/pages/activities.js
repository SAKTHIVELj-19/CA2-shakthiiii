import React from 'react';
import { useActivities } from '../context/ActivityContext';
import { Link } from 'react-router-dom';

const Activities = () => {
  const { state } = useActivities();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Valid Activities</h1>
      <ul>
        {state.activities.map((item) => (
          <li key={item.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
            <h3>{item.name}</h3>
            <p>Steps: {item.steps} | Calories: {item.caloriesBurned}</p>
            <p>Status: {item.goalAchieved ? 'Goal Achieved ✅' : 'Goal Missed ❌'}</p>
            <Link to={`/activities/${item.id}`}>View Full Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;