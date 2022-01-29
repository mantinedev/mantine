import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { ThemeIcon, ThemeIconProps } from './ThemeIcon';

const defaultProps: ThemeIconProps = {
  children: 'test-icon',
};

describe('@mantine/core/ThemeIcon', () => {
  itRendersChildren(ThemeIcon, defaultProps);
  itSupportsSystemProps({
    component: ThemeIcon,
    props: defaultProps,
    displayName: '@mantine/core/ThemeIcon',
    refType: HTMLDivElement,
  });
});
