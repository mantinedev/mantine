# ActionIcon

- Icon-only actions are `ActionIcon variant="default"` with an `aria-label` that names the
  action and its target (`aria-label="Remove position 1"`).
- Next to inputs, match the input height with the `input-*` sizes: `size="input-sm"` beside
  `size="sm"` inputs (the default), `size="input-md"` beside `md` inputs. This keeps the icon
  aligned with the input row; `CloseButton` is not sized to inputs, do not use it in a row of
  fields.
- When the action sits beside an input that has a label, align it with the input, not the label:
  wrap it in a container that reserves the label height (`<Input.Label>&nbsp;</Input.Label>`
  above the icon, or `mt` equal to the label height) or put it in the row's header instead.
- Destructive actions keep the default variant and color only the icon:
  `<IconTrash size={16} color="var(--mantine-color-red-text)" />`.
- Icons are `16` inside `ActionIcon` of input sizes, from the project's icon library.

```tsx
<ActionIcon variant="default" size="input-sm" aria-label={`Remove position ${index + 1}`} onClick={remove}>
  <IconTrash size={16} color="var(--mantine-color-red-text)" />
</ActionIcon>
```
