import React, { useState } from 'react';
import { CalendarIcon } from '@modulz/radix-icons';
import { CloseButton, Tooltip } from '@mantine/core';
import { DatePicker } from '../DatePicker';

const code = `
import { useState } from 'react';
import { CalendarIcon } from '@modulz/radix-icons';
import { CloseButton, Tooltip } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, onChange] = useState(new Date());

  return (
    <DatePicker
      placeholder="Pick date"
      label="Event date"
      icon={<CalendarIcon />}
      value={value}
      onChange={onChange}
      rightSection={
        value && (
          <Tooltip label="Remove selected date" withArrow placement="end" transition="fade">
            <CloseButton onClick={() => onChange(null)} />
          </Tooltip>
        )
      }
    />
  );
}
`;

function Demo() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{ maxWidth: 340, marginLeft: 'auto', marginRight: 'auto' }}>
      <DatePicker
        placeholder="Pick date"
        label="Event date"
        icon={<CalendarIcon />}
        value={value}
        onChange={onChange}
        rightSection={
          value && (
            <Tooltip label="Remove selected date" withArrow placement="end" transition="fade">
              <CloseButton onClick={() => onChange(null)} />
            </Tooltip>
          )
        }
      />
    </div>
  );
}

export const icon: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
