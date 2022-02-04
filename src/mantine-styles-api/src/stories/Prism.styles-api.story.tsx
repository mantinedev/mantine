import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Prism, PrismProps } from '@mantine/prism';
import { Prism as PrismStylesApi } from '../styles-api';

const demoCode = `
import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const styles = generateBorderStyles(PrismStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<PrismProps>) {
  return (
    <Prism language="tsx" withLineNumbers {...props}>
      {demoCode.trim()}
    </Prism>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/prism/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'silver' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Prism: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
