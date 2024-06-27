import { MantineDemo } from '@mantinex/demo';
import { BaseDemo } from './_base';

const code = `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`;

function Demo() {
  return <BaseDemo unstyled />;
}

export const unstyled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
