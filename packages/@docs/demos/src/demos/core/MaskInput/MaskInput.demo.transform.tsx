import { MaskInput, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskInput, Text } from '@mantine/core';
import { formatMask, isMaskComplete } from '@mantine/hooks';

function Demo() {
  return (
    <>
      <MaskInput
        label="Promo code"
        placeholder="AAA-9999"
        mask="AAA-9999"
        transform={(char) => char.toUpperCase()}
        slotChar="XXX-0000"
      />
      <Text size="sm" mt="sm" c="dimmed">
        Type lowercase letters – they will be auto-uppercased
      </Text>
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <MaskInput
        label="Promo code"
        placeholder="AAA-9999"
        mask="AAA-9999"
        transform={(char) => char.toUpperCase()}
        slotChar="XXX-0000"
      />
      <Text size="sm" mt="sm" c="dimmed">
        Type lowercase letters – they will be auto-uppercased
      </Text>
    </>
  );
}

export const transform: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};
