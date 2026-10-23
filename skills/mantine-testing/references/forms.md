# Testing forms built with @mantine/form

Test the form through its inputs, never through `form.values`. The list below is the checklist
for a form; each line is at least one test.

## Checklist

1. **Initial state**: the first step or section is visible, submit is where the spec says.
2. **Required fields**: submitting empty shows every required error of the visible step and
   focuses the first invalid input (`expect(input).toHaveFocus()`).
3. **Each rule once**: one test per validation rule (format, range, cross-field), with the
   message text the user sees. Rules on blur: type, `await user.tab()`, assert.
4. **Errors clear**: fixing the value removes the message (`queryByText(...)` is `null`).
5. **Conditional fields**: show/hide on the controlling value; hidden fields do not block
   submit.
6. **Lists**: add, remove, minimum count error and where it is shown, that a new row has no
   errors before the user typed, and that removing the last row behaves as specified.
7. **Navigation keeps values**: go back and forward, values are still there.
8. **Submit payload**: pass an `onSubmit` spy and assert the exact object with `toMatchObject`;
   numbers are numbers, dates are `YYYY-MM-DD` strings, lists are in display order.
9. **After submit**: notification, reset, form stays — whichever the spec says.
10. **Async checks**: loader visible while pending, result applied, submit disabled while
    checking.

## Helpers

Flows that several tests share are functions, named for what they do, taking `user`:

```tsx
async function fillPersonal(user: User) {
  await user.type(screen.getByLabelText('First name'), 'Ada');
  await user.type(screen.getByLabelText('Last name'), 'Lovelace');
  await user.type(screen.getByLabelText('Email'), 'ada@example.com');
}
```

Render through one `renderForm(onSubmit = jest.fn())` helper (`vi.fn()` with vitest) that sets up `userEvent` and
`<Notifications />` and returns `{ user, onSubmit }`.

## Timing

- Debounced validation (`validateDebounce`, async validators): use `await screen.findByText(...)`
  or `waitFor`, not arbitrary sleeps.
- Forms comparing against today: jest `jest.useFakeTimers({ now: new Date(2026, 9, 17, 12),
  advanceTimers: true })` in `beforeEach` and `userEvent.setup({ advanceTimers:
  jest.advanceTimersByTime })`, so timers keep running for `user-event` and `waitFor`; vitest
  `vi.useFakeTimers({ toFake: ['Date'] })` + `vi.setSystemTime(...)`. Real timers in `afterEach`.
- `form.submitting` while the handler's promise is pending: assert the button's `loading` state
  by its `data-loading` attribute or disabled state, then resolve the promise.

## Custom inputs and useFormField

A custom input wired with `useFormField` is tested through the form that renders it: type, blur,
check the error and the submit payload. Unit-test the input alone only for behavior the form
does not exercise (formatting, masks).
