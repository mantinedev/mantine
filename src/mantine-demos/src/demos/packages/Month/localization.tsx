import React, { useState } from 'react';
import 'dayjs/locale/ru';
import { Group } from '@mantine/core';
import { Month } from '@mantine/dates';

const code = `
import { useState } from 'react';
import 'dayjs/locale/ru';

function Demo() {
  const [value, setValue] = useState(new Date());
  return <Month locale="ru" month={value} value={value} onChange={setValue} />;
}
`;

function Demo() {
  const [value, setValue] = useState(new Date());
  return (
    <Group position="center">
      <Month month={value} value={value} onChange={setValue} locale="ru" />
    </Group>
  );
}

export const localization: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
