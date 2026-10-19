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

```tsx
<Group align="flex-start" wrap="nowrap">
  <Text size="sm" fw={500} w={160} style={{ flexShrink: 0 }}>Email</Text>
  <Text size="sm">{values.email}</Text>
</Group>
```
