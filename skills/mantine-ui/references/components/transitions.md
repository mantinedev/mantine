# Components with transitions

`ActionBar`, `Modal`, `Drawer`, `Popover`, `Notification`, `Collapse`, `Transition` animate out
when they close. During that exit the element is still on screen, so its content must not change:
a bar that reads `Unsaved changes in Billing` and switches to `Unsaved changes in ` the moment the
last change is saved is visibly broken for 200 ms.

- **Content derives from the last open state, not from the live state.** Keep the content shown
  while opened in a ref or state that is updated only while `opened` is true, and render that
  during the exit. The simplest form: `const shown = useRef(message); if (opened) shown.current
  = message;` then render `shown.current`.
- **Clear state after the exit, not on close.** A modal whose children depend on a selected item
  (`Edit field`, `Delete X`) clears the selection in `onExitTransitionEnd`, not in `onClose`;
  with `useModal`, keep `children` stable while the modal closes. A notification's text is fixed
  when it is shown.
- **Derived "N selected" / "N sections" strings** are computed from the snapshot, not from the
  live array that is already empty.
- Opening is different: content may update freely while the element is open; only the exit
  needs the snapshot.

```tsx
function UnsavedChangesBar({ dirtySections, ...props }: Props) {
  const opened = dirtySections.length > 0;
  const shown = useRef(dirtySections);
  if (opened) {
    shown.current = dirtySections;
  }
  const message = `Unsaved changes in ${shown.current.join(', ')}`;
  return <ActionBar opened={opened} announcement={message}>…{message}…</ActionBar>;
}
```
