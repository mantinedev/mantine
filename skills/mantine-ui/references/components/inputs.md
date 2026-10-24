# Inputs

Pick the component made for the data. A plain `TextInput` is for free text only.

| Data | Component |
| --- | --- |
| Free text, names, titles, URLs | `TextInput` (`type="email"`, `type="url"` where it applies) |
| Long text | `Textarea` — see [textarea](textarea.md) |
| Formatted text | `RichTextEditor` — see [rich-text-editor](rich-text-editor.md) |
| Numbers, amounts, counts | `NumberInput` — see [number-input](number-input.md) |
| Phone number | `PhoneInput` — see [phone-input](phone-input.md) |
| Date, date range | `DateInput` (typed), `DatePickerInput` (picked), `type="range"` for a period — see [date-pickers](date-pickers.md) |
| Year, month, period of years or months | `YearPickerInput`, `MonthPickerInput`, with `type="range"` for a period |
| Time | `TimeInput` |
| One of a few options (2–5) | `Radio.Group` (vertical) or `SegmentedControl` — see [radio](radio.md) |
| One of many options | `Select`, `searchable` above ~15 options; `Autocomplete` when free text is also allowed — see [select](select.md) |
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
- **Inputs in one row have the same anatomy.** Either both have a `description` or neither; the
  same for `withAsterisk` and `error`. A description under one label pushes that input down and
  the two fields stop lining up. When one field needs a hint and the other does not, put the
  hint in the placeholder, or give the fields their own rows.
- Labels are short nouns (`Email`, `Start date`), not sentences.
- **Defaults only when nearly everyone keeps them.** A setting gets its sensible default (`Does
  not repeat`, the browser timezone, `en-US` when the product is English-first); a question
  starts empty (no preselected plan, country, reason or rating), and a required question is
  never preselected, because an unchanged default is indistinguishable from an answer. Where
  "none" is a real answer, it is an explicit option.

## Fonts in inputs

Inputs use the default font. Monospace makes the text look larger than the labels around it, so
it is reserved for code: `JsonInput`, a `Textarea` for a script or a query. Keys, slugs, URLs,
usernames and IDs are typed in regular inputs. Monospace is fine in read-only text: a key next to
a label in a list row (`<span className={classes.key}>`).

## Non-input controls under a label

`Input.Wrapper` spaces only inputs from the description and the error, and `Input.Label` is
`inline-block`. Any other child (`SegmentedControl`, `Dropzone`, `RichTextEditor`, a button with
pills under it, a `Group` of switches) sticks to the description and, when it is inline, lands on
the same line as the label. Set `withBlockChildren` on every `Input.Wrapper` whose child is not
an input:

```tsx
<Input.Wrapper label="Display" error={form.errors.textDisplay} withBlockChildren>
  <SegmentedControl data={DISPLAY_OPTIONS} {...form.getInputProps('textDisplay', { withError: false })} />
</Input.Wrapper>
```

Check the installed version by its types, not by the version string of a tarball or lockfile: when
`withBlockChildren` is in `node_modules/@mantine/core/lib/components/Input/InputWrapper/InputWrapper.d.ts`,
use the prop. Only when it is missing (9.x) wrap the control in a `div` with
`margin-top: calc(var(--mantine-spacing-xs) / 2)` when a description is present (and the same
`margin-bottom` before an error).

## Lists of checkboxes, radios and switches

- A `Checkbox`, `Radio` or `Switch` that is one of many rows (a picker, a permissions list, a
  filter list) has a `label` only, never a `description`. Descriptions under every row double the
  list height and the eye cannot find the options.
- When a row needs more than one line of text, a secondary value or a badge, use `Checkbox.Card`
  or `Radio.Card` with `Checkbox.Indicator` / `Radio.Indicator` and lay the row out with `Group`:
  primary text (`size="sm"`, medium weight, `--mantine-color-bright`), secondary text
  (`size="xs"`) and a `Badge variant="default" size="sm"` at the end. Give the card an
  `aria-label` that names the row (`"ada-lovelace (Ada Lovelace)"`), its content is a layout.
