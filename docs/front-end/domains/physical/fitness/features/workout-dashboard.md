# Workout Dashboard

The Workout Dashboard is the home screen of the Fitness domain. It is a read-only overview that gives a snapshot of your current training state and routes you to other features. The only direct action available from the Dashboard is starting a workout.

## Pain Points Solved

- No single place to see the full picture of your training at a glance
- Hard to know what you should be doing today without manually checking goals, the mesocycle schedule, and planned todos separately
- Easy to lose track of unplanned exercises and neglected goals

## Sections

### Active Workout
If a workout is currently in progress, it is surfaced at the top of the Dashboard. Tapping routes to [Active Workout](/front-end/domains/physical/fitness/features/active-workout).

### Start Workout
Suggests a workout to start based on:
- The focus of the current [Mesocycle](/front-end/domains/physical/fitness/features/mesocycle)
- Active Fitness Goals and their mapped exercises
- Planned todos for today
- The planning algorithm (muscle freshness, structural balance, priority)

If a workout is already planned for the day it is surfaced here as the primary suggestion. Tapping starts the workout and routes to Active Workout.

### Mesocycle
A summary of the current mesocycle:
- Cycle name and focus
- Current week within the cycle
- Past cycles

Routes to the [Mesocycle](/front-end/domains/physical/fitness/features/mesocycle) feature.

### Avatar
A visual representation of the body used across the app. In the Fitness domain it is tied to the [Muscle Heat Map](/front-end/domains/physical/fitness/features/muscle-heat-map) and displays a stats summary. The Avatar is a cross-domain concept — its full behavior is documented separately.

::: info
Avatar documentation to be expanded when the cross-domain design is finalized.
:::

### Planning
Shows fitness-related todos split into:
- **Planned** — exercises and workouts that are scheduled
- **Unplanned** — active fitness goals whose exercises have not yet been scheduled for the current timeframe

This surfaces neglected goals before you start planning your next session.

### Goals
Active and inactive [Fitness Goals](/front-end/domains/physical/fitness/features/fitness-goals), grouped by goal type (Skill, Mobility, Maintenance, Progressive Overload). Fitness Goals are mapped to exercises and attributes — the exercises serve as the todos for accomplishing the goal.

Routes to the Fitness Goals feature.

### Skills
Active and inactive Skill-type goals. Skills are not a separate entity — this is a filtered view of Goals where `type = Skill`.

Routes to the Fitness Goals feature filtered to Skills.

### Exercises
A summary of exercises relevant to the current training period — priority exercises, recently performed, and recommended based on goals and mesocycle focus.

Routes to the [Exercise](/front-end/domains/physical/fitness/features/exercise) library.

### Muscles
A summary of muscle group status — which are fresh, which are fatigued, and which are being neglected. Driven by muscle freshness calculations.

Routes to the [Muscle Heat Map](/front-end/domains/physical/fitness/features/muscle-heat-map).

## Related Features

- [Active Workout](/front-end/domains/physical/fitness/features/active-workout) — where workouts are performed
- [Workout Planning](/front-end/domains/physical/fitness/features/workout-planning) — scheduling workouts and exercises
- [Mesocycle](/front-end/domains/physical/fitness/features/mesocycle) — the training block context
- [Fitness Goals](/front-end/domains/physical/fitness/features/fitness-goals) — goals and skills driving the suggestions
- [Muscle Heat Map](/front-end/domains/physical/fitness/features/muscle-heat-map) — detailed muscle status visualization
