# Workout Exercise

A Workout Exercise is an [Exercise](/front-end/domains/physical/fitness/features/exercise) as it exists within a specific workout section. Where the Exercise feature covers the global library, the Workout Exercise is the instance — with its own sets, position, circuit, history in context, and workout-specific controls.

This is analogous to the relationship between [Workout](/front-end/domains/physical/fitness/features/workout) and [Active Workout](/front-end/domains/physical/fitness/features/active-workout).

## Pain Points Solved

- When performing an exercise you need context-specific information — past performance, rest, notes — without leaving the workout
- Set values and properties need to be manageable at the exercise level, not just globally
- Replacing an exercise mid-workout should be intelligent, not a manual search

## Toolbar

Each Workout Exercise has a toolbar for quick in-workout actions:

| Action | Description |
|---|---|
| **History** | View past sets for this exercise across all workouts |
| **Rest** | Manually start or adjust the rest timer |
| **Replace** | Swap for another exercise based on split type (push/pull, upper/lower, straight-arm/bent-arm, etc.) |
| **Notes** | Add notes specific to this exercise in this workout |
| **Units** | Toggle units (e.g. kg / lbs) |
| **More** | Access exercise-level settings (tempo, rest, circuit placement) |

## Exercise Settings

Each workout exercise has configurable settings for movement tempo, rest duration, and circuit placement. Settings are accessed on demand and support Cancel/Done editing — changes are not committed until explicitly saved.

## Tempo

Tempo defines the speed and rhythm of each movement phase. Three tempo types are supported:

| Type | Format | Description |
|---|---|---|
| **4-Digit** | `3 - 1 - 2 - 1` | Eccentric – Bottom Iso – Concentric – Top Iso (seconds) |
| **Contract-Relax** | `3 - 2` | Contract hold – Relax (seconds) |
| **BPM** | `120` | Beats per minute |

### Tempo Countdown

When a tempo is set, a **▶ play button** runs an animated countdown through each phase:

- Each phase counts down to **0**, then the next starts immediately
- The number of **loops** matches the **reps** of the active set (defaults to 1)
- When all loops complete, the set is **automatically logged**
- Stopping early cancels the countdown without logging

## Rest Timer

When rest is active between sets, a countdown timer shows the remaining rest duration. The user can:

- Adjust the remaining time on the fly (add or subtract seconds)
- Skip rest entirely to proceed immediately

Rest duration is configured per exercise in the exercise settings.

## Set Management

### Logging a Set
Logging a set is a single tap. Values are pre-filled from either:
- **Attribute-based defaults** set on the exercise
- **Dynamically determined values** based on previous sets or training history

The user can always adjust any value before or after logging.

### Log All Sets
Logs all remaining sets in this exercise at their current pre-filled values. Sets missing a required value are skipped.

### Set Context Menu
Each individual set has a context menu with:
- **Delete** — remove the set
- **Set Variations** — select exercise variations for this set

## Set Property Display

Properties are shown at two levels:

| Level | Behavior |
|---|---|
| **Exercise defaults** | Shown when the exercise is first loaded into the workout |
| **Set level** | Only properties with a value in at least one set are shown across all sets |

The user can toggle which properties are visible at the workout level and at the set level.

## Property Value Priority

When determining the value to show for a set property:

1. Value entered directly in the set component
2. Existing value on the set record
3. Default value set on the exercise

## Exercise History

From the History toolbar action, the user can view this exercise's full performance history across all workouts:

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

## Data Model

The Workout Exercise maps to the `WorkoutSection_Exercise` record:

| Field | Description |
|---|---|
| `circuit` | The circuit (superset) this exercise belongs to within the section |
| `position` | Position within the circuit |
| `tempo_4DigitCode` | 4-digit tempo string e.g. `"3-1-2-1"` (eccentric, bottom iso, concentric, top iso) |
| `tempo_CR` | Contract-relax tempo string e.g. `"3-2"` |
| `tempo_bpm` | BPM tempo value |
| `restSeconds` | Rest duration in seconds between sets |
| `Set[]` | The sets logged or planned for this exercise instance |

→ Full entity details: [Workout Section Entity](/front-end/domains/physical/fitness/entities/workout-sections)
→ Set entity details: [Set Entity](/front-end/domains/physical/fitness/entities/sets)

## Related Features

- [Exercise](/front-end/domains/physical/fitness/features/exercise) — the global exercise library
- [Active Workout](/front-end/domains/physical/fitness/features/active-workout) — the workout context this exercise lives in
- [Exercise History](/front-end/domains/physical/fitness/features/exercise-history) — full exercise history and volume analysis
