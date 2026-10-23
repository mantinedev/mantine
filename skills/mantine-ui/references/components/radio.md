# Radio, Checkbox groups, SegmentedControl and coupled fields

## Layout of the options

- A `Radio.Group` or `Checkbox.Group` with more than two options is a vertical `Stack gap="xs"`; the same for a row of `Switch`es. A row of three or
  more radios reads as a sentence the eye has to parse (`Does not repeat  Daily  Weekly  Monthly
  Yearly`) and wraps unpredictably on narrow screens.
- A row is for exactly two options (`Yes / No`, `Personal / Company`). Weekdays, permissions, categories: seven or five checkboxes in a row read as a sentence and wrap; stack them, or use `Chip.Group multiple` when the options are one short word each and a horizontal row is the point (weekday pickers).
- When the options are short words and there are 2 to 5 of them, `SegmentedControl` is the
  compact horizontal alternative (`fullWidth` under a label, inside `Input.Wrapper
  withBlockChildren`).
- No preselected option for a question (`Reason for contact`, `Plan`); a preselected option only
  for a setting with a clear default (`Repeat: Does not repeat`), see
  [inputs](inputs.md#rules).
- Options have a `label` only; a row that needs a second line is `Radio.Card`, see
  [inputs](inputs.md#lists-of-checkboxes-radios-and-switches).

```tsx
<Radio.Group label="Repeat" {...form.getInputProps('repeat')}>
  <Stack gap="xs" mt="xs">
    {REPEAT_OPTIONS.map((option) => (
      <Radio key={option.value} value={option.value} label={option.label} />
    ))}
  </Stack>
</Radio.Group>
```

## Coupled fields

A selector and the inputs it reveals or configures (`Repeat` + `Repeat every`, `Ends` + the
occurrence count or the end date, `Payment method` + card fields) belong together, and the form
has to show it. Spacing alone does not: when the pair sits in the form `Stack` with the same gap
as every other field, nothing tells the user that `Repeat every` is part of `Repeat`.

- Put the controlling field and its dependent fields in one block with a smaller gap than the
  form: `Stack gap="xs"` inside the form's `Stack` (default `md` gap).
- Dependent fields appear directly under their controlling field, never after unrelated fields.
- A group with a name of its own (`Recurrence`, `Shipping address`) gets a `Fieldset` legend or
  a `Surface` title row, see [fieldset](fieldset.md).
- Revealed fields keep the form's width like every other input; no `maw` or `w` on inputs.

```tsx
<Stack gap="xs">
  <Radio.Group label="Ends" {...form.getInputProps('ends')}>…</Radio.Group>
  {ends === 'after' && <NumberInput label="Occurrences" {...form.getInputProps('count')} />}
  {ends === 'on' && <DatePickerInput label="End date" {...form.getInputProps('until')} />}
</Stack>
```
