import { PhoneInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { inputControls } from '../../../shared';

const code = `
import { PhoneInput } from '@mantine/core';

function Demo() {
  return (
    <PhoneInput
      {{props}}
      placeholder="Your phone number"
      defaultCountry="us"
      renderFlag={(country) => (
        <img
          src={\`https://hatscripts.github.io/circle-flags/flags/\${country?.iso2 ?? 'xx'}.svg\`}
          alt={country?.name ?? 'Select country'}
          style={{ width: 20, height: 20, borderRadius: 20 }}
        />
      )}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <PhoneInput
      {...props}
      placeholder="Your phone number"
      defaultCountry="us"
      renderFlag={(country: any) => (
        <img
          src={`https://hatscripts.github.io/circle-flags/flags/${country?.iso2 ?? 'xx'}.svg`}
          alt={country?.name ?? 'Select country'}
          style={{ width: 20, height: 20, borderRadius: 20 }}
        />
      )}
    />
  );
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 340,
  controls: inputControls,
};
