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
- Label is a verb in sentence case: `Submit application`, `Send invitations`, not `SUBMIT` or
  `Ok`.

```tsx
<Group justify="space-between" mt="xl">
  <Button variant="default" onClick={prevStep}>Back</Button>
  <Button type="submit" loading={form.submitting}>Submit application</Button>
</Group>
```
