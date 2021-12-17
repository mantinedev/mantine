import React from 'react';
import { Prism } from '../Prism';
import { go, py, css } from './languages';

const code = `
`;

function Demo() {
  return (
    <Prism.Tabs>
      <Prism.Tab label="styles.css" language="css">
        {css}
      </Prism.Tab>
      <Prism.Tab label="decorator.py" language="python">
        {py}
      </Prism.Tab>
      <Prism.Tab label="magic.go" language="go">
        {go}
      </Prism.Tab>
    </Prism.Tabs>
  );
}

export const tabs: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
