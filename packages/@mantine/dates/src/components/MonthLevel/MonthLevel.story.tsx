import 'dayjs/locale/ru';

import dayjs from 'dayjs';
import { useState } from 'react';
import { MonthLevel, MonthLevelProps } from './MonthLevel';

export default { title: 'MonthLevel' };

function Wrapper(props: Partial<MonthLevelProps>) {
  const [month, setMonth] = useState('2022-04-11');

  const onNextMonth = () =>
    setMonth((current) => dayjs(current).add(1, 'month').format('YYYY-MM-DD'));
  const onPrevMonth = () =>
    setMonth((current) => dayjs(current).subtract(1, 'month').format('YYYY-MM-DD'));

  return (
    <div>
      <MonthLevel month={month} onNext={onNextMonth} onPrevious={onPrevMonth} {...props} />
    </div>
  );
}

export function Usage() {
  return <Wrapper classNames={{ weekday: 'test-tetstasfaf' }} />;
}

export function Locale() {
  return <Wrapper locale="ru" />;
}

export function RenderMonthLabel() {
  return <Wrapper monthLabelFormat={(date) => `${dayjs(date).format('MM/YYYY')}`} />;
}

export function Unstyled() {
  return <Wrapper unstyled />;
}

export function MinDate() {
  return <Wrapper minDate="2022-04-11" />;
}

export function MaxDate() {
  return <Wrapper maxDate="2022-04-11" />;
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <Wrapper size={size} key={size} />
  ));
  return sizes;
}
