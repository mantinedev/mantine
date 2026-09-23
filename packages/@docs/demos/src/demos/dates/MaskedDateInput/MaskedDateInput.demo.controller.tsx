import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { MaskedDateInput, useMaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Code, Group, Stack, Text } from '@mantine/core';
import { MaskedDateInput, useMaskedDateInput } from '@mantine/dates';

function Demo() {
  const controller = useMaskedDateInput();

  return (
    <Stack>
      <MaskedDateInput label="Date of birth" controller={controller} withDropdown={false} />

      <Text size="sm">
        Value: <Code>{controller.getValue() || 'null'}</Code>, day: <Code>{String(controller.getDay())}</Code>,
        month: <Code>{String(controller.getMonth())}</Code>, year: <Code>{String(controller.getYear())}</Code>
      </Text>

      <Group>
        <Button variant="default" onClick={() => controller.setValue('1990-06-15')}>
          Set 1990-06-15
        </Button>
        <Button variant="default" onClick={() => controller.focus('year')}>
          Focus year
        </Button>
        <Button variant="default" onClick={controller.clear} disabled={!controller.hasValue()}>
          Clear
        </Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const controller = useMaskedDateInput();

  return (
    <Stack>
      <MaskedDateInput label="Date of birth" controller={controller} withDropdown={false} />

      <Text size="sm">
        Value: <Code>{controller.getValue() || 'null'}</Code>, day:{' '}
        <Code>{String(controller.getDay())}</Code>, month:{' '}
        <Code>{String(controller.getMonth())}</Code>, year:{' '}
        <Code>{String(controller.getYear())}</Code>
      </Text>

      <Group>
        <Button variant="default" onClick={() => controller.setValue('1990-06-15')}>
          Set 1990-06-15
        </Button>
        <Button variant="default" onClick={() => controller.focus('year')}>
          Focus year
        </Button>
        <Button variant="default" onClick={controller.clear} disabled={!controller.hasValue()}>
          Clear
        </Button>
      </Group>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  maxWidth: 400,
  centered: true,
};
