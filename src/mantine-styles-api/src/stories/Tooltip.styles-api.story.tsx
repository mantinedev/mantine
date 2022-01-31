import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Tooltip, TooltipProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Tooltip as TooltipStylesApi } from '../styles-api';

const styles = generateBorderStyles(TooltipStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<TooltipProps>) {
  return (
    <Tooltip opened label="tooltip" {...props}>
      <div>target</div>
    </Tooltip>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Tooltip/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', maxWidth: 400 }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Tooltip: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
