import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, TransferList, TransferListProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { TransferList as TransferListStylesApi } from '../styles-api';

const styles = generateBorderStyles(TransferListStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<TransferListProps>) {
  return (
    <TransferList
      mt="xl"
      mx="auto"
      style={{ maxWidth: 800 }}
      value={[
        [
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'next', label: 'Next.js' },
        ],
        [
          { value: 'sv', label: 'Svelte' },
          { value: 'rw', label: 'Redwood' },
        ],
      ]}
      onChange={() => {}}
      {...props}
    />
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/TransferList/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ TransferList: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
