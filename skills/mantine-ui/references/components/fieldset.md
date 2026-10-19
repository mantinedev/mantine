# Fieldset

`Fieldset` draws a border with the `legend` sitting on the border line, so the legend is painted
half on the fieldset background and half on whatever is behind the fieldset.

- Use `Fieldset` with a `legend` only directly on the page background, where both halves of the
  legend have the same color behind them.
- Inside a card, panel or any `Surface`, do not use the default or filled variant with a legend:
  the fieldset background differs from the container and the legend becomes hard to read. Use
  `Fieldset variant="unstyled"` (legend becomes a plain label above the fields) or a bordered
  `Surface` with a title row, see [surface](surface.md).
- A group of repeated rows (positions, line items) is never a stack of fieldsets; each row is a
  `Surface` block with a header row.
- Keep `Fieldset` for semantic grouping of a few related inputs with one caption (`Shipping
  address`), with `disabled` when the whole group is unavailable.

```tsx
// On the page background
<Fieldset legend="Shipping address" radius="md">…</Fieldset>

// Inside a Surface
<Fieldset legend="Shipping address" variant="unstyled">…</Fieldset>
```
