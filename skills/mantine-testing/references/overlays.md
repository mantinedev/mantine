# Overlays

Modals, drawers, popovers, menus and notifications render in portals at the end of `document.body`.
`screen` queries see them; scope with `within`.

## Modals and drawers (`useModal`, `useDrawer`, `Modal`)

```tsx
await user.click(screen.getByRole('button', { name: 'Add field' }));
const dialog = screen.getByRole('dialog');
expect(within(dialog).getByRole('heading', { name: 'Add field' })).toBeInTheDocument();

await user.type(within(dialog).getByLabelText('Label'), 'Title');
await user.click(within(dialog).getByRole('button', { name: 'Save field' }));
expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
```

- With `env="test"` the dialog is in the DOM right after the click; no `findBy` needed for
  opening, but use `waitFor`/`findBy` for closing when the close follows an async submit.
- The close button is `getByRole('button', { name: 'Close' })` (or the `closeButtonProps['aria-label']`).
- `Escape` closes: `await user.keyboard('{Escape}')`; click outside: `await user.click(document.body)`.
- A modal rendered with `useModal` needs no `Modal.Outlet` in tests; the provider renders it.
- A close blocked by `useModalCloseGuard` keeps the dialog in the DOM right after Escape or the
  close button click; a guard that resolves asynchronously closes later, so `waitFor` the dialog
  to disappear. `modal.close()` is never guarded.
- Focus: after close, the element that opened the modal has focus — assert it when the component
  promises it.

## Notifications

Render `<Notifications />` next to the component under test (the provider does not render it):

```tsx
render(
  <>
    <Notifications />
    <JobApplicationForm />
  </>
);
await user.click(screen.getByRole('button', { name: 'Submit application' }));
expect(await screen.findByText('Application submitted')).toBeInTheDocument();
```

`notifications.clean()` in `afterEach`, otherwise a notification from one test shows up in the
next. A notification with `autoClose: false` stays until closed.

## Popovers, menus, tooltips, hover cards

- `Popover`/`Menu`: click the target, then query `screen.getByRole('menu')` /
  `getByRole('dialog')`; items are `menuitem`.
- `Tooltip`: `await user.hover(target)` then `screen.getByRole('tooltip')`; with `env="test"`
  there is no open delay.
- `Combobox`-based inputs (`Select`, `Autocomplete`): options are `role="option"` inside a
  `listbox`; `aria-selected` marks the active one.
