---
name: competitor-feature-research
description: Research new features shipped by other React and Vue component libraries over a given time period and compare them against Mantine to find gaps and divergences. Use when the user wants competitive analysis of UI libraries, to track what competitors added recently, to find missing Mantine features, or asks things like "what did MUI/Chakra/Ant add since X", "what features are we missing", "compare our components to competitors", "feature gap analysis". Operates from the Mantine monorepo.
---

# Competitor Feature Research

## Overview

Scan a curated set of actively-maintained React and Vue component libraries for features
they shipped within a time window (from their changelogs / release notes / commits), distill
the genuinely new features, then compare each against Mantine's current implementation and
bucket it as **Have**, **Missing**, or **Different**. The end product is an actionable report
for the Mantine team.

The library list (website + GitHub repo for each) lives in
[references/libraries.md](references/libraries.md). Read it at the start of every run.

## Inputs (resolve before starting)

1. **Time period** — the window to scan. If the user gives a date or range, use it. If not,
   default to the **last 30 days** and state the assumption. Accept forms like "since 2026-04-01",
   "last 3 months", "since the last Mantine release".
2. **Library scope** — which libraries to scan. Default to **all React libraries** in
   `references/libraries.md` (closest comparison). Include Vue libraries only if the user asks
   for them or for "all libraries" — Vue features map by idea, not 1:1. Honor explicit subsets
   ("just MUI and Chakra").

If the period is ambiguous and the user is reachable, ask one short clarifying question;
otherwise proceed with the 30-day default.

## Workflow

Run these steps in order. For more than ~3 libraries, parallelize step 2–3 with subagents
(see "Parallelizing").

### Step 1 — Scope

- Read [references/libraries.md](references/libraries.md).
- Resolve the time period to a concrete `SINCE` date (YYYY-MM-DD).
- Pick the target repos. Skip the "Dormant / avoid" ones unless asked.

### Step 2 — Gather raw data (per library)

Prefer GitHub Releases. Run the bundled script:

```bash
scripts/fetch_releases.sh <owner/repo> <SINCE-YYYY-MM-DD>
```

It prints every release published on/after `SINCE` as markdown. Fallback order if it returns
nothing (some repos don't cut GitHub Releases):

1. **CHANGELOG file** — fetch from the repo, e.g.
   `gh api repos/<owner>/<repo>/contents/CHANGELOG.md --jq '.content' | base64 -d`
   (Naive UI uses `CHANGELOG.en-US.md`; Chakra uses `.changelog/*.mdx`).
2. **Commit history** — `gh api "repos/<owner>/<repo>/commits?since=<SINCE>T00:00:00Z" --paginate --jq '.[].commit.message' | head -200`. Read commit subjects for `feat:` / "add" entries.
3. **Docs "What's new"/releases page** — WebFetch the site's releases/changelog URL from
   `references/libraries.md` as a last resort.

Per-package monorepos (MUI, Fluent UI, Chakra, React Spectrum) tag many releases — focus on the
core/umbrella package and ignore satellite packages (icons, codemods, docs).

### Step 3 — Distill features

From the raw notes, extract only **genuinely new capabilities**. For each, capture: the
component/area, a one-line description, the source (version/PR link), and a **link to the
competitor's component documentation page** (the specific component page, e.g.
`https://www.heroui.com/docs/components/empty-state`, not the site root). Construct it from the
library's website base in `references/libraries.md` following that site's component URL pattern;
if unsure of the exact slug, link the site's components index. This doc link is required for every
feature so the Mantine team can quickly see the competitor's implementation.

KEEP: new components, new props/APIs, new variants/modes, new behaviors, new hooks, notable
accessibility or theming capabilities.

DROP: bug fixes, performance tweaks, internal refactors, type-only fixes, dependency bumps,
docs/website changes, CI/build changes, deprecations (note these separately if notable).

This "new features only" filter mirrors how the Mantine changelog itself is curated.

### Step 4 — Compare against Mantine

For each distilled feature, find the equivalent Mantine surface and decide the bucket. Search
the local monorepo (this is the Mantine repo):

