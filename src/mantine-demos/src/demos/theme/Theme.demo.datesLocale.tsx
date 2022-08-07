import React from 'react';
import 'dayjs/locale/ru';
import { MantineProvider } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <div>
      <DatePicker label="Locale: en" placeholder="Pick date" defaultValue={new Date()} />

      <MantineProvider inherit theme={{ datesLocale: 'ru' }}>
        <DatePicker
          mt="sm"
          label="Locale: ru"
          placeholder="Надо выбрать дату"
          defaultValue={new Date()}
        />
      </MantineProvider>
    </div>
  );
}

export const datesLocale: MantineDemo = {
  type: 'demo',
  component: Demo,
};
