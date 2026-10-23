# Fieldset

`Fieldset` groups a few related inputs under one caption (`Address`, `Shipping address`) with a
border; the `legend` sits on the border line.

- Use the default variant with a `legend` on the page background, where the legend reads as the
  group's title and the border shows what belongs to it.
- Never `variant="unstyled"`: without the border the legend is a line of text floating between
  inputs and nothing shows which fields it covers. Inside a card, panel or any `Surface`, where the
  default variant's background would differ from the container, use a bordered `Surface` with a
  title row instead, see [surface](surface.md).
- A group of repeated rows (positions, line items) is never a stack of fieldsets; each row is a
  `Surface` block with a header row.
- `disabled` on the fieldset when the whole group is unavailable (an address copied from another
  section while "Same as" is on).

```tsx
// On the page background
<Fieldset legend="Address">…</Fieldset>

// Inside a Surface
<Surface withBorder p="md">
  <Text size="sm" className={classes.title}>Address</Text>
  …
</Surface>
```
