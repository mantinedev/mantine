import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text } from '@mantine/core';
import { TimeValue } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <Text>
        24h format:{' '}
        <b>
          <TimeValue value="18:45:34" />
        </b>
      </Text>

      <Text>
        24h format with seconds:{' '}
        <b>
          <TimeValue value="18:45:34" withSeconds />
        </b>
      </Text>

      <Text>
        12h format:{' '}
        <b>
          <TimeValue value="18:45:34" format="12h" />
        </b>
      </Text>

      <Text>
        12h format with seconds:{' '}
        <b>
          <TimeValue value="18:45:34" format="12h" withSeconds />
        </b>
      </Text>

      <Text>
        Date object:{' '}
        <b>
          <TimeValue value={new Date(2021, 1, 1, 18, 45, 34)} />
        </b>
      </Text>

      <Text>
        Custom AM/PM labels:{' '}
        <b>
          <TimeValue value="18:45:34" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
        </b>
      </Text>
    </div>
  );
}
`;

function Demo() {
  return (
    <div>
      <Text>
        24h format:{' '}
        <b>
          <TimeValue value="18:45:34" />
        </b>
      </Text>

      <Text>
        24h format with seconds:{' '}
        <b>
          <TimeValue value="18:45:34" withSeconds />
        </b>
      </Text>

      <Text>
        12h format:{' '}
        <b>
          <TimeValue value="18:45:34" format="12h" />
        </b>
      </Text>

      <Text>
        12h format with seconds:{' '}
        <b>
          <TimeValue value="18:45:34" format="12h" withSeconds />
        </b>
      </Text>

      <Text>
        Date object:{' '}
        <b>
          <TimeValue value={new Date(2021, 1, 1, 18, 45, 34)} />
        </b>
      </Text>

      <Text>
        Custom AM/PM labels:{' '}
        <b>
          <TimeValue value="18:45:34" amPmLabels={{ am: 'पूर्वाह्न', pm: 'अपराह्न' }} />
        </b>
      </Text>
    </div>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
