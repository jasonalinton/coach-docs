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

## Commit Style

Commit messages should be descriptive and reference what was added or changed:
- `Add [page name] entity/feature page`
- `Update [page name] with [what changed]`
- `Mark stub pages with * in sidebar`
