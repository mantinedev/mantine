import { MANTINE_SIZES } from '@mantine/core';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { YearsList } from './YearsList';

export default { title: 'YearsList' };

export function Usage() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList decade={new Date()} />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList decade={new Date()} unstyled />
    </div>
  );
}

export function MinDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList decade={new Date(2022, 3, 11)} minDate={new Date(2024, 4, 11)} />
    </div>
  );
}

export function MaxDate() {
  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList decade={new Date(2022, 1, 1)} maxDate={new Date(2022, 9, 1)} />
    </div>
  );
}

export function WithSelection() {
  const [selected, setSelected] = useState(new Date());

  return (
    <div style={{ padding: 40, width: 320 }}>
      <YearsList
        decade={new Date()}
        getYearControlProps={(month) => ({
          selected: dayjs(month).isSame(selected, 'month'),
          onClick: () => setSelected(month),
        })}
      />
    </div>
  );
}

export function Sizes() {
  const sizes = MANTINE_SIZES.map((size) => (
    <YearsList
      decade={new Date()}
      size={size}
      key={size}
      getYearControlProps={() => ({ selected: true })}
      mt="xl"
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}
