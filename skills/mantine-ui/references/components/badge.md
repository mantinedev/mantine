# Badge

A badge is a short status word that belongs to an item: `Published`, `Draft`, `Beta`, `3 new`.
It is not a way to mark a field as required, important or selected.

- Variants: `variant="default"` for neutral statuses, `variant="filled"` with a theme color for
  a status that must stand out (`color="green"` for `Active`). Never `light`, never `dot` for
  plain labels, never `outline`.
- Items that carry their own color (labels, tags, projects) are not filled badges in that
  color: ten colored badges in a list read loud and the colors stop meaning anything. Render
  them `variant="default"` with the color as a small dot in the `leftSection`
  (`<ColorSwatch color={...} size={8} withShadow={false} />`).
- Size `sm` in list rows and tables, `md` in headers next to a title.
- Text is one or two words in sentence case: `Required` is not a badge, see
  [text](text.md#required-marker).
- A badge is never interactive: a removable chip is `Pill` or `Chip`, a filter is `Chip.Group`.

```tsx
<Badge variant="default" size="sm">Draft</Badge>
<Badge color="green" size="sm">Published</Badge>
```
