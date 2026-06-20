# Avatar

The Avatar is a cross-cutting visual feature that represents the user's body and overall state across all domains of the app. It provides an intuitive, at-a-glance picture of how you're doing — physically, mentally, and emotionally — by visualizing data from multiple domains onto a single body silhouette.

## Purpose

The Avatar bridges the gap between raw data and lived experience. Rather than reading numbers, the user can look at their Avatar and immediately understand their current state across multiple dimensions.

## What the Avatar Can Visualize

| Domain | What's Shown |
|---|---|
| **Physical** | Muscle freshness via the [Muscle Heat Map](/front-end/domains/physical/fitness/features/muscle-heat-map) |
| **Physical** | Injuries, pains, and areas of discomfort |
| **Physical** | Other body-affecting issues (acne, swelling, etc.) |
| **Emotional / Mental** | Mood and energy levels |
| **Mental** | Mental states (stress, focus, clarity, etc.) |

The Avatar is a shared canvas — different domains contribute different layers of visualization onto the same body representation.

## Domain Implementations

### Physical — Muscle Heat Map
In the Fitness domain, the Avatar displays muscle freshness using a heat map overlay. Muscles are colored based on their recovery state (Fresh → Fatigued). See [Muscle Heat Map](/front-end/domains/physical/fitness/features/muscle-heat-map) for full details.

::: info
The color scheme for the heat map visualization has not yet been finalized. Design examples are needed to make this decision.
:::

### Physical — Body Issues
The Avatar can mark areas of the body affected by injuries, pains, acne, or other physical issues. This feeds into planning (avoid training injured areas) and tracking (monitoring recovery from an issue over time).

### Emotional / Mental — Mood & Energy
Logged mood, energy levels, drive, and mental states from Briefings and check-ins can be reflected on or alongside the Avatar — giving a visual representation of your inner state alongside your physical state.

## Design

::: info Planned
The full Avatar design — how layers are toggled, how different domain visualizations are composited onto the body silhouette, and how it adapts across different screen sizes and contexts — has not yet been designed.
:::

## Where It Appears

The Avatar appears across multiple domains as a contextual visualization. In each domain it surfaces the layers most relevant to that context:

| Surface | Context |
|---|---|
| **Workout Dashboard** | Muscle freshness heat map, physical state |
| **Workout Briefing** | Freshness snapshot before training |
| *(other domains TBD)* | Mood, energy, mental state, body issues |

## Related Concepts

- [Metrics](/front-end/concepts/metrics) — Avatar visualizations are driven by tracked metrics across domains
- [Planner & Timeframes](/front-end/concepts/planner-and-timeframes) — body issues and states are logged within timeframes
