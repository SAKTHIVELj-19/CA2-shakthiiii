import { Link } from 'react-router-dom'

function ActivityCard({ activity, onToggleGoal }) {
  const displayName = activity.name?.trim() ? activity.name : 'Unknown'
  const displayDate = activity.date?.trim() ? activity.date : 'No Date'
  const goalLabel =
    typeof activity.goalAchieved === 'boolean'
      ? activity.goalAchieved
        ? 'Goal Achieved'
        : 'Goal Not Achieved'
      : 'Goal Status Invalid'

  return (
    <article className="activity-card" data-testid="activity-item">
      <div className="activity-card__header">
        <div>
          <p className="eyebrow">Activity #{activity.activityId}</p>
          <h2>{displayName}</h2>
        </div>
        <span className="status-pill">{goalLabel}</span>
      </div>

      <div className="activity-grid">
        <p>
          <strong>Steps:</strong> {activity.steps}
        </p>
        <p>
          <strong>Calories:</strong> {activity.caloriesBurned}
        </p>
        <p>
          <strong>Minutes:</strong> {activity.workoutMinutes}
        </p>
        <p>
          <strong>Date:</strong> {displayDate}
        </p>
      </div>

      <div className="activity-card__actions">
        <Link className="button-link" to={`/activities/${activity.activityId}`}>
          View details
        </Link>
        <button
          type="button"
          className="button-secondary"
          onClick={() => onToggleGoal(activity.activityId)}
        >
          Toggle goal
        </button>
      </div>
    </article>
  )
}

export default ActivityCard
