import { itIsPolymorphic, itSupportsSystemProps } from '@mantine/tests';
import { ColorSwatch, ColorSwatchProps } from './ColorSwatch';

const defaultProps: ColorSwatchProps<'div'> = {
  color: '#fff',
};

describe('@mantine/core/ColorSwatch', () => {
  itIsPolymorphic(ColorSwatch, defaultProps);
  itSupportsSystemProps({
    component: ColorSwatch,
    props: defaultProps,
    displayName: '@mantine/core/ColorSwatch',
    refType: HTMLDivElement,
  });
});
