import React, { createContext, useContext, useReducer } from 'react';

const ActivityContext = createContext();

const initialState = {
  activities: [
    { id: 1, name: 'Morning Run', steps: 6000, caloriesBurned: 400, workoutMinutes: 30, goalAchieved: true, date: '2024-05-20' },
    { id: 2, name: 'Yoga', steps: 500, caloriesBurned: 150, workoutMinutes: 45, goalAchieved: false, date: '2024-05-21' },
    { id: 3, name: 'Cycling', steps: 0, caloriesBurned: 500, workoutMinutes: 60, goalAchieved: true, date: '2024-05-22' }
  ]
};

const activityReducer = (state, action) => {
  switch (action.type) {
    default: return state;
  }
};

export const ActivityProvider = ({ children }) => {
  const [state, dispatch] = useReducer(activityReducer, initialState);
  return (
    <ActivityContext.Provider value={{ state, dispatch }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivities = () => useContext(ActivityContext);
