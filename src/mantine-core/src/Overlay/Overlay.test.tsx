import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Overlay, OverlayProps } from './Overlay';

const defaultProps: OverlayProps = {};

describe('@mantine/core/Overlay', () => {
  itIsPolymorphic(Overlay, defaultProps);
  itRendersChildren(Overlay, defaultProps);
  itSupportsSystemProps({
    component: Overlay,
    props: defaultProps,
    displayName: '@mantine/core/Overlay',
    refType: HTMLDivElement,
    providerName: 'Overlay',
  });
});
