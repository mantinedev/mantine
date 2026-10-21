# RichTextEditor

`RichTextEditor` from `@mantine/tiptap` is the input for formatted text. It is a form field like
any other: label, description, placeholder, error.

- **Always a placeholder.** Register `@tiptap/extension-placeholder` with the field's placeholder
  text (`Placeholder.configure({ placeholder: 'Write the article body' })`); an empty editor
  without a placeholder looks like a broken box. Add the extension to the project when it is
  missing.
- Toolbar: only the controls the content needs. Body text: bold, italic, H2–H4, bullet and
  ordered lists, link and unlink. No alignment, colors or tables unless the field asks for them.
- Wrap in `Input.Wrapper withBlockChildren` for `label`, `description`, `withAsterisk` and
  `error`; pass `data-invalid` or a class to the editor for the red border.
- The editor has no `size` prop and its content renders at `md`, one step larger than the `sm`
  inputs around it. Set `font-size: var(--mantine-font-size-sm)` on `.ProseMirror` through the
  `RichTextEditor.Content` class in the component's CSS module; the placeholder inherits it. The editor content is the input;
  focus it when it is the first invalid field (`editor.commands.focus()`).
- Value is the HTML string from `editor.getHTML()`; "required" means the text content is not
  empty (`editor.getText().trim() !== ''`), not the HTML (`<p></p>` is empty).
- With `@mantine/form`, wire it through `useFormField`: `onChange` on `editor.onUpdate`,
  `onExternalWrite` to call `editor.commands.setContent` when the form writes the value (reset,
  `setValues`).
- Content area height: `mih={160}` for body text, so the editor does not collapse to one line;
  the toolbar is `sticky` only inside long editors.

```tsx
const editor = useEditor({
  extensions: [
    StarterKit.configure({ link: { openOnClick: false } }),
    Placeholder.configure({ placeholder }),
  ],
  content: value,
  onUpdate: ({ editor }) => onChange(editor.getHTML()),
});
```
