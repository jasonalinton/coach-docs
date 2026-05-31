# Mesocycle

The Mesocycle feature gives you a view into your training across a full cycle — where you are in the block, how your goals and skills are progressing, and how this cycle compares to past ones. It is the highest-level lens for evaluating your fitness over time.

## Pain Points Solved

- Hard to see the big picture when you're focused on day-to-day workouts
- No clear way to know if a training block is going well until it's over
- Progress photos, measurements, and performance data are scattered with no unified view

## Views

### Current Cycle
The default view showing the active mesocycle. Displays:
- Cycle name and focus
- Start and end dates, current week within the cycle
- Linked goals and skills with progress indicators
- Effort and success of previous weeks in the cycle
- Recommended exercises based on what's been completed and what's lagging

### Past & Future Cycles
A timeline of previous and upcoming cycles. Each past cycle shows:
- Focus and duration
- Goal and skill outcomes
- Progress snapshot (measurements, media, performance delta)
- Exercises that changed the most

### Schedule
A week-by-week breakdown of the cycle showing planned vs. completed workouts, goal frequency, and muscle group coverage.

## Progress & Change

At the end of each cycle the app surfaces a progress report:

| Section | Content |
|---|---|
| **Snapshot** | Weight, strength benchmarks, flexibility, and energy levels at cycle start vs. end |
| **Goal Progress** | Which goals improved, which stalled, and which were neglected |
| **Exercise Delta** | Exercises that saw the most change in volume or performance |
| **Media** | Progress photos and videos logged during the cycle |

## Data Model

The Mesocycle feature is built on the Mesocycle entity. Key fields relevant to this feature:

| Field | Description |
|---|---|
| `startAt / endAt` | Defines the cycle boundaries |
| `focus` | The blurb describing the cycle's intent |
| `Mesocycle_Goal[]` | The goals and skills being worked on during the cycle |

→ Full entity details: [Mesocycle Entity](/front-end/domains/physical/fitness/entities/mesocycle)

## Related Features

- [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) — surfaces mesocycle context before each workout
- [Workout Planning](/front-end/domains/physical/fitness/features/workout-planning) — plans workouts within the cycle's schedule
- [Fitness Goals](/front-end/domains/physical/fitness/features/fitness-goals) — goals are connected to mesocycles for progress tracking
