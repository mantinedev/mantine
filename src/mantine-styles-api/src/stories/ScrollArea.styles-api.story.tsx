import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, ScrollArea, ScrollAreaProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { ScrollArea as ScrollAreaStylesApi } from '../styles-api';

const content = Array(10)
  .fill(0)
  .map((_, index) => (
    <p key={index}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam qui minima, voluptates aperiam
      labore delectus consequuntur tempore a sed ullam? Vitae ducimus amet distinctio, fugiat odio
      accusamus veniam sit hic.
    </p>
  ));

const styles = generateBorderStyles(ScrollAreaStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<ScrollAreaProps>) {
  return (
    <ScrollArea {...props} type="always" style={{ width: 500, height: 200 }} mx="auto" mt="xl">
      {content}
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
