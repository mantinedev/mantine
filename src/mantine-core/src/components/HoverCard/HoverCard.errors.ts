import { createErrors } from '@mantine/utils';

export const HOVER_CARD_ERRORS = createErrors({
  'hover-card-context': 'HoverCard component was not found in the tree',
  'hover-card-children':
    'HoverCard.Target component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported',
});
