# Exercise

An Exercise is a global movement pattern that lives in a shared library and can be added to any workout. Exercises are not owned by a specific workout — they are referenced across workouts via the WorkoutSection_Exercise mapping.

## Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `name` | String | Name of the exercise (e.g. "Pull-up") |
| `description` | String | Description of the movement |
| `type` | Enum | The exercise category (see Exercise Types below) |
| `tempo4Digit` | String | Default tempo as a 4-digit code (e.g. "3-1-2-0") |
| `tempoContractRelax` | String | Default tempo expressed as Contract/Relax |
| `tempoBPM` | Integer | Default tempo expressed as Beats Per Minute |

## Exercise Types

Type is set on the Exercise but can also be set at the Workout Section level, which allows for dynamic exercise suggestions when building a workout.

| Type | Description |
|---|---|
| **Strength** | Resistance-based movements |
| **Stretch** | Static or dynamic stretching |
| **Alignment** | Static or dynamic stretching |
| **Warm-Up** | Preparatory movements before training |
| **Cool-Down** | Recovery movements after training |

::: info
Is stretch a type? Should it be mobility?
I don't think Warm-Up and Cool-Down are actually exercise types. They're just the part of the workout.
Nvm, yes it is. It's a type that helps it find it's way to the section

Additional types may be added as the domain evolves.
:::

## Attribute-Based Defaults

Reps, weight, rest time, and tempo can have default values that change depending on the **training attribute** being targeted. When a user selects a training attribute for a set, the appropriate defaults are surfaced automatically.

| Attribute | Reps | Rest |
|---|---|---|
| **Strength** | Lower (e.g. 3–5) | Longer (e.g. 3–5 min) |
| **Hypertrophy** | Moderate (e.g. 8–12) | Moderate (e.g. 60–90 sec) |
| **Endurance** | Higher (e.g. 15–20+) | Shorter (e.g. 30–45 sec) |

Tempo is the only property with a true fixed default at the exercise level. All other defaults are attribute-based.

## Tempo

Tempo defines the speed at which each rep of an exercise is performed. There are three ways to express tempo, used in priority order:

| Priority | Type | Description | Example |
|---|---|---|---|
| 1 | **4-Digit Code** | Eccentric – Pause – Concentric – Pause | `3-1-2-0` |
| 2 | **Contract/Relax** | Alternating contraction and relaxation timing | — |
| 3 | **BPM** | Beats Per Minute, synced to a rhythm | `60 BPM` |

The first available tempo type is used. If all tempo fields are null, the app falls back to a default tempo of **`1111`**.

Tempo is most commonly set at the exercise level as a default, but can be overridden at the set level.

## Exercise-Variation Equivalence

It is possible for a standalone Exercise to be equivalent to an Exercise+Variation combination. For example:

- Exercise **"Push Up"** with variation **"Close Grip"**
- Exercise **"Close Grip Push Up"** (no variation)

These represent the same movement. The app handles this by allowing exercises to be **mapped together** as equivalents. This ensures data is not siloed when performing history analysis, volume tracking, planning, and goal tracking.

Equivalence mappings can be:
- **Suggested automatically** by the app when it detects a likely match
- **Created manually** by the user

## Relationships

```
Exercise
├── Exercise_Variation[]         → Specific implementations of this movement
├── Muscle[]                     → Target muscles for this exercise
└── WorkoutSection_Exercise[]    → Instances of this exercise in workout sections
```

| Relationship | Description |
|---|---|
| **Exercise_Variation** | Named variants of the exercise (e.g. "Wide Grip Pull-up", "Close Grip Pull-up") |
| **Muscle** | The muscles and muscle groups this exercise targets |
| **WorkoutSection_Exercise** | The mapping that places this exercise into a specific section of a workout. Each mapping can have its own sets. |

## Mapping Chain

The full chain from Exercise to the Planner:

```
Exercise
└── WorkoutSection_Exercise
    └── Set
        └── Iteration
            └── Todo
```

## Related Feature

→ [Exercise Feature](/front-end/domains/physical/fitness/features/exercise)
