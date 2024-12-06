import { IconHeart, IconPhoto, IconSettings } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon.Group{{props}}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto size={20} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings size={20} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart size={20} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`;

function Wrapper(props: any) {
  return (
    <ActionIcon.Group {...props}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto size={20} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings size={20} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart size={20} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}

export const group: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    {
      type: 'segmented',
      prop: 'orientation',
      data: ['horizontal', 'vertical'],
      initialValue: 'horizontal',
      libraryValue: 'horizontal',
    },
  ],
};
