import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Center, CenterProps } from './Center';

const defaultProps: CenterProps = {
  children: 'test-center',
};

describe('@mantine/core/Center', () => {
  itRendersChildren(Center, defaultProps);
  itIsPolymorphic(Center, defaultProps);
  itSupportsProviderVariant(Center, defaultProps, 'Center');
  itSupportsSystemProps({
    component: Center,
    props: defaultProps,
    displayName: '@mantine/core/Center',
    refType: HTMLDivElement,
    providerName: 'Center',
  });
});
