import { itSupportsSystemProps, itRendersChildren } from '@mantine/tests';
import { InputPlaceholder, InputPlaceholderProps } from './InputPlaceholder';

const defaultProps: InputPlaceholderProps = {};

describe('@mantine/core/InputPlaceholder', () => {
  itRendersChildren(InputPlaceholder, defaultProps);
  itSupportsSystemProps({
    component: InputPlaceholder,
    props: defaultProps,
    refType: HTMLSpanElement,
    displayName: '@mantine/core/InputPlaceholder',
    providerName: 'InputPlaceholder',
  });
});
