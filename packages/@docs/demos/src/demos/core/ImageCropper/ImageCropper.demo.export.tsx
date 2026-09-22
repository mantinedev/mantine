import { useState } from 'react';
import { Button, Group, ImageCropper, Stack, Text, useImageCropper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, ImageCropper, Stack, Text, useImageCropper } from '@mantine/core';

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

function Demo() {
  const imageCropper = useImageCropper({ cropShape: 'circle' });
  const [preview, setPreview] = useState<string | null>(null);

  const handleExport = async () => {
    const dataUrl = (await imageCropper.getCroppedImage({ output: 'dataURL' })) as string;
    setPreview(dataUrl);
  };

  return (
    <Group align="flex-start" justify="center">
      <Stack w={300}>
        <ImageCropper
          src={image}
          crossOrigin="anonymous"
          controller={imageCropper}
          withControls
        />
        <Button onClick={handleExport}>Crop image</Button>
      </Stack>

      <Stack align="center" gap="xs">
        <Text size="sm" c="dimmed">Preview</Text>
        {preview ? (
          <img src={preview} alt="Cropped result" width={140} height={140} style={{ borderRadius: '50%' }} />
        ) : (
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              border: '1px dashed var(--mantine-color-gray-4)',
            }}
          />
        )}
      </Stack>
    </Group>
  );
}
`;

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

function Demo() {
  const imageCropper = useImageCropper({ cropShape: 'circle' });
  const [preview, setPreview] = useState<string | null>(null);

  const handleExport = async () => {
    const dataUrl = (await imageCropper.getCroppedImage({ output: 'dataURL' })) as string;
    setPreview(dataUrl);
  };

  return (
    <Group align="flex-start" justify="center">
      <Stack w={300}>
        <ImageCropper src={image} crossOrigin="anonymous" controller={imageCropper} withControls />
        <Button onClick={handleExport}>Crop image</Button>
      </Stack>

      <Stack align="center" gap="xs">
        <Text size="sm" c="dimmed">
          Preview
        </Text>
        {preview ? (
          <img
            src={preview}
            alt="Cropped result"
            width={140}
            height={140}
            style={{ borderRadius: '50%' }}
          />
        ) : (
          <div
            style={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              border: '1px dashed var(--mantine-color-gray-4)',
            }}
          />
        )}
      </Stack>
    </Group>
  );
}

export const exportImage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
