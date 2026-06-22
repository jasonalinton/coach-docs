# Timeline

The Timeline is the primary view for browsing blurbs. It shows blurbs in chronological order across a given range, with filtering, sorting, and grouping options. It is also the underlying layout used by domain-specific blog views (e.g. the Physical domain page or the Emotional domain page).

## Pain Points Solved

- No way to see a narrative view of your life alongside your data and metrics
- Hard to find past journal entries or reflections without searching through a flat list
- Context gets lost when notes aren't tied to what you were actually doing at the time

## Layout

The timeline is organized by week or day, with banner images or section headers visually separating blocks of time. Blurbs appear as cards within their respective time blocks.

### Views

| View | Description |
|---|---|
| **Week** | Groups blurbs by week with a banner-style separator |
| **Day** | Groups blurbs by day for more granular browsing |

## Filtering

The toolbar includes filter controls to narrow what's shown:

- **By type** — show only Journal entries, only Reasons, only Excuses, etc.
- **By mapping** — show only blurbs attached to a specific goal, workout, or todo
- **By date range** — narrow to a specific period

## Sort Toolbar

Blurbs within each time block can be sorted and reordered using the sort toolbar.

## Blurb Cards

Each blurb in the timeline is shown as a card. Cards can display:

- **Iteration time** — when the associated iteration was logged
- **Points** — points earned for the associated todo or iteration
- **Iteration text** — the text of the iteration log
- **Blurb text** — the body of the blurb itself

Cards link to the full blurb view and to whatever entity the blurb is mapped to (e.g. the goal, workout, or todo).

## Domain Blog Pages

The Timeline layout is reused for domain-level blog pages. For example, the Physical domain page or the Emotional domain page shows a blurb timeline filtered to that domain's context — giving each domain its own narrative layer.

## Related Features

- [Blurb Form](/front-end/domains/blurbs/features/blurb-form) — creating and editing blurbs
- [Blurb Entity](/front-end/domains/blurbs/entities/blurb) — data model
- [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) — Briefing-type blurbs appear in the timeline
