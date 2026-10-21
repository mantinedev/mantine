# Interacting with Mantine inputs

All inputs are found by label: `screen.getByLabelText('Email')` or
`screen.getByRole('textbox', { name: 'Email' })`. The `*` of a required label is a separate
element, so exact names match the label text without it.

| Input | Type / pick | Read |
| --- | --- | --- |
| `TextInput`, `Textarea`, `PasswordInput` | `await user.type(field, 'Ada')`; `await user.clear(field)` first to replace | `toHaveValue('Ada')` |
| `NumberInput` | `await user.type(field, '12')`; blur with `await user.tab()` to apply clamping (`min`/`max`, `clampBehavior="blur"`) | `toHaveValue('12')` — a string, formatted with prefix/separators (`'$120,000'`) |
| `Select`, `Autocomplete` | `await user.click(screen.getByRole('textbox', { name: 'Role' }))`, then `await user.click(screen.getByRole('option', { name: 'Admin' }))` | `toHaveValue('Admin')` (the label, not the value) |
| `MultiSelect`, `TagsInput`, custom `PillsInput` | open the same way, click options; remove with Backspace in the field or the pill's remove button: it is `aria-hidden` inside an input, so query it with `getByLabelText('Remove x')`, not `getByRole` | pills by text |
| `Checkbox`, `Switch` | `await user.click(screen.getByRole('checkbox', { name: 'Required' }))` (`Switch` is also a checkbox role) | `toBeChecked()` |
| `Radio.Group`, `SegmentedControl` | `await user.click(screen.getByRole('radio', { name: 'Hybrid' }))` | `toBeChecked()` on the radio |
| `Checkbox.Group`, `Chip.Group` | click each checkbox by name | `toBeChecked()` |
| `DatePickerInput` | see below | the button's text (`'October 20, 2026'`) |
| `DateInput` (typed) | `await user.type(field, '20 October 2026')` then blur | `toHaveValue(...)` |
| `YearPickerInput type="range"` | open, click the two year buttons by name (`'2021'`, `'2024'`), press `Save` when the drawer is open | button text `'2021 – 2024'` |
| `PhoneInput` | `await user.type(field, '2025550123')` with `defaultCountry` set | `toHaveValue('+1 (202) 555-0123')`; `onChange` receives the raw `+12025550123` |
| `PinInput` | `await user.type(screen.getAllByRole('textbox')[0], '1234')` — typing moves to the next cell | each cell's value |
| `Slider`, `Rating` | `user.keyboard('{ArrowRight}')` on the focused thumb/star | `aria-valuenow` |

## Picker inputs and the drawer

jsdom matches no media query, so `DatePickerInput`, `MonthPickerInput`, `YearPickerInput` and
`DateTimePicker` open their mobile **drawer** (`dropdownType={{ base: 'drawer', sm: 'popover' }}`).
In the drawer the value is a draft until `Save` is pressed (`applyOnSubmit`):

```tsx
await user.click(screen.getByRole('button', { name: /Earliest start date/ }));
await user.click(await screen.findByRole('button', { name: '20 October 2026' }));
await user.click(screen.getByRole('button', { name: 'Save' }));
```

Day buttons are named with the full date (`'20 October 2026'`), year buttons with the year.
Disabled days (`minDate`) are `toBeDisabled()`. To test the popover branch instead, mock
`matchMedia` to report a desktop width before rendering.

## Errors, hints and counters

- Error text is `screen.getByText('Email is required')`; the input also has
  `aria-invalid="true"`.
- A counter in `bottomSection` is plain text: `screen.getByText('5/500')`.
- `Input.Wrapper` errors for non-input content (`Slider`, lists) are found by text the same way.
