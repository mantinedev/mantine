import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

const code = (props: any) => `
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  const icon = <IconPhoto size={14} />;
  return (
    <>
      <Button justify="${props.justify}" fullWidth leftSection={icon} rightSection={icon} variant="default">
        Button label
      </Button>

      <Button justify="${props.justify}" fullWidth leftSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button justify="${props.justify}" fullWidth rightSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button
        justify="${props.justify}"
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
      >
        Button label
      </Button>
    </>
  );
}
`;

function Wrapper(props: any) {
  const icon = <IconPhoto size={14} />;
  return (
    <>
      <Button fullWidth leftSection={icon} rightSection={icon} variant="default" {...props}>
        Button label
      </Button>

      <Button fullWidth leftSection={icon} variant="default" mt="md" {...props}>
        Button label
      </Button>

      <Button fullWidth rightSection={icon} variant="default" mt="md" {...props}>
        Button label
      </Button>

      <Button
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
        {...props}
      >
        Button label
      </Button>
    </>
  );
}

export const sectionsJustify: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  controls: [
    {
      type: 'segmented',
      prop: 'justify',
      data: ['center', 'space-between'],
      initialValue: 'center',
      libraryValue: '__none__',
    },
  ],
};
