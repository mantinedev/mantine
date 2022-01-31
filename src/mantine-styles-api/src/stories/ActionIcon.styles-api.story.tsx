import React from 'react';
import { storiesOf } from '@storybook/react';
import { generateBorderStyles } from '@mantine/storybook';
import { createStyles, MantineProvider, Group, ActionIcon, ActionIconProps } from '@mantine/core';
import { ActionIcon as ActionIconStylesApi } from '../styles-api';

const ActionIconStylesApiWithoutRoot = { ...ActionIconStylesApi };
delete ActionIconStylesApiWithoutRoot.root;

const rootStyles = generateBorderStyles(ActionIconStylesApi);
const variantStyles = generateBorderStyles(ActionIconStylesApiWithoutRoot);
const useRootStyles = createStyles(() => rootStyles);
const useVariantStyles = createStyles(() => variantStyles);

const variants = ['hover', 'filled', 'outline', 'light', 'default', 'transparent'] as const;

function Wrapper(props: Partial<ActionIconProps<'button'>>) {
  const items = variants.map((variant) => (
    <ActionIcon variant={variant} key={variant} color="blue" {...props}>
      A
    </ActionIcon>
  ));

  return (
    <Group position="center" mt="xl">
      {items}
    </Group>
  );
}

function WithClassNamesRoot() {
  return <Wrapper classNames={useRootStyles().classes} />;
}

function WithClassNamesVariant() {
  return <Wrapper classNames={useVariantStyles().classes} />;
}

storiesOf('@mantine/core/ActionIcon/styles-api', module)
  .add('With sx', () => (
    <Wrapper
      sx={{
        border: '1px solid red',
        backgroundColor: 'blue',
        '&:hover': { backgroundColor: 'green' },
      }}
    />
  ))
  .add('With styles: root', () => <Wrapper styles={rootStyles} />)
  .add('With styles: variant', () => <Wrapper styles={variantStyles} />)
  .add('With classNames: root', () => <WithClassNamesRoot />)
  .add('With classNames: variant', () => <WithClassNamesVariant />)
  .add('Styles API on MantineProvider: root', () => (
    <MantineProvider styles={{ ActionIcon: rootStyles }}>
      <Wrapper />
    </MantineProvider>
  ))
  .add('Styles API on MantineProvider: variant', () => (
    <MantineProvider styles={{ ActionIcon: variantStyles }}>
      <Wrapper />
    </MantineProvider>
  ));
