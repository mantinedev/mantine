# Date and time inputs

| Need | Component |
| --- | --- |
| A single date (birth date, document date, due date, start date) | `MaskedDateInput`: typed day / month / year fields with a calendar dropdown |
| Date and time (event start, deadline with a time) | `MaskedDateInput withTime` |
| A date found by browsing a calendar (availability, delivery slot) | `DatePickerInput`, with `excludeDate` for unavailable days |
| A period | `DatePickerInput type="range" numberOfColumns={2}`, `MonthPickerInput type="range"`, `YearPickerInput type="range"` |
| A year or a month | `YearPickerInput`, `MonthPickerInput` |
| A time alone | `TimeInput` |

Rules:

- **Typing always works.** The default date input is `MaskedDateInput`: the user types the date
  they know and the calendar is there for the ones they look up. A picker-only input
  (`DatePickerInput`) is for dates chosen by browsing: availability, a slot within the next
  weeks, a range. Far dates (birth dates, document dates) are never picker-only.
- **One moment is one input.** Date and time together is `MaskedDateInput withTime` (or
  `DateTimePicker` when the design needs the calendar first), never a date input next to a
  `TimeInput`. A period is one range input, never two inputs: a position's years is
  `YearPickerInput type="range"`, a stay is `DatePickerInput type="range"`.
- **Never split a date into selects** for day, month and year.
- **Limit instead of validating.** `minDate={new Date()}` for "today or later", `maxDate` for
  past-only dates, `excludeDate` for days that cannot be chosen; a range input gets `minDate`
  from the other end of the period. The error message is for what the limits cannot prevent.
- Ranges show two months (`numberOfColumns={2}`) so most periods need no month switching.
- Set `valueFormat` to a readable format for display on picker inputs (`"MMMM D, YYYY"`); the
  value itself is a `YYYY-MM-DD` string (`YYYY-MM-DD HH:mm:ss` with time).
- Placeholder names the action: `placeholder="Pick a date"`, `placeholder="Start year – end year"`.
- Picker inputs open a popover on desktop and a bottom drawer on small screens by default; do not
  override `dropdownType` unless the design needs it.

```tsx
<MaskedDateInput label="Date of birth" maxDate={new Date()} withAsterisk />
<MaskedDateInput label="Starts" withTime minDate={new Date()} withAsterisk />
<DatePickerInput type="range" numberOfColumns={2} label="Stay" placeholder="Check-in – check-out" minDate={new Date()} />
<YearPickerInput type="range" label="Years" placeholder="Start year – end year" maxDate={new Date()} />
```
