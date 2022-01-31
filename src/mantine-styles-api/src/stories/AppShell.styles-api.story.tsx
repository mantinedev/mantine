import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, AppShell, Header, Navbar } from '@mantine/core';

const styles = { border: '1px solid red' };
const rootStyles = { root: styles };
const useStyles = createStyles(() => rootStyles);

function Wrapper(props: any) {
  return (
    <AppShell
      {...props}
      navbar={
        <Navbar width={{ base: 300 }} {...props}>
          <Navbar.Section {...props}>Navbar Section</Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={50} {...props}>
          Header
        </Header>
      }
    >
      Content
    </AppShell>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/AppShell/styles-api', module)
  .add('With sx', () => <Wrapper sx={styles} />)
  .add('AppShell Styles API', () => (
    <AppShell styles={{ root: { border: '1px solid red' }, main: { border: '1px solid blue' } }}>
      content
    </AppShell>
  ))
  .add('With styles as object', () => <Wrapper styles={rootStyles} />)
  .add('With styles as function', () => <Wrapper styles={() => rootStyles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider
      styles={{
        AppShell: () => rootStyles,
        Navbar: () => rootStyles,
        Header: () => rootStyles,
      }}
    >
      <Wrapper />
    </MantineProvider>
  ));
