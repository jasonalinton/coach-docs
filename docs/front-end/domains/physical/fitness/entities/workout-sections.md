# Workout Section

A Workout Section is an ordered group of exercises within a Workout. Sections give structure to a training session — separating warm-up from skill work, strength from cool-down — and can be saved as templates and reused across workouts.

## Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `name` | String | Name of the section (e.g. "Warm-Up", "Shoulder Mobility") |
| `position` | Integer | Order of the section within the workout |
| `isTemplate` | Boolean | Marks the section as reusable across workouts |
| `workoutId` | Integer | The workout this section belongs to |

## Relationships

```
Workout_Section
├── Workout (1)              → The parent workout
├── Workout_Exercise[]       → Ordered exercises within the section
└── Todo (0..1)              → Optional mapping to a Planner todo
```

## Section Types

Sections are not fixed. There are default section types to choose from but users can create their own:

- Warm-Up
- Skill Training
- Strength
- Cool-Down / Mobility
- *(user-defined)*

Sections can also be tagged with **workout attributes** (e.g. Strength, Mobility, Hypertrophy) which feed into volume analysis and dynamic workout planning.

## Templates

A section can be saved as a template (`isTemplate: true`) and added to any workout. This makes it easy to maintain a consistent warm-up or mobility block across different training sessions without rebuilding it each time.

## Sections as Standalone Workouts

A section template can be promoted to a standalone workout. For example, a "Morning Stretch" section used regularly in full-body workouts can be started directly as its own workout without needing a full workout structure around it.

## Planner Integration

::: info Planned
Sections are currently only mapped to Workouts in the Fitness domain. The planned behavior is for Sections to also be mappable to Todos in the Planner, enabling unlimited nesting:

- In the Fitness domain: `Workout → Section → Exercise`
- In the Planner: `Workout Todo → Section Todo (child) → Exercise Todo (child)`

This would allow sections to appear as structured subtasks in the Planner alongside other non-fitness todos.
:::

## Related Feature

→ [Workout Feature](/front-end/domains/physical/fitness/features/workout)
