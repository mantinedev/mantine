import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { RichTextEditor, RichTextEditorProps } from '@mantine/rte';
import { RichTextEditor as RichTextEditorStylesApi } from '../styles-api';

const styles = generateBorderStyles(RichTextEditorStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<RichTextEditorProps>) {
  const [value, onChange] = useState('<p>Hello</p>');
  return (
    <RichTextEditor
      {...props}
      style={{ maxWidth: 820 }}
      mx="auto"
      mt="xl"
      value={value}
      onChange={onChange}
    />
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/rte/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'silver' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ RichTextEditor: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
