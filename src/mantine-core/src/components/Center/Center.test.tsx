import { itRendersChildren, itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps<'div'> = {
  children: 'test-center',
};

describe('@mantine/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@mantine/core/Center',
    refType: HTMLDivElement,
  });
});
