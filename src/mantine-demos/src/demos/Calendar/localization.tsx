import 'dayjs/locale/ru';
import React, { useState } from 'react';
import { Group } from '@mantine/core';
import { Calendar } from '@mantine/dates';

const code = '<Calendar locale="ru" />';

function Demo() {
  const [value, setValue] = useState(null);
  return (
    <Group position="center">
      <Calendar value={value} onChange={setValue} locale="ru" />
    </Group>
  );
}

export const localization: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
