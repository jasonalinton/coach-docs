# Workout Briefing

The Workout Briefing is a motivational and reflective space tied to your training context. It reminds you of the goals you're working toward and the reasons behind them — for the times when you're not in the mood, low on energy, or starting to lose interest. It's designed to get you pumped to train again.

The Briefing also serves as a fitness journal. You can write blurbs about where you are in your journey, log how you're feeling, and look back over time to see your own growth.

## Pain Points Solved

- Easy to lose motivation or forget why you started working toward a goal
- No single place to capture how you're feeling before and after a workout
- Hard to explain or contextualize incomplete workouts or breakthroughs after the fact
- Progress isn't always visible in the numbers — sometimes it lives in how you felt

## When It's Shown

| Trigger | Description |
|---|---|
| **Start of Mesocycle** | Shown automatically to orient you on the cycle's focus and what's coming |
| **Start of Week** | Shown optionally at the beginning of each training week |
| **On Demand** | Accessible anytime via a button or control on the Dashboard or within the Active Workout |

## Sections

### Goals & Skills
A reminder of the goals and skills you're actively working toward — and the reasons behind them. This is the motivational core of the Briefing. When you're not feeling it, this is what brings you back.

Includes:
- Active goals and skills for the current mesocycle
- Priority breakdown of which goals and exercises matter most right now
- Planned vs unplanned items for the current timeframe

### Mesocycle Summary
Where you are in the current training block:
- Cycle focus and current week
- Effort and success of previous weeks in the cycle
- Progress toward mesocycle goals

### Muscles & Muscle Groups
A snapshot of which muscle groups are fresh, fatigued, or being neglected — to inform what you should prioritize in the upcoming session.

### Recommended Exercises
Exercises recommended for this session based on:
- Mesocycle focus
- Goal priority
- Muscle freshness

::: info
Additional recommendation factors will be defined and documented as the planning algorithm is developed.
:::

### Blurb
A free-form text field to write about where you are in your journey. Blurbs are timestamped and saved so you can look back over time as another way to track your growth — separate from the numbers.

### Mood & Energy Log
Log your current state before training:
- Mood
- Energy level
- Drive / motivation
- Other relevant levels

This data feeds into future planning to help the app understand how your physical and mental state affects performance.

## Debriefing

After a workout, the Debriefing gives you space to reflect on how it went. It mirrors the Briefing but is focused on the session you just completed.

### What the Debriefing Covers
- **Explanation** — why you didn't complete a workout or certain sets, if applicable
- **What went well** — progress you're proud of, breakthroughs, personal bests
- **Blurb** — free-form reflection on the session
- **Post-workout levels** — mood, energy, and how you feel after training

Post-workout levels are logged separately from pre-workout levels so the app can compare your state before and after over time.

## Design

::: info Planned
The specific UI design of the Briefing — whether it's a full page, modal, overlay, or stepped flow — has not yet been determined.
:::

## Related Features

- [Mesocycle](/front-end/domains/physical/fitness/features/mesocycle) — the training block context driving the briefing content
- [Fitness Goals](/front-end/domains/physical/fitness/features/fitness-goals) — goals and skills surfaced in the briefing
- [Active Workout](/front-end/domains/physical/fitness/features/active-workout) — briefing is accessible on demand from within a workout
- [Workout Dashboard](/front-end/domains/physical/fitness/features/workout-dashboard) — briefing is accessible on demand from the dashboard
- [Muscle Heat Map](/front-end/domains/physical/fitness/features/muscle-heat-map) — muscle freshness data surfaced in the briefing
