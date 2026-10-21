---
name: mantine-testing
description: >
  Write and run component tests for interfaces built with Mantine (React Testing Library,
  user-event, jsdom with vitest or jest). Use this skill whenever a task asks for tests of a
  Mantine component or form, or when existing tests of Mantine UI fail in jsdom: (1) render
  setup and jsdom stubs, (2) how to interact with Mantine inputs in tests (selects, number
  inputs, date pickers, phone input, checkboxes, segmented controls), (3) modals, drawers,
  notifications and other portals, (4) drag and drop with dnd-kit, (5) forms built with
  @mantine/form, (6) fake timers and async validation, or (7) test structure and naming.
---

# Mantine Testing Skill

Written for Mantine 10.x with React Testing Library and `@testing-library/user-event`, in jsdom
under vitest or jest. The task skills (`mantine-form`, `mantine-combobox`, `mantine-ui`) say what
a component does; this skill says how to prove it. Read the reference file for every area the
component touches before writing the tests.

## Rules that apply everywhere

- **One behavior per test.** A test asserts one thing the user can observe and is named as a
  sentence that states it: `it('focuses the first invalid field when Next is pressed')`. A
  failure must point at one behavior; do not chain "validates X, saves Y and resets Z" into one
  test. Shared steps go into small helper functions (`fillPersonal(user)`), not into `beforeEach`
  state.
- **Query like a user.** `getByRole` with an accessible name, `getByLabelText`, `getByText`.
  Never class names (`.mantine-Stepper-stepLabel`), never `data-testid` when a role or label
  exists; a `data-testid` is the last resort for a container with no role.
- **Interact like a user.** `userEvent.setup()` per test, `user.type`, `user.click`,
  `user.keyboard`; `fireEvent` only for events user-event cannot produce (`paste` with files,
  `scroll`).
- **Render inside `MantineProvider`** with `env="test"` through a shared `render` helper, see
  [setup](references/setup.md). Overlays render in portals: query the `document` via `screen`,
  scope with `within(screen.getByRole('dialog'))`.
- **Assert outcomes, not implementation.** The error text under an input, the focused element,
  the payload passed to `onSubmit`, the notification title — not internal state, not that a
  callback was called with a form object.
- **Deterministic time.** Freeze `Date` when the component compares against today
  (`vi.useFakeTimers({ toFake: ['Date'] })` + `vi.setSystemTime`), restore in `afterEach`. Do
  not fake all timers around `user-event` unless you pass `advanceTimers` to `userEvent.setup`.
- **No snapshots, no console mocks.** A React warning in a test is a bug to fix (an `act`
  wrapper, a missing `key`, a controlled/uncontrolled switch), not noise to silence.
- **Clean up what persists**: `notifications.clean()` and `vi.useRealTimers()` in `afterEach`.

## References

- [setup](references/setup.md) — render helper, jsdom stubs (`matchMedia`, `ResizeObserver`,
  `document.fonts`, `scrollIntoView`), vitest and jest configs
- [inputs](references/inputs.md) — how to type into, pick from and read every Mantine input in
  jsdom (`Select`, `NumberInput`, `DatePickerInput`, `PhoneInput`, `Checkbox`,
  `SegmentedControl`, `Textarea`, `PinInput`)
- [overlays](references/overlays.md) — modals and drawers opened with `useModal`, notifications,
  popovers, tooltips
- [forms](references/forms.md) — what to test in an `@mantine/form` form and how
- [drag-and-drop](references/drag-and-drop.md) — reordering with dnd-kit through the keyboard
- [structure](references/structure.md) — file layout, helpers, naming, the one-behavior rule
  with examples of splitting a combined test
