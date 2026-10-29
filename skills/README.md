# Mantine Skills for AI Agents

A collection of [Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/skills) for building with [Mantine](https://mantine.dev/).
Compatible with other agents as well via [skills.sh](https://skills.sh/).

## Available Skills

### `mantine-combobox`

Build custom dropdown/select/autocomplete/multiselect components using Mantine's Combobox primitives.

Use when: creating a custom select-like component, building a searchable dropdown, implementing multi-select or tags input, customizing option rendering, adding custom filtering logic, or working with `useCombobox`, `Combobox.Target`, `Combobox.Option`, or `Combobox.Dropdown`.

```sh
npx skills add https://github.com/mantinedev/skills --skill mantine-combobox
```

Example prompts:

- "Build a searchable user picker with avatars in the options and server-side search"
- "Add a branch switcher dropdown to the toolbar: button trigger, search inside, long list"

---

### `mantine-form`

Build forms using `@mantine/form`.

Use when: setting up a form with `useForm`, adding validation rules or async validation, working with nested object or array fields, reading values or dirty state during render (`useWatchValue`, `useDirty`), splitting a form into components or reusing field components across forms (`createFormContext`, `getField`), building custom inputs with `useFormField`, using the standalone `useField` hook, or any task involving `useForm`, `getInputProps`, `onSubmit`, `insertListItem`, or form validation.

```sh
npx skills add https://github.com/mantinedev/skills --skill mantine-form
```

Example prompts:

- "Build a checkout form validated with zod: billing address is required only when it differs from shipping"
- "Add an invoice form with a list of line items, per-line validation and server errors shown on fields"

---

### `mantine-data-grid`

Build data tables with `@mantine/data-grid` (DataGrid on TanStack Table v9).

Use when: building an admin list, orders table or any table with sorting, filtering or pagination, connecting a grid to an API with server-side sorting, filtering and pagination, adding row selection with bulk actions, row actions or inline cell/row editing, rendering grouped rows, tree data, pinned or resizable columns or virtualized large datasets, adding a toolbar, filter controls, export or a custom footer, or working with `DataGrid`, `useDataGrid`, `DataGridColumnDef` or `@tanstack/react-table` in a Mantine app.

```sh
npx skills add https://github.com/mantinedev/skills --skill mantine-data-grid
```

Example prompts:

- "Build an orders table loaded from /api/orders with server-side sorting, a status filter, search by customer and pagination"
- "Make the products table editable inline: price as a number input, status as a select, save each row to the API and show errors"

---

### `mantine-calendar`

Build custom calendars and date pickers with `@mantine/dates`: per-day content and states, your own selection rules, custom periods and display-only calendars.

Use when: a calendar shows data per day (prices, free slots, event dots, an activity heatmap), days are unavailable with a reason or a range must not cross booked days, the selection is not a plain date or range (stays, fixed-length periods, fiscal quarters, week or custom-period pickers), a calendar sits next to time slots, presets or a toolbar, or working with `Calendar`, `useCalendar`, `getDayProps`, `renderDay`, `excludeDate`, `getMonthControlProps`, `Month`, `Day`, `CalendarHeader` or `PickerControl`.

```sh
npx skills add https://github.com/mantinedev/skills --skill mantine-calendar
```

Example prompts:

- "Build a booking calendar for a holiday flat: two months, nightly price under each day, booked nights unavailable, check-out allowed on the morning of a booked night"
- "Add an appointment picker: calendar on the left, free time slots of the picked day on the right, days without slots disabled"

---

### `mantine-custom-components`

Build custom components that integrate with Mantine's theming, Styles API, and core features.

Use when: creating a new component using `factory()`, `polymorphicFactory()`, or `genericFactory()`, adding Styles API support (`classNames`, `styles`, `vars`, `unstyled`), implementing CSS variables via `createVarsResolver`, building compound components, registering a component with `MantineProvider` via `Component.extend()`, or working with `Factory`, `useProps`, `useStyles`, `BoxProps`, `StylesApiProps`, or `ElementProps`.

```sh
npx skills add https://github.com/mantinedev/skills --skill mantine-custom-components
```

Example prompts:

- "Create a StatCard component with variants, sizes and Styles API that can be configured from the theme"
- "Convert src/AvatarStack.tsx to a Mantine-style component: CSS module, CSS variables, no inline styles"

### `mantine-ui`

Visual and component decisions for interfaces built with Mantine: which component fits a piece of data, button and action variants, text hierarchy, surfaces and nesting, lists of repeated rows, icons and spacing. Use it together with the task skills (`mantine-form`, `mantine-combobox`): they cover the logic, `mantine-ui` covers how it looks.

```sh
npx skills add https://github.com/mantinedev/skills --skill mantine-ui
```

Example prompts:

- "Review this settings page and make it consistent with the Mantine look"
- "Build a pricing table with three plans, one of them highlighted"

### `mantine-testing`

Component tests for Mantine interfaces with React Testing Library in jsdom: render setup and stubs, how to interact with every Mantine input, modals and notifications, dnd-kit reordering, forms built with `@mantine/form`, and test structure (one behavior per test). Use it with the task skills whenever tests are part of the job.

```sh
npx skills add https://github.com/mantinedev/skills --skill mantine-testing
```

Example prompts:

- "Write tests for the checkout form: validation, conditional shipping address, submit payload"
- "The date picker tests fail in jsdom, fix them"

### `mantine-schedule`

Build calendar and scheduling interfaces with `@mantine/schedule`: day, week, month, year and agenda views, and resources views with people, rooms or machines as rows.

Use when: adding a calendar with `Schedule`, `DayView`, `WeekView`, `MonthView`, `YearView`, `AgendaView` or `MobileMonthView`, building a booking page, team rota or room planner with `ResourcesSchedule` and the `Resources*View` components, creating events from slot clicks or drag selection, moving and resizing events with validation, recurring events, business hours and blocked time, or custom event rendering.

```sh
npx skills add https://github.com/mantinedev/skills --skill mantine-schedule
```

Example prompts:

- "Build a room booking page: rooms as rows, drag across free slots to book, no double booking"
- "Add a clinic appointments calendar with recurring lunch breaks that cannot be booked and an edit modal"

## Install All Skills

```sh
npx skills add https://github.com/mantinedev/skills --skill mantine-combobox
npx skills add https://github.com/mantinedev/skills --skill mantine-form
npx skills add https://github.com/mantinedev/skills --skill mantine-custom-components
npx skills add https://github.com/mantinedev/skills --skill mantine-ui
npx skills add https://github.com/mantinedev/skills --skill mantine-testing
npx skills add https://github.com/mantinedev/skills --skill mantine-schedule
npx skills add https://github.com/mantinedev/skills --skill mantine-calendar
npx skills add https://github.com/mantinedev/skills --skill mantine-data-grid
```

## Maintainers

This folder is the source of truth for the skills. The public repository [mantinedev/skills](https://github.com/mantinedev/skills) is a mirror that is synced on release; do not edit it by hand.

- Each skill is a folder with `SKILL.md` (frontmatter `name` and `description`, then the instructions) and `references/` with the API summary and the patterns the skill links to.
- Skills describe the public API of the published packages only. They are installed by users who do not have this repository, so never reference monorepo paths, Storybook or internal tooling.
- Skills target the version on the current branch. Keep a short `9.x:` note only where the behaviour differs, so the skill still works for users on the previous major.
- Validate changes with example prompts from this README in a clean project that has only the skill installed, then review the output.
- The folder name `skills/` is not read by Claude Code (`.claude/skills/`) or Codex (`.codex/skills/`, `.agents/skills/`), so the skills are not loaded automatically while working on this repository.
