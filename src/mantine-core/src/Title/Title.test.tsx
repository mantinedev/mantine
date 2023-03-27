import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@mantine/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsProviderVariant(Title, defaultProps, 'Title');
  itSupportsProviderSize(Title, defaultProps, 'Title');
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@mantine/core/Title',
    refType: HTMLHeadingElement,
    providerName: 'Title',
  });
});
