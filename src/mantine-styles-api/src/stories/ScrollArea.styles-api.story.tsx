import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/storybook/src';
import { ScrollArea, ScrollAreaProps } from '../ScrollArea';
import { ScrollArea as ScrollAreaStylesApi } from '../styles.api';
import { Content } from '../demos/_content';

const styles = generateBorderStyles(ScrollAreaStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<ScrollAreaProps>) {
  return (
    <ScrollArea {...props} type="always" style={{ width: 500, height: 200 }} mx="auto" mt="xl">
      <Content />
    </ScrollArea>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/ScrollArea/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ ScrollArea: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
