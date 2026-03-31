# How to use Dropzone with @mantine/form?
Learn how to use Dropzone with @mantine/form to handle file selection state

[@mantine/dropzone](https://mantine.dev/others/dropzone/) package provides a `Dropzone`
component which allows you to drag and drop files from your computer or select them using
the file picker. Its purpose is to handle file selection; it does not store files state,
does not display selected files, and does not upload them to the server.

[use-form](https://mantine.dev/form/use-form/) hook handles form state, validation,
error messages, and form submission. You can integrate any input or React component
with the `use-form` hook using the following form object properties:

* `form.getValues().x` – value of the input
* `form.errors.x` – error message for the input
* `form.setFieldValue('x', value)` – function to set input value
* `form.setFieldError('x', 'error-message')` – function to set input error message

Using these properties, you can integrate `Dropzone` with the `use-form` hook:

#### Example: DropzoneForm

```tsx
import { useForm } from '@mantine/form';
import { Dropzone, MIME_TYPES } from '@mantine/dropzone';
import { Center, Text, CloseButton } from '@mantine/core';

interface FormValues {
  files: File[];
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { files: [] },
  });

  const selectedFiles = form.getValues().files.map((file, index) => (
    <Text key={file.name}>
      <b>{file.name}</b> ({(file.size / 1024).toFixed(2)} kb)
      <CloseButton
        size="xs"
        onClick={() =>
          form.setFieldValue(
            'files',
            form.values.files.filter((_, i) => i !== index)
          )
        }
      />
    </Text>
  ));

  return (
    <>
      <Dropzone
        h={120}
        p={0}
        multiple
        accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.svg]}
        onDrop={(files) => form.setFieldValue('files', files)}
        onReject={() => form.setFieldError('files', 'Select images only')}
      >
        <Center h={120}>
          <Dropzone.Idle>Drop files here</Dropzone.Idle>
          <Dropzone.Accept>Drop files here</Dropzone.Accept>
          <Dropzone.Reject>Files are invalid</Dropzone.Reject>
        </Center>
      </Dropzone>

      {form.errors.files && (
        <Text c="red" mt={5}>
          {form.errors.files}
        </Text>
      )}

      {selectedFiles.length > 0 && (
        <>
          <Text mb={5} mt="md">
            Selected files:
          </Text>
          {selectedFiles}
        </>
      )}
    </>
  );
}
```

