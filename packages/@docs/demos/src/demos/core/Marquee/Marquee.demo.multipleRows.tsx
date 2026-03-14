import { Marquee, Stack } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { MantineLogo } from '@mantinex/mantine-logo';

const code = `
import { Marquee, Stack } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Stack>
      <Marquee>
        <MantineLogo height={20} type="full" color="blue" />
        <MantineLogo height={20} type="full" color="cyan" />
        <MantineLogo height={20} type="full" color="teal" />
        <MantineLogo height={20} type="full" color="green" />
      </Marquee>
      <Marquee reverse>
        <MantineLogo height={20} type="full" color="lime" />
        <MantineLogo height={20} type="full" color="yellow" />
        <MantineLogo height={20} type="full" color="orange" />
        <MantineLogo height={20} type="full" color="red" />
      </Marquee>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack>
      <Marquee>
        <MantineLogo height={20} type="full" color="blue" />
        <MantineLogo height={20} type="full" color="cyan" />
        <MantineLogo height={20} type="full" color="teal" />
        <MantineLogo height={20} type="full" color="green" />
      </Marquee>
      <Marquee reverse>
        <MantineLogo height={20} type="full" color="lime" />
        <MantineLogo height={20} type="full" color="yellow" />
        <MantineLogo height={20} type="full" color="orange" />
        <MantineLogo height={20} type="full" color="red" />
      </Marquee>
    </Stack>
  );
}

export const multipleRows: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: '100%',
};
