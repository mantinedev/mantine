# Dropzone

`Dropzone` from `@mantine/dropzone` is a target users drop files onto; it needs room to aim at.

- Minimum height `mih={140}` for a single file, `mih={180}` for several; the inner content is
  centered: an upload icon (`28`–`32`px) above a title line (`Drag an image here or click to
  select`) and a smaller hint line (`PNG or JPEG, up to 5 MB`, `One file`). Never a one-line
  strip with the text beside the icon.
- `accept` and `maxFiles` from the field's options; `maxSize` when the product has a limit, named
  in the hint line.
- After a drop, replace the drop area with the result: an image preview or the file name and
  size, plus a `Remove` action (`ActionIcon variant="default"` with a trash icon, or a
  `Button variant="default"`). The result is about as tall as the empty state so the form does
  not jump.
- The result box has the same inner padding as the inputs around it: `p="xs"`, not `p="sm"` or
  `p="md"`; the file name is `size="sm"`. A result box padded like a card looks like a different
  control than the inputs above it.
- The image preview fills its thumbnail: `Image` with `fit="cover"` and a fixed size
  (`160 × 120`), the box has no `min-height` so the preview defines the height and its edges sit
  exactly one padding away from the border. `fit="contain"` leaves transparent bands around a
  wide or tall image and the picture looks misaligned inside the box.
- Error state: `Dropzone` has no `error` prop; wrap it in `Input.Wrapper withBlockChildren` with
  `label`, `description` and `error`, and pass `data-invalid` or a class for the red border.
- Rejected files (`onReject`) show why: `File type must be an image`.

```tsx
<Input.Wrapper label="Cover image" description="Displayed above the title" error={error} withAsterisk withBlockChildren>
  <Dropzone accept={IMAGE_MIME_TYPE} maxFiles={1} mih={140} onDrop={([file]) => onChange(file)}>
    <Stack align="center" gap={4} justify="center" mih={140}>
      <IconUpload size={32} />
      <Text size="sm">Drag an image here or click to select</Text>
      <Text size="xs">One image, PNG or JPEG</Text>
    </Stack>
  </Dropzone>
</Input.Wrapper>
```
