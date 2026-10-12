import { useEffect, useRef, useState } from 'react';
import { ImageIcon, UploadSimpleIcon, XIcon } from '@phosphor-icons/react';
import { Button, Group, Input, Progress, Stack, Text, TextInput } from '@mantine/core';
import { Dropzone, FileRejection, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { FilesList, formatSize } from './FilesList';

interface UploadValues {
  title: string;
  files: File[];
}

const MAX_FILE_SIZE = 5 * 1024 ** 2;
const MAX_TOTAL_SIZE = 10 * 1024 ** 2;
const UPLOAD_DURATION = 2000;
const UPLOAD_TICK = 100;

function pluralizeFiles(count: number) {
  return `${count} ${count === 1 ? 'file' : 'files'}`;
}

function totalSize(files: File[]) {
  return files.reduce((sum, file) => sum + file.size, 0);
}

function showRejectedFiles(rejections: FileRejection[]) {
  notifications.show({
    color: 'red',
    title: `${pluralizeFiles(rejections.length)} rejected`,
    message: `${rejections.map((rejection) => rejection.file.name).join(', ')}: only images up to 5 MB are accepted`,
  });
}

export function FileUpload() {
  const [progress, setProgress] = useState(0);
  const uploadInterval = useRef<number>(undefined);

  useEffect(() => () => window.clearInterval(uploadInterval.current), []);

  const form = useForm<UploadValues>({
    initialValues: {
      title: '',
      files: [],
    },
    validate: {
      title: isNotEmpty('Title is required'),
      files: (value) => {
        if (value.length === 0) {
          return 'Add at least one image';
        }

        return totalSize(value) > MAX_TOTAL_SIZE ? 'Total size must not exceed 10 MB' : null;
      },
    },
  });

  const files = form.useWatchValue('files');

  const handleSubmit = (values: UploadValues) => {
    setProgress(0);

    // form.submitting stays true until the returned promise settles
    return new Promise<void>((resolve) => {
      let elapsed = 0;
      uploadInterval.current = window.setInterval(() => {
        elapsed += UPLOAD_TICK;
        setProgress(Math.min(100, (elapsed / UPLOAD_DURATION) * 100));

        if (elapsed >= UPLOAD_DURATION) {
          window.clearInterval(uploadInterval.current);
          notifications.show({
            title: 'Upload complete',
            message: `${pluralizeFiles(values.files.length)} uploaded to "${values.title}"`,
          });
          form.reset();
          resolve();
        }
      }, UPLOAD_TICK);
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Album title"
          placeholder="Summer trip"
          withAsterisk
          {...form.getInputProps('title')}
        />

        <Input.Wrapper
          size="md"
          label="Images"
          description="Up to 5 MB per file, 10 MB in total"
          withAsterisk
          error={form.errors.files}
        >
          <Dropzone
            mt={5}
            accept={IMAGE_MIME_TYPE}
            maxSize={MAX_FILE_SIZE}
            disabled={form.submitting}
            onDrop={(dropped) =>
              form.setFieldValue('files', [...form.getValues().files, ...dropped])
            }
            onReject={showRejectedFiles}
          >
            <Group justify="center" gap="md" mih={100} style={{ pointerEvents: 'none' }}>
              <Dropzone.Accept>
                <UploadSimpleIcon size={40} color="var(--mantine-color-blue-6)" />
              </Dropzone.Accept>

              <Dropzone.Reject>
                <XIcon size={40} color="var(--mantine-color-red-6)" />
              </Dropzone.Reject>

              <Dropzone.Idle>
                <ImageIcon size={40} />
              </Dropzone.Idle>

              <div>
                <Text size="sm">Drag images here or click to select files</Text>

                <Text size="sm">
                  {files.length === 0
                    ? 'No files selected'
                    : `${pluralizeFiles(files.length)}, ${formatSize(totalSize(files))}`}
                </Text>
              </div>
            </Group>
          </Dropzone>
        </Input.Wrapper>

        <FilesList
          files={files}
          disabled={form.submitting}
          onRemove={(index) => form.removeListItem('files', index)}
        />

        {form.submitting && <Progress value={progress} animated />}

        <Group justify="flex-end">
          <Button size="md" type="submit" loading={form.submitting}>
            Upload
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
