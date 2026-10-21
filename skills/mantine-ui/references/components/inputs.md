# Inputs

Pick the component made for the data. A plain `TextInput` is for free text only.

| Data | Component |
| --- | --- |
| Free text, names, titles, URLs | `TextInput` (`type="email"`, `type="url"` where it applies) |
| Long text | `Textarea` — see [textarea](textarea.md) |
| Numbers, amounts, counts | `NumberInput` — see [number-input](number-input.md) |
| Phone number | `PhoneInput` — see [phone-input](phone-input.md) |
| Date, date range | `DateInput` (typed), `DatePickerInput` (picked), `type="range"` for a period — see [date-pickers](date-pickers.md) |
| Year, month, period of years or months | `YearPickerInput`, `MonthPickerInput`, with `type="range"` for a period |
| Time | `TimeInput` |
| One of a few options (2–5) | `Radio.Group` or `SegmentedControl` |
| One of many options | `Select`; `Autocomplete` when free text is also allowed |
| Several options | `MultiSelect`, `Checkbox.Group`, `TagsInput` for free-form tags |
| Code, PIN, OTP | `PinInput` |
| Formatted string (card number, IBAN, postal code) | `MaskInput` |
| Password | `PasswordInput` |
| Yes/no | `Switch` for settings that apply immediately, `Checkbox` for form consent and options |

Rules:

- Every input has a `placeholder`: the label text (`placeholder="Company"`), or a format example
  when it helps more (`you@example.com`, `YYYY`, `https://linkedin.com/in/you`).
- Required fields show `withAsterisk`; optional fields do not say "(optional)" in the label.
- Two related inputs that always appear together (first and last name, start and end) share a
  row: `SimpleGrid cols={{ base: 1, sm: 2 }}` or `Group grow`. A period is one range input, not
  two inputs.
- Labels are short nouns (`Email`, `Start date`), not sentences.

## Fonts in inputs

Inputs use the default font. Monospace makes the text look larger than the labels around it, so
it is reserved for code: `JsonInput`, a `Textarea` for a script or a query. Keys, slugs, URLs,
usernames and IDs are typed in regular inputs. Monospace is fine in read-only text: a key next to
a label in a list row (`<span className={classes.key}>`).

## Non-input controls under a label

`Input.Label` is `inline-block`, so an inline control placed directly in `Input.Wrapper`
(`SegmentedControl`, `Rating`, `Chip.Group`, a `Group` of switches) ends up on the same line as
the label. Make the control a block: `fullWidth` on `SegmentedControl`, or wrap it in a `div`:

```tsx
<Input.Wrapper label="Display" error={form.errors.textDisplay}>
  <div>
    <SegmentedControl data={DISPLAY_OPTIONS} {...form.getInputProps('textDisplay', { withError: false })} />
  </div>
</Input.Wrapper>
```
