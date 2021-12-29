import { itRendersChildren, itSupportsSystemProps } from '@mantine/tests';
import { Kbd, KbdProps } from './Kbd';

const defaultProps: KbdProps = { children: 'test' };

describe('@mantine/core/Kbd', () => {
  itRendersChildren(Kbd, defaultProps);
  itSupportsSystemProps({
    component: Kbd,
    props: defaultProps,
    displayName: '@mantine/core/Kbd',
    refType: HTMLElement,
  });
});
