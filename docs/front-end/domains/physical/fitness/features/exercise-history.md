# Exercise History

The Exercise History feature provides charts and analytics for a specific exercise across all workouts over time. It surfaces trends in performance, volume, and variation usage — giving you a clear picture of how you're progressing on any given movement.

## Pain Points Solved

- Hard to know if you're actually getting stronger or just staying the same
- No easy way to see which variations you've been using most
- Progress on an exercise gets lost across hundreds of logged sets with no summary view

## Access Points

Exercise History is accessible from two contexts:

| Context | Description |
|---|---|
| **Exercise Library** | Full history for the exercise across all workouts and timeframes |
| **Workout Exercise Toolbar** | Same data but accessed in the context of the current workout session |

## Charts

| Chart | Description |
|---|---|
| **Reps in 1 Set** | Reps logged per set over time |
| **Weight in 1 Set** | Weight logged per set over time |
| **Time in 1 Set** | Set duration over time (for time-based exercises) |
| **Total Volume** | Combined volume (reps × weight, or time) across all sets per session |

## Filters

History can be filtered by:
- Timeframe (week, month, mesocycle, custom range)
- Variation — view history for a specific variation or all variations combined
- Training attribute (Strength, Hypertrophy, etc.)

## Variation Breakdown

History can be broken down by variation to see which implementations of an exercise have been logged and how their performance compares over time. This is especially useful for exercises with equivalence mappings — history from equivalent exercise/variation combinations is aggregated so no data is missed.

## Data Model

Exercise History is derived from logged Set records linked to a specific exercise:

```
Exercise
└── WorkoutSection_Exercise[]
    └── Set[]  ← source of all history data
        ├── reps, weight, time
        ├── completedAt
        └── Exercise_Variation (optional)
```

→ Set entity details: [Set Entity](/front-end/domains/physical/fitness/entities/sets)
→ Exercise entity details: [Exercise Entity](/front-end/domains/physical/fitness/entities/exercise)

## Related Features

- [Exercise](/front-end/domains/physical/fitness/features/exercise) — global exercise library where history is accessible
- [Workout Exercise](/front-end/domains/physical/fitness/features/workout-exercise) — in-workout access to exercise history via the toolbar
- [Volume Tracking](/front-end/domains/physical/fitness/features/volume-tracking) — broader volume analysis across all exercises
