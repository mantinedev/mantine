import React from 'react';
import { Highlight } from '@mantine/core';
import Configurator from '../../../../components/Configurator/Configurator';

function HighlightWrapper(props: any) {
  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <Highlight {...props} />
    </div>
  );
}

const codeTemplate = (props: string, children: string) => `<Highlight${props}>
  ${children}
</Highlight>`;

export function HighlightConfigurator() {
  return (
    <Configurator
      component={HighlightWrapper}
      codeTemplate={codeTemplate}
      props={[
        { name: 'highlight', type: 'string', initialValue: 'this' },
        { name: 'children', type: 'string', initialValue: 'Highlight This!' },
        { name: 'highlightColor', type: 'color', initialValue: 'yellow', defaultValue: 'yellow' },
      ]}
    />
  );
}
