---
name: mantine-ui
description: >
  Visual and component decisions for interfaces built with Mantine. Use this skill whenever you
  write or change UI with Mantine components, together with the task-specific skill (mantine-form,
  mantine-combobox): (1) choosing the component for a piece of data (phone, date, period, amount,
  code), (2) button and action variants, icon-only actions, (3) text hierarchy, hints and
  placeholders, (4) cards, surfaces, fieldsets, backgrounds and nesting, (5) lists of repeated
  rows with add/remove actions, (6) icons, sizes and spacing, or (7) reviewing generated UI for
  consistency with the Mantine look.
---

# Mantine UI Skill

Written for Mantine 10.x. Rules here apply to every component you render; the component files in
`references/components/` hold the details for one component each. Read the file for every
component you are about to use, then write the UI.

## Rules that apply everywhere

- **One primary action per view**: the default `filled` button. Every other action is
  `variant="default"`. Never `subtle`, `light` or `outline` for actions.
- **Icon-only actions** are `ActionIcon variant="default"` sized to the controls next to them
  (`size="input-sm"` next to `sm` inputs). A destructive icon action keeps the default variant and
  colors only the icon: `color="var(--mantine-color-red-text)"`.
- **Secondary text** (hints, counters, captions, summary labels) is smaller (`size="sm"` or
  `size="xs"`), never `c="dimmed"`. Important values (headline numbers, titles) use
  `c="var(--mantine-color-bright)"`.
- **Every input has a `placeholder`**: the label text, or a format example when it helps more
  (`you@example.com`, `YYYY`).
- **The input made for the data**: see [inputs](references/components/inputs.md) for the
  mapping. A plain `TextInput` is for free text only.
- **Backgrounds step by one shade.** A card on a page is one `Surface` level up; nested
  containers go one more level, never two. Never place a bordered or filled element so that its
  label or legend sits on two different backgrounds.
- **Repeated rows** (positions, line items, invitees) are bordered `Surface` blocks with a header
  row (small medium-weight title on the left, remove action on the right), not `Fieldset`.
- **Icons** come from the icon library already in the project (`@tabler/icons-react` or
  `@phosphor-icons/react`); match the size to the text or control (`16` inside inputs and
  `ActionIcon`, `18`–`20` in buttons).
- **Spacing** uses theme values (`gap="sm"`, `mt="md"`), never pixel literals in props.

## Components

- [inputs](references/components/inputs.md) — which input for which data, placeholders, labels
- [number-input](references/components/number-input.md) — controls, prefix, separators, clamping
- [phone-input](references/components/phone-input.md) — `defaultCountry`, value format
- [date-pickers](references/components/date-pickers.md) — `DateInput`, `DatePickerInput`,
  `YearPickerInput`, `MonthPickerInput`, `TimeInput`, ranges, limits
- [textarea](references/components/textarea.md) — autosize, limits, counters
- [button](references/components/button.md) — variants, loading, groups
- [action-icon](references/components/action-icon.md) — sizes next to inputs, destructive icons
- [surface](references/components/surface.md) — levels, borders, cards, nested blocks
- [fieldset](references/components/fieldset.md) — when a legend works and when it does not
- [text](references/components/text.md) — hierarchy, secondary text, values
