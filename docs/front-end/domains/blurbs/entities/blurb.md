# Blurb Entity

A Blurb is any block of text or media. It is the core record of the Blurbs domain and can be attached to virtually any other entity in the app.

## Properties

| Property | Type | Description |
|---|---|---|
| `id` | int | Primary key |
| `userId` | int | Owner of the blurb |
| `title` | string? | Optional title |
| `text` | string? | The text content of the blurb |
| `type` | enum | Blurb type (see below) |
| `dateTime` | datetime | When the blurb occurred or was created |
| `parentId` | int? | Parent blurb (for sequenced blurbs) |
| `previousId` | int? | Previous blurb in sequence |
| `createdAt` | datetime | Record creation timestamp |
| `updatedAt` | datetime | Last update timestamp |

::: info Planned
The sequencing model (parent/child vs previous/next ID chain) has not been finalized. Both options are under consideration:
- **Option 1** — Parent blurb contains children blurbs that can be positioned in order
- **Option 2** — Each blurb has a `previousId` pointing to the blurb before it in the sequence

:::

## Blurb Types

| Type | Description |
|---|---|
| `Blurb` | General post or blog entry |
| `Reason` | The motivation behind a goal or decision |
| `Excuse` | The reason something was not done — distinct from Reason |
| `Journal` | A personal journal entry |
| `Briefing` | Pre- or post-workout reflection |
| `InventoryLog` | A log entry for an inventory item |
| `Metric` | A blurb tied to a metric data point |
| `Goal` | A blurb tied to a goal |
| `Todo` | A blurb tied to a todo item |

## Mappings

A blurb can be attached to one or more entities at once — a single note can be relevant to an Exercise *and* a Goal *and* a LogEntry simultaneously, rather than being limited to a single attachment:

| Mapping | Description |
|---|---|
| **Metric** | Notes tied to a metric data point |
| **Goal** | Why you set this goal (Reason) or why you didn't follow through (Excuse) |
| **Todo** | Notes or reflections tied to a specific todo |
| **Iteration** | Tied to a specific logged instance of a todo |
| **LogEntry** | Attached to a log entry |
| **Workout** | Pre/post-workout notes, briefings |
| **Exercise** | Notes about a specific exercise (e.g. form cues, PR context) |
| **FoodItem** | Notes about a food item |
| **Meal** | Notes about a meal |
| **FitnessGoal** | Notes tied to a fitness goal |
| **GoalTimePair / GoalTimePairTodo** | Notes tied to a scheduled window on a goal, or a todo scheduled within one |
| **TodoRepeat / TodoTimePair** | Notes tied to a todo's recurrence or scheduled window |

## Type Tags

Independent of a blurb's primary [type](#blurb-types), a blurb can also carry one or more lightweight category tags pulled from the same shared type list used across the app. This lets a blurb be labeled (e.g. as both "Advice" and "Note") without changing its primary type or what it's mapped to.

## Media

Blurbs can include media attachments (images, video, etc.) in addition to or instead of text. Media is stored in separate mapping tables and associated with the blurb.

## Relationships

```
Blurb
├── User (owner)
├── Blurb (parent, optional)
├── Blurb (previous, optional)
├── Type tags (0 or more)
├── Mappings (0 or more, any combination of)
│   ├── Metric
│   ├── Goal
│   ├── Todo
│   ├── Iteration
│   ├── LogEntry
│   ├── Workout
│   ├── Exercise
│   ├── FoodItem / Meal
│   ├── FitnessGoal
│   ├── GoalTimePair / GoalTimePairTodo
│   └── TodoRepeat / TodoTimePair
└── Media (0 or more)
```

## Related Features

- [Timeline](/front-end/domains/blurbs/features/timeline) — the main view for browsing blurbs
- [Blurb Form](/front-end/domains/blurbs/features/blurb-form) — creating and editing blurbs
