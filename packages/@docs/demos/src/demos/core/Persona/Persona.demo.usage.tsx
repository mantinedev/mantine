import { Persona } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const IMAGE =
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png';

function Wrapper(props: any) {
  return (
    <Persona
      name="Vitaly Rtishchev"
      secondaryText="Creator of Mantine"
      tertiaryText="Local time 4:32 PM"
      avatar={{ src: IMAGE }}
      {...props}
    />
  );
}

const code = `
import { Persona } from '@mantine/core';

function Demo() {
  return (
    <Persona
      name="Vitaly Rtishchev"
      secondaryText="Creator of Mantine"
      tertiaryText="Local time 4:32 PM"
      avatar={{ src: image }}
      {{props}}
    />
  );
}
`;

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 320,
  controls: [
    { prop: 'size', type: 'size', libraryValue: 'md', initialValue: 'md' },
    {
      prop: 'textPosition',
      type: 'segmented',
      data: [
        { value: 'after', label: 'After' },
        { value: 'before', label: 'Before' },
        { value: 'below', label: 'Below' },
      ],
      initialValue: 'after',
      libraryValue: 'after',
    },
    {
      prop: 'textAlignment',
      type: 'segmented',
      data: [
        { value: 'start', label: 'Start' },
        { value: 'center', label: 'Center' },
      ],
      initialValue: 'start',
      libraryValue: 'start',
    },
    {
      prop: 'presence',
      type: 'select',
      data: [
        'none',
        'available',
        'away',
        'busy',
        'do-not-disturb',
        'offline',
        'out-of-office',
        'blocked',
        'unknown',
      ],
      initialValue: 'available',
      libraryValue: 'none',
    },
  ],
};
