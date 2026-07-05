import { Editable, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Editable, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack maw={360}>
      <div>
        <Text size="sm" fw={500}>submitMode="both" (default)</Text>
        <Editable defaultValue="Enter or blur commits" activationMode="click" submitMode="both" />
      </div>
      <div>
        <Text size="sm" fw={500}>submitMode="enter"</Text>
        <Editable defaultValue="Only Enter commits" activationMode="click" submitMode="enter" />
      </div>
      <div>
        <Text size="sm" fw={500}>submitMode="blur"</Text>
        <Editable defaultValue="Only blur commits" activationMode="click" submitMode="blur" />
      </div>
    </Stack>
  );
}
`;

function Demo() {
  return (
    <Stack maw={360}>
      <div>
        <Text size="sm" fw={500}>
          submitMode="both" (default)
        </Text>
        <Editable defaultValue="Enter or blur commits" activationMode="click" submitMode="both" />
      </div>
      <div>
        <Text size="sm" fw={500}>
          submitMode="enter"
        </Text>
        <Editable defaultValue="Only Enter commits" activationMode="click" submitMode="enter" />
      </div>
      <div>
        <Text size="sm" fw={500}>
          submitMode="blur"
        </Text>
        <Editable defaultValue="Only blur commits" activationMode="click" submitMode="blur" />
      </div>
    </Stack>
  );
}

export const submitMode: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
