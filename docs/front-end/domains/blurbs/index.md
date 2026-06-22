# Blurbs

Blurbs are the writing and media layer of Coach. Any block of text, image, video, or other media can be a blurb. They can be standalone entries or sequenced into longer posts, and they can be mapped to virtually anything in the app — goals, todos, workouts, food items, metrics, and more.

Blurbs serve as the connective tissue between data and narrative. Where metrics and logs capture *what happened*, blurbs capture *why it happened*, *how it felt*, and *what it meant*.

## Domain Purpose

- Write about your goals, progress, setbacks, and reasons
- Keep a journal tied to the things you're actually doing in the app
- Build a blog-style timeline of your life, automatically contextualized by what you've been working on
- Track excuses, reasons, and reflections so patterns become visible over time

## Blurb Types

| Type | Description |
|---|---|
| **Blurb / Blog** | A general post or journal entry |
| **Reason** | The motivation or purpose behind a goal or decision |
| **Excuse** | The reason something was *not* done — distinct from Reason (e.g. skipped the gym because you were tired) |
| **Journal** | A personal journal entry |
| **Briefing** | Pre- or post-workout reflection — see [Workout Briefing](/front-end/domains/physical/fitness/features/workout-briefing) |
| **Inventory Log** | A log entry for an inventory item |
| **Metric** | A blurb tied to a metric data point |
| **Goal** | A blurb tied to a goal |
| **Todo** | A blurb tied to a todo item |

## Blurbs as Domain Context

Some domain pages (Physical, Emotional, Mental, etc.) have a blog-like quality — they surface a timeline of blurbs relevant to that domain, giving each domain its own narrative layer alongside its data and metrics.

## AI Integration

The app uses blurbs as input for AI-driven features:

- **Suggest item creation** — based on what you've been writing about
- **Note cards & mnemonics** — generated from blurb content
- **Writing coaching** — lessons, advice, and hints to improve your writing over time

## Related Concepts

- [Goals & Skills](/front-end/concepts/goals-and-skills) — goals can have Reason and Excuse blurbs
- [Planner & Timeframes](/front-end/concepts/planner-and-timeframes) — blurbs are mapped to todos and timeframes
- [Metrics](/front-end/concepts/metrics) — metric domain pages surface blurb timelines
