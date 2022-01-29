import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Title, TitleProps } from './Title';

const defaultProps: TitleProps = {};

describe('@mantine/core/Title', () => {
  itRendersChildren(Title, defaultProps);
  itSupportsSystemProps({
    component: Title,
    props: defaultProps,
    displayName: '@mantine/core/Title',
    refType: HTMLHeadingElement,
  });
});
