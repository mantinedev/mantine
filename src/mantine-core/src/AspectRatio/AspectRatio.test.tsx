import {
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const defaultProps: AspectRatioProps = {
  ratio: 16 / 9,
};

describe('@mantine/core/AspectRatio', () => {
  itRendersChildren(AspectRatio, defaultProps);
  itSupportsProviderVariant(AspectRatio, defaultProps, 'AspectRatio');
  itSupportsSystemProps({
    component: AspectRatio,
    props: defaultProps,
    displayName: '@mantine/core/AspectRatio',
    refType: HTMLDivElement,
    providerName: 'AspectRatio',
  });
});
