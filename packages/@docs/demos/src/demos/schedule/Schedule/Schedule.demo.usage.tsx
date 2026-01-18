import { Schedule } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, events } from './_data';

const code = `
import { Schedule } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <Schedule events={events} />;
}
`;

function Demo() {
  return <Schedule events={events} />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
