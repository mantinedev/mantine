import { PhoneInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { PhoneInputStylesApi } from '@docs/styles-api';

const code = `
import { PhoneInput } from '@mantine/core';

function Demo() {
  return (
    <PhoneInput
      {{props}}
      label="Phone number"
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

function Demo(props: any) {
  return (
    <PhoneInput
      {...props}
      dropdownOpened
      label="Phone number"
      placeholder="Your phone number"
      defaultCountry="us"
      onlyCountries={['us', 'gb', 'de', 'fr', 'ca']}
      preferredCountries={['us', 'gb']}
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

export const stylesApi: MantineDemo = {
  type: 'styles-api',
  data: PhoneInputStylesApi,
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
