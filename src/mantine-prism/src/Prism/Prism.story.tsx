import React from 'react';
import { Prism } from '../index';

const code2 = Array(20)
  .fill(0)
  .map(() => 'Some line')
  .join('\n');

const code3 = Array(120)
  .fill(0)
  .map(() => 'Some line')
  .join('\n');

export default {
  title: 'Prism',
};

export const TwoDigitLineNumbers = () => (
  <Prism language="javascript" withLineNumbers>
    {code2}
  </Prism>
);

export const ThreeDigitLineNumbers = () => (
  <Prism language="javascript" withLineNumbers>
    {code3}
  </Prism>
);

export const WithTabs = () => (
  <div style={{ padding: 40 }}>
    <Prism.Tabs defaultValue="react">
      <Prism.TabsList>
        <Prism.Tab value="react">react</Prism.Tab>
        <Prism.Tab value="css">CSS</Prism.Tab>
      </Prism.TabsList>

      <Prism.Panel language="tsx" value="react">
        Line that is so large that it will cause overflow Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Porro vel sunt sint ex id magni eaque excepturi, officiis sapiente magnam
        tenetur assumenda blanditiis non, ea provident eos nemo reiciendis sequi.
      </Prism.Panel>
      <Prism.Panel language="css" value="css">
        hello
      </Prism.Panel>
    </Prism.Tabs>
  </div>
);

export const LargeLine = () => (
  <Prism language="javascript" withLineNumbers>
    Line that is so large that it will cause overflow Lorem ipsum dolor sit amet consectetur, Line
    that is so large that it will cause overflow Lorem ipsum dolor sit amet consectetur, Line that
    is so large that it will cause overflow Lorem ipsum dolor sit amet consectetur,
  </Prism>
);

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}

function Usage() {
  return <ActionIcon>Hello</ActionIcon>;
}
`;
export function LinesHighlightWithCustomTheme() {
  const deleted = { color: 'red', label: '-' };
  const added = { color: 'green', label: '+' };

  return (
    <Prism
      language="tsx"
      withLineNumbers
      colorScheme="dark"
      highlightLines={{
        3: deleted,
        4: deleted,
        5: deleted,
        7: added,
        8: added,
        9: added,
      }}
    >
      {demoCode}
    </Prism>
  );
}
