# Fitness

An active life requires a lot of training. The Fitness domain provides a way to plan and organize workouts so you can make the most efficient use of your time and energy — accounting for recovery, structural balance, and long-term progression.

## Domain Structure

A workout is organized into **sections** (Warm-up, Skill Training, Strength, Cool-down), each containing **exercises**. Each exercise has one or more **sets** that are logged with reps, weight, and/or time. Exercises can have **variations**, and each variation targets specific **muscles** and muscle groups.

Training is periodized using **mesocycles** — multi-week blocks with a specific focus. Mesocycles are a fitness-specific type of timeframe in the Planner, sitting above the standard day/week/month hierarchy.

## Key Concepts

### Workout Planning
Workouts can be planned ahead of time as templates or scheduled to specific days. Planning considers your weekly exercise frequency, structural balance (push/pull, upper/lower), and energy levels. Exercises can be assigned a weekly repetition target and the planner can auto-generate workouts based on what's been completed, what muscles are fresh, and what your priority exercises are.

### Workout Briefing
Before starting a workout, the Briefing gives you a summary of what to expect — which skills and goals are planned, how the current mesocycle is progressing, which muscle groups are fresh, and what your recommended exercises are based on priority and recovery.

### Fitness Goals
Fitness Goals are the standard Goal entity with a fitness type. They are tied to exercises and tracked within a timeframe (typically a week, aligned to a mesocycle). There are four goal types:

| Type | Description |
|---|---|
| **Skill** | Working toward a specific movement ability (e.g. handstand, pistol squat) |
| **Mobility** | Improving range of motion in a specific area |
| **Maintenance** | Sustaining structural balance and existing fitness (e.g. push/pull ratios) |
| **Progressive Overload** | Systematically increasing volume via hypertrophy, strength, or frequency |

Goals sort by priority and are connected to mesocycles so progress can be tracked across a full training block.

## Training Attributes

Exercises are tagged with one or more attributes that describe the training stimulus:

- Strength
- Hypertrophy
- Endurance
- Flexibility
- Mobility
- Skill Work
- Cardiovascular Stamina

After logging a workout, volume is analyzed by attribute so you can see where your training time and energy actually went.

## Related Concepts

| Concept | Relationship |
|---|---|
| [Goals & Skills](/front-end/concepts/goals-and-skills) | Fitness Goals are the Goal entity with a fitness type |
| [Planner & Timeframes](/front-end/concepts/planner-and-timeframes) | Mesocycle is a fitness-specific timeframe; workouts are planned within the Planner |
| [Metrics](/front-end/concepts/metrics) | Sets feed into volume metrics; progress is tracked across mesocycles |
