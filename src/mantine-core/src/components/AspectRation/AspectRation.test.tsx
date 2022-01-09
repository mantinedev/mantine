import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { AspectRation, AspectRationProps } from './AspectRation';

const defaultProps: AspectRationProps = {};

describe('@mantine/core/AspectRation', () => {
  itRendersChildren(AspectRation, defaultProps);
  itSupportsSystemProps({
    component: AspectRation,
    props: defaultProps,
    displayName: '@mantine/core/AspectRation',
    refType: HTMLDivElement,
  });
});
