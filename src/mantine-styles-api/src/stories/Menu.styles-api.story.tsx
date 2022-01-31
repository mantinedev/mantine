import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider } from '@mantine/styles';
import { generateBorderStyles } from '@mantine/storybook/src';
import { Group } from '../../Group';
import { menuItems } from '../demos/_menu-items';
import { Menu, MenuProps } from '../Menu';
import { Menu as MenuStylesApi } from '../styles.api';

const styles = generateBorderStyles(MenuStylesApi);
const useStyles = createStyles(() => styles);

function Wrapper(props: Partial<MenuProps>) {
  return (
    <Group position="center" mt="xl">
      <Menu {...props} opened>
        {menuItems}
      </Menu>
    </Group>
  );
}

function WithClassNames() {
  return <Wrapper classNames={useStyles().classes} />;
}

storiesOf('@mantine/core/Menu/styles-api', module)
  .add('With sx', () => <Wrapper sx={{ border: '1px solid red', backgroundColor: 'blue' }} />)
  .add('With styles as object', () => <Wrapper styles={styles} />)
  .add('With styles as function', () => <Wrapper styles={() => styles} />)
  .add('With styles as classNames', () => <WithClassNames />)
  .add('Styles API on MantineProvider', () => (
    <MantineProvider styles={{ Menu: () => styles }}>
      <Wrapper />
    </MantineProvider>
  ));
