# Blurb Form

The Blurb Form is used to create and edit blurbs. It can be opened standalone or in the context of another entity (e.g. adding a note to a workout or attaching a reason to a goal).

## Pain Points Solved

- Writing a journal entry in one place and then needing to separately reference it from the thing it was about
- No way to capture the "why" behind decisions or missed commitments alongside the data

## Fields

| Field | Required | Description |
|---|---|---|
| **DateTime** | Yes | When the blurb occurred — defaults to now, but can be changed |
| **Type** | No | Blurb type (Reason, Excuse, Journal, etc.) — optional, can be left unset |
| **Mapping** | No | What entity this blurb is attached to (Goal, Todo, Workout, etc.) |
| **Title** | No | Optional title for the blurb |
| **Text** | No | The body of the blurb — can be left empty if the blurb is media-only |

## Display vs Edit Modes

The form has two modes:

- **Edit mode** — all fields are editable; used when creating or actively editing a blurb
- **Display mode** — a read-only view of the blurb; resembles the final card layout

## Media

Media (images, video, etc.) can be attached to a blurb in addition to or instead of text.

## AI Features

While writing, the app can offer:

- **Writing coaching** — hints, suggestions, and lessons to improve your writing
- **Suggested mappings** — detect what you might be writing about and suggest linking to relevant goals, todos, or workouts
- **Note card generation** — create a mnemonic or note card from the blurb content

## Related Features

- [Timeline](/front-end/domains/blurbs/features/timeline) — where blurbs appear after creation
- [Blurb Entity](/front-end/domains/blurbs/entities/blurb) — data model
