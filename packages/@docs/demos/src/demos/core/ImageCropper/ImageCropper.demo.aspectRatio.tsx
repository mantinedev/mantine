import { ImageCropper } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ImageCropper } from '@mantine/core';

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

function Demo() {
  return (
    <ImageCropper
      src={image}
      crossOrigin="anonymous"
      aspectRatio={16 / 9}
      maw={480}
      mx="auto"
      withGrid
      withControls
    />
  );
}
`;

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

function Demo() {
  return (
    <ImageCropper
      src={image}
      crossOrigin="anonymous"
      aspectRatio={16 / 9}
      maw={480}
      mx="auto"
      withGrid
      withControls
    />
  );
}

export const aspectRatio: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
