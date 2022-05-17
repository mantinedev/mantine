import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Overlay, OverlayProps } from './Overlay';

const defaultProps: OverlayProps<'div'> = {};

describe('@mantine/core/Overlay', () => {
  itIsPolymorphic(Overlay as any, defaultProps);
  itRendersChildren(Overlay as any, defaultProps);
  itSupportsSystemProps({
    component: Overlay,
    props: defaultProps,
    displayName: '@mantine/core/Overlay',
    refType: HTMLDivElement,
    providerName: 'Overlay',
  });
});
