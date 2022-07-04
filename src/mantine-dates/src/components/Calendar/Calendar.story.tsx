import { Grid, Text } from '@mantine/core';
import React, { useState } from 'react';
import { Calendar } from './Calendar';

export default { title: 'Calendar' };

export const Multiple = () => {
  const [value, setValue] = useState<Date[]>([]);
  return <Calendar multiple value={value} onChange={setValue} />;
};

export const Single = () => {
  const [value, setValue] = useState<Date>(new Date());
  return <Calendar value={value} onChange={setValue} />;
};

export const WeekendDays = () => {
  const [value, setValue] = useState<Date>(new Date());
  return <Calendar value={value} onChange={setValue} weekendDays={[1, 4]} />;
};

export const DisabledDaysKeyBoardNavigation = () => (
  <Grid sx={{ padding: '20px' }}>
    <Grid.Col>
      <Text>When the first date is excluded (ex. in June on calendar it is 30th of May).</Text>
      <Calendar excludeDate={(date) => date.getDay() === 1} />
    </Grid.Col>
    <Grid.Col>
      <Text>
        When trying to reach dates that are on the other side of a row of excluded dates (ex. when
        excluding date.getDay() === 3)
      </Text>
      <Calendar excludeDate={(date) => date.getDay() === 3} />
    </Grid.Col>
    <Grid.Col>
      <Text>When using minDate on todays date</Text>
      <Calendar minDate={new Date()} />
    </Grid.Col>
  </Grid>
);
