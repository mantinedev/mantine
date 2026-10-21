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
  (`you@example.com`, `YYYY`).
- **Inputs use the default font.** Monospace is for code inputs only (`JsonInput`, scripts);
  keys, slugs and URLs are regular inputs. Inline controls under a label (`SegmentedControl`,
  `Rating`, `Chip.Group`) are wrapped in a block so they do not share the line with the label,
  see [inputs](references/components/inputs.md#non-input-controls-under-a-label).
- **The input made for the data**: see [inputs](references/components/inputs.md) for the
  mapping. A plain `TextInput` is for free text only.
- **Backgrounds step by one shade.** A card on a page is one `Surface` level up; nested
  containers go one more level, never two. Never place a bordered or filled element so that its
  label or legend sits on two different backgrounds.
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

- [inputs](references/components/inputs.md) — which input for which data, placeholders, labels
- [number-input](references/components/number-input.md) — controls, prefix, separators, clamping
- [phone-input](references/components/phone-input.md) — `defaultCountry`, value format
- [date-pickers](references/components/date-pickers.md) — `DateInput`, `DatePickerInput`,
  `YearPickerInput`, `MonthPickerInput`, `TimeInput`, ranges, limits
- [textarea](references/components/textarea.md) — autosize, limits, counters
- [button](references/components/button.md) — variants, loading, groups
- [action-icon](references/components/action-icon.md) — row actions, drag handles, destructive icons
- [theme-icon](references/components/theme-icon.md) — category icons with colors
- [badge](references/components/badge.md) — when a badge is right, variants
- [surface](references/components/surface.md) — levels, borders, cards, list rows
- [fieldset](references/components/fieldset.md) — when a legend works and when it does not
- [modal](references/components/modal.md) — `useModal`, forms in modals, one modal for many items
- [text](references/components/text.md) — hierarchy, secondary text, values, required markers
