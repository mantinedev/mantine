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
