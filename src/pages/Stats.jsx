import { useActivities } from '../context/ActivityContext'

function Stats() {
  const { stats } = useActivities()

  return (
    <section className="page page--compact">
      <div className="page-heading">
        <div>
          <p className="eyebrow">Question 5</p>
          <h2>Activities Analytics Dashboard</h2>
        </div>
        <p className="page-copy">
          Computed dynamically with <code>reduce()</code> and exposed through
          <code>window.appState</code>.
        </p>
      </div>

      <div className="stats-grid">
        <article className="stat-card">
          <span>Total valid activities</span>
          <strong data-testid="total-activities">{stats.totalActivities}</strong>
        </article>

        <article className="stat-card">
          <span>Count of goal achieved</span>
          <strong data-testid="goal-achieved">{stats.goalAchievedCount}</strong>
        </article>

        <article className="stat-card">
          <span>Count of goal not achieved</span>
          <strong data-testid="goal-not-achieved">
            {stats.goalNotAchievedCount}
          </strong>
        </article>
      </div>
    </section>
  )
}

export default Stats
