import { createErrors } from '@mantine/utils';

export const MENU_ERRORS = createErrors({
  'menu-context': 'Menu component was not found in the tree',
  'menu-children':
    'Menu.Target component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported',
});
