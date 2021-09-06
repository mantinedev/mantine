import React from 'react';
import { Treeview } from '../Treeview';

const code = `
<Treeview
      selected="/"
      labelNode="Treeview"
      value="/"
      items={[
        {
          value: '/',
          items: [],
          labelNode: 'Root'
        }
      ]}
      type="folder"
    />
`;

function Demo() {
  return (
    <>
      <Treeview
        selected="/"
        labelNode="Treeview"
        value="/"
        items={[
          {
            value: '/',
            items: [],
            labelNode: 'Root',
          },
        ]}
        type="folder"
      />
    </>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
