import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {};

describe('@mantine/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@mantine/core/AspectRatio',
    refType: HTMLDivElement,
  });
});
