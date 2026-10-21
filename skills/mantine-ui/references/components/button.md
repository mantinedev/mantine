# Button

- One primary action per view: the default `filled` button (`<Button type="submit">Save</Button>`).
- Every other action is `variant="default"`: `Back`, `Cancel`, `Reset`, `Add position`,
  `Add line`, `Remove all`. Never `subtle`, `light` or `outline` for actions.
- Destructive text actions stay `variant="default"` with `c="red"` on the label only when the
  action is final (delete account); a remove-from-list action is an icon, see
  [action-icon](action-icon.md).
- Async actions: `loading={submitting}` on the button that triggered them, `disabled` on the
  rest while the request runs.
- Button rows: `Group justify="flex-end"` for a form footer, `justify="space-between"` when a
  `Back` action sits on the left. The primary button is the last one.
- **The submit button is never disabled.** A disabled button gives no reason and is skipped by
  screen readers; submit validates and shows the errors instead. The only state change is
  `loading` while the request runs. `disabled` is for actions that truly cannot run (no items
  selected for a bulk action), with the reason visible next to it.
- **Secondary actions sit where they act.** `Add position` / `Add another` goes directly under
  the list it extends (left-aligned, `variant="default"`), never in the form footer; an action on
  the whole list (`Remove all`, `Sort`) goes above the list; `Cancel` stays in the footer next to
  the primary button, less prominent. The footer holds only actions on the whole form.
- Label is a verb in sentence case: `Submit application`, `Send invitations`, not `SUBMIT` or
  `Ok`.

```tsx
<Group justify="space-between" mt="xl">
  <Button variant="default" onClick={prevStep}>Back</Button>
  <Button type="submit" loading={form.submitting}>Submit application</Button>
</Group>
```
