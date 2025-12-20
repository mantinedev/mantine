import { tests } from '@mantine-tests/core';
import { OverflowList, OverflowListProps, OverflowListStylesNames } from './OverflowList';

const defaultProps: OverflowListProps<any> = {
  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  renderItem: (item) => <div>{item}</div>,
  renderOverflow: (items) => <div>+{items.length}</div>,
};

describe('@mantine/core/OverflowList', () => {
  tests.itSupportsSystemProps<OverflowListProps<any>, OverflowListStylesNames>({
    component: OverflowList,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    displayName: '@mantine/core/OverflowList',
    stylesApiSelectors: ['root'],
  });
});
