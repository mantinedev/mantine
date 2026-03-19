import { ResourcesDayView } from '@mantine/schedule';
import { MantineDemo } from '@mantinex/demo';
import { dataCode, resourceEvents, resources } from './_data';

const code = `
import { ResourcesDayView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  return (
    <ResourcesDayView
      date={new Date()}
      resources={resources}
      events={events}
      withCurrentTimeIndicator
      withCurrentTimeBubble={false}
    />
  );
}
`;

function Demo() {
  return (
    <ResourcesDayView
      date={new Date()}
      resources={resources}
      events={resourceEvents}
      withCurrentTimeIndicator
      withCurrentTimeBubble={false}
    />
  );
}

export const currentTimeIndicator: MantineDemo = {
  defaultExpanded: false,
  type: 'code',
  component: Demo,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: dataCode, language: 'tsx', fileName: 'data.ts' },
  ],
};
