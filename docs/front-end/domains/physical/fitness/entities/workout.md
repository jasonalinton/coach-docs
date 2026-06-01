# Workout

A Workout is a structured training session composed of one or more [Sections](/front-end/domains/physical/fitness/entities/workout-sections), each containing exercises and sets. Workouts are the primary unit of training in the Fitness domain and are always mapped to a Todo in the Planner.

## Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `name` | String | Name of the workout |
| `startAt` | DateTime | When the workout started or is scheduled to start |
| `endAt` | DateTime | When the workout ended or is scheduled to end |
| `isTemplate` | Boolean | Marks the workout as reusable. Templates are not a separate state — any workout can be a template regardless of its state |
| `state` | Enum | Current lifecycle state (see below) |

## States

| State | Description |
|---|---|
| **Planned** | Scheduled for a future date, not yet started |
| **Active** | Currently in progress |
| **Completed** | Finished and logged |

## Relationships

```
Workout
├── Todo (1)             → The todo this workout is mapped to
├── Iteration (1)        → Tracks the workout's timeframe, mapped to the todo
├── Workout_Section[]    → Ordered sections within the workout
└── Event (0..1)         → Optional calendar event the workout is tied to
```

| Relationship | Description |
|---|---|
| **Todo** | A workout maps to exactly one todo. However, a single todo can have multiple workouts mapped to it (e.g. a "Complete the Mobility Toolkit" todo with separate workouts for shoulders, pancake, side split, etc.) |
| **Iteration** | Records the actual start/end timestamps and maps to the workout's todo |
| **Workout_Section** | Ordered list of sections. Sections have their own exercises and sets |
| **Event** | If the workout is tied to a calendar event, updating the workout time updates the event |

## Templates

Any workout can be flagged as a template with `isTemplate: true`. Templates appear in the workout list as reusable starting points. Starting a workout from a template copies it and creates a new active workout with a fresh iteration and todo mapping.

A special built-in template called **Free Workout** serves as an empty starting point for ad-hoc sessions, allowing workouts to be created from scratch without generating unnecessary todos.

## Related Feature

→ [Workout Feature](/front-end/domains/physical/fitness/features/workout)
