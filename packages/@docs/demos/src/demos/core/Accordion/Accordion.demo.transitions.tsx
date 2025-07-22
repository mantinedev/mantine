import { MantineDemo } from '@mantinex/demo';
import { BaseDemo } from './_base';

const getCode = (prop: string) => `
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion ${prop}>
      {/* ...content */}
    </Accordion>
  )
}
`;

export const disableTransitions: MantineDemo = {
  type: 'code',
  component: () => <BaseDemo transitionDuration={0} />,
  code: getCode('transitionDuration={0}'),
  maxWidth: 380,
  centered: true,
};

export const customTransitions: MantineDemo = {
  type: 'code',
  component: () => <BaseDemo transitionDuration={1000} />,
  code: getCode('transitionDuration={1000}'),
  maxWidth: 380,
  centered: true,
};
