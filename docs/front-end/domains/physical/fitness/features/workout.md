# Workout

The Workout feature covers creating, structuring, and managing workouts — from building templates to starting a session and tracking its lifecycle. It is the foundation that Active Workout, Workout Planning, and Workout Briefing are built on.

## Pain Points Solved

- Training sessions need structure but that structure should be reusable, not rebuilt every time
- Ad-hoc workouts shouldn't generate unnecessary planning overhead
- Sections of a workout (e.g. a stretch block) should be portable and usable independently

## Starting a Workout

There are three ways to start a workout:

| Method | Description |
|---|---|
| **From a template** | Copy an existing template, creating a new active workout with its own todo and iteration |
| **From a section template** | Promote a saved section directly into a standalone workout |
| **From scratch** | Use the built-in **Free Workout** template — an empty workout that avoids generating unnecessary todos while still following the workout-todo-iteration mapping |

## Workout Lifecycle

```
Planned → Active → Completed
```

A workout moves through three states. At any point a workout can also be flagged as a template (`isTemplate: true`) making it available for reuse regardless of its state.

## Managing Sections

Sections give a workout its internal structure. The user can:

- Add, remove, and reorder sections
- Choose from default section types or create custom ones
- Tag sections with training attributes (Strength, Mobility, etc.) for volume analysis
- Save any section as a template for reuse in other workouts
- Start a section template as a standalone workout

### Default Section Types
- Warm-Up
- Skill Training
- Strength
- Cool-Down / Mobility

## Todo & Planner Integration

Every workout maps to exactly one todo. This is what connects it to the Planner — the workout's iteration records the actual start/end time and ties back to the todo. From the Planner's perspective:

```
Workout Todo
└── Section Todo (child)       ← planned
    └── Exercise Todo (child)  ← planned
```

::: info Planned
Section-to-todo mapping is planned but not yet implemented. Currently sections only exist within the Fitness domain.
:::

## Workout List

The workout list separates workouts into:
- **Templates** — saved workouts flagged for reuse (default view)
- **Recent** — past completed workouts
- **Active** — currently in-progress workouts
- **Upcoming** — planned workouts scheduled for future dates

## Context Menu Actions

From any active or completed workout:
- Edit name and time
- Edit completion status
- Add a blurb / log notes
- Log rating, energy, mood
- Delete workout

## Data Model

| Field | Description |
|---|---|
| `isTemplate` | Whether the workout is saved for reuse |
| `state` | Planned, Active, or Completed |
| `startAt / endAt` | Scheduled or actual workout times |
| `Workout_Section[]` | Ordered sections within the workout |

→ Full entity details: [Workout Entity](/front-end/domains/physical/fitness/entities/workout)
→ Section entity details: [Workout Section Entity](/front-end/domains/physical/fitness/entities/workout-sections)

## Related Features

- [Active Workout](/front-end/domains/physical/fitness/features/active-workout) — the real-time experience of logging a workout in progress
- [Workout Dashboard](/front-end/domains/physical/fitness/features/workout-dashboard) — the fitness home screen, surfaces active and upcoming workouts
- [Workout Planning](/front-end/domains/physical/fitness/features/workout-planning) — scheduling workouts ahead of time
- [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) — pre-workout summary of goals, muscles, and priorities
