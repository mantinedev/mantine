import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { InputError, InputErrorProps } from './InputError';

const defaultProps: InputErrorProps = {};

describe('@mantine/core/InputError', () => {
  itRendersChildren(InputError, defaultProps);
  itSupportsProviderVariant(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsProviderSize(InputError, defaultProps, 'InputWrapper', 'error');
  itSupportsSystemProps({
    component: InputError,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/InputError',
    providerName: 'InputError',
  });
});
