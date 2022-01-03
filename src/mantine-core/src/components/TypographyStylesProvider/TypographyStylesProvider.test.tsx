import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import {
  TypographyStylesProvider,
  TypographyStylesProviderProps,
} from './TypographyStylesProvider';

const defaultProps: TypographyStylesProviderProps = {
  children: 'test-children',
};

describe('@mantine/core/TypographyStylesProvider', () => {
  itRendersChildren(TypographyStylesProvider, defaultProps);
  itSupportsSystemProps({
    component: TypographyStylesProvider,
    props: defaultProps,
    displayName: '@mantine/core/TypographyStylesProvider',
    refType: HTMLDivElement,
  });
});
