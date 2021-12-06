import React, { forwardRef, useState } from 'react';
import { Select, SelectItemProps } from '@mantine/core';
import Flag from 'react-flagpack';

const data = [
  { label: 'Russia', value: 'RU' },
  { label: 'United States', value: 'US' },
  { label: 'Australia', value: 'AU' },
  { label: 'Belgium', value: 'BE' },
  { label: 'Poland', value: 'PL' },
  { label: 'India', value: 'IN' },
];

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ label, value, ...others }: SelectItemProps, ref) => (
    <div ref={ref} {...others}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 15 }}>
          <Flag code={value} size="S" />
        </div>
        <div>{label}</div>
      </div>
    </div>
  )
);

export function CountryPicker() {
  const [value, setValue] = useState('AU');
  return (
    <Select
      size="md"
      data={data}
      icon={<Flag code={value} size="S" />}
      transitionDuration={150}
      transition={{
        in: { opacity: 1, transform: 'translateY(0px) scale(1)' },
        out: { opacity: 0, transform: 'translateY(-10px) scale(1.01)' },
        transitionProperty: 'transform',
      }}
      itemComponent={SelectItem}
      maxDropdownHeight={400}
      value={value}
      onChange={setValue}
    />
  );
}
