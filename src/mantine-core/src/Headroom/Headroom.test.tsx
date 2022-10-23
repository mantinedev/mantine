import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';

import { Headroom, HeadroomProps } from './Headroom';

const defaultProps: HeadroomProps = {};

describe('@mantine/core/Headroom', () => {
  itSupportsSystemProps({
    component: Headroom,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/core/Headroom',
    providerName: 'Headroom',
  });

  itRendersChildren(Headroom, defaultProps);
});
