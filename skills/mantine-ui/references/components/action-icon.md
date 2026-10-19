# ActionIcon

- Icon-only actions are `ActionIcon variant="default"` with an `aria-label` that names the
  action and its target (`aria-label="Remove position 1"`). Never `subtle` or `light`.
- **Size follows the row.** In a list row the actions take the same `size` as the tile next to
  them (`size="lg"` with a `size="lg"` `ThemeIcon`); beside inputs use the input sizes
  (`size="input-sm"` next to `size="sm"` inputs). A row has enough height for `lg` controls;
  small `md` icons in a tall row waste the click area.
- Grouped actions (edit + remove) sit in `Group gap={6} wrap="nowrap"`, destructive one last.
- Destructive actions keep the default variant and color only the icon:
  `<IconTrash size={18} color="var(--mantine-color-red-text)" />` (`16` in `md`/`input-sm`).
- **Drag handles** are `ActionIcon variant="default"` of the row size with `IconGripVertical`,
  `aria-label="Reorder <item>"`, `style={{ cursor: 'grab' }}` through a class, and the dnd-kit
  listeners/attributes spread on the `ActionIcon`. The handle must look exactly like the other
  controls of the row: same size, same variant.
- When the action sits beside an input that has a label, align it with the input, not the label:
  reserve the label height (`<Input.Label>&nbsp;</Input.Label>` above the icon) or move the
  action to the row header.

```tsx
<Group gap={6} wrap="nowrap">
  <ActionIcon variant="default" size="lg" aria-label={`Edit field ${field.label}`} onClick={onEdit}>
    <IconPencil size={18} />
  </ActionIcon>
  <ActionIcon variant="default" size="lg" aria-label={`Remove field ${field.label}`} onClick={onRemove}>
    <IconTrash size={18} color="var(--mantine-color-red-text)" />
  </ActionIcon>
</Group>
```
