import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Mark, MarkProps } from './Mark';

const defaultProps: MarkProps = {
  children: 'test-mark',
};

describe('@mantine/core/Mark', () => {
  itRendersChildren(Mark, defaultProps);
  itSupportsProviderVariant(Mark, defaultProps, 'Mark');
  itSupportsSystemProps({
    component: Mark,
    props: defaultProps,
    displayName: '@mantine/core/Mark',
    refType: HTMLElement,
    providerName: 'Mark',
  });
});
