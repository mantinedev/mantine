# NumberInput

- **Controls**: show the increment/decrement controls only when stepping by one makes sense
  (quantity, number of guests, tickets, seats). When the user has a specific value in mind
  (salary, price, amount, year, percentage, distance) set `hideControls`.
- **Money**: `prefix="$"` (or `suffix=" €"`), `thousandSeparator=","`, `allowDecimal={false}`
  for whole amounts, `decimalScale={2}` otherwise.
- **Percent**: `suffix="%"`, `min={0}`, `max={100}`, `hideControls`.
- **Bounds**: `min` / `max` plus `clampBehavior="strict"` when a value outside the range is never
  valid; `allowNegative={false}` for counts and amounts.
- **Years** are not `NumberInput`: use `YearPickerInput` (see [date-pickers](date-pickers.md)).

```tsx
<NumberInput
  label="Expected salary"
  placeholder="Annual salary in USD"
  prefix="$"
  thousandSeparator=","
  allowNegative={false}
  allowDecimal={false}
  hideControls
/>

<NumberInput label="Tickets" placeholder="Tickets" min={1} max={10} clampBehavior="strict" />
```

## A value and its unit are one input

An amount and its currency, an interval and its period (`every 2 weeks`), a duration and its
unit, a size and `px` / `%`: the unit is a select inside the number input, in the `rightSection`,
not a separate field or a radio group next to it. The pair reads as one value and takes one
input's height.

- `NumberInput` with `rightSection={<NativeSelect data={UNITS} aria-label="Unit" variant="unstyled" />}`
  and `rightSectionWidth` sized to the longest unit label (about 92 for `months`). `NativeSelect`
  is the right choice inside an input: it has no dropdown of its own to collide with the
  input's focus ring. The pattern is the Currency input on ui.mantine.dev.
- The number and the unit are two form fields (`interval`, `frequency`); the composite is one
  component in its own file (`IntervalInput.tsx`) that takes both `getInputProps` results.
- A select shows the plural unit always (`weeks`); the singular / plural switch is only for
  units rendered as text.
- "Off" states (`Does not repeat`) are a `Switch` or `Checkbox` above the composite that hides
  it, not a sixth option in the unit select and not a radio group that repeats the units.

```tsx
<Switch label="Repeats" {...form.getInputProps('repeats', { type: 'checkbox' })} />
{repeats && (
  <NumberInput
    label="Repeat every"
    placeholder="1"
    min={1}
    max={99}
    hideControls
    maw={240}
    rightSection={<NativeSelect data={FREQUENCIES} aria-label="Frequency" variant="unstyled" {...form.getInputProps('frequency')} />}
    rightSectionWidth={92}
    {...form.getInputProps('interval')}
  />
)}
```
