import { RangeSlider, Slider, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper(props: any) {
  return (
    <Stack gap="xl">
      <Slider defaultValue={40} {...props} />
      <RangeSlider defaultValue={[20, 60]} {...props} />
    </Stack>
  );
}

const code = `
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="xl">
      <Slider defaultValue={40}{{props}} />
      <RangeSlider defaultValue={[20, 60]}{{props}} />
    </Stack>
  );
}
`;

export const variants: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 400,
  controls: [
    {
      prop: 'variant',
      type: 'select',
      data: ['default', 'filled', 'white'],
      initialValue: 'default',
      libraryValue: 'default',
    },
    { prop: 'color', type: 'color', initialValue: 'blue', libraryValue: '__none__' },
    { prop: 'size', type: 'size', initialValue: 'md', libraryValue: 'md' },
  ],
};
