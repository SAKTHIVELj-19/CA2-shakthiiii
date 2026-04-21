import { Link, useParams } from 'react-router-dom'
import { useActivities, isValidActivity } from '../context/ActivityContext'

function ActivityDetail() {
  const { id } = useParams()
  const { activities } = useActivities()

  const activityId = Number(id)
  const activity = activities.find((item) => item.activityId === activityId)

  if (!Number.isInteger(activityId) || !activity || !isValidActivity(activity)) {
    return (
      <section className="page page--compact">
        <h2>Activity not found</h2>
        <p className="page-copy">
          The requested activity ID is invalid or does not exist in the dataset.
        </p>
        <Link className="button-link" to="/activities">
          Back to activities
        </Link>
      </section>
    )
  }

  const displayName = activity.name?.trim() ? activity.name : 'Unknown'
  const displayDate = activity.date?.trim() ? activity.date : 'No Date'
  const efficiency =
    activity.workoutMinutes > 0
      ? (activity.caloriesBurned / activity.workoutMinutes).toFixed(2)
      : '0.00'

  return (
    <section className="page page--compact">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Question 2</p>
          <h2>{displayName}</h2>
        </div>
        <p className="page-copy">
          Full activity details with dynamically calculated efficiency.
        </p>
      </div>

      <div className="detail-card">
        <p>
          <strong>Activity ID:</strong> {activity.activityId}
        </p>
        <p>
          <strong>Date:</strong> {displayDate}
        </p>
        <p>
          <strong>Steps:</strong> {activity.steps}
        </p>
        <p>
          <strong>Calories Burned:</strong> {activity.caloriesBurned}
        </p>
        <p>
          <strong>Workout Minutes:</strong> {activity.workoutMinutes}
        </p>
        <p>
          <strong>Goal Achieved:</strong>{' '}
          {activity.goalAchieved === true ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Efficiency Score:</strong> {efficiency}
        </p>
      </div>
    </section>
  )
}

export default ActivityDetail
