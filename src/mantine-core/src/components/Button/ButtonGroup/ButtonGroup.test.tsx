import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';

const defaultProps: ButtonGroupProps = {};

describe('@mantine/core/ButtonGroup', () => {
  itRendersChildren(ButtonGroup, defaultProps);
  itSupportsSystemProps({
    component: ButtonGroup,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ButtonGroup',
    providerName: 'ButtonGroup',
  });
});
