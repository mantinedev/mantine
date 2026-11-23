import { PhoneInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PhoneInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PhoneInput
        label="Boolean error"
        placeholder="Your phone number"
        defaultCountry="us"
        error
        renderFlag={(country) => (
          <img
            src={\`https://hatscripts.github.io/circle-flags/flags/\${country?.iso2 ?? 'xx'}.svg\`}
            alt={country?.name ?? 'Select country'}
            style={{ width: 20, height: 20, borderRadius: 20 }}
          />
        )}
      />
      <PhoneInput
        mt="md"
        label="With error message"
        placeholder="Your phone number"
        defaultCountry="us"
        error="Invalid phone number"
        renderFlag={(country) => (
          <img
            src={\`https://hatscripts.github.io/circle-flags/flags/\${country?.iso2 ?? 'xx'}.svg\`}
            alt={country?.name ?? 'Select country'}
            style={{ width: 20, height: 20, borderRadius: 20 }}
          />
        )}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <PhoneInput
        label="Boolean error"
        placeholder="Your phone number"
        defaultCountry="us"
        error
        renderFlag={(country) => (
          <img
            src={`https://hatscripts.github.io/circle-flags/flags/${country?.iso2 ?? 'xx'}.svg`}
            alt={country?.name ?? 'Select country'}
            style={{ width: 20, height: 20, borderRadius: 20 }}
          />
        )}
      />
      <PhoneInput
        mt="md"
        label="With error message"
        placeholder="Your phone number"
        defaultCountry="us"
        error="Invalid phone number"
        renderFlag={(country) => (
          <img
            src={`https://hatscripts.github.io/circle-flags/flags/${country?.iso2 ?? 'xx'}.svg`}
            alt={country?.name ?? 'Select country'}
            style={{ width: 20, height: 20, borderRadius: 20 }}
          />
        )}
      />
    </>
  );
}

export const error: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
