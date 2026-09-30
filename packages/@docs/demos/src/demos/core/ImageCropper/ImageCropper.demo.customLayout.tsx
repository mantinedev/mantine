import { ImageCropper, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ImageCropper, Stack } from '@mantine/core';

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

function Demo() {
  return (
    <ImageCropper src={image} crossOrigin="anonymous" aspectRatio={1} withGrid maw={320} mx="auto">
      <Stack gap="xs">
        <ImageCropper.Controls />
        <ImageCropper.Viewport>
          <ImageCropper.Image />
        </ImageCropper.Viewport>
      </Stack>
    </ImageCropper>
  );
}
`;

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

function Demo() {
  return (
    <ImageCropper src={image} crossOrigin="anonymous" aspectRatio={1} withGrid maw={320} mx="auto">
      <Stack gap="xs">
        <ImageCropper.Controls />
        <ImageCropper.Viewport>
          <ImageCropper.Image />
        </ImageCropper.Viewport>
      </Stack>
    </ImageCropper>
  );
}

export const customLayout: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