- **Components**: `packages/@mantine/core/src/components/<Name>/` (~110 components).
  Extensions live in `packages/@mantine/{dates,charts,form,tiptap,carousel,dropzone,notifications,modals,spotlight,nprogress,code-highlight}/src`.
- **Hooks**: `packages/@mantine/hooks/src/use-*`.
- **Docs (best for props & behaviors)**: `apps/mantine.dev/src/pages/core/*.mdx`,
  `.../hooks/*.mdx`, `.../x/*.mdx`, `.../dates/*.mdx`, `.../form/*.mdx`, `.../charts/*.mdx`.

Practical method per feature:

1. Map the competitor component to the nearest Mantine component (e.g. MUI `Autocomplete` →
   Mantine `Autocomplete`/`Combobox`; Ant `Segmented` → Mantine `SegmentedControl`).
2. `grep`/read that component's source and its `.mdx` docs to check whether the specific
   prop/behavior exists.
3. Assign a bucket:
   - **Have** — Mantine already supports it (cite the prop/component).
   - **Missing** — no Mantine equivalent (the actionable gap).
   - **Different** — Mantine solves the same need a different way (name both approaches, e.g.
     "they ship a `<DatePicker presets>` prop; Mantine expects custom `renderDay`/controls").

When unsure, prefer **Different** over **Missing** and say what you checked — false "missing"
claims waste the team's time.

### Step 5 — Report

Write the report to a markdown file at:

```
./claude/competitor-feature-research/<TODAY>-report.md
```

where `<TODAY>` is the run date in `YYYY-MM-DD` form (the date the scan is run, not `SINCE`).
Create the `./claude/competitor-feature-research/` directory if it doesn't exist; overwrite an
existing same-day report. Use the template in "Report format". Lead with the **Missing** items
grouped across libraries — that's the highest-value output — then per-library detail. After
writing, tell the user the file path and give a 2–3 line summary of the top gaps.

## Parallelizing

For a full scan (10+ React libraries), dispatch one subagent per library (or per small group)
to do steps 2–4, then synthesize their structured results in step 5. Give each subagent:

- the `owner/repo`, website, and `SINCE` date,
- the path to `scripts/fetch_releases.sh`,
- the Mantine search paths above and the bucket definitions,
- a request to return a compact structured list: `feature | component | bucket | evidence | competitor doc link`.

This keeps the heavy changelog text out of the main context. See the
`superpowers:dispatching-parallel-agents` skill for mechanics.

## Report format

```markdown
# Competitor feature scan — <SINCE> to <today>

Libraries scanned: <list>. Period: <window>.

## Missing in Mantine (prioritized gaps)

- **<Feature>** ([<Library> docs](<competitor-component-doc-url>)) — <one line>. Seen in: <Library vX.Y> (<PR/link>). Nearest Mantine surface: <component or "none">.
- ...

## Implemented differently

- **<Feature>** ([<Library> docs](<competitor-component-doc-url>)) — Them: <approach>. Mantine: <approach>. Component: <name>.
- ...

## Already covered (spot-check)

- **<Feature>** ([<Library> docs](<competitor-component-doc-url>)) — Mantine has it via <prop/component>.

## Per-library detail

### <Library> (<versions in window>)

| Feature | Component | Bucket                 | Evidence          | Competitor docs                          |
| ------- | --------- | ---------------------- | ----------------- | ---------------------------------------- |
| ...     | ...       | Have/Missing/Different | <prop or PR link> | [<component>](<competitor-doc-url>)      |
```

Every feature row/bullet must include a link to the competitor's component documentation page
(e.g. a new HeroUI `Meter` links to its HeroUI docs page). Link the component index page if the
exact component slug can't be confirmed.

## Notes

- Verify `owner/repo` paths if a fetch returns nothing — orgs rename (see `references/libraries.md`).
- This is research, not implementation. Don't change Mantine source; produce findings the team
  can act on.
- Keep the run reproducible: always state the exact `SINCE` date and library list used.
