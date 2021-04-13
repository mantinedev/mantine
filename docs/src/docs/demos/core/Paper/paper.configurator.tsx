import React from 'react';
import { Paper, Text } from '@mantine/core';
import { DEFAULT_THEME } from '@mantine/theme';
import Configurator from '../../../../components/Configurator/Configurator';

function PaperWrapper(props: any) {
  return (
    <div style={{ padding: 20 }}>
      <Paper style={{ maxWidth: 400, margin: 'auto' }} {...props}>
        <Text>Paper is the most basic ui component</Text>
        <Text>
          Use it to create cards, dropdowns, modals and other components that require background
          with shadow
        </Text>
      </Paper>
    </div>
  );
}

const codeTemplate = (props: string) => `<Paper${props}>
  <Text>Paper is the most basic ui component</Text>
  <Text>
    Use it to create cards, dropdowns, modals and other components that require background
    with shadow
  </Text>
</Paper>`;

export function PaperConfigurator() {
  return (
    <Configurator
      component={PaperWrapper}
      codeTemplate={codeTemplate}
      previewBackground={DEFAULT_THEME.colors.gray[0]}
      props={[
        { name: 'padding', type: 'size', initialValue: 'md', defaultValue: 0 },
        { name: 'shadow', type: 'size', initialValue: 'xs', defaultValue: 'none' },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
      ]}
    />
  );
}
