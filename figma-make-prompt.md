# Figma Make Prompt — Coach App: Fitness Domain

## App Overview
Coach is a personal life coaching app. The Fitness domain helps users plan, log, and track physical training. The user is an active person who trains calisthenics and ballet. The app needs to be mobile-first, clean, and motivating.

## Design Direction
- Mobile-first (primary device is a phone)
- Dark or neutral dark theme with energetic accent colors
- Card-based layout
- Clean, athletic aesthetic — think strong typography, clear hierarchy, minimal clutter
- Smooth, modern feel — not clinical or spreadsheet-like

---

## Screens to Prototype

### 1. Workout Dashboard
The home screen of the Fitness domain. Read-only overview with one primary action.

**Sections (top to bottom):**
- **Active Workout card** — shows workout name, elapsed time, progress (sets completed / total). Taps into Active Workout screen. Only visible if a workout is in progress.
- **Start Workout card** — suggested workout for the day with a prominent Start button. Shows workout name and estimated duration.
- **Mesocycle summary** — cycle name, current week (e.g. "Week 2 of 6"), focus blurb, small progress bar
- **Avatar** — visual body silhouette with muscle heat map overlay showing which muscles were recently trained (colored by recency/intensity)
- **Goals & Skills** — horizontal scroll of goal cards. Each card shows: goal name, type badge (Skill / Mobility / Maintenance / Overload), progress bar (completed volume vs goal volume), priority indicator
- **Planning** — two tabs: Planned / Unplanned. List of exercises for the current week
- **Muscles** — muscle group tiles showing fresh / fatigued / neglected status

---

### 2. Active Workout
The real-time workout logging screen.

**Layout:**
- Header: workout name, elapsed time, stop/complete button
- Section tabs or accordion: Warm-Up | Skill | Strength | Cool-Down
- Exercise list within the active section:
  - Each exercise card shows: name, sets completed / total, active indicator
  - Active exercise is expanded showing set rows
- **Set row:** reps | weight | time fields (pre-filled), Log Set button
- **Quick Log overlay** — sticky bar at bottom of screen:
  - Current exercise name
  - Active set values (editable)
  - Log Set | Log All Sets buttons
  - Next Set / Next Exercise arrows
  - Rest timer (large countdown, +/- buttons, cancel)
- Rest timer shown prominently when counting down

---

### 3. Workout Exercise
The detail view for a single exercise within a workout.

**Layout:**
- Header: exercise name, back button
- **Toolbar:** History | Rest | Replace | Notes | Units (icon buttons)
- Set list:
  - Each row: set number, reps, weight, time, variation (if any), log button
  - Context menu per set: Delete | Set Variations
- Property toggles: show/hide reps, weight, time, tempo per set
- Log All Sets button
- Small history preview chart at bottom (most recent sessions)

---

### 4. Workout Briefing
A motivational + informational pre-workout screen.

**Layout:**
- Header: date, mesocycle week
- **Goals & Skills reminder** — cards for each active goal with:
  - Goal name and type
  - Reason/motivation text
  - Progress indicator
  - Maintenance warning badge (if applicable — orange/red)
- **Mesocycle summary** — cycle focus, previous week effort rating
- **Muscles** — small body diagram showing fresh vs fatigued
- **Recommended exercises** — short list with priority badges
- **Blurb field** — text area: "How are you feeling about your training?"
- **Mood & Energy sliders** — Mood | Energy | Drive (1–10 scale)
- Start Workout button at bottom

**Debriefing variant (post-workout):**
- Same layout but focused on reflection:
  - "How did it go?" text area
  - What went well
  - Post-workout mood/energy sliders
  - Complete button

---

### 5. Fitness Goals
List and detail views for fitness goals.

**List view:**
- Filter/sort bar: All | Skill | Mobility | Maintenance | Overload
- Goal cards sorted by priority:
  - Goal name
  - Exercise name
  - Type badge
  - Volume progress bar: completed / target (e.g. "12 / 20 sets this week")
  - Mesocycle connection indicator
  - Maintenance warning if below threshold

**Goal detail view:**
- Goal name and type
- Exercise mapped to goal
- Variations listed
- Current week progress (volume completed vs target)
- Mesocycle progress chart (week by week across current cycle)
- History of effort over past cycles

---

### 6. Exercise Library
Global searchable list of exercises.

**Layout:**
- Search bar
- Filter chips: All | Strength | Stretch | Warm-Up | Cool-Down | by Muscle
- Exercise list:
  - Exercise name
  - Primary muscles (tags)
  - Type badge
  - Tap to open exercise detail

**Exercise detail:**
- Name, description
- Type and training attributes
- Variations list (expandable)
- Primary and secondary muscles (small body diagram)
- Tempo default
- Exercise History charts (tabs): Reps | Weight | Time | Volume
- Add to Workout button

---

### 7. Exercise History
Charts and analytics for a single exercise.

**Layout:**
- Exercise name header
- Timeframe selector: Week | Month | Mesocycle | All Time
- Variation filter
- Chart tabs: Reps in 1 Set | Weight in 1 Set | Time in 1 Set | Total Volume
- Chart (line graph, clean and athletic)
- Session list below chart — each session: date, sets logged, peak weight/reps

---

### 8. Mesocycle
Training block overview.

**Layout:**
- Cycle name and focus blurb
- Progress bar: Week X of Y
- Goals mapped to this cycle — progress per goal
- Week-by-week schedule grid (planned vs completed workouts)
- Effort and success rating per previous week
- Progress snapshot section:
  - Measurements
  - Progress photos placeholder
  - Key exercise performance delta (e.g. "Pull-up max: 8 → 12 reps")
- Past Cycles tab — timeline of previous cycles with outcomes

---

## Key UI Components to Include

- **Goal card** — name, type badge, progress bar, priority dot
- **Exercise card** — name, muscle tags, type badge
- **Set row** — reps | weight | time inputs, log button
- **Rest timer** — large countdown display, +/- controls, cancel
- **Quick Log bar** — sticky bottom overlay
- **Maintenance warning badge** — orange/red alert on goal cards
- **Muscle heat map** — body silhouette with colored muscle overlay
- **Progress bar** — used for goals, mesocycle, set completion
- **Mood/Energy slider** — 1–10 scale with emoji anchors
- **Briefing blurb field** — text area with timestamp

---

## User Flow to Show

1. Open app → Workout Dashboard
2. Tap Start Workout → Workout Briefing (log mood/energy → start)
3. Active Workout → tap exercise card → Workout Exercise detail
4. Log sets → rest timer counts down → auto advance to next exercise
5. Complete workout → Debriefing (log reflection → done)
6. Return to Dashboard → updated muscle heat map and goal progress
