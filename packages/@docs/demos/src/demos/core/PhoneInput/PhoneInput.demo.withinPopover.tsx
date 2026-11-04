import { Button, PhoneInput, Popover } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, PhoneInput, Popover } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <PhoneInput
          label="Phone number"
          placeholder="Your phone number"
          defaultCountry="us"
          comboboxProps={{ withinPortal: false }}
          renderFlag={(country) => (
            <img
              src={\`https://hatscripts.github.io/circle-flags/flags/\${country?.iso2 ?? 'xx'}.svg\`}
              alt={country?.name ?? 'Select country'}
              style={{ width: 20, height: 20, borderRadius: 20 }}
            />
          )}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`;

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <PhoneInput
          label="Phone number"
          placeholder="Your phone number"
          defaultCountry="us"
          comboboxProps={{ withinPortal: false }}
          renderFlag={(country) => (
            <img
              src={`https://hatscripts.github.io/circle-flags/flags/${country?.iso2 ?? 'xx'}.svg`}
              alt={country?.name ?? 'Select country'}
              style={{ width: 20, height: 20, borderRadius: 20 }}
            />
          )}
        />
      </Popover.Dropdown>
    </Popover>
  );
}

export const withinPopover: MantineDemo = {
  type: 'code',
  code,
  centered: true,
  component: Demo,
};
