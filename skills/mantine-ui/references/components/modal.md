# Modal and Drawer

- Open modals with the `useModal` hook (`useDrawer` for drawers), not with
  `useDisclosure` + `<Modal opened onClose>`. The hook renders the modal for you, returns
  `open`/`close` and keeps the stack of nested overlays in order:

```tsx
const modal = useModal({
  title: 'Add field',
  children: <FieldForm onSave={handleSave} onCancel={() => modal.close()} />,
});

<Button onClick={() => modal.open()}>Add field</Button>;
```

- Title is a short noun phrase (`Add field`, `Edit field`), no trailing punctuation. The footer
  has the primary action last and `Cancel` as `variant="default"`; no close "X" plus a Cancel
  button plus an Escape hint — the close button in the header and Cancel are enough.
- A form in a modal keeps its own `useForm`, resets in `onClose` (every way of closing goes
  through it) and blocks closing while submitting: `closeOnClickOutside: !form.submitting`,
  `closeOnEscape: !form.submitting`, `withCloseButton: !form.submitting`.
- Focus: `data-autofocus` on the first input; the modal returns focus to the element that opened
  it on close.
- **One modal for many items** (a list where every row opens the same modal with its data, plus
  an "Add" action): keep one `useModal` in the list component, store the item being edited in
  state, and remount the modal content when the item changes (`key={item?.id ?? 'new'}`) so the
  form starts from that item's values. Title and submit label switch between add and edit. This
  pattern is under review (Mantine ticket #2847); until it lands, this is the expected shape.
- Steps inside a modal (type picker, then options) are one modal whose content switches; a "Back"
  action as `variant="default"` on the left of the footer, Save on the right.
- Size: `size="lg"` for forms with two columns, default size otherwise; `fullScreenBelow="sm"`
  for forms on phones.

## Closing

The modal animates out; its content stays visible during the exit. Do not clear the item the
modal shows (`selectedField`, the entry being deleted) in `onClose`: clear it in
`onExitTransitionEnd`, otherwise the title and fields flash to their empty state while the modal
fades. See [transitions](transitions.md).
