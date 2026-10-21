# Alert and the error summary

`Alert` carries a message about the whole view, not about one field. In forms it has one job:
the error summary.

- **Error summary for long forms.** When a form has more than one screen of fields, or several
  steps, a failed submit shows `Alert color="red" title="There is a problem"` above the first
  field with one line per error, each a link (`<Anchor component="button">`) that focuses the
  field. Wording is the same as the inline message under the field. Focus moves to the alert
  on submit; inline errors stay. Short forms (one screen, a handful of fields) do not need it:
  focusing the first invalid field is enough.
- The summary disappears as soon as the form is valid again; it never lingers with stale
  entries.
- Other uses: a server error after submit (`Could not save, try again`), a notice the user must
  read before filling the form. Never for success (that is a notification) and never for hints
  (that is `description`).
- `variant="default"`, no `withCloseButton` on validation summaries (fixing the errors removes
  it).

```tsx
{errorList.length > 0 && (
  <Alert color="red" title="There is a problem" ref={summaryRef} tabIndex={-1}>
    <Stack gap={4}>
      {errorList.map(({ path, message }) => (
        <Anchor key={path} component="button" type="button" size="sm" onClick={() => form.getInputNode(path)?.focus()}>
          {message}
        </Anchor>
      ))}
    </Stack>
  </Alert>
)}
```
