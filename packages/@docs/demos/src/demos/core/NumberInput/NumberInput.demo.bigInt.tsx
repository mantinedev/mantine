import { useState } from 'react';
import { NumberInput } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { NumberInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<bigint | string>(BigInt('12345678901234567890'));

  return (
    <NumberInput
      label="BigInt value"
      description="BigInt mode is inferred from defaultValue/value"
      value={value}
      onChange={setValue}
      step={BigInt(10)}
      min={BigInt(0)}
      thousandSeparator=","
      prefix="$"
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<bigint | string>(BigInt('12345678901234567890'));

  return (
    <NumberInput
      label="BigInt value"
      description="BigInt mode is inferred from defaultValue/value"
      value={value}
      onChange={setValue}
      step={BigInt(10)}
      min={BigInt(0)}
      thousandSeparator=","
      prefix="$"
    />
  );
}

export const bigInt: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 420,
};
