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
