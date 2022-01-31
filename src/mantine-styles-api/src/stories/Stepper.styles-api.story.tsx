import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Stepper, StepperProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Stepper as StepperStylesApi } from '../styles-api';

const styles = generateBorderStyles(StepperStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper({ stepProps, ...props }: Partial<StepperProps> & { stepProps?: any }) {
  return (
    <Stepper
      active={1}
      onStepClick={() => {}}
      mt="xl"
      mx="auto"
      style={{ maxWidth: 800 }}
      {...props}
    >
      <Stepper.Step label="First" description="First description" {...stepProps}>
        First step content here
      </Stepper.Step>
      <Stepper.Step label="Second" description="Second description">
        Second step content here
      </Stepper.Step>
      <Stepper.Step label="Last" description="Last description">
        Last step content here
      </Stepper.Step>
    </Stepper>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Stepper/styles-api', module)
  .add('With sx', () => (
    <Wrapper sx={{ border: '1px solid red' }} stepProps={{ sx: { border: '1px solid blue' } }} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Stepper: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
