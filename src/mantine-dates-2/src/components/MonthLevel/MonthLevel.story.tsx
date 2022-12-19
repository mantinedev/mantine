import 'dayjs/locale/ru';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { MonthLevel, MonthLevelProps } from './MonthLevel';

export default { title: 'MonthLevel' };

function Wrapper(props: Partial<MonthLevelProps>) {
  const [month, setMonth] = useState(new Date(2022, 3, 11));

  const onNextMonth = () => setMonth((current) => dayjs(current).add(1, 'month').toDate());
  const onPrevMonth = () => setMonth((current) => dayjs(current).subtract(1, 'month').toDate());

  return (
    <div style={{ padding: 40 }}>
      <MonthLevel month={month} onNext={onNextMonth} onPrevious={onPrevMonth} {...props} />
    </div>
  );
}

export function Usage() {
  return <Wrapper />;
}

export function Locale() {
  return <Wrapper locale="ru" />;
}

export function RenderMonthLabel() {
  return <Wrapper monthLabelFormat={(date) => `${date.getMonth()}/${date.getFullYear()}`} />;
}

export function Unstyled() {
  return <Wrapper unstyled />;
}

export function MinDate() {
  return <Wrapper minDate={new Date(2022, 3, 11)} />;
}

export function MaxDate() {
  return <Wrapper maxDate={new Date(2022, 3, 11)} />;
}
