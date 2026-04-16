import { MaskedDateInput } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { MaskedDateInput } from '@mantine/dates';

function Demo() {
  return (
    <MaskedDateInput
      label="Date and time"
      withTime
      format="12h"
      amPmLabels={{ am: 'पू', pm: 'अ' }}
    />
  );
}
`;

function Demo() {
  return (
    <MaskedDateInput
      label="Date and time"
      withTime
      format="12h"
      amPmLabels={{ am: 'पू', pm: 'अ' }}
    />
  );
}

export const amPmLabels: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
};
