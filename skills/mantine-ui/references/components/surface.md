# Surface

`Surface` is the container with a background: a card on the page, a panel inside a card, a row
in a list. Its background depends on the depth level (0 page, 1 panel, 2 panel-2), one shade
lighter per level in dark mode and white in light mode. `Paper` is deprecated, use `Surface`.

- A card on the page: `<Surface withBorder p="lg">`. Nesting one `Surface` inside
  another steps the level up automatically; never jump two levels.
- Repeated rows of a list (positions, invoices lines, team members) are `Surface withBorder
  p="md"` blocks inside the form, with a header row: a small medium-weight title
  (`<Text size="sm" fw={500}>Position 1</Text>`) on the left and the remove `ActionIcon` on the
  right, then the inputs. Use this instead of `Fieldset`, see [fieldset](fieldset.md).
- Single-line rows (a field of a model, a member, a file) are `Surface withBorder p="sm"` with
  one `Group gap="sm" wrap="nowrap"`: drag handle, category `ThemeIcon`, two-line texts
  (`flex: 1; min-width: 0` through a class), then the actions in `Group gap={6}`. Everything in
  the row is the same `size` (`lg`). `radius="md"` is the default, leave it out.
- Read-only summaries (review steps, receipts) are `Surface withBorder` sections with a title row
  (`Title order={4}` + an `Edit` anchor) and label/value pairs in small text.
- Do not set a background color on `Surface` by hand; pick the level with nesting or `level`.

```tsx
<Surface withBorder p="md">
  <Group justify="space-between" mb="sm">
    <Text size="sm" fw={500}>Position {index + 1}</Text>
    <ActionIcon variant="default" size="input-sm" aria-label={`Remove position ${index + 1}`}>
      <IconTrash size={16} color="var(--mantine-color-red-text)" />
    </ActionIcon>
  </Group>
  <SimpleGrid cols={{ base: 1, sm: 2 }}>…inputs…</SimpleGrid>
</Surface>
```
