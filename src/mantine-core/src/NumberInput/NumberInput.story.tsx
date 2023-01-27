import React, { useState } from 'react';
import { Group } from '../Group';
import { Button } from '../Button';
import { NumberInput } from './NumberInput';

export default { title: 'NumberInput' };

export function Usage() {
  const [value, setValue] = useState<number | ''>(0);
  console.log(value);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <NumberInput value={value} onChange={setValue} mb="md" min={10} />
      <Group>
        <Button
          onMouseDown={(event) => {
            event.preventDefault();
            setValue('');
          }}
        >
          Set empty value
        </Button>
        <Button
          onMouseDown={(event) => {
            event.preventDefault();
            setValue(10);
          }}
        >
          Set 10
        </Button>
      </Group>
    </div>
  );
}
