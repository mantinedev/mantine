# Text and Title

- Page and card titles are `Title` (`order={2}` for a card, `order={4}` for a section inside a
  card) with `c="var(--mantine-color-bright)"` when they are the main heading of the view.
- Secondary text (hints under inputs, counters, captions, labels in a summary) is smaller text,
  `size="sm"` or `size="xs"`, in the default color. Never `c="dimmed"`.
- Labels of label/value pairs (stat cards, review steps) and captions above a block (`Next
  occurrences`, `Submitted event`) use the theme's medium weight through the token, never a
  number: `font-weight: var(--mantine-font-weight-medium)` in the component's CSS module, or
  `fw="var(--mantine-font-weight-medium)"` inline. `fw={500}`, `fw={600}` and `fw="bold"` are
  not used. The value is regular weight and one size larger or `c="var(--mantine-color-bright)"`
  when it is the headline number. A caption above a non-input block can also be
  `<Input.Label labelElement="div">`, which has the right weight and size built in.
- Error text is never a red `Text`: inputs show errors through their `error` prop, non-input
  content through `Input.Error` or `Input.Wrapper`.
- Empty states are one short sentence in `size="sm"` (`No positions added`), no icon, no card.
- Status colors go through tokens (`var(--mantine-color-red-text)`, `c="red"` is acceptable for
  short status text), never hex values.

## Two-line items

A list row with a title and a detail line is two `Text` elements inside a wrapper with a class,
not nested `Text` with `inherit`. Monospace keys use a `span` with a class, not `ff="monospace"`
on a nested `Text`:

```tsx
// FieldRow.tsx
<div className={classes.texts}>
  <Text size="sm" className={classes.label} truncate>{field.label}</Text>
  <Text size="xs" truncate>
    <span className={classes.key}>{field.key}</span> · {type.label}
  </Text>
</div>
```

```css
.label {
  font-weight: var(--mantine-font-weight-medium);
}

// FieldRow.module.css
.texts { flex: 1; min-width: 0; }
.key { font-family: var(--mantine-font-family-monospace); }
```

## Required marker

Required is shown with a red asterisk after the label, the same mark inputs use:
`withAsterisk` on inputs, `<Input.Label required>` for custom labels, and in lists or summaries
a span: `{field.label}{field.required && <span className={classes.required}>*</span>}` with
`.required { color: var(--mantine-color-error); margin-inline-start: 4px; }`. Never a `Required`
badge or the word "required" in the text.

## Section headers

A page made of sections (settings, a long form) puts each section's title and one-line description
above its fields, full width: `Title order={3} c="var(--mantine-color-bright)"` then `Text
size="sm"`, then the fields. No side column for the header: a left column takes a quarter of the
width from every input and the description rarely needs more than one line. Sections are
separated by `Divider` or the page `Stack gap="xl"`. A title and a description alone do not
separate sections whose body is a list of rows (conditions, actions, line items): those need a
`Fieldset` legend or a container, see [fieldset](fieldset.md).

## Derived summaries

Text the form derives from its own values (what a rule does, what a schedule produces, what an
order costs) is structured, not a paragraph: one line for the subject (`When an issue is
created`), then a `List size="sm"` per group of items (conditions as bullets, ordered steps as
`type="ordered"`), nested lists for nested groups. It sits once, below the fields it describes and
above the submit row, in plain `Text`, with a placeholder line while there is nothing to
describe. A sentence that joins twelve clauses with commas and parentheses is unreadable past the
third clause.

Derived numbers (subtotal, discount, one line per tax rate, shipping, total) are label/value
rows: `Group justify="space-between"` lines in `size="sm"`, a `Divider`, then the total line with a
medium-weight label and the value in `var(--mantine-color-bright)`. The block is as wide as the
amounts it sums, about 320px, never stretched across the full width with the label at one edge
and the value at the other. It sits either aligned to the end of the form above the submit row
(`ml="auto"`), or on the submit row itself, at the start, with the buttons at the end
(`Group justify="space-between" align="flex-end"`: totals | ──── | Save as draft, Issue). It is plain text, no
`Surface`; when it must be boxed it is the sunken block from [surface](surface.md).
