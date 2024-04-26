import { Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = (props: any) => `
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text fz="${props.fontSize}" lh="${props.lineHeight}">
      Paras is an orange, insectoid Pokémon that resembles the nymph stage of a cicada. Its ovoid
      body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest
      and has sharp claws at the tips. There are five specks on its forehead and three teeth on
      either side of its mouth. It has circular eyes with large pseudopupils.
    </Text>
  );
}
`;

function Wrapper(props: any) {
  return (
    <Text fz={props.fontSize} lh={props.lineHeight}>
      Paras is an orange, insectoid Pokémon that resembles the nymph stage of a cicada. Its ovoid
      body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest
      and has sharp claws at the tips. There are five specks on its forehead and three teeth on
      either side of its mouth. It has circular eyes with large pseudopupils.
    </Text>
  );
}

export const fontSizeConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: 'size', prop: 'fontSize', initialValue: 'md', libraryValue: '__none__' },
    { type: 'size', prop: 'lineHeight', initialValue: 'md', libraryValue: '__none__' },
  ],
};
