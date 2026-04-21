import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react'
import { initialActivities } from '../data/activities'

const ActivityContext = createContext(null)

const isPositiveNumber = (value) =>
  typeof value === 'number' && Number.isFinite(value) && value > 0

export const isValidActivity = (activity) =>
  Boolean(activity) &&
  isPositiveNumber(activity.steps) &&
  isPositiveNumber(activity.caloriesBurned) &&
  isPositiveNumber(activity.workoutMinutes)

export const hasValidGoalValue = (activity) =>
  typeof activity?.goalAchieved === 'boolean'

const activityReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_GOAL': {
      const activityId = Number(action.payload)

      return {
        ...state,
        activities: state.activities.map((activity) => {
          if (activity.activityId !== activityId) {
            return activity
          }

          if (!isValidActivity(activity) || !hasValidGoalValue(activity)) {
            return activity
          }

          const nextGoalAchieved =
            activity.steps >= 8000 ? true : !activity.goalAchieved

          if (nextGoalAchieved === activity.goalAchieved) {
            return activity
          }

          return {
            ...activity,
            goalAchieved: nextGoalAchieved,
          }
        }),
      }
    }
    default:
      return state
  }
}

export function ActivityProvider({ children }) {
  const [state, dispatch] = useReducer(activityReducer, {
    activities: initialActivities,
  })

  const validActivities = useMemo(
    () => state.activities.filter(isValidActivity),
    [state.activities],
  )

  const stats = useMemo(
    () =>
      validActivities.reduce(
        (accumulator, activity) => {
          if (activity.goalAchieved === true) {
            accumulator.goalAchievedCount += 1
          } else if (activity.goalAchieved === false) {
            accumulator.goalNotAchievedCount += 1
          }

          return accumulator
        },
        {
          totalActivities: validActivities.length,
          goalAchievedCount: 0,
          goalNotAchievedCount: 0,
        },
      ),
    [validActivities],
  )

  useEffect(() => {
    window.appState = {
      totalActivities: stats.totalActivities,
      goalAchievedCount: stats.goalAchievedCount,
      goalNotAchievedCount: stats.goalNotAchievedCount,
    }
  }, [stats])

  const value = useMemo(
    () => ({
      activities: state.activities,
      validActivities,
      stats,
      dispatch,
    }),
    [state.activities, validActivities, stats],
  )

  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  )
}

export function useActivities() {
  const context = useContext(ActivityContext)

  if (!context) {
    throw new Error('useActivities must be used inside ActivityProvider')
  }

  return context
}
