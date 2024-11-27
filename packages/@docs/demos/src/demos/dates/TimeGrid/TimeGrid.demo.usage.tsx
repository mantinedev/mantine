import { getTimeRange, TimeGrid } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { getTimeRange, TimeGrid } from '@mantine/dates';


function Demo() {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '10:00', endTime: '21:00', interval: '01:00' })}
      simpleGridProps={{
        type: 'container',
        cols: { base: 1, '180px': 2, '320px': 3 },
        spacing: 'xs',
      }}
      {{props}}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <TimeGrid
      data={getTimeRange({ startTime: '10:00', endTime: '21:00', interval: '01:00' })}
      simpleGridProps={{
        type: 'container',
        cols: { base: 1, '180px': 2, '320px': 3 },
        spacing: 'xs',
      }}
      {...props}
    />
  );
}

export const usage: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  maxWidth: 360,
  controls: [
    {
      type: 'segmented',
      prop: 'format',
      data: [
        { value: '12h', label: '12h' },
        { value: '24h', label: '24h' },
      ],
      libraryValue: '24h',
      initialValue: '24h',
    },
    {
      type: 'boolean',
      prop: 'withSeconds',
      libraryValue: '__',
      initialValue: false,
    },
    {
      type: 'size',
      prop: 'size',
      libraryValue: 'sm',
      initialValue: 'sm',
    },
    {
      type: 'size',
      prop: 'radius',
      libraryValue: 'sm',
      initialValue: 'sm',
    },
  ],
};
