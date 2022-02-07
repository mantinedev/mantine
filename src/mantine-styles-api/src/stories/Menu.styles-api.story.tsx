import React from 'react';
import { storiesOf } from '@storybook/react';
import { createStyles, MantineProvider, Group, Menu, MenuProps } from '@mantine/core';
import { generateBorderStyles } from '@mantine/storybook';
import { Menu as MenuStylesApi } from '../styles-api';

const menuItems = [<Menu.Item>first</Menu.Item>, <Menu.Item icon="$">second</Menu.Item>];

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
