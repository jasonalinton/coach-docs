# Workout Planning

Workout Planning is how you turn your goals and mesocycle into an actual training schedule. It can happen dynamically — the app auto-generating workouts based on all relevant variables — or manually in a dedicated planning view where you can see everything at once and design your week intentionally.

## Pain Points Solved

- Hard to plan a balanced week of training while considering goals, recovery, and structural balance simultaneously
- Easy to overwork certain muscles or neglect others without a clear overview
- Planning a full mesocycle ahead of time is overwhelming without intelligent automation
- Goals get set but never properly translated into a concrete training schedule

## Two Modes

### Dynamic Planning
The app auto-generates workouts based on your goals, mesocycle focus, muscle freshness, energy levels, and progressive overload requirements. Workouts can be generated for:

- **The full mesocycle** — the ideal approach, mapping out the entire training block ahead of time
- **The current week** — plan the week ahead each Monday (or whenever the week starts)
- **The current day** — generate a workout on the fly for today

When the app auto-generates a workout it suggests which exercises to include based on all available variables. No user confirmation is required — the workout is created and can be adjusted afterward.

### Manual Planning
A dedicated planning view where you design workouts yourself with full visibility into all relevant variables. This view shows:

| Panel | Description |
|---|---|
| **Active Goals** | Goals for the current mesocycle with their exercise requirements and priority |
| **Recommended Exercises** | Exercises suggested for each goal based on priority and what hasn't been planned yet |
| **Planned vs Unplanned** | What's already been scheduled and what still needs to be covered |
| **Muscles Affected** | Which muscle groups will be trained by the current plan |
| **Overwork Warnings** | Alerts when a muscle group is being scheduled too frequently without adequate rest |
| **Rest Warnings** | Alerts when planned workouts don't allow sufficient recovery time between sessions |

## Creating a Workout in Planning

Three ways to create a workout during planning:

| Method | Description |
|---|---|
| **Auto-generate** | App selects exercises based on goals, priority, muscle freshness, and energy |
| **From template** | Choose an existing workout template as the starting point |
| **From scratch** | Build a new workout manually within the planning view |

## Repetition Targets

Weekly exercise repetition targets are derived from the **progressive overload requirements** of the selected training attribute. For example:

- A **Hypertrophy** attribute requires a certain frequency and volume per week to drive adaptation
- A **Strength** attribute requires lower frequency with higher intensity and longer rest between sessions
- A **Frequency** attribute prioritizes hitting an exercise as many times per week as possible at manageable volume

These targets inform how many times each exercise or workout type should appear in the week's plan.

## Energy & Recovery

Auto-generation and planning warnings consider:

- **Logged mood and energy** — from pre and post-workout Briefing/Debriefing logs
- **Muscle recovery time** — based on each muscle's `recoveryTime` property and when it was last trained
- **Training history** — recent volume and intensity to gauge cumulative fatigue

## Template Updates

When a workout is copied from a template and modified during the session, the original template is not automatically updated. However, users can update template values directly from the context menus of exercises and sets within the workout — keeping templates accurate without a separate editing flow.

Workout recommendations are generated dynamically from past workout data rather than relying on static template values.

## Structural Balance

The planning view monitors push/pull, upper/lower, and straight-arm/bent-arm balance across the planned week. Imbalances surface as warnings so you can adjust before training begins rather than discovering them afterward.

## Related Features

- [Mesocycle](/front-end/domains/physical/fitness/features/mesocycle) — the training block that planning is organized around
- [Fitness Goals](/front-end/domains/physical/fitness/features/fitness-goals) — goals drive exercise requirements and repetition targets
- [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) — energy and mood data feeds into planning
- [Workout Dashboard](/front-end/domains/physical/fitness/features/workout-dashboard) — surfaces planned vs unplanned items
- [Muscle Heat Map](/front-end/domains/physical/fitness/features/muscle-heat-map) — muscle coverage and overwork data used in planning
