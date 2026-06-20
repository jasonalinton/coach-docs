# Coach Docs — Claude Instructions

This is a VitePress documentation site for the Coach app, a life coaching application organized around life domains (Physical, Mental, Social, Emotional/Spiritual, Financial).

## Sidebar Stub Convention

Pages that have not been documented yet are marked with ` *` at the end of their label in `docs/.vitepress/config.js`.

- When a page is **completed**, remove the `*` from its sidebar entry
- When a **new stub page** is added, include `*` in its sidebar entry from the start
- Always check `config.js` and update it when adding or completing pages

## Documentation Structure

Each domain follows this pattern:
```
Domain
├── Overview
├── Entities      ← what things are (properties, relationships, data model)
├── Features      ← what users do (pain points, flows, UI behavior)
└── Components    ← Vue components that implement features
```

### Entity Pages
- Properties table
- Relationships tree and table
- Notes on defaults and constraints
- Link to related feature page

### Feature Pages
- Pain Points Solved section
- Detailed behavior and flows
- Data Model section (lightweight summary, links to full entity page)
- Related Features section

**Feature pages describe what users can do and why — not how the UI is built.** Avoid specifying layout positions, field labels, button placement, or component-level implementation details. Those belong in component pages.

### Component Pages
- Which feature(s) the component implements
- Props, emits, and store dependencies
- UI structure and layout decisions
- Implementation notes (e.g. state management, edge cases)

### Planned vs Current Behavior
Use VitePress callout blocks to distinguish:
- `::: info Planned` — for behavior that is designed but not yet implemented
- `::: info Current Behavior` — for temporary solutions that will be replaced

## Key Conventions

- **Fitness Goals** are the standard Goal entity with a fitness type — not a separate entity
- **Skills** are a goal type, not a separate entity — they appear across all domains
- **Mesocycle** is a fitness-specific timeframe, not a standalone domain
- **Exercise** (global library) and **Workout Exercise** (instance in a workout) are distinct features — document them separately
- **Workout** (management) and **Active Workout** (real-time logging) are distinct features — document them separately
- Features are nested under their domain, not at a global front-end level

## Cross-Cutting Concepts

These live under `front-end/concepts/` and are referenced across domains:
- Goals & Skills
- Planner & Timeframes
- Metrics
- Avatar — a visual body silhouette that displays the user's state across domains. Each domain contributes its own layer (e.g. Fitness → Muscle Heat Map, Emotional → mood/energy, Physical → injuries/pains). The Muscle Heat Map is the Fitness domain's implementation of Avatar.

## Developer Collaboration (Not Yet Started)

The user is a senior developer who wants full control over implementation details and wants to train Claude to develop in their exact style. When ready, the plan is to:

1. **Read existing code** — Vue components, .NET controllers, services, and data access layer to reverse-engineer patterns
2. **Read FigJam flow** — a FigJam board covering the full todo flow of the application (share as screenshot or PDF)
3. **Document patterns in CLAUDE.md** — coding style, naming conventions, state management, component structure, API calls, etc.

Do not start this process until the user explicitly says they are ready.

## Brainstorming & Documentation Process

When the user provides brainstorming notes before writing a page, do a **thorough pass through all the notes** before asking clarifying questions. Don't rely only on what comes to mind — scan every bullet and sub-bullet to make sure nothing is missed. Ask about anything that isn't fully understood, even if it seems minor. Missing details discovered after a page is written require rework.

## Commit Style

Commit messages should be descriptive and reference what was added or changed:
- `Add [page name] entity/feature page`
- `Update [page name] with [what changed]`
- `Mark stub pages with * in sidebar`
