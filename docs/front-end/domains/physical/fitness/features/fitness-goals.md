# Fitness Goals

The Fitness Goals feature gives structure to what you're training toward — reminding you of the reasons behind your workouts, tracking your progress over time, and surfacing what's being neglected. Goals connect exercises to mesocycles, timeframes, and the broader Planner.

## Pain Points Solved

- Easy to train without direction and lose sight of why you started
- Hard to know if you're making progress or just staying busy
- Structural imbalances and neglected goals go unnoticed until it's too late
- No clear way to know if your current training is actually serving your goals

## Goal Types

| Type | Purpose | Progress Measured By |
|---|---|---|
| **Skill** | Work toward a specific movement ability via a progression line | Completion of progression steps |
| **Mobility** | Improve range of motion through consistent practice | Range of motion measurements over time |
| **Maintenance** | Stay above volume and frequency thresholds for structural balance | Volume and reps — warnings when approaching or crossing below threshold |
| **Progressive Overload** | Systematically increase training stimulus across a mesocycle | Volume increase or dynamically calculated 1 Rep Max (1RM) |

## Progressive Overload & Rotation

Progressive Overload goals use a rotation of training attributes across the mesocycle. The rotation pattern (e.g. Hypertrophy → Strength → Frequency) is set on the mesocycle's attributes, with the goal also having influence over the pattern.

The app tracks where you are in the rotation and surfaces the appropriate targets for the current week.

**1 Rep Max (1RM)** can be used as a progress metric for strength-focused goals. 1RM is calculated dynamically from logged set data rather than requiring a dedicated max test.

## Maintenance & Warnings

Maintenance goals define a floor — the minimum volume and frequency needed to sustain a level of fitness or structural balance. The app monitors your progress against these thresholds and surfaces warnings in the [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) when you are:

- **Approaching** the threshold — you're at risk of falling below
- **Below** the threshold — you've crossed the maintenance floor

**Example:** A push/pull structural balance goal requires at least X sets of pulling exercises per week. If pulling volume drops, the Briefing warns you before an imbalance develops.

## Variations

Variations can be mapped to a goal. Only the variations explicitly included in the goal count toward its progress — giving you control over which implementations of an exercise are valid for a given goal.

## Exercises as Todos

The exercises mapped to a Fitness Goal become the todos for accomplishing that goal. In the Planner, these appear as child todos under the goal's todo, creating a clear hierarchy:

```
Goal Todo
└── Exercise Todo (child)
    └── Set (iteration)
```

## Timeframe & Mesocycle Connection

Goals default to a **weekly timeframe** — progress resets each week. Goals are connected to mesocycles so the app can track how goal progress trends across the full training block, not just week to week.

## Goal Cards & Sorting

Goals are displayed as cards. Priority is not shown on the card itself — instead, cards are sorted by priority so the most important goals are always at the top. Additional sort options:

- Priority (default)
- Skill
- Exercise Type / Attribute (Strength, Mobility, etc.)

## Volume Display

Each goal card shows the exercise volume for the current timeframe:

| Metric | Description |
|---|---|
| **Completed** | Volume logged so far in the timeframe |
| **Goal** | Target volume for the timeframe |

Over time, volume history is shown to surface trends — whether effort toward a goal is increasing, plateauing, or declining.

## Neglect Detection

::: info Planned
Neglect detection — surfacing goals that are being ignored or falling behind — will be defined and documented in a later design session.
:::

## Form Fields

When creating or editing a Fitness Goal:

- Goal type
- Exercise
- Variations (optional)
- Timeframe
- Start date
- Priority
- Reps
- Weight
- Time
- Frequency

## Data Model

| Field | Description |
|---|---|
| `type` | Skill, Mobility, Maintenance, or Progressive Overload |
| `priority` | Drives sort order |
| `frequency` | Target sessions per timeframe |
| `reps / weight / time` | Targets per set |
| `Exercise_Variation[]` | Variations valid for this goal |

→ Full entity details: [Fitness Goal Entity](/front-end/domains/physical/fitness/entities/fitness-goal)

## Related Features

- [Mesocycle](/front-end/domains/physical/fitness/features/mesocycle) — goals are connected to mesocycles for cycle-level tracking
- [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) — maintenance warnings and goal reminders surfaced here
- [Workout Dashboard](/front-end/domains/physical/fitness/features/workout-dashboard) — goals displayed with active/inactive status
- [Workout Planning](/front-end/domains/physical/fitness/features/workout-planning) — goal priority influences exercise recommendations
- [Volume Tracking](/front-end/domains/physical/fitness/features/volume-tracking) — goal volume is a key input to volume analysis