- A single standalone `Checkbox` or `Switch` (a "Featured" flag, a consent) can have a
  `description`.
- The value that identifies an item is the one shown first. When items have a key and a title,
  the key is primary (it is the only value guaranteed to exist and be unique), the title is
  secondary, and the chips or pills for selected items show the key.

```tsx
<Checkbox.Group value={selected} onChange={setSelected} aria-label="Entries">
  <Stack gap="xs">
    {entries.map((entry) => (
      <Checkbox.Card key={entry.key} value={entry.key} className={classes.card} aria-label={`${entry.key} (${entry.title})`}>
        <Group wrap="nowrap" gap="sm">
          <Checkbox.Indicator />
          <div className={classes.texts}>
            <Text size="sm" className={classes.key}>{entry.key}</Text>
            <Text size="xs">{entry.title}</Text>
          </div>
          <Badge variant="default" size="sm">{entry.model}</Badge>
        </Group>
      </Checkbox.Card>
    ))}
  </Stack>
</Checkbox.Group>
```

```css
.card {
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }
}
```

## Custom inputs that open a picker

A field whose value is chosen somewhere else (a modal with search, a tree, a map) is still an
input: it has the input border, height, placeholder, focus ring and error state of the inputs
around it, and it is focusable by the form's error handling. A `Button` with chips under it is not
an input.

- Several values: `PillsInput` with a `Pill` per value (`withRemoveButton`, the key as text) and a
  read-only `PillsInput.Field` that carries the placeholder, `data-path`, `aria-haspopup="dialog"`
  and the keyboard: Enter, Space and ArrowDown open the picker, Backspace removes the last value.
  `onClick` on `PillsInput` opens the picker, `rightSection={<Combobox.Chevron />}` with
  `rightSectionPointerEvents="none"`. This is how `MultiSelect` is built.
- One value: never a `Pill`, never a remove button on the value. `InputBase readOnly pointer`
  with the value as text and the placeholder when empty, `rightSection={<Combobox.Chevron />}`,
  the same click and keyboard handlers (Backspace clears). When the field is optional and the
  user needs to clear it, use `Input.ClearButton` in the `rightSection` while a value is set,
  exactly like `Select clearable`. This is how `Select` is built; a pill with an × on a single
  value looks like a multi select that happens to hold one item.
- The picker itself is a modal (`useModal`) with the search input first, filters second, a list of
  `Checkbox.Card` / `Radio.Card` rows and Cancel + confirm buttons at the end.

```tsx
<PillsInput label={label} error={error} pointer onClick={open} rightSection={<Combobox.Chevron error={error} />} rightSectionPointerEvents="none">
  <Pill.Group>
    {selected.map((key) => (
      <Pill key={key} withRemoveButton removeButtonProps={{ 'aria-label': `Remove ${key}` }} onRemove={() => remove(key)}>
        {key}
      </Pill>
    ))}
    <PillsInput.Field
      readOnly
      pointer
      placeholder={selected.length === 0 ? 'Select entries' : undefined}
      aria-haspopup="dialog"
      data-path={dataPath}
      onKeyDown={handleKeyDown}
    />
  </Pill.Group>
</PillsInput>
```

## Values collected one at a time

A field that collects several values through a picker (dates to skip, selected entries, tags,
attendees) shows what was collected inside the input, as compactly as the input itself:

- Several dates: `DatePickerInput type="multiple" valueDisplay="pills"`. The selected dates are
  pills inside the input with a remove button each, Backspace removes the last one, the calendar
  adds more. Nothing to build. (When `valueDisplay` is missing from the installed `DatePickerInput` types, 9.x,
  render `Pill.Group mt="xs"` under the picker instead.)
