# Text and Title

- Page and card titles are `Title` (`order={2}` for a card, `order={4}` for a section inside a
  card) with `c="var(--mantine-color-bright)"` when they are the main heading of the view.
- Secondary text (hints under inputs, counters, captions, labels in a summary) is smaller text,
  `size="sm"` or `size="xs"`, in the default color. Never `c="dimmed"`.
- Labels of label/value pairs (stat cards, review steps) use the theme's medium weight:
  `fw={500}` or `font-weight: var(--mantine-font-weight-medium)`, the value is regular weight and
  one size larger or `c="var(--mantine-color-bright)"` when it is the headline number.
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
  <Text size="sm" fw={500} truncate>{field.label}</Text>
  <Text size="xs" truncate>
    <span className={classes.key}>{field.key}</span> · {type.label}
  </Text>
</div>

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
