import { useState } from 'react';
import { Code, PhoneInput, PhoneInputCountryData } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Code, PhoneInput, PhoneInputCountryData } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('+1');
  const [country, setCountry] = useState<PhoneInputCountryData | null>(null);
  const [formattedValue, setFormattedValue] = useState('');

  return (
    <>
      <PhoneInput
        label="Phone number"
        placeholder="Your phone number"
        defaultCountry="us"
        value={value}
        onChange={(rawValue, details) => {
          setValue(rawValue);
          setFormattedValue(details.formattedValue);
          setCountry(details.country);
        }}
        renderFlag={(c) => (
          <img
            src={\`https://hatscripts.github.io/circle-flags/flags/\${c?.iso2 ?? 'xx'}.svg\`}
            alt={c?.name ?? 'Select country'}
            style={{ width: 20, height: 20, borderRadius: 20 }}
          />
        )}
      />
      <Code block mt="md">
        {[
          \`Raw value: \${value}\`,
          \`Formatted: \${formattedValue}\`,
          \`Country: \${country?.iso2 ?? '–'}\`,
        ].join('\\n')}
      </Code>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useState('+1');
  const [country, setCountry] = useState<PhoneInputCountryData | null>(null);
  const [formattedValue, setFormattedValue] = useState('');

  return (
    <>
      <PhoneInput
        label="Phone number"
        placeholder="Your phone number"
        defaultCountry="us"
        value={value}
        onChange={(rawValue, details) => {
          setValue(rawValue);
          setFormattedValue(details.formattedValue);
          setCountry(details.country);
        }}
        renderFlag={(c) => (
          <img
            src={`https://hatscripts.github.io/circle-flags/flags/${c?.iso2 ?? 'xx'}.svg`}
            alt={c?.name ?? 'Select country'}
            style={{ width: 20, height: 20, borderRadius: 20 }}
          />
        )}
      />
      <Code block mt="md">
        {[
          `Raw value: ${value}`,
          `Formatted: ${formattedValue}`,
          `Country: ${country?.iso2 ?? '–'}`,
        ].join('\n')}
      </Code>
    </>
  );
}

export const controlled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
