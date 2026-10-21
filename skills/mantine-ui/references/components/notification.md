# Notification

`notifications.show` from `@mantine/notifications` confirms that something happened. It is read
in a second and then dismissed, so it carries one line of information.

- `title` names the event (`Entry created`, `Changes saved`, `Upload failed`), `message` is one
  short line with the identifier the user recognizes (`hello-world · Blog post`,
  `3 files uploaded`).
- Never put data in a notification: no JSON, no code block, no list, no multi-paragraph text. A
  notification taller than three lines is clipped by its max height and the user cannot read
  it. Show the data on the page instead: a `Code block` under the form, a details drawer, a table.
- Keep the default `autoClose`. `autoClose: false` is for errors the user must act on.
- Error notifications say what to do next (`Could not save, check the highlighted fields`), not
  the raw error.

```tsx
notifications.show({ title: 'Entry created', message: `${entry.key} · ${model.name}` });
```
