import { useParams } from 'react-router-dom';
import { useActivities } from '../context/ActivityContext';

const ActivityDetail = () => {
  const { id } = useParams();
  const { state } = useActivities();
  const activity = state.activities.find(a => a.id === parseInt(id));

  if (!activity) return <h2>Activity Not Found</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{activity.name} Details</h1>
      <p>Date: {activity.date}</p>
      <p>Steps: {activity.steps}</p>
      <p>Calories Burned: {activity.caloriesBurned}</p>
      <p>Workout Duration: {activity.workoutMinutes} mins</p>
    </div>
  );
};

export default ActivityDetail;