# Muscle Heat Map

The Muscle Heat Map is the Fitness domain's implementation of the [Avatar](/front-end/concepts/avatar) — a cross-cutting feature that visually represents the user's state across all domains. In the Fitness context, it overlays muscle freshness data onto a body silhouette, giving an at-a-glance picture of recovery and readiness to train.

## Pain Points Solved

- Hard to know which muscles are ready to train and which need more recovery without manually tracking every session
- Structural imbalances and overworked muscle groups go unnoticed without a unified visual
- No intuitive way to see the full picture of your body's current training state

## Visual Display

The heat map displays a full-body silhouette showing both the **front and back** of the body. Layout adapts to screen size:

- **Wide screens** — front and back shown side by side simultaneously
- **Narrow screens** — front and back shown one at a time, togglable

### Color Scheme

Muscles are colored to indicate their current freshness state:

::: info
The exact color scheme (gradient blue → red vs intensity scale light → dark) has not been finalized.
:::

Regardless of scheme, the scale represents:

| State | Description |
|---|---|
| **Fresh** | Fully recovered and ready to train |
| **Partially Recovered** | Some recovery still needed |
| **Fatigued** | Recently trained, needs more rest |
| **Neglected** | Has not been trained in an unusually long time |

## What It Shows

The heat map displays **freshness**, not raw volume. Freshness is calculated from:

- Last time the muscle was trained
- The muscle's individual recovery time
- Other variables (intensity, cumulative fatigue, etc.) to be defined

## Granularity

The heat map works at two levels:

- **Muscle Group** — the default view, showing broad areas (Back, Shoulders, Legs, etc.)
- **Individual Muscle** — more granular detail for muscles explicitly mapped to exercises (e.g. Latissimus Dorsi, Subscapularis, Long Head of Bicep)

## Interactivity

Tapping a muscle or muscle group drills down into:

- Which exercises have been logged for that muscle
- Volume history over time
- Freshness breakdown if the group contains multiple muscles at different recovery states
- Granular detail for specific muscles mapped to exercises

## Where It Appears

The heat map is used across multiple surfaces in the Fitness domain:

| Surface | Context |
|---|---|
| **Workout Dashboard** | Avatar section — full body overview of current freshness state |
| **Workout Briefing** | Snapshot of which muscles are fresh vs fatigued before training |
| **Workout Planning** | Informs which muscle groups to target or avoid when planning sessions |
| **Standalone view** | Full-screen heat map with drill-down and history |

## Related Features

- [Avatar](/front-end/concepts/avatar) — the cross-cutting concept this feature is a domain implementation of
- [Muscles Entity](/front-end/domains/physical/fitness/entities/muscles) — muscle and muscle group data, recovery times, freshness calculation
- [Workout Planning](/front-end/domains/physical/fitness/features/workout-planning) — freshness data used to balance planned workouts
- [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) — freshness snapshot shown before each session
- [Workout Dashboard](/front-end/domains/physical/fitness/features/workout-dashboard) — heat map shown in the Avatar section
