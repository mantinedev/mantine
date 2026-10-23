# ActionBar and the unsaved changes bar

`ActionBar` is a floating bar at the bottom of the viewport for actions on the current state of
the page: selected rows, unsaved changes. It replaces per-section save bars and sticky `Surface`
footers.

## Unsaved changes

A page with several independent forms (settings page, profile + organization + billing) has one
bar for all of them, not a Save/Cancel row under every section:

- `opened` is true while any form is dirty (`form.useDirty()` per form, combined).
- Text names the state (`You have unsaved changes`, `2 sections with unsaved changes`), then
  `ActionBar.Divider`, then `Cancel` (`variant="default"`) that resets every dirty form and
  `Save` (filled) that submits every dirty form; `loading` while any request runs.
- Each section keeps its own `form` and `onSubmit`; the bar calls them. Sections render no
  buttons of their own.
- `aria-label` describes what the actions apply to, `announcement` reads the state to screen
  readers.
- Buttons in the bar are `size="compact-sm"`; the bar is not a place for destructive actions.

```tsx
const dirtyForms = forms.filter((form) => form.useDirty());

<ActionBar opened={dirtyForms.length > 0} shadow="md" aria-label="Unsaved changes actions">
  <Text size="sm">You have unsaved changes</Text>
  <ActionBar.Divider />
  <Button variant="default" size="compact-sm" onClick={() => dirtyForms.forEach((form) => form.reset())}>
    Cancel
  </Button>
  <Button size="compact-sm" loading={saving} onClick={saveDirtyForms}>
    Save
  </Button>
</ActionBar>
```

## Selection

Rows selected in a table or list get the same bar: `N selected`, the bulk actions as
`variant="default" size="compact-sm"` buttons, `ActionBar.CloseButton` to clear the selection.
