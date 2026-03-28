import { createContextContainer, tests } from '@mantine-tests/core';
import { Popover } from '../Popover';
import { PopoverDropdown, PopoverDropdownProps } from './PopoverDropdown';

const defaultProps: PopoverDropdownProps = {};

const TestContainer = createContextContainer(PopoverDropdown, Popover, {
  opened: true,
  withArrow: true,
  withinPortal: false,
});

describe('@mantine/core/PopoverDropdown', () => {
  tests.itSupportsSystemProps<PopoverDropdownProps>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/PopoverDropdown',
    stylesApiName: 'Popover',
    stylesApiSelectors: ['dropdown', 'arrow'],
    providerStylesApi: false,
    compound: true,
  });

  tests.itThrowsContextError({
    component: PopoverDropdown,
    props: defaultProps,
    error: 'Popover component was not found in the tree',
  });
});
