# Modal and Drawer

- Open modals with the `useModal` hook (`useDrawer` for drawers), not with
  `useDisclosure` + `<Modal opened onClose>`. The hook renders the modal for you, returns
  `open`/`close` and keeps the stack of nested overlays in order. Props passed to `modal.open()`
  apply to that opening only and stay until the next `open()`:

```tsx
const modal = useModal({ size: 'lg', fullScreenBelow: 'sm', closeOnClickOutside: false });

<Button onClick={() => modal.open({ title: 'Add field', children: <FieldEditor onSave={handleSave} /> })}>
  Add field
</Button>;
```

- Title is a short noun phrase (`Add field`, `Edit field`), no trailing punctuation. The footer
  has the primary action last and `Cancel` as `variant="default"`; no close "X" plus a Cancel
  button plus an Escape hint — the close button in the header and Cancel are enough.
- Form modals set `closeOnClickOutside: false`: a click beside a half-filled form must not throw
  it away. The close button, Escape and Cancel still close.
- **The form lives in the modal content.** The component rendered as `children` owns its
  `useForm` (and its own UI state, such as a type picker step) and is typed by its item. The
  component that calls `useModal` never holds the form, never resets it and never describes an
  empty item: `useModal` remounts its content on every `open()`, so every opening starts clean
  (only `keepMounted` content survives a close).
- **Closing is guarded from the content** with `useModalCloseGuard` (`useDrawerCloseGuard`):
  the guard runs before the close button, Escape, overlay click or swipe close the modal and
  returns `false` or a promise resolving to `false` to keep it open. The hook returns a close
  function that goes through the same guard, use it for Cancel. `modal.close()` is not guarded,
  so the save handler closes the modal while `form.submitting` is still true:

```tsx
function FieldEditor({ field, isNew, onSave }: FieldEditorProps) {
  const form = useForm<ModelField>({ initialValues: field, validate: fieldRules });
  const closeModal = useModalCloseGuard(() => !form.submitting && (!form.isDirty() || confirmDiscard()));

  return (
    <form onSubmit={form.onSubmit(onSave)}>
      {/* fields */}
      <Group justify="flex-end" mt="md">
        <Button variant="default" onClick={closeModal} disabled={form.submitting}>Cancel</Button>
        <Button type="submit" loading={form.submitting}>{isNew ? 'Add field' : 'Save changes'}</Button>
      </Group>
    </form>
  );
}
```

- **One modal for many items** (a list where every row opens the same modal with its data,
  plus an "Add" action): one `useModal` with the static props, one `openEditor(item | null)`
  that opens the modal with that item's title and content. A new item is created at open time
  with its own id:

```tsx
const modal = useModal({ size: 'lg', closeOnClickOutside: false });

const handleSave = (field: ModelField) => {
  const index = form.getValues().fields.findIndex((item) => item.id === field.id);
  index === -1 ? form.insertListItem('fields', field) : form.replaceListItem('fields', index, field);
  modal.close();
};

const openEditor = (field: ModelField | null) => {
  modal.open({
    title: field ? 'Edit field' : 'Add field',
    children: <FieldEditor field={field ?? createField()} isNew={!field} onSave={handleSave} />,
  });
};

<Button variant="default" onClick={() => openEditor(null)}>Add field</Button>;
<FieldRow onEdit={() => openEditor(field)} />;
```

  Handlers passed through `open()` are captured by the render that handled the click. They
  update through `form` list handlers and `form.getValues()`, or through functional
  `setItems((current) => …)`, never through the `items` variable of that render. Do not keep
  the "current item" in state, a `key` counter or an empty item object in the list component;
  with an inline `<Modal>` (9.x), `key={item.id}` on the content does the remount instead.
- Loading an item on open: the editor receives the id, fetches in an effect and calls
  `form.initialize(record)`; inputs are `readOnly` until `form.initialized`. Saving: the Save
  button is `loading={form.submitting}`, Cancel is disabled, a failed request is an
  `Alert color="red"` at the top of the modal body (a notification would be behind the modal),
  success closes the modal and shows a one-line notification.
- Focus: `data-autofocus` on the first input; the modal returns focus to the element that opened
  it on close. Rows are keyed by item id, so the Edit button that opened the modal still exists.
- Steps inside a modal (type picker, then options) are one modal whose content switches; a "Back"
  action as `variant="default"` on the left of the footer, Save on the right.
- Size: `size="lg"` for forms with two columns, default size otherwise; `fullScreenBelow="sm"`
  for forms on phones.

## Closing

The modal animates out; its content stays visible during the exit. Props passed to
`modal.open()` stay until the next `open()`, so a modal opened this way keeps its title and
fields while it fades. With an inline `<Modal>` whose children depend on a selected item, clear
the selection in `onExitTransitionEnd`, not in `onClose`, otherwise the title and fields flash
to their empty state. Never `form.reset()` in `onClose` for the same reason: a parent-owned form
is reset when the modal opens (`onOpen: form.reset`). See [transitions](transitions.md).
