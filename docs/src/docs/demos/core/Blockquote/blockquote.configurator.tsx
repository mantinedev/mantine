import React from 'react';
import { Blockquote } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function BlockquoteWrapper(props: React.ComponentPropsWithoutRef<typeof Blockquote>) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Blockquote {...props} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `<Blockquote${props}>
  ${children}
</Blockquote>`;

export function BlockquoteConfigurator() {
  return (
    <Configurator
      component={BlockquoteWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
        { name: 'cite', type: 'string', initialValue: '– Forrest Gump' },
        {
          name: 'children',
          type: 'string',
          initialValue: 'Life is like an npm install – you never know what you are going to get.',
        },
      ]}
    />
  );
}
