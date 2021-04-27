import React from 'react';
import { Paper, Text, useMantineTheme } from '@mantine/core';
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
  const theme = useMantineTheme();
  return (
    <Configurator
      component={PaperWrapper}
      codeTemplate={codeTemplate}
      previewBackground={theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0]}
      props={[
        { name: 'padding', type: 'size', initialValue: 'md', defaultValue: 0 },
        { name: 'shadow', type: 'size', initialValue: 'xs', defaultValue: 'none' },
        { name: 'radius', type: 'size', initialValue: 'sm', defaultValue: 'sm' },
      ]}
    />
  );
}
