# Muscles

Muscles and Muscle Groups are the anatomical building blocks used to classify what an exercise targets. They drive workout analysis, structural balance planning, recovery tracking, and the Muscle Heat Map visualization.

## Hierarchy

Muscles are organized into a two-level hierarchy:

```
Muscle Group
└── Muscle[]
```

**Example:**
```
Back
├── Latissimus Dorsi
├── Rhomboids
├── Trapezius
└── Subscapularis
```

Muscle data is aggregated from trusted anatomical sources and can be as granular as individual muscle heads (e.g. "Long Head of the Bicep", "Subscapularis").

## Muscle Group Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `name` | String | Name of the muscle group (e.g. "Back", "Shoulders") |

## Muscle Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `name` | String | Name of the muscle (e.g. "Latissimus Dorsi", "Subscapularis") |
| `recoveryTime` | Duration | Default recovery time for this muscle before it should be trained again |
| `muscleGroupId` | Integer | The parent Muscle Group |

## Primary vs Secondary Muscles

Both exercises and exercise variations distinguish between primary and secondary muscles:

| Role | Description |
|---|---|
| **Primary** | The main muscles being trained by the movement |
| **Secondary / Stabilizer** | Muscles that assist or stabilize during the movement but are not the focus |

This distinction is used in volume analysis, heat map intensity, and structural balance tracking to give an accurate picture of what's actually being trained vs. what's just along for the ride.

## Muscle Freshness

Freshness determines whether a muscle is recovered and ready to be trained again. It is calculated from:

- **Last trained** — the timestamp of the most recent set that targeted the muscle
- **Recovery time** — the muscle's default recovery duration
- **Other variables** — additional factors to be defined (e.g. training intensity, volume, sleep, soreness)

Freshness feeds into workout planning and the Workout Briefing to surface which muscle groups are ready to train and which need more recovery time.

## Relationships

```
Muscle
├── MuscleGroup (1)                    → Parent category
├── Exercise_Muscle[]                  → Exercises that target this muscle
└── Exercise_Variation_Muscle[]        → Variations that target this muscle
```

Each Exercise and Exercise Variation has its own muscle mappings, separated by primary and secondary role:

```
Exercise → Exercise_Muscle (primary | secondary) → Muscle
Exercise_Variation → Exercise_Variation_Muscle (primary | secondary) → Muscle
```

## Related Features

→ [Muscle Heat Map](/front-end/domains/physical/fitness/features/muscle-heat-map)
→ [Workout Planning](/front-end/domains/physical/fitness/features/workout-planning)
→ [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing)
