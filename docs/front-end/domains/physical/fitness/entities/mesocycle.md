# Mesocycle

A Mesocycle is a multi-week training block with a specific focus. It is a fitness-specific type of [timeframe](/front-end/concepts/planner-and-timeframes) that sits above the standard week in the Planner hierarchy, used to periodize training across a sustained period.

## Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `startAt` | DateTime | Start of the cycle |
| `endAt` | DateTime | End of the cycle |
| `focus` | String (blurb) | Description of the cycle's intent, mapped via the time-pair of the goal mapped to the workout todo |

## Default Duration

Mesocycles have a default fixed length but the user can customize the start and end dates per cycle. Standard mesocycles in training theory run 4–6 weeks.

## Relationships

```
Mesocycle
├── Mesocycle_Goal[]     → Goals and skills focused on during this cycle
└── Workout[]            → Workouts that fall within the cycle's timeframe
```

| Relationship | Description |
|---|---|
| **Mesocycle_Goal** | Maps specific Fitness Goals and Skills to the cycle. Determines what the user is working toward during the block. |
| **Workout** | Workouts whose timeframe falls within the cycle's start and end dates. |

## Progress Snapshots

At the end of each mesocycle the app captures a snapshot of progress. Snapshots are composed of:

- **Measurements** — body metrics (weight, body composition, etc.)
- **Logged data** — volume, frequency, and performance pulled from sets logged during the cycle
- **Media** — periodically requested photos and videos for visual progress tracking
- **Other DB measurements** — any additional tracked metrics relevant to the cycle's focus

Snapshots allow the Mesocycle feature to compare where you started vs. where you ended, and surface which goals improved, which stalled, and what changed most in your training.

## Related Feature

→ [Mesocycle Feature](/front-end/domains/physical/fitness/features/mesocycle)
