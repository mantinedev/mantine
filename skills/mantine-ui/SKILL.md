---
name: mantine-ui
description: >
  Visual and component decisions for interfaces built with Mantine. Use this skill whenever you
  write or change UI with Mantine components, together with the task-specific skill (mantine-form,
  mantine-combobox): (1) choosing the component for a piece of data (phone, date, period, amount,
  code), (2) button and action variants, icon-only actions, (3) text hierarchy, hints and
  placeholders, (4) cards, surfaces, fieldsets, backgrounds and nesting, (5) lists of repeated
  rows with add/remove actions, (6) icons, sizes and spacing, (7) modals and drawers, or
  (8) reviewing generated UI for consistency with the Mantine look.
---

# Mantine UI Skill

Written for Mantine 10.x. Rules here apply to every component you render; the component files in
`references/components/` hold the details for one component each. Read the file for every
component you are about to use, then write the UI.

## Rules that apply everywhere

- **One primary action per view**: the default `filled` button. Every other action is
  `variant="default"`. The `light` and `subtle` variants are never used, on any component:
  not on buttons, badges, action icons or theme icons.
- **Icon-only actions** are `ActionIcon variant="default"`. In a row they take the row's size
  (the same `size` as the tile or input next to them), grouped with `gap={6}`. A destructive
  icon action keeps the default variant and colors only the icon:
  `color="var(--mantine-color-red-text)"`.
- **Everything in one row shares one size.** A `ThemeIcon`, a drag handle and the action icons
  of a list row are all `size="lg"` (or all `size="md"`); a control next to an input is
  `size="input-sm"`. Mixed sizes with the same visual style read as a mistake.
- **Required is a red asterisk** after the label (`withAsterisk` on inputs, `Input.Label required`
  or a `*` span in `c="red"` in lists and summaries), never a badge or the word "required".
- **Secondary text** (hints, counters, captions, summary labels) is smaller (`size="sm"` or
  `size="xs"`), never `c="dimmed"`. Important values (headline numbers, titles) use
  `c="var(--mantine-color-bright)"`.
- **Every input has a `placeholder`**: the label text, or a format example when it helps more
  (`you@example.com`, `YYYY`). This includes rich text editors (placeholder extension) and
  drop zones (the hint text).
- **`Input.Wrapper` around anything that is not an input gets `withBlockChildren`**
  (`Dropzone`, `SegmentedControl`, `RichTextEditor`, a button with pills under it): without it the
  child sticks to the description. Decide by the installed types, not a version string: only when
  the prop is missing (9.x) wrap the child in a `div` with the margin instead.
- **Radios and checkboxes stack.** A `Radio.Group` or `Checkbox.Group` with more than two
  options is a vertical `Stack gap="xs"`; a row holds two options at most. `SegmentedControl`
  (one choice) and `Chip.Group multiple` (several) are the horizontal forms for short words.
  See [radio](references/components/radio.md).
- **Coupled fields are one block.** A field and the inputs it reveals (`Repeat` + `Repeat
  every`, `Ends` + count or date) sit in a `Stack gap="xs"` of their own, right under each
  other, so the form's larger gap separates groups, not members of a group.
- **`Select` is `searchable` only above about 15 options.** Twelve timezones or five statuses
  are scanned, not searched. See [select](references/components/select.md).
