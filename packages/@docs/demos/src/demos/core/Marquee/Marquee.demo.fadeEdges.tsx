import { Marquee, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { MantineLogo } from '@mantinex/mantine-logo';

const code = `
import { Marquee, Stack, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Stack>
      <div>
        <Text size="sm" mb="xs">Default fade (5%)</Text>
        <Marquee>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="cyan" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">Larger fade (15%)</Text>
        <Marquee fadeEdgeSize="15%">
          <MantineLogo width={80} type="full" color="lime" />
          <MantineLogo width={80} type="full" color="yellow" />
          <MantineLogo width={80} type="full" color="orange" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">Custom fade color</Text>
        <Marquee fadeEdgeColor="var(--mantine-color-blue-light)">
          <MantineLogo width={80} type="full" color="violet" />
          <MantineLogo width={80} type="full" color="grape" />
          <MantineLogo width={80} type="full" color="pink" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">No fade</Text>
        <Marquee fadeEdges={false}>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
          <MantineLogo width={80} type="full" color="yellow" />
        </Marquee>
      </div>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <div>
        <Text size="sm" mb="xs">
          Default fade (5%)
        </Text>
        <Marquee>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="cyan" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">
          Larger fade (15%)
        </Text>
        <Marquee fadeEdgeSize="15%">
          <MantineLogo width={80} type="full" color="lime" />
          <MantineLogo width={80} type="full" color="yellow" />
          <MantineLogo width={80} type="full" color="orange" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">
          Custom fade color
        </Text>
        <Marquee fadeEdgeColor="var(--mantine-color-blue-light)">
          <MantineLogo width={80} type="full" color="violet" />
          <MantineLogo width={80} type="full" color="grape" />
          <MantineLogo width={80} type="full" color="pink" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">
          No fade
        </Text>
        <Marquee fadeEdges={false}>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
          <MantineLogo width={80} type="full" color="yellow" />
        </Marquee>
      </div>
    </Stack>
  );
}

export const fadeEdges: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
