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
