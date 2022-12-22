import { MANTINE_SIZES } from '@mantine/core';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { DecadeLevel } from './DecadeLevel';

export default { title: 'DecadeLevel' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <DecadeLevel decade={new Date(2022, 3, 11)} />
    </div>
  );
}

export function MinDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <DecadeLevel decade={new Date(2022, 1, 1)} minDate={new Date(2022, 4, 1)} />
    </div>
  );
}

export function MaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <DecadeLevel decade={new Date(2022, 1, 1)} maxDate={new Date(2022, 9, 1)} />
    </div>
  );
}

export function WithSelection() {
  const [selected, setSelected] = useState(new Date());

  return (
    <div style={{ padding: 40, width: 320 }}>
      <DecadeLevel
        decade={new Date()}
        getYearControlProps={(month) => ({
          selected: dayjs(month).isSame(selected, 'month'),
          onClick: () => setSelected(month),
        })}
      />
    </div>
  );
}

export function WithControls() {
  const [decade, setYear] = useState(new Date());

  return (
    <div style={{ padding: 40, width: 320 }}>
      <DecadeLevel
        decade={decade}
        onNext={() => setYear(dayjs(decade).add(10, 'years').toDate())}
        onPrevious={() => setYear(dayjs(decade).subtract(10, 'years').toDate())}
      />
    </div>
  );
}

export function Sizes() {
  const sizes = MANTINE_SIZES.map((size) => (
    <DecadeLevel decade={new Date()} size={size} key={size} mt="xl" />
  ));
  return <div style={{ padding: 40 }}>{sizes}</div>;
}
