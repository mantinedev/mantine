import {
  itSupportsSystemProps,
  itRendersChildren,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { InputDescription, InputDescriptionProps } from './InputDescription';

const defaultProps: InputDescriptionProps = {};

describe('@mantine/core/InputDescription', () => {
  itRendersChildren(InputDescription, defaultProps);
  itSupportsProviderVariant(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsProviderSize(InputDescription, defaultProps, 'InputWrapper', 'description');
  itSupportsSystemProps({
    component: InputDescription,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/InputDescription',
    providerName: 'InputDescription',
  });
});
