import { PhoneInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { PhoneInput } from '@mantine/core';

function getEmojiFlag(iso2: string) {
  return iso2
    .toUpperCase()
    .split('')
    .map((char) => String.fromCodePoint(0x1f1e6 + char.charCodeAt(0) - 65))
    .join('');
}

function Demo() {
  return (
    <PhoneInput
      label="Phone number"
      placeholder="Your phone number"
      defaultCountry="us"
      renderFlag={(country) => (
        <span style={{ fontSize: 20, lineHeight: 1 }}>
          {country ? getEmojiFlag(country.iso2) : '🌐'}
        </span>
      )}
    />
  );
}
`;

function getEmojiFlag(iso2: string) {
  return iso2
    .toUpperCase()
    .split('')
    .map((char) => String.fromCodePoint(0x1f1e6 + char.charCodeAt(0) - 65))
    .join('');
}

function Demo() {
  return (
    <PhoneInput
      label="Phone number"
      placeholder="Your phone number"
      defaultCountry="us"
      renderFlag={(country) => (
        <span style={{ fontSize: 20, lineHeight: 1 }}>
          {country ? getEmojiFlag(country.iso2) : '🌐'}
        </span>
      )}
    />
  );
}

export const emojiFlag: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};
