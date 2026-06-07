# Active Workout

The Active Workout feature is the real-time experience of performing and logging a workout in progress. It manages exercise navigation, set logging, rest timing, and circuit flow — keeping the user focused on training while the app handles tracking.

## Pain Points Solved

- Manually tracking sets, reps, and rest times during a workout breaks focus
- Moving between exercises in a circuit or superset should be automatic, not manual
- Set values shouldn't have to be entered from scratch every time — defaults should do the heavy lifting

## Starting a Workout

A workout is started from the [Workout Dashboard](/front-end/domains/physical/fitness/features/workout-dashboard) or the workout list. Once started, the user lands directly on the active workout view with all sections and exercises laid out.

### Workout Briefing
A [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) is not shown before every workout. It is displayed:
- At the beginning of each **Mesocycle** — to orient the user on the cycle's focus and what's coming
- Optionally at the beginning of each **week**
- On demand — the user can pull it up at any time from within the active workout

## Exercise Navigation

### Manual Navigation
- **Tap an exercise card** to jump to that exercise's detail page
- **Navbar** to go back to the section or workout overview

### Automatic Navigation
- When all sets in the active exercise are completed, the app automatically advances to the **next exercise**
- In circuits, the app automatically moves between exercises according to the **circuit order** before resting

## Sections & Circuits

The workout is organized into sections. Within each section, exercises can be grouped into circuits (supersets). The app tracks the circuit order and manages transitions:

```
Section
└── Circuit 1
    ├── Exercise A (position 1)
    ├── Exercise B (position 2)
    └── Exercise C (position 3)  → rest → repeat
└── Circuit 2
    └── Exercise D
```

## Logging a Set

Logging a set is a single tap. Values are pre-filled from either:
- **Attribute-based defaults** set on the exercise
- **Dynamically determined values** based on previous sets or training history

The user can always adjust any value before or after logging. Sets without values are skipped when using Log All Sets.

### Log All Sets
Logs all remaining sets in the current exercise at their current pre-filled values. Any set missing a required value is skipped.

## Rest Timer

The rest timer starts automatically when a set is logged (default behavior, can be disabled in settings).

| Control | Description |
|---|---|
| **Increment / Decrement** | Adjust remaining time in configurable intervals (default: 15 seconds) |
| **Cancel** | Stop the timer early |
| **Manual Start** | Start the timer without logging a set |

When the timer expires:
1. Plays a sound
2. Sends a notification (if the app is backgrounded)
3. Automatically advances to the next set, or next exercise if the current exercise is complete

## Quick Log

Quick Log is a compact overlay that sticks to the bottom of the active workout screen. It provides fast access to the current exercise and set without navigating away from the workout overview. It can be toggled on or off in settings.

Quick Log displays:
- Current exercise and active set
- Set values (pre-filled)
- Log Set and Log All Sets buttons
- Next / skip set and next / skip exercise controls
- Rest timer

## Context Menu Actions

From the workout-level context menu:

- Edit workout name and time
- Edit completion status
- Add a blurb
- Log rating, energy, mood
- Delete workout

## Set Property Display

Properties are shown at two levels:

| Level | Behavior |
|---|---|
| **Exercise defaults** | Shown when the exercise is first loaded |
| **Set level** | Properties with values in at least one set are shown across all sets |

The user can toggle which properties are displayed at the workout, exercise, and set level.

## Property Value Priority

When determining the value to display for a set property:

1. Value entered directly in the set component
2. Existing value on the set record
3. Default value set on the exercise

## Related Features

- [Workout](/front-end/domains/physical/fitness/features/workout) — creating and managing workouts
- [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) — pre-workout and mesocycle-start summary
- [Workout History](/front-end/domains/physical/fitness/features/workout-history) — reviewing past performance
- [Exercise](/front-end/domains/physical/fitness/features/exercise) — exercise library and defaults
