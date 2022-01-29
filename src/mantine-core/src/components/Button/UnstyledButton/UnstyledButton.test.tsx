import { itRendersChildren, itSupportsFocusEvents, itSupportsSystemProps } from '@mantine/tests';
import { UnstyledButton, UnstyledButtonProps } from './UnstyledButton';

const defaultProps: UnstyledButtonProps = {};

describe('@mantine/core/UnstyledButton', () => {
  itRendersChildren(UnstyledButton, defaultProps);
  itSupportsFocusEvents(UnstyledButton, defaultProps, 'button');
  itSupportsSystemProps({
    component: UnstyledButton,
    props: defaultProps,
    displayName: '@mantine/core/UnstyledButton',
    refType: HTMLButtonElement,
  });
});
