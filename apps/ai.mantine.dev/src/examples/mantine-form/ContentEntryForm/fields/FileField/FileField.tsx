import { IconFile, IconTrash, IconUpload } from '@tabler/icons-react';
import { ActionIcon, FileSize, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';
import { useId } from '@mantine/hooks';
import { fieldPath } from '../../entry';
import type { FieldInputProps } from '../../types';
import { customInputProps, labelProps } from '../field-props';
import { FieldWrapper } from '../FieldWrapper/FieldWrapper';
import classes from './FileField.module.css';

export function FileField({ form, field }: FieldInputProps<'file'>) {
  const id = useId();
  const path = fieldPath(field);
  const file = form.useWatchValue(path) as File | null;
  const { onChange, error, 'data-path': dataPath } = customInputProps(form, field);

  return (
    <FieldWrapper id={id} error={error} {...labelProps(field)}>
      {file ? (
        <Group wrap="nowrap" className={classes.result}>
          <ThemeIcon variant="default" size="lg">
            <IconFile size={18} />
          </ThemeIcon>
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
            size="lg"
            aria-label={`Remove ${field.label}`}
            data-path={dataPath}
            onClick={() => onChange(null)}
          >
            <IconTrash size={18} color="var(--mantine-color-red-text)" />
          </ActionIcon>
        </Group>
      ) : (
        <Dropzone
          maxFiles={1}
          multiple={false}
          onDrop={(files) => onChange(files[0])}
          inputProps={{ id }}
          data-path={dataPath}
          className={classes.dropzone}
          mod={{ invalid: !!error }}
        >
          <Stack align="center" justify="center" gap={4} mih={140}>
            <IconUpload size={32} />
            <Text size="sm">Drag a file here or click to select</Text>
            <Text size="xs">One file of any type</Text>
          </Stack>
        </Dropzone>
      )}
    </FieldWrapper>
  );
}
