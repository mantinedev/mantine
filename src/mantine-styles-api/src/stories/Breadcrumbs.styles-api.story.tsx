import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  createStyles,
  MantineProvider,
  Anchor,
  Breadcrumbs,
  BreadcrumbsProps,
} from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Breadcrumbs as BreadcrumbsStylesApi } from '../styles-api';

const styles = generateBorderStyles(BreadcrumbsStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<BreadcrumbsProps>) {
  const items = [
    { title: 'Mantine', href: 'https://mantine.dev' },
    { title: 'Mantine hooks', href: 'https://mantine.dev/hooks/getting-started' },
    { title: 'use-id', href: 'https://mantine.dev/hooks/use-id' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <Breadcrumbs {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl">
      {items}
    </Breadcrumbs>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Breadcrumbs/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Breadcrumbs: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
