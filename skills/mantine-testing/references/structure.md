# Test structure

## One behavior per test

Each test states one observable behavior in its name and asserts that behavior. Setup may be
long, assertions are about one thing.

Combined (do not write):

```tsx
it('validates Text limits and submits all text settings without resetting the form', …)
```

Split:

```tsx
it('rejects a max length below 1');
it('rejects a default value longer than the max length');
it('includes text settings in the submitted model');
it('keeps the form values after submit');
```

A test may have several `expect` calls when they describe the same behavior from two angles
(the error text is shown *and* the field has focus). It may not cover two rules.

## File layout

- `Component.test.tsx` next to the component; one file per component that has behavior. A
  big form with a modal gets `Form.test.tsx` and `FieldEditor.test.tsx`, not one 600-line file.
- `describe` blocks group by area (`personal step`, `experience step`, `submit`), not by test
  type.
- Helpers at the top of the file: `renderForm`, `field(label)`, flow helpers (`fillPersonal`).
  Shared helpers across files go into `test-utils/`.

## Naming

- Test names are sentences in present tense from the user's point of view:
  `it('shows an error under the list when submitted without fields')`.
- No "should", no "correctly", no implementation words (`state`, `prop`, `callback`).
- Describe blocks name the area, not the component (`describe('experience step')`).

## What not to test

- Mantine's own behavior (that `Select` opens, that `Modal` traps focus).
- Styling (class names, colors) and layout.
- Implementation details (hooks called, internal state, `form.values`).

## Environment independence

Tests pass on any machine and in any CI runner. Nothing in a test depends on the machine's
timezone, locale or clock:

- fake `Date` with `vi.useFakeTimers({ toFake: ['Date'] })` + `vi.setSystemTime(...)`;
- when the component reads the browser timezone (`Intl.DateTimeFormat().resolvedOptions()`),
  mock it in `beforeEach` (`vi.spyOn(Intl.DateTimeFormat.prototype, 'resolvedOptions')`) instead
  of asserting the value of the machine the tests were written on;
- expected ISO strings with offsets (`2026-10-21T10:00:00+02:00`) come from a timezone the
  test itself selected or mocked, never from the default.

A test that passes locally and fails under another `TZ` was written against the machine, not the
component.
