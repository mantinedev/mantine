# Textarea

- `autosize` always comes with `minRows` and `maxRows` (`minRows={3} maxRows={8}`), so the field
  grows with the text but never takes over the page.
- A character limit is enforced with `maxLength` and shown with a counter in `bottomSection`:
  small text, right-aligned, red when the limit is reached. The counter reads the current value
  (`form.useWatchValue(path)` with `@mantine/form`).
- Placeholder describes what to write (`"Anything else we should know"`), the label is a noun
  (`Notes`).

```tsx
<Textarea
  label="Notes"
  placeholder="Anything else we should know"
  autosize
  minRows={3}
  maxRows={8}
  maxLength={500}
  bottomSection={
    <Text size="xs" ta="right" c={notes.length >= 500 ? 'red' : undefined}>
      {notes.length}/500
    </Text>
  }
/>
```
