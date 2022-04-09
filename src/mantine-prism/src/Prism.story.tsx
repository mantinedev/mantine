import React from 'react';
import { Prism } from './index';

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
        import React from
      </Prism.Panel>
      <Prism.Panel language="css" value="css">
        hello
      </Prism.Panel>
    </Prism.Tabs>
  </div>
);
