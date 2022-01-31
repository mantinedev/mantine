import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Pagination, PaginationProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Pagination as PaginationStylesApi } from '../styles-api';

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam veniam excepturi numquam facere odio eveniet nihil quidem iure. Saepe et illo, earum quia tenetur incidunt quae cum iure iusto!';

const styles = generateBorderStyles(PaginationStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<PaginationProps>) {
  return (
    <Pagination {...props} total={10} position="center" mt="xl">
      {paragraph}
    </Pagination>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Pagination/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Pagination: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
