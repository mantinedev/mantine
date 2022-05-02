import { createErrors } from '@mantine/utils';

export const TOOLTIP_ERRORS = createErrors({
  'tooltip-children':
    'Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported',
});
