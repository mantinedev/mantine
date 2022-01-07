import React, { useState } from 'react';
import { SegmentedControl } from '../SegmentedControl';
import { Button } from '../../Button/Button';

const code = `
  const [isSmall, setIsSmall] = useState(false);
  const data = [
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'ng' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
  ];

  const [selected, setSelected] = useState(data[0].value);

  return (
    <div>
      <Button mb={15} onClick={() => setIsSmall(!isSmall)}>
        Make {isSmall ? 'big' : 'small'}
      </Button>
      <div
        style={{
          transform: \`scale(\${isSmall ? 0.75 : 1})\`,
        }}
      >
        <SegmentedControl data={data} value={selected} onChange={(value) => setSelected(value)} />
      </div>
    </div>
  );
`;

function Demo() {
  const [isSmall, setIsSmall] = useState(false);

  const data = [
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'ng' },
    { label: 'Vue', value: 'vue' },
    { label: 'Svelte', value: 'svelte' },
  ];

  const [selected, setSelected] = useState(data[0].value);

  return (
    <div>
      <Button mb={15} onClick={() => setIsSmall(!isSmall)}>
        Make {isSmall ? 'big' : 'small'}
      </Button>
      <div
        style={{
          transform: `scale(${isSmall ? 0.75 : 1})`,
        }}
      >
        <SegmentedControl data={data} value={selected} onChange={(value) => setSelected(value)} />
      </div>
    </div>
  );
}

export const scaled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
