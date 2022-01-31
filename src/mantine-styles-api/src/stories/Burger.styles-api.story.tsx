import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Burger, BurgerProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Burger as BurgerStylesApi } from '../styles-api';

const styles = generateBorderStyles(BurgerStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<BurgerProps>) {
  return <Burger {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl" opened={false} />;
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Burger/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Burger: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
