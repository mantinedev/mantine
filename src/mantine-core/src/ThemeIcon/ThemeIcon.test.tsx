import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@mantine/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsProviderVariant(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsProviderSize(ThemeIcon, defaultProps, 'ThemeIcon');
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@mantine/core/ThemeIcon',
    refType: HTMLDivElement,
    providerName: 'ThemeIcon',
  });
});
