# ThemeIcon

`ThemeIcon` is a non-interactive tile for an icon: the type of a field, the kind of an item, a
status. It is not a button; put actions in `ActionIcon`.

- Use `variant="default"` and give the **icon** a theme color that identifies the category:
  `<IconAlignLeft size={18} color="var(--mantine-color-blue-text)" />`. One color per category,
  kept in the category definition next to its icon and label, so the list, the picker and the
  summaries agree.
- Pick colors from the theme palette tokens (`--mantine-color-<name>-text`: blue, teal, grape,
  orange, red, green, violet, cyan). Do not invent hex values. No yellow or lime: they are
  barely visible as icon or text color on a light background.
- Size matches the row: `size="lg"` with `lg` action icons and drag handles, `size="md"` in
  dense tables.
- `radius="md"` is the default, leave it out. `light` and `filled` tiles are not used for
  categories: they compete with the primary button.
- Decorative tiles are `aria-hidden`; give them an `aria-label` only when the icon is the only
  thing that conveys the information.

```tsx
const FIELD_TYPES = [
  { value: 'text', label: 'Text', icon: IconAlignLeft, color: 'blue' },
  { value: 'boolean', label: 'Boolean', icon: IconToggleLeft, color: 'teal' },
  { value: 'reference', label: 'Reference', icon: IconLink, color: 'grape' },
];

<ThemeIcon variant="default" size="lg" aria-hidden>
  <type.icon size={18} color={`var(--mantine-color-${type.color}-text)`} />
</ThemeIcon>
```
