import React from 'react';
import { Month } from './Month';

export default { title: 'Month' };

export const MultipleSelectedDates = () => (
  <Month
    value={[new Date(2022, 0, 1), new Date(2022, 0, 5), new Date(2022, 0, 8)]}
    month={new Date(2022, 0, 1)}
  />
);
