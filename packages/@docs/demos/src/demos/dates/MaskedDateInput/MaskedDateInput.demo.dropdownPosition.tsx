import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return (
    <MaskedDateInput
      label="Date of birth"
      popoverProps={{
        position: 'top-start',
        middlewares: { flip: false, shift: false, size: false },
      }}
    />
  );
}
`;

function Demo() {
  return (
    <MaskedDateInput
      label="Date of birth"
      popoverProps={{
        position: 'top-start',
        middlewares: { flip: false, shift: false, size: false },
      }}
    />
  );
}

export const dropdownPosition: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
