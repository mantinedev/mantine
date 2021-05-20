import React from 'react';
import { Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ColWrapper as Col } from './ColWrapper';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Grid, Col } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const isMobile = useMediaQuery('(max-width: 755px)');
  const span = isMobile ? 12 : 4;

  return (
    <Grid>
      <Col span={span}>1</Col>
      <Col span={span}>2</Col>
      <Col span={span}>3</Col>
    </Grid>
  );
}`;

export function GridResponsiveDemo() {
  const isMobile = useMediaQuery('(max-width: 755px)');
  const span = isMobile ? 12 : 4;

  return (
    <CodeDemo code={code} language="tsx">
      <Grid>
        <Col span={span}>1</Col>
        <Col span={span}>2</Col>
        <Col span={span}>3</Col>
      </Grid>
    </CodeDemo>
  );
}
