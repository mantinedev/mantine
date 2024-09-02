import { Box } from '../../core';
import { Avatar } from '../Avatar';
import { Group } from '../Group';
import { Text } from '../Text';
import { Indicator } from './Indicator';

export default { title: 'Indicator' };

const positions = ['top', 'middle', 'bottom'] as const;
const placements = ['start', 'center', 'end'] as const;

export const Positions = () => {
  const items = positions.map((position) => {
    const _items = placements.map((placement) => (
      <Indicator position={`${position}-${placement}`} key={placement}>
        <Avatar radius={0} />
      </Indicator>
    ));

    return (
      <Group mt="md" key={position}>
        {_items}
      </Group>
    );
  });

  return <Box p={40}>{items}</Box>;
};

export const Inline = () => (
  <Box p={40}>
    <Indicator inline withBorder>
      <Avatar radius={0} />
    </Indicator>
  </Box>
);

export const AutoContrast = () => (
  <Box p={40}>
    <Indicator inline autoContrast withBorder color="lime.4" label="New" size={20}>
      <Avatar
        radius="xl"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
      />
    </Indicator>
  </Box>
);

export const WithRadius = () => (
  <Box p={40}>
    <Indicator inline offset={12} size={20} position="bottom-end" withBorder color="red">
      <Avatar
        radius={50000}
        size="xl"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
      />
    </Indicator>
  </Box>
);

export const WithLabel = () => (
  <Box p={40}>
    <Indicator inline label="New" size={18}>
      <Avatar radius={0} />
    </Indicator>
  </Box>
);

export const Processing = () => (
  <Box p={40}>
    <Group justify="center">
      <Box>
        <Text>Enabled</Text>
        <Indicator inline processing size={12}>
          <Avatar
            size="lg"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          />
        </Indicator>
      </Box>

      <Box>
        <Text>Disabled</Text>
        <Indicator inline processing disabled size={12}>
          <Avatar
            size="lg"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          />
        </Indicator>
      </Box>
    </Group>
  </Box>
);
