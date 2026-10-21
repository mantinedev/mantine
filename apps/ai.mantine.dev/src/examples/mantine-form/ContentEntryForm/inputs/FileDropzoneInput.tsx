import { useEffect, useState } from 'react';
import { IconFile, IconPhoto, IconTrash, IconUpload } from '@tabler/icons-react';
import { ActionIcon, FileSize, Group, Image, Input, Stack, Text, ThemeIcon } from '@mantine/core';
import { Dropzone, type FileRejection } from '@mantine/dropzone';
import { useFormField } from '@mantine/hooks';
import classes from './FileDropzoneInput.module.css';

interface FileDropzoneInputProps {
  label: string;
  description?: string;
  withAsterisk?: boolean;
  kind: 'image' | 'file';
  accept?: string[];
  title: string;
  hint: string;
  rejectMessage: string;
  value?: File | null;
  onChange?: (value: File | null) => void;
  error?: React.ReactNode;
  'data-path'?: string;
}

function ImagePreview({ file }: { file: File }) {
  const [url, setUrl] = useState<string | null>(null);

  useEffect(() => {
    const objectUrl = URL.createObjectURL(file);
    setUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return url ? (
    <Image src={url} alt={`Preview of ${file.name}`} className={classes.preview} fit="cover" />
  ) : null;
}

export function FileDropzoneInput({
  label,
  description,
  withAsterisk,
  kind,
  accept,
  title,
  hint,
  rejectMessage,
  value,
  onChange,
  error,
  'data-path': dataPath,
}: FileDropzoneInputProps) {
  const field = useFormField<File | null>(onChange);
  const file = (field.subscribed ? field.value : value) ?? null;
  const [rejection, setRejection] = useState<string | null>(null);

  const handleDrop = ([dropped]: File[]) => {
    setRejection(null);
    onChange?.(dropped ?? null);
  };

  const handleReject = (rejections: FileRejection[]) => {
    const tooMany = rejections.some((item) =>
      item.errors.some((rejectionError) => rejectionError.code === 'too-many-files')
    );
    setRejection(tooMany ? 'Drop one file only' : rejectMessage);
  };

  return (
    <Input.Wrapper
      label={label}
      description={description}
      withAsterisk={withAsterisk}
      error={error ?? rejection}
      labelElement="div"
      withBlockChildren
    >
      {file ? (
        <Group className={classes.result} gap="sm" wrap="nowrap">
          {kind === 'image' ? (
            <ImagePreview file={file} />
          ) : (
            <ThemeIcon variant="default" size="lg">
              <IconFile size={18} />
            </ThemeIcon>
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
            size="lg"
            aria-label={`Remove ${file.name}`}
            data-path={dataPath}
            onClick={() => onChange?.(null)}
          >
            <IconTrash size={18} color="var(--mantine-color-red-text)" />
          </ActionIcon>
        </Group>
      ) : (
        <Dropzone
          accept={accept}
          multiple={false}
          maxFiles={1}
          onDrop={handleDrop}
          onReject={handleReject}
          className={classes.dropzone}
          mod={{ invalid: !!(error ?? rejection) }}
          aria-label={`${label}: ${title}`}
          inputProps={{ 'aria-label': `Upload ${label}` }}
          data-path={dataPath}
        >
          <Stack align="center" justify="center" gap={4} className={classes.empty}>
            {kind === 'image' ? <IconPhoto size={32} /> : <IconUpload size={32} />}
            <Text size="sm">{title}</Text>
            <Text size="xs">{hint}</Text>
          </Stack>
        </Dropzone>
      )}
    </Input.Wrapper>
  );
}
