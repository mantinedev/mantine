import React from 'react';
import { Grid } from '@mantine/core';
import { ColWrapper as Col } from './ColWrapper';
import Configurator from '../../../../components/Configurator/Configurator';

function GridWrapper(props: React.ComponentProps<typeof Grid>) {
  return (
    <Grid {...props}>
      <Col span={3} style={{ minHeight: 80 }}>
        1
      </Col>
      <Col span={3} style={{ minHeight: 120 }}>
        2
      </Col>
      <Col span={3}>3</Col>
    </Grid>
  );
}

const codeTemplate = (props: string) => `<Grid${props}>
  <Col span={3} style={{ minHeight: 80 }}>1</Col>
  <Col span={3} style={{ minHeight: 120 }}>2</Col>
  <Col span={3}>3</Col>
</Grid>`;

export function GridFlexConfigurator() {
  return (
    <Configurator
      component={GridWrapper}
      codeTemplate={codeTemplate}
      props={[
        {
          name: 'justify',
          type: 'select',
          initialValue: 'flex-start',
          defaultValue: 'flex-start',
          data: [
            { label: 'flex-start', value: 'flex-start' },
            { label: 'flex-end', value: 'flex-end' },
            { label: 'center', value: 'center' },
            { label: 'space-between', value: 'space-between' },
            { label: 'space-around', value: 'space-around' },
          ],
        },
        {
          name: 'align',
          type: 'select',
          initialValue: 'stretch',
          defaultValue: 'stretch',
          data: [
            { label: 'flex-start', value: 'flex-start' },
            { label: 'flex-end', value: 'flex-end' },
            { label: 'center', value: 'center' },
            { label: 'stretch', value: 'stretch' },
          ],
        },
      ]}
    />
  );
}
