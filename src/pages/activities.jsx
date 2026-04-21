import ActivityCard from '../components/ActivityCard.jsx'
import { useActivities } from '../context/ActivityContext'

function Activities() {
  const { validActivities, dispatch } = useActivities()

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Question 1 and 4</p>
          <h2>Valid Activities</h2>
        </div>
        <p className="page-copy">
          Activities are filtered from Context without mutating the dataset, and
          missing names or dates are safely displayed.
        </p>
      </div>

      <div className="cards-stack">
        {validActivities.map((activity) => (
          <ActivityCard
            key={activity.activityId}
            activity={activity}
            onToggleGoal={(activityId) =>
              dispatch({ type: 'TOGGLE_GOAL', payload: activityId })
            }
          />
        ))}
      </div>
    </section>
  )
}

export default Activities
