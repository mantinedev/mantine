import {
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps = {
  color: '#fff',
};

describe('@mantine/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch as any, defaultProps);
  itSupportsProviderVariant(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsProviderSize(ColorSwatch, defaultProps, 'ColorSwatch');
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@mantine/core/ColorSwatch',
    refType: HTMLDivElement,
    providerName: 'ColorSwatch',
  });
});
