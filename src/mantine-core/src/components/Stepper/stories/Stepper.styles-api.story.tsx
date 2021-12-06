import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/ds/src';
import { Stepper, StepperProps } from '../Stepper';
import { Stepper as StepperStylesApi } from '../styles.api';

const styles = generateBorderStyles(StepperStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<StepperProps>) {
  return (
    <Stepper
      active={1}
      onStepClick={() => {}}
      mt="xl"
      mx="auto"
      style={{ maxWidth: 800 }}
      {...props}
    >
      <Stepper.Step label="First" description="First description">
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
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Stepper: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
