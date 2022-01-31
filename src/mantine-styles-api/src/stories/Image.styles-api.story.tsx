import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Group, Image, ImageProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Image as ImageStylesApi } from '../styles-api';

const styles = generateBorderStyles(ImageStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<ImageProps>) {
  return (
    <Group>
      <Image {...props} withPlaceholder width={200} height={150} caption="Caption" />
    </Group>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Image/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Image: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
