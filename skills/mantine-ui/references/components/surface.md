# Surface

`Surface` is the container with a background: a card on the page, a panel inside a card, a row
in a list. Its background depends on the depth level (0 page, 1 panel, 2 panel-2), one shade
lighter per level in dark mode and white in light mode. `Paper` is deprecated, use `Surface`.

- A card on the page: `<Surface withBorder p="lg">`, level 0, the page color with a border.
  Nesting one `Surface` inside another steps the level up automatically; never jump two levels.
- **Repeated rows that contain inputs** come in two layouts, picked by the rows' shape. Rows with
  the same fields (invoice lines, conditions, invitees) are a grid with one caption row and
  unlabeled inputs, see [inputs](inputs.md#rows-of-unlabeled-inputs). Rows whose fields differ
  by type (actions, positions with their own field sets) or need more than one line are blocks:
  a header row (small medium-weight title `<Text size="sm" className={classes.title}>Position 1
  </Text>` on the left, the remove `ActionIcon` on the right) above labeled inputs, rows
  separated by `Divider` or the form gap. A block is plain by default; `Surface withBorder
  p="md"` cards only when the page shows other content next to the form. One style for all rows
  of a list.
- Single-line read-only rows (a field of a model, a member, a file) are `Surface withBorder p="sm"` with
  one `Group gap="sm" wrap="nowrap"`: drag handle, category `ThemeIcon`, two-line texts
  (`flex: 1; min-width: 0` through a class), then the actions in `Group gap={6}`. Everything in
  the row is the same `size` (`lg`). `radius="md"` is the default, leave it out.
- Read-only summaries (review steps, receipts) are `Surface withBorder` sections with a title row
  (`Title order={4}` + an `Edit` anchor) and label/value pairs in small text.
- **A form sits on the page background by default.** A `Surface` card around it is a layout
  choice for a page that shows other content next to the form, or when the user asks for cards.
  Inputs, checkboxes, radios, `Dropzone` and `RichTextEditor` use `--mantine-color-surface-input`
  (white in light mode, the page color in dark mode), so they stay one shade below any `Surface`
  level and never blend into the card.
- **Nested blocks inside a form** (a sub-group of rows, an indented set of fields) use the
  sunken background, `var(--mantine-color-sunken)` with the default border, never a raised
  `Surface`: sunken is darker than the inputs in both schemes, so the inputs keep their edges.
- Do not set a background color on `Surface` by hand; pick the level with nesting or `level`.

```tsx
// A row whose fields differ by type, as a plain block: a header row and labeled inputs
<div>
  <Group justify="space-between" mb="sm">
    <Text size="sm" className={classes.title}>Position {index + 1}</Text>
    <ActionIcon variant="default" size="lg" aria-label={`Remove position ${index + 1}`}>
      <IconTrash size={18} color="var(--mantine-color-red-text)" />
    </ActionIcon>
  </Group>
  <SimpleGrid cols={{ base: 1, sm: 2 }}>…inputs…</SimpleGrid>
</div>
{index < positions.length - 1 && <Divider />}
```

## Danger zones and destructive areas

A section with destructive actions (delete organization, transfer ownership, revoke keys) looks
like every other section: default border, default background, the same title and description.
Red lives only on the destructive action itself, the button label (`variant="default" c="red"`)
or the trash icon color, and on the filled confirm button inside the confirmation modal. Never a
red border, a red background tint or a red title on the container: in the dark scheme a red
`Surface` border reads as an error state for the whole block and clashes with every other border
on the page.
