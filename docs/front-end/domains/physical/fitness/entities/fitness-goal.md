# Fitness Goal

A Fitness Goal is the standard Goal entity with a fitness type. It connects an exercise to a timeframe, a mesocycle, and a set of targets — giving structure to what you're working toward and why.

## Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `type` | Enum | Goal type: Skill, Mobility, Maintenance, or Progressive Overload |
| `priority` | Integer | Priority level — determines sort order, not displayed on the card |
| `frequency` | Integer | Target number of times the exercise should be completed in the timeframe |
| `reps` | Integer | Target reps per set |
| `weight` | Decimal | Target weight |
| `time` | Duration | Target time per set |
| `startAt` | DateTime | When the goal becomes active |
| `timeframe` | Enum | The timeframe this goal is measured in (default: week) |

## Goal Types

### Skill
Working toward a specific movement ability by progressing through a defined progression line.

- **Progress measured by:** completion of progression steps toward the skill
- **Example:** Handstand → wall handstand → freestanding hold → 30 second hold → press to handstand

### Mobility
Improving range of motion in a specific area through consistent practice.

- **Progress measured by:** range of motion measurements over time
- **Example:** Pancake stretch → track hip angle improvement across mesocycles

### Maintenance
Sustaining existing fitness and structural balance by staying above defined volume and rep thresholds.

- **Progress measured by:** volume and frequency — warnings are surfaced in the Briefing when you are approaching or have crossed below the maintenance threshold
- **Example:** Push/pull structural balance — complete at least X sets of pulling exercises per week

### Progressive Overload
Systematically increasing training stimulus over time to drive adaptation.

- **Progress measured by:** volume increase over mesocycle, or dynamically calculated 1 Rep Max (1RM)
- **Rotation pattern:** Training attributes (Hypertrophy, Strength, Frequency) are set on the mesocycle and determine the rotational pattern across weeks. The goal can also influence the pattern.
- **Example:** Hypertrophy week → Strength week → Frequency week → repeat

## Timeframe

Fitness Goals are measured within a timeframe, defaulting to a **week**. Goals are connected to mesocycles — progress is tracked across the full training block, not just week to week.

## Relationships

```
FitnessGoal
├── Goal (1)                    → The parent Goal entity
├── Exercise (1)                → The exercise this goal is built around
├── Exercise_Variation[]        → Specific variations that count toward this goal
├── Mesocycle_Goal[]            → The mesocycles this goal is active in
└── FitnessGoal_TimePair (1)    → Maps the goal to its timeframe and priority
```

| Relationship | Description |
|---|---|
| **Exercise** | The exercise mapped to this goal. Completing sets of this exercise advances the goal. |
| **Exercise_Variation** | Variations that are valid for this goal. Unlike the base exercise, variations can be explicitly included or excluded. |
| **Mesocycle_Goal** | Connects the goal to one or more mesocycles for cycle-level progress tracking |
| **FitnessGoal_TimePair** | Holds the timeframe and priority, and maps to the todo that represents this goal in the Planner |

## Related Feature

→ [Fitness Goals Feature](/front-end/domains/physical/fitness/features/fitness-goals)
