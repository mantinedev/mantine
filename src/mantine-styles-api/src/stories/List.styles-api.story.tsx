import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, List, ListProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { List as ListStylesApi } from '../styles-api';

const styles = generateBorderStyles(ListStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper({ listItemProps, ...props }: Partial<ListProps> & { listItemProps?: any }) {
  return (
    <List {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl">
      <List.Item {...listItemProps}>Clone or download repository from GitHub</List.Item>
      <List.Item>Install dependencies with yarn</List.Item>
      <List.Item>To start development server run npm start command</List.Item>
      <List.Item>Run tests to make sure your changes do not break the build</List.Item>
      <List.Item>Submit a pull request once you are done</List.Item>
    </List>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/List/styles-api', module)
  .add('With sx', () => (
    <Wrapper
      sx={{ border: '1px solid red' }}
      listItemProps={{ sx: { border: '1px solid blue' } }}
    />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ List: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
