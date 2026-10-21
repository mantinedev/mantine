import { IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { FileDropzoneInput } from '../inputs/FileDropzoneInput';
import type { FieldInputProps, ImageModelField } from '../types';

export function ImageField({ form, field }: FieldInputProps<ImageModelField>) {
  return (
    <FileDropzoneInput
      kind="image"
      accept={IMAGE_MIME_TYPE}
      label={field.label}
      description={field.description || undefined}
      withAsterisk={field.required}
      title="Drag an image here or click to select"
      hint="One image: PNG, JPEG, GIF, WebP, SVG or AVIF"
      rejectMessage="File type must be an image"
      {...form.getInputProps(`fields.${field.key}`, { withFocus: false })}
    />
  );
}
