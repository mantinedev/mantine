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
      cropShape="circle"
      maw={320}
      mx="auto"
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
      cropShape="circle"
      maw={320}
      mx="auto"
      withControls
    />
  );
}

export const circle: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
