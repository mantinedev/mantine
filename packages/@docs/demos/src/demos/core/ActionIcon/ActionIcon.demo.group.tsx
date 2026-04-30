import { GearSixIcon, HeartIcon, ImageIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon } from '@mantine/core';
import { ImageIcon, GearSixIcon, HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon.Group{{props}}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <ImageIcon size={20} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <GearSixIcon size={20} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <HeartIcon size={20} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`;

function Wrapper(props: any) {
  return (
    <ActionIcon.Group {...props}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <ImageIcon size={20} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <GearSixIcon size={20} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <HeartIcon size={20} />
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
