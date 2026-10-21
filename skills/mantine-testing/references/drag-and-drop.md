# Drag and drop with dnd-kit

Pointer dragging does not work in jsdom (no layout, no pointer capture). Test reordering through
the keyboard sensor, which dnd-kit supports out of the box when `KeyboardSensor` with
`sortableKeyboardCoordinates` is registered:

```tsx
async function moveDown(user: User, handleName: string) {
  const handle = screen.getByRole('button', { name: handleName });
  handle.focus();
  await user.keyboard('{Space}');
  await user.keyboard('{ArrowDown}');
  await user.keyboard('{Space}');
}

it('reorders fields with the keyboard', async () => {
  const { user } = renderForm();
  await addField(user, 'Title');
  await addField(user, 'Body');

  await moveDown(user, 'Reorder field Title');

  expect(fieldLabels()).toEqual(['Body', 'Title']);
});
```

- Drag handles need an accessible name (`aria-label="Reorder field Title"`); that is how tests
  find them. The component must register `KeyboardSensor` for this to work — add it if the
  implementation only has `PointerSensor`.
- Assert the order through what the user sees (labels in DOM order), and through the submit
  payload when order is part of it.
- One test per list that can be reordered (fields, select options), plus one that a moved row
  keeps its values.
- dnd-kit announces moves with a live region; it is fine to leave it in the DOM. Suppress
  nothing.
