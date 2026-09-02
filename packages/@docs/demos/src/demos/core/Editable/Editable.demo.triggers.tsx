import { CheckIcon, PencilSimpleIcon, XIcon } from '@phosphor-icons/react';
import { ActionIcon, Editable, Group } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { ActionIcon, Editable, Group } from '@mantine/core';
import { CheckIcon, PencilSimpleIcon, XIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Editable defaultValue="Project name" activationMode="none">
      <Group gap="xs">
        <Editable.Preview />
        <Editable.Input />
        <Editable.Control>
          <Editable.EditTrigger aria-label="Edit">
            <ActionIcon component="span" variant="subtle">
              <PencilSimpleIcon size={16} />
            </ActionIcon>
          </Editable.EditTrigger>
          <Editable.SubmitTrigger aria-label="Save">
            <ActionIcon component="span" variant="subtle" color="green">
              <CheckIcon size={16} />
            </ActionIcon>
          </Editable.SubmitTrigger>
          <Editable.CancelTrigger aria-label="Cancel">
            <ActionIcon component="span" variant="subtle" color="red">
              <XIcon size={16} />
            </ActionIcon>
          </Editable.CancelTrigger>
        </Editable.Control>
      </Group>
    </Editable>
  );
}
`;

function Demo() {
  return (
    <Editable defaultValue="Project name" activationMode="none">
      <Group gap="xs">
        <Editable.Preview />
        <Editable.Input />
        <Editable.Control>
          <Editable.EditTrigger aria-label="Edit">
            <ActionIcon component="span" variant="subtle">
              <PencilSimpleIcon size={16} />
            </ActionIcon>
          </Editable.EditTrigger>
          <Editable.SubmitTrigger aria-label="Save">
            <ActionIcon component="span" variant="subtle" color="green">
              <CheckIcon size={16} />
            </ActionIcon>
          </Editable.SubmitTrigger>
          <Editable.CancelTrigger aria-label="Cancel">
            <ActionIcon component="span" variant="subtle" color="red">
              <XIcon size={16} />
            </ActionIcon>
          </Editable.CancelTrigger>
        </Editable.Control>
      </Group>
    </Editable>
  );
}

export const triggers: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