- **Collected values are pills inside the input.** Several dates are
  `DatePickerInput type="multiple" valueDisplay="pills"`; keys and tags picked elsewhere live in
  a `PillsInput`-based input; never bordered rows with trash icons. See [inputs](references/components/inputs.md#values-collected-one-at-a-time).
- **Dates are typed first.** `MaskedDateInput` for a single date and `MaskedDateInput withTime`
  for a moment; `DatePickerInput` only for dates found by browsing a calendar and for ranges
  (`numberOfColumns={2}`); never a date input next to a `TimeInput`, never day / month / year
  selects. See [date-pickers](references/components/date-pickers.md).
- **The submit button is never disabled.** Submit validates and shows errors; `loading` is the
  only state. Secondary actions sit where they act: `Add another` under its list, not in the
  footer. See [button](references/components/button.md).
- **Long forms get an error summary.** More than one screen or several steps: `Alert
  color="red" title="There is a problem"` above the fields listing each error as a link to its
  field, same wording as inline. See [alert](references/components/alert.md).
- **Defaults only for settings.** Preselect what nearly everyone keeps (`Does not repeat`, the
  browser timezone); questions start empty and a required question is never preselected.
- **A value and its unit are one input.** Amount + currency, interval + period (`every 2
  weeks`), size + `px`: `NumberInput` with a `NativeSelect` in the `rightSection`, never a
  number field beside a radio group or a second select. See
  [number-input](references/components/number-input.md#a-value-and-its-unit-are-one-input).
- **Custom inputs look like inputs.** A value picked in a modal or a popover is displayed in an
  `Input`-based component, never as a `Button` with chips under it: `PillsInput` with pills for
  several values (like `MultiSelect`), `InputBase readOnly pointer` with the value as text for one
  value (like `Select`); pills never show a single value. See [inputs](references/components/inputs.md#custom-inputs-that-open-a-picker).
- **Notifications are one line.** Title plus a short message (`hello-world · Blog post`); data,
  JSON and lists are shown on the page, never inside a notification. See
  [notification](references/components/notification.md).
- **Checkboxes, radios and switches in a list have no `description`.** A row that needs two
  lines or a badge is a `Checkbox.Card` / `Radio.Card`, see
  [inputs](references/components/inputs.md#lists-of-checkboxes-radios-and-switches).
- **Identity first.** When items have a key and a title, the key is the primary text of each row
  and of each selected chip; the title is secondary.
- **Inputs sharing a row share their anatomy**: both with a description or neither, so the
  fields line up, see [inputs](references/components/inputs.md).
- **Inputs use the default font.** Monospace is for code inputs only (`JsonInput`, scripts);
  keys, slugs and URLs are regular inputs. Inline controls under a label (`SegmentedControl`,
  `Rating`, `Chip.Group`) are wrapped in a block so they do not share the line with the label,
  see [inputs](references/components/inputs.md#non-input-controls-under-a-label).
- **The input made for the data**: see [inputs](references/components/inputs.md) for the
  mapping. A plain `TextInput` is for free text only.
- **Backgrounds step by one shade.** A card on a page is one `Surface` level up; nested
  containers go one more level, never two. Never place a bordered or filled element so that its
  label or legend sits on two different backgrounds. **Forms are not wrapped in a `Surface`**:
  inputs share the panel color in dark mode and blend into the card, see
  [surface](references/components/surface.md).
- **Drop zones are tall.** A `Dropzone` is a target people drop files on: `mih={140}` (single
  file) or more, icon above two lines of text, never a one-line strip, see
  [dropzone](references/components/dropzone.md).
- **Repeated rows** (positions, line items, invitees, fields) are bordered `Surface` blocks with
  a header row or a single line (icon, texts, actions), not `Fieldset`.
- **Category icons** (field types, statuses, kinds) are `ThemeIcon variant="default"` with the
  icon colored by a theme color per category, see [theme-icon](references/components/theme-icon.md).
- **Icons** come from the icon library already in the project (`@tabler/icons-react` or
  `@phosphor-icons/react`); `16` inside inputs and `md` action icons, `18` in `lg` tiles and
  buttons.
- **Styles live in CSS modules, one per component.** A `style={{ … }}` attribute, more than two
  style props on one element, or layout props on wrappers (`style={{ flex: 1, minWidth: 0 }}`)
  mean the element needs a class in `<Component>.module.css` next to that component. One
  stylesheet shared by several components is not used. Style props are for one-off spacing
  (`mt="md"`, `gap="sm"`), not for layout.
- **No props that repeat the default.** `radius="md"` on `ThemeIcon`, `Button`, `Surface` and
  inputs, `size="sm"` on inputs, `variant="filled"` on `Button` and `Badge`, `wrap="wrap"` on
  `Group` are defaults since 9.0: leave them out.
- **One `Text` per line of text.** Mixed styles inside a line use `span` children only when the
  semantics differ (a `code`-like key next to a label); two lines are two `Text` elements with a
  class on the wrapper, not nested `Text` with `inherit`.
- **Spacing** uses theme values (`gap="sm"`, `mt="md"`), never pixel literals in props, except
  the `gap={6}` between grouped icon actions.

## Components

- [inputs](references/components/inputs.md) — which input for which data, placeholders, labels, custom inputs, collected values
- [select](references/components/select.md) — when searchable, deselect, options
- [radio](references/components/radio.md) — vertical options, SegmentedControl, coupled fields
- [number-input](references/components/number-input.md) — controls, prefix, separators, clamping
- [phone-input](references/components/phone-input.md) — `defaultCountry`, value format
- [date-pickers](references/components/date-pickers.md) — `DateInput`, `DatePickerInput`,
  `YearPickerInput`, `MonthPickerInput`, `TimeInput`, ranges, limits
- [textarea](references/components/textarea.md) — autosize, limits, counters
- [rich-text-editor](references/components/rich-text-editor.md) — placeholder, toolbar, required, form wiring
- [button](references/components/button.md) — variants, loading, groups
- [action-icon](references/components/action-icon.md) — row actions, drag handles, destructive icons
- [theme-icon](references/components/theme-icon.md) — category icons with colors
- [badge](references/components/badge.md) — when a badge is right, variants
- [alert](references/components/alert.md) — error summary for long forms, server errors
- [surface](references/components/surface.md) — levels, borders, cards, list rows
- [fieldset](references/components/fieldset.md) — when a legend works and when it does not
- [dropzone](references/components/dropzone.md) — size, texts, accepted files, previews
- [modal](references/components/modal.md) — `useModal`, forms in modals, one modal for many items
- [text](references/components/text.md) — hierarchy, secondary text, values, required markers
