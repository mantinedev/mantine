import { Title } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Title } from '@mantine/core';

function Demo() {
  return (
    <Title order={3}{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Title order={3} {...props}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Title>
  );
}

export const textWrap: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'segmented',
      prop: 'textWrap',
      initialValue: 'wrap',
      libraryValue: '__',
      data: [
        { value: 'wrap', label: 'wrap' },
        { value: 'balance', label: 'balance' },
      ],
    },
  ],
};
