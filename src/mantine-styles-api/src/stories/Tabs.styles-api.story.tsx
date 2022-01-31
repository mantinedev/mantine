import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Tabs, TabsProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Tabs as TabsStylesApi } from '../styles-api';

const styles = generateBorderStyles(TabsStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper({ tabProps, ...props }: Partial<TabsProps> & { tabProps?: any }) {
  return (
    <Tabs mt="xl" mx="auto" style={{ maxWidth: 800 }} {...props}>
      <Tabs.Tab label="First" {...tabProps}>
        First tab content
      </Tabs.Tab>
      <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Tabs/styles-api', module)
  .add('With sx', () => (
    <Wrapper sx={{ border: '1px solid red' }} tabProps={{ sx: { border: '1px solid blue' } }} />
  ))
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Tabs: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
