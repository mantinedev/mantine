import { createErrors } from '@mantine/utils';

export const POPOVER_ERRORS = createErrors({
  'popover-context': 'Popover component was not found in the tree',
  'popover-children':
    'Popover.Target component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported',
});
