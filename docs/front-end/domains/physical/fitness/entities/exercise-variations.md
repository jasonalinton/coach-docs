# Exercise Variation

An Exercise Variation is a specific implementation of a parent Exercise. Variations share the same fundamental movement pattern but differ in grip, stance, equipment, or range of motion.

**Example:** The Exercise "Pull-up" has variations like "Wide Grip Pull-up", "Close Grip Pull-up", and "Neutral Grip Pull-up."

## Properties

| Property | Type | Description |
|---|---|---|
| `id` | Integer | Primary key |
| `name` | String | Name of the variation (e.g. "Wide Grip Pull-up") |
| `description` | String | Description of how this variation differs from the base exercise |
| `exerciseId` | Integer | The parent Exercise this variation belongs to |

## Relationships

```
Exercise_Variation
├── Exercise (1)     → The parent movement pattern
└── Muscle[]         → Muscles targeted by this specific variation
```

Variations can have their own muscle mappings that differ from the parent exercise. For example, a wide grip pull-up emphasizes the lats more than a close grip variation.

## Usage in Sets

When logging a set, a specific variation can be selected. This allows tracking which variation was used in each set, enabling history and volume analysis at the variation level.

```
Set
└── Exercise_Variation (0..1)    → The variation used in this set, if applicable
```

## Related Feature

→ [Exercise Feature](/front-end/domains/physical/fitness/features/exercise)
