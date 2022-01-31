import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Group, Button, ButtonProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Button as ButtonStylesApi } from '../styles-api';

const styles = generateBorderStyles(ButtonStylesApi);
const useStyles = createStyles(() => styles);

const variants = ['filled', 'outline', 'light', 'gradient', 'white', 'default'] as const;

function Wrapper(props: Partial<ButtonProps<'div'>>) {
  const items = variants.map((variant) => (
    <Button key={variant} variant={variant} rightIcon="R" leftIcon="L" {...props}>
      {variant}
    </Button>
  ));
  return (
    <Group position="center" mt="xl" sx={{ backgroundColor: 'rgba(0, 0, 0, .1)' }}>
      {items}
    </Group>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Button/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Button: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ))
  .add('Hover override: root styles', () => (
    <Wrapper styles={{ root: { '&:hover': { backgroundColor: 'red' } } }} />
  ))
  .add('Hover override: sx', () => <Wrapper sx={{ '&:hover': { backgroundColor: 'red' } }} />);
