import dayjs from 'dayjs';
import { useState } from 'react';
import { MantineDemo } from '@mantinex/demo';

const getCode = (name: string) => `
import { useState } from 'react';
import { ${name} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <${name}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
      presets={[
        {
          label: 'Last 7 days',
          dates: [
            dayjs().startOf('day').subtract(7, 'days').toDate(),
            dayjs().subtract(1, 'days').endOf('day').toDate(),
          ],
        },
        {
          label: 'Last month',
          dates: [
            dayjs().startOf('month').subtract(1, 'days').startOf('month').toDate(),
            dayjs().startOf('month').subtract(1, 'days').endOf('month').toDate(),
          ],
        },
      ]}
    />
  );
}
`;

function getDemo(Component: React.FC<any>) {
  return () => {
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
    return (
      <Component
        type="range"
        label="Pick dates range"
        placeholder="Pick dates range"
        value={value}
        onChange={setValue}
        presets={[
          {
            label: 'Current month',
            dates: [dayjs().startOf('month').toDate(), dayjs().startOf('day').toDate()],
          },
          {
            label: 'Last 7 days',
            dates: [
              dayjs().startOf('day').subtract(7, 'days').toDate(),
              dayjs().subtract(1, 'days').endOf('day').toDate(),
            ],
          },
          {
            label: 'Last month',
            dates: [
              dayjs().startOf('month').subtract(1, 'days').startOf('month').toDate(),
              dayjs().startOf('month').subtract(1, 'days').endOf('month').toDate(),
            ],
          },
        ]}
      />
    );
  };
}

export function getPickerInputPresetsDemo(Component: React.FC<any>): MantineDemo {
  return {
    type: 'code',
    centered: true,
    maxWidth: 400,
    code: getCode(Component.displayName!.replace('@mantine/dates/', '')),
    component: getDemo(Component),
  };
}