- Several keys, tags or entries picked elsewhere: a `PillsInput`-based input, see
  [custom inputs](#custom-inputs-that-open-a-picker).
- Never a stack of bordered `Surface` rows with a trash `ActionIcon` for values that have no
  fields of their own: such rows are taller than the input above them, and five skipped dates
  become a card taller than the rest of the form. Bordered rows are for items with several fields
  each (positions, line items, invitees with a role), see [surface](surface.md).

```tsx
<DatePickerInput
  type="multiple"
  valueDisplay="pills"
  label="Exceptions"
  placeholder="Pick dates to skip"
  minDate={start}
  excludeDate={(date) => !isInSeries(rule, date)}
  {...form.getInputProps('exceptions')}
/>
```

## A field and its action

An action that uses the value of one field (`New owner` + `Transfer ownership`, `Invite email` +
`Send invite`, `Coupon` + `Apply`) sits on the same line as the field on desktop: the field grows,
the button keeps its width and aligns with the input, not with the label. `Group align="flex-end"`
around the field and the button breaks as soon as the field shows an error: the error adds height
below the input and the button drops with it (https://help.mantine.dev/q/align-input-button).
Render the button inside the input's `inputContainer` instead, so label, input + button and error
stack in one wrapper:

```tsx
<Select
  label="New owner"
  placeholder="Pick a member"
  data={MEMBERS}
  inputContainer={(children) => (
    <Group align="flex-start" wrap="nowrap">
      <div className={classes.field}>{children}</div>
      <Button type="submit" variant="default">Transfer ownership</Button>
    </Group>
  )}
  {...form.getInputProps('memberId')}
/>
```

```css
.field {
  flex: 1;
  min-width: 0;
}
```

The same holds for every row of inputs: the grid aligns to the top (`align-items: start`), and an
error grows only its own cell.

Below `sm` the pair stacks (`SimpleGrid cols={{ base: 1, sm: 2 }}` or a `flex-direction: column`
media query); the button then spans the field's width.

## Rows of unlabeled inputs

A grid of inputs that repeats per row (field / operator / value, quantity / unit / price) cannot
carry a label on every input without doubling its height. Two tools replace the labels:

- A caption row above the rows, one `Text size="xs"` per column, once per group, in the same
  grid as the rows. The row inputs keep `aria-label`s for screen readers and placeholders for
  the empty state.
- A sentence around a select that changes the meaning of the list: `Match [all ▾] of the
  following conditions`, `Repeat every [2] [weeks ▾]`. The select is inline, its `aria-label` is
  the sentence's subject, and no separate toggle sits above the list.

Row controls share one size (`size="input-sm"` icons next to `sm` inputs); the drag handle is the
first column, the last column is `auto` for duplicate and remove, and a column whose input is sometimes absent keeps its track so rows
stay aligned. That holds for a column most rows fill (the value of a condition, absent only for
`is empty`). An input that most rows never show (a custom rate behind a `Custom` option, a note
behind a toggle) is not a column: it renders under its trigger in the same cell, in a
`Stack gap="xs"`, and only that row grows. A caption row never names a column that is usually
empty.

This is the layout for every list whose rows have the same fields: line items (description,
quantity with its unit, unit price, tax rate, amount), conditions, invitees, variants. A row has
no title of its own and no header row; `Item 3` appears only in `aria-label`s (`Item 3
description`, `Remove item 3`). A value the row derives (the line amount) is read-only `Text` in
its own column, vertically centered to the input height. The widest text column grows (`1fr`),
number columns are fixed, and the whole grid is one `SimpleGrid`-free CSS grid so every row
shares the caption's tracks. The list is a CSS container (`container-type: inline-size`) and the
rows reflow in `@container (max-width: …)` queries, not viewport media queries: the form may sit
in a column narrower than the screen. Two narrower states: the widest text field takes a line of
its own and the numbers share the next line with the controls (about 880px and below), then one
column (about 560px and below). Every input keeps its `label` and
`withAsterisk` for screen readers and for the stacked state; the label is hidden with CSS
(`classNames={{ label: classes.rowLabel }}`, `display: none` while the caption row is visible).

Blocks with a header row (title left, remove action right, labeled inputs below, see
[surface](surface.md)) are for rows whose fields differ by type or do not fit one line. A form
never mixes the two for one list.
