import 'dayjs/locale/ru';
import React from 'react';
import { DatePicker } from '@mantine/dates';

const code = `
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      locale="ru"
      placeholder="Выберите дату"
      label="Дата события"
      defaultValue={new Date()}
    />
  );
}
`;

function Demo() {
  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        locale="ru"
        placeholder="Выберите дату"
        label="Дата события"
        defaultValue={new Date()}
        withinPortal
      />
    </div>
  );
}

export const localization: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
