import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Blockquote, BlockquoteProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Blockquote as BlockquoteStylesApi } from '../styles-api';

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam veniam excepturi numquam facere odio eveniet nihil quidem iure. Saepe et illo, earum quia tenetur incidunt quae cum iure iusto!';

const styles = generateBorderStyles(BlockquoteStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<BlockquoteProps>) {
  return (
    <Blockquote {...props} style={{ maxWidth: 500 }} mx="auto" mt="xl">
      {paragraph}
    </Blockquote>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Blockquote/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Blockquote: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
