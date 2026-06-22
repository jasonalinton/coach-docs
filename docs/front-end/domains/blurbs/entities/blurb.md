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

A blurb can be linked to many different entities:

| Mapping | Description |
|---|---|
| **Goal** | Why you set this goal (Reason) or why you didn't follow through (Excuse) |
| **Todo** | Notes or reflections tied to a specific todo |
| **Iteration** | Tied to a specific logged instance of a todo |
| **LogEntry** | Attached to a log entry |
| **Workout** | Pre/post-workout notes, briefings |
| **FoodItem** | Notes about a food item |
| **Meal** | Notes about a meal |

## Media

Blurbs can include media attachments (images, video, etc.) in addition to or instead of text. Media is stored in separate mapping tables and associated with the blurb.

## Relationships

```
Blurb
├── User (owner)
├── Blurb (parent, optional)
├── Blurb (previous, optional)
├── Goal (optional mapping)
├── Todo (optional mapping)
├── Iteration (optional mapping)
├── Workout (optional mapping)
├── Meal / FoodItem (optional mapping)
└── Media (0 or more)
```

## Related Features

- [Timeline](/front-end/domains/blurbs/features/timeline) — the main view for browsing blurbs
- [Blurb Form](/front-end/domains/blurbs/features/blurb-form) — creating and editing blurbs
