import { useState } from 'react'
import ActivityCard from '../components/ActivityCard.jsx'
import { useActivities } from '../context/ActivityContext'

function Filter() {
  const { validActivities, dispatch } = useActivities()
  const [minimumSteps, setMinimumSteps] = useState('')
  const [message, setMessage] = useState('')
  const [filteredActivities, setFilteredActivities] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (minimumSteps.trim() === '') {
      setMessage('Please enter a steps value.')
      setFilteredActivities([])
      return
    }

    const parsedValue = Number(minimumSteps)

    if (!Number.isFinite(parsedValue) || parsedValue < 0) {
      setMessage('Please enter a valid non-negative number.')
      setFilteredActivities([])
      return
    }

    const nextActivities = validActivities.filter(
      (activity) => activity.steps >= parsedValue,
    )

    setMessage(
      nextActivities.length === 0
        ? 'No valid activities match that steps value.'
        : `Showing ${nextActivities.length} valid activit${
            nextActivities.length === 1 ? 'y' : 'ies'
          }.`,
    )
    setFilteredActivities(nextActivities)
  }

  return (
    <section className="page">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Question 3</p>
          <h2>Filter Activities</h2>
        </div>
        <p className="page-copy">
          Filter only valid activities where steps are greater than or equal to
          your input value.
        </p>
      </div>

      <form className="filter-form" onSubmit={handleSubmit}>
        <label htmlFor="minimumSteps">Minimum steps</label>
        <div className="filter-form__controls">
          <input
            id="minimumSteps"
            type="number"
            min="0"
            value={minimumSteps}
            onChange={(event) => setMinimumSteps(event.target.value)}
            placeholder="Enter steps"
          />
          <button type="submit">Apply Filter</button>
        </div>
      </form>

      {message ? <p className="message-box">{message}</p> : null}

      <div className="cards-stack">
        {filteredActivities.map((activity) => (
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

export default Filter
