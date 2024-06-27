import { Box } from '../../core';
import { Center } from '../Center';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { Avatar } from './Avatar';

export default { title: 'Avatar' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Avatar>AN</Avatar>
      <Avatar src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png">
        AN
      </Avatar>
    </div>
  );
}

export function InitialsColor() {
  const names = [
    'John Doe',
    'Jane Mol',
    'Alex Lump',
    'Sarah Condor',
    'Mike Johnson',
    'Kate Kok',
    'Tom Smith',
  ];

  const items = names.map((name) => <Avatar key={name} name={name} color="initials" />);
  return <div style={{ padding: 40, display: 'flex', gap: 10 }}>{items}</div>;
}

export function AutoContrast() {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Avatar key={index} variant="filled" color={`red.${index}`} autoContrast>
        $$
      </Avatar>
    ));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        padding: 40,
      }}
    >
      {buttons}
    </div>
  );
}

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Avatar component="a" href="https://mantine.dev">
        AN
      </Avatar>
      <Avatar component="button" type="button">
        BU
      </Avatar>
    </div>
  );
}

export function AvatarGroup() {
  return (
    <div style={{ padding: 40 }}>
      <Avatar.Group>
        <Tooltip label="Hello">
          <Avatar radius="xl" color="blue">
            AN
          </Avatar>
        </Tooltip>
        <Tooltip label="Hello">
          <Avatar radius="xl" color="red">
            BU
          </Avatar>
        </Tooltip>
        <Avatar radius="xl">+3</Avatar>
      </Avatar.Group>
    </div>
  );
}

export function Variants() {
  return (
    <div style={{ padding: '40px' }}>
      <Stack>
        <Group>
          {['filled', 'light', 'white', 'default', 'gradient', 'outline'].map((variant) => (
            <Avatar key={variant} variant={variant} color="blue" radius="md">
              ZH
            </Avatar>
          ))}
        </Group>

        <Group>
          {['filled', 'light', 'white', 'default', 'gradient', 'outline'].map((variant) => (
            <Avatar key={variant} variant={variant} color="blue" radius="xl" />
          ))}
        </Group>

        <Group>
          {['filled', 'light', 'white', 'default', 'gradient', 'outline'].map((variant) => (
            <Avatar
              key={variant}
              variant={variant}
              color="blue"
              radius="xl"
              src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
            />
          ))}
        </Group>
      </Stack>
    </div>
  );
}

export function Gradient() {
  return (
    <div style={{ padding: '40px' }}>
      <Group>
        <Box>
          <Text>Default</Text>
          <Center>
            <Avatar variant="gradient" radius="md">
              ZH
            </Avatar>
          </Center>
        </Box>

        <Box>
          <Text>Specific</Text>
          <Center>
            <Avatar variant="gradient" gradient={{ from: 'orange', to: 'red' }} radius="md">
              ZH
            </Avatar>
          </Center>
        </Box>
      </Group>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Group>
        <Avatar
          unstyled
          src="https://avatars.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
        />
        <Avatar unstyled>MX</Avatar>
      </Group>
    </div>
  );
}
