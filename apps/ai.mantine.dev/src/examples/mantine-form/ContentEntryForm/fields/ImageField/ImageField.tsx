import { useEffect, useState } from 'react';
import { IconPhoto, IconTrash } from '@tabler/icons-react';
import { ActionIcon, FileSize, Group, Image, Stack, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useId } from '@mantine/hooks';
import { fieldPath } from '../../entry';
import type { FieldInputProps } from '../../types';
import { customInputProps, labelProps } from '../field-props';
import { FieldWrapper } from '../FieldWrapper/FieldWrapper';
import classes from './ImageField.module.css';

export function ImageField({ form, field }: FieldInputProps<'image'>) {
  const id = useId();
  const path = fieldPath(field);
  const file = form.useWatchValue(path) as File | null;
  const { onChange, error, 'data-path': dataPath } = customInputProps(form, field);
  const [rejected, setRejected] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return undefined;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const shownError = error ?? (rejected ? `${field.label} must be an image` : undefined);

  const handleDrop = (files: File[]) => {
    setRejected(false);
    onChange(files[0]);
  };

  return (
    <FieldWrapper id={id} error={shownError} {...labelProps(field)}>
      {file ? (
        <Group wrap="nowrap" className={classes.result} mod={{ invalid: !!shownError }}>
          {previewUrl && (
            <Image src={previewUrl} alt={file.name} w={160} h={120} fit="cover" radius="sm" />
          )}
          <div className={classes.texts}>
            <Text size="sm" truncate>
              {file.name}
            </Text>
            <Text size="xs">
              <FileSize value={file.size} />
            </Text>
          </div>
          <ActionIcon
            variant="default"
            aria-label={`Remove ${field.label}`}
            data-path={dataPath}
            onClick={() => onChange(null)}
          >
            <IconTrash size={16} color="var(--mantine-color-red-text)" />
          </ActionIcon>
        </Group>
      ) : (
        <Dropzone
          accept={IMAGE_MIME_TYPE}
          maxFiles={1}
          multiple={false}
          onDrop={handleDrop}
          onReject={() => setRejected(true)}
          inputProps={{ id }}
          data-path={dataPath}
          className={classes.dropzone}
          mod={{ invalid: !!shownError }}
        >
          <Stack align="center" justify="center" gap={4} mih={140}>
            <IconPhoto size={32} />
            <Text size="sm">Drag an image here or click to select</Text>
            <Text size="xs">One image, PNG, JPEG, GIF, WebP or SVG</Text>
          </Stack>
        </Dropzone>
      )}
    </FieldWrapper>
  );
}
