import { MonthView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, regularEvents } from './_data';

const code = `
import { MonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <MonthView date={new Date()} events={events} mode="static" />;
}
`;

function Demo() {
  return <MonthView date={new Date()} events={regularEvents} mode="static" />;
}

export const staticMode: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
