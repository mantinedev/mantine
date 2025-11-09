import { useState } from 'react';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { TimePicker } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { TimePicker } from '@mantine/dates';

function Demo() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState('');

  return (
    <TimePicker
      withDropdown
      rightSection={
        <ActionIcon onClick={() => setDropdownOpened(true)} variant="default">
          <IconClock size={18} stroke={1.5} />
        </ActionIcon>
      }
      value={value}
      onChange={(val) => {
        setValue(val);
        if (value === '') {
          setDropdownOpened(false);
        }
      }}
      popoverProps={{
        opened: dropdownOpened,
        onChange: (_opened) => !_opened && setDropdownOpened(false),
      }}
    />
  );
}
`;

function Demo() {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [value, setValue] = useState('');

  return (
    <TimePicker
      withDropdown
      rightSection={
        <ActionIcon onClick={() => setDropdownOpened(true)} variant="default">
          <IconClock size={18} stroke={1.5} />
        </ActionIcon>
      }
      value={value}
      onChange={(val) => {
        setValue(val);
        if (value === '') {
          setDropdownOpened(false);
        }
      }}
      popoverProps={{
        opened: dropdownOpened,
        onChange: (_opened) => !_opened && setDropdownOpened(false),
      }}
    />
  );
}

export const controlledDropdown: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
