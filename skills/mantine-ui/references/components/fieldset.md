# Fieldset

`Fieldset` groups a few related inputs under one caption (`Address`, `Shipping address`) with a
border; the `legend` sits on the border line.

- Use the default variant with a `legend` on the page background, where the legend reads as the
  group's title and the border shows what belongs to it. The default legend is label-sized; when
  the fieldsets structure the whole form, raise it one step (`classNames={{ legend }}` with
  `font-size: var(--mantine-font-size-md); font-weight: var(--mantine-font-weight-bold)`) so it
  reads as a group title rather than one more label.
- A fieldset holds a group: several fields, or a list of rows with its add buttons. One input in
  a fieldset is a mistake; it belongs with the neighboring plain fields.
- Nested groups inside a fieldset (a group of conditions inside the conditions, a sub-list) are
  boxes with the default border and the sunken background (`var(--mantine-color-sunken)`), the
  one container background that keeps inputs readable inside a form, see [surface](surface.md).
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
