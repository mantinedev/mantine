import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/ds/src';
import { Tabs, TabsProps } from '../Tabs';
import { Tabs as TabsStylesApi } from '../styles.api';

const styles = generateBorderStyles(TabsStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<TabsProps>) {
  return (
    <Tabs mt="xl" mx="auto" style={{ maxWidth: 800 }} {...props}>
      <Tabs.Tab label="First">First tab content</Tabs.Tab>
      <Tabs.Tab label="Second">Second tab content</Tabs.Tab>
      <Tabs.Tab label="Third">Third tab content</Tabs.Tab>
    </Tabs>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Tabs/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Tabs: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
