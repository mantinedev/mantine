import { Marquee, MarqueeProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { MantineLogo } from '@mantinex/mantine-logo';

function Wrapper(props: Partial<MarqueeProps>) {
  return (
    <Marquee {...props} mah={200} maw={400}>
      <MantineLogo width={120} type="full" color="blue" />
      <MantineLogo width={120} type="full" color="cyan" />
      <MantineLogo width={120} type="full" color="teal" />
      <MantineLogo width={120} type="full" color="green" />
      <MantineLogo width={120} type="full" color="lime" />
      <MantineLogo width={120} type="full" color="yellow" />
      <MantineLogo width={120} type="full" color="orange" />
      <MantineLogo width={120} type="full" color="red" />
    </Marquee>
  );
}

const code = `
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee{{props}} mah={200} maw={400}>
      <MantineLogo width={120} type="full" color="blue" />
      <MantineLogo width={120} type="full" color="cyan" />
      <MantineLogo width={120} type="full" color="teal" />
      <MantineLogo width={120} type="full" color="green" />
      <MantineLogo width={120} type="full" color="lime" />
      <MantineLogo width={120} type="full" color="yellow" />
      <MantineLogo width={120} type="full" color="orange" />
      <MantineLogo width={120} type="full" color="red" />
    </Marquee>
  );
}
`;

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 400,
  controls: [
    { prop: 'reverse', type: 'boolean', initialValue: false, libraryValue: false },
    { prop: 'pauseOnHover', type: 'boolean', initialValue: false, libraryValue: false },
    {
      prop: 'orientation',
      type: 'segmented',
      data: ['horizontal', 'vertical'],
      initialValue: 'horizontal',
      libraryValue: 'horizontal',
    },
    { prop: 'repeat', type: 'number', min: 1, max: 10, initialValue: 4, libraryValue: 4 },
    {
      prop: 'duration',
      type: 'number',
      min: 5000,
      max: 100000,
      step: 1000,
      initialValue: 40000,
      libraryValue: 40000,
    },
    { prop: 'gap', type: 'size', initialValue: 'md', libraryValue: 'md' },
    { prop: 'fadeEdges', type: 'boolean', initialValue: true, libraryValue: true },
  ],
};
