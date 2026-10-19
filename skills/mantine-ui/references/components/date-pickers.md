# Date and time inputs

| Need | Component |
| --- | --- |
| A date the user knows and can type (birth date, document date) | `DateInput` |
| A date the user picks from a calendar (appointment, start date) | `DatePickerInput` |
| A period | `DatePickerInput type="range"`, `MonthPickerInput type="range"`, `YearPickerInput type="range"` |
| A year or a month | `YearPickerInput`, `MonthPickerInput` |
| A time | `TimeInput` |
| Date and time | `DateTimePicker` |

Rules:

- A period is one range input, never two inputs: a position's years is
  `YearPickerInput type="range"`, a stay is `DatePickerInput type="range"`.
- Limit the calendar instead of only validating: `minDate={new Date()}` for "today or later",
  `maxDate` for past-only dates.
- Set `valueFormat` to a readable format for display (`"MMMM D, YYYY"`); the value itself is a
  `YYYY-MM-DD` string.
- Placeholder names the action: `placeholder="Pick a date"`, `placeholder="Start year – end year"`.
- Picker inputs open a popover on desktop and a bottom drawer on small screens by default; do not
  override `dropdownType` unless the design needs it.

```tsx
<DatePickerInput label="Earliest start date" placeholder="Pick a date" minDate={new Date()} valueFormat="MMMM D, YYYY" />

<YearPickerInput type="range" label="Years" placeholder="Start year – end year" maxDate={new Date()} />
```
