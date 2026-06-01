# Exercise

An Exercise is a global movement pattern that lives in a shared library and can be added to any workout. Exercises are not owned by a specific workout — they are referenced across workouts via the WorkoutSection_Exercise mapping.

## Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `name` | String | Name of the exercise (e.g. "Pull-up") |
| `description` | String | Description of the movement |
| `type` | Enum | The exercise category (see Exercise Types below) |
| `tempo` | String | Default tempo for the movement (e.g. "3-1-2-0") |

## Exercise Types

Type is set on the Exercise but can also be set at the Workout Section level, which allows for dynamic exercise suggestions when building a workout.

| Type | Description |
|---|---|
| **Strength** | Resistance-based movements |
| **Stretch** | Static or dynamic stretching |
| **Warm-Up** | Preparatory movements before training |
| **Cool-Down** | Recovery movements after training |

::: info
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
