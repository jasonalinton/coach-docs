# Exercise

The Exercise feature covers the global exercise library — creating and managing exercises, their variations, muscle mappings, and defaults. Exercises are shared across all workouts and are the building blocks of every training session.

## Pain Points Solved

- Exercises shouldn't have to be recreated every time they appear in a new workout
- Different training goals (strength vs hypertrophy) require different set parameters — these shouldn't have to be set manually every time
- Knowing which muscles an exercise targets is essential for planning balanced workouts and avoiding overtraining

## Exercise Library

The exercise library is a global pool of movements available across all workouts. From the library you can:

- Search exercises by name, muscle, or type
- Filter by training attribute (Strength, Mobility, etc.)
- Create new exercises
- View exercise history across all workouts

## Creating an Exercise

When creating an exercise:

- Set name and description
- Set exercise type (Strength, Stretch, Warm-Up, Cool-Down)
- Set tempo default
- Add variations
- Map target muscles and muscle groups (primary and secondary)

## Managing Variations

Each exercise can have multiple named variations. Variations can be:

- Added and removed from the exercise
- Given their own muscle mappings
- Selected when logging a set to track which variant was performed

## Attribute-Based Defaults

The app surfaces recommended defaults based on the selected training attribute:

| Attribute | Suggested Reps | Suggested Rest |
|---|---|---|
| Strength | 3–5 | 3–5 min |
| Hypertrophy | 8–12 | 60–90 sec |
| Endurance | 15–20+ | 30–45 sec |

Tempo is the only property with a fixed default set directly on the exercise. All other defaults are attribute-based and can be overridden at the set level.

## Standalone Sets

::: info Current Behavior
There is no true standalone set logging. When a set needs to be logged outside of a planned workout (e.g. a random set during the day), it is added to an **All Day** workout — one created per day — whose iteration is not mapped to a calendar event. This workout is functionally invisible to the user as a "workout" but maintains the required Exercise → WorkoutSection_Exercise → Set → Iteration → Todo mapping.

A more refined UI for this experience is planned but not yet designed.
:::

## Exercise History

Each exercise maintains a full history of every set logged across all workouts. From the global library, the history view shows:

| Data | Description |
|---|---|
| Reps, weight, time | Per set over time |
| Volume trends | Total volume across sessions |
| Variations used | Which variants were logged and when |
| Workout context | Which workouts this exercise has appeared in |

Charts available:
- Reps in 1 set
- Weight in 1 set
- Time in 1 set
- Total volume

History is also accessible from within a workout via the [Workout Exercise](/front-end/domains/physical/fitness/features/workout-exercise) toolbar, where it shows the same data but in the context of the current session.

## Adding an Exercise to a Workout Section

1. Open the exercise list from the section
2. Search or browse for the exercise
3. Select and confirm — the exercise is added at the active position or end of the section
4. Set defaults initialize based on the section's training attribute

## Data Model

| Field | Description |
|---|---|
| `type` | Exercise category — also settable at the section level for dynamic suggestions |
| `tempo` | Fixed default tempo for the movement |
| `Exercise_Variation[]` | Named variants with their own muscle mappings |
| `Muscle[]` | Target muscles for the base exercise (primary and secondary) |

→ Full entity details: [Exercise Entity](/front-end/domains/physical/fitness/entities/exercise)
→ Variation entity details: [Exercise Variation Entity](/front-end/domains/physical/fitness/entities/exercise-variations)

## Related Features

- [Workout Exercise](/front-end/domains/physical/fitness/features/workout-exercise) — an exercise as it appears within a specific workout
- [Workout Planning](/front-end/domains/physical/fitness/features/workout-planning) — exercises are suggested based on type, attribute, and muscle group
- [Volume Tracking](/front-end/domains/physical/fitness/features/volume-tracking) — exercise history feeds into volume analysis
- [Muscle Heat Map](/front-end/domains/physical/fitness/features/muscle-heat-map) — muscle mappings drive the heat map visualization
