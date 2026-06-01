# Set

A Set is a single logged or planned instance of an exercise performed within a workout. Sets are the most granular unit of training data in the Fitness domain — they record what was done, when it was done, and how it was performed.

## Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `reps` | Integer | Number of repetitions performed |
| `weight` | Decimal | Weight used |
| `time` | Duration | Time duration of the set (e.g. for planks, holds) |
| `tempo4Digit` | String | Tempo as a 4-digit code (e.g. "3-1-2-0") |
| `tempoContractRelax` | String | Tempo expressed as Contract/Relax |
| `tempoBPM` | Integer | Tempo expressed as Beats Per Minute |
| `completedAt` | DateTime | Timestamp when the set was logged |
| `isTimeEstimated` | Boolean | Whether the `completedAt` timestamp is an estimate rather than an accurate log time |

Both `reps` and `time` can be set simultaneously on the same set. Some exercises use reps, some use time, and some use both.

## Tempo Priority

The same priority order as the Exercise entity applies:

| Priority | Type | Fallback |
|---|---|---|
| 1 | 4-Digit Code | — |
| 2 | Contract/Relax | — |
| 3 | BPM | — |
| — | Default | `1111` if all are null |

Tempo is most commonly inherited from the exercise-level default but can be overridden per set.

## Set States

A set's state is determined by whether it has an Iteration mapped to it:

| State | Condition | Description |
|---|---|---|
| **Planned** | No Iteration | The set exists in the workout but has not been logged yet |
| **Completed** | Has Iteration | The set has been logged with a timestamp |

Users cannot log a set in a workout that hasn't been started. However, a completed workout can be reopened to add new sets, which are immediately marked as completed.

## Timestamp Trust

Accurate timestamps allow the app to calculate rest intervals, set duration, and workout pacing. The ideal flow is:

1. User starts a set
2. User follows the rest timer
3. User logs the set immediately upon completion → `completedAt` is accurate

### Unreliable Timestamps

Two scenarios produce unreliable timestamps:

**Delayed logging** — The user logs sets at unusual intervals rather than immediately after completion. The app should detect this dynamically (e.g. sets logged in bursts rather than at natural rest intervals) or allow the user to manually toggle a trust flag on the workout or exercise.

**Post-workout logging** — The user opens the app the next day and realizes they didn't log their final sets. Those sets would be timestamped to the wrong day and fall outside the workout's timeframe. The app handles this by:
- Adjusting the timestamps to fall within the workout's timeframe
- Marking those sets with `isTimeEstimated: true`

The `isTimeEstimated` flag ensures that downstream analysis (volume, pacing, rest intervals) treats estimated timestamps with appropriate caution.

## Relationships

```
Set
├── Iteration (0..1)          → Present when logged, absent when planned
├── WorkoutSection_Exercise   → The exercise instance this set belongs to
└── Exercise_Variation (0..1) → The variation used in this set, if applicable
```

| Relationship | Description |
|---|---|
| **Iteration** | Maps the set to its completion time and connects it to the workout's Todo in the Planner |
| **WorkoutSection_Exercise** | The specific exercise instance within a workout section that this set belongs to |
| **Exercise_Variation** | The variation performed in this set. Optional — a set may use the base exercise with no variation |

## Full Mapping Chain

```
Set
├── Iteration → Todo
├── WorkoutSection_Exercise → Workout_Section → Workout
└── Exercise_Variation → Exercise
```

## Related Feature

→ [Active Workout](/front-end/domains/physical/fitness/features/active-workout)
