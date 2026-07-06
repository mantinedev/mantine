import { CompareSlider, Image } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const image = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png';

const code = `
import { CompareSlider, Image } from '@mantine/core';

function Demo() {
  return (
    <CompareSlider
      aria-label="Compare images"
      orientation="vertical"
      h={{ base: 192, sm: 320 }}
      w={{ base: 300, sm: 500 }}
      before={<Image src="/before.png" alt="Before" h="100%" w="100%" fit="cover" />}
      after={
        <Image
          src="/after.png"
          alt="After"
          h="100%"
          w="100%"
          fit="cover"
          style={{ filter: 'grayscale(1)' }}
        />
      }
    />
  );
}
`;

function Demo() {
  return (
    <CompareSlider
      aria-label="Compare images"
      orientation="vertical"
      h={{ base: 192, sm: 320 }}
      w={{ base: 300, sm: 500 }}
      before={<Image src={image} alt="Before" h="100%" w="100%" fit="cover" />}
      after={
        <Image
          src={image}
          alt="After"
          h="100%"
          w="100%"
          fit="cover"
          style={{ filter: 'grayscale(1)' }}
        />
      }
    />
  );
}

export const vertical: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
