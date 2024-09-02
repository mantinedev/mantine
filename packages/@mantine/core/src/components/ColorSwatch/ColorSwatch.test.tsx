import { render, tests } from '@mantine-tests/core';
import { ColorSwatch, ColorSwatchProps, ColorSwatchStylesNames } from './ColorSwatch';

const defaultProps: ColorSwatchProps = {
  color: '#000',
  children: '$$',
  withShadow: true,
};

describe('@mantine/core/ColorSwatch', () => {
  tests.axe([
    <ColorSwatch color="#000" component="button" type="button" aria-label="test-color" key="1" />,
    <ColorSwatch color="#000" component="button" type="button" key="2">
      test-color
    </ColorSwatch>,
  ]);

  tests.itSupportsSystemProps<ColorSwatchProps, ColorSwatchStylesNames>({
    component: ColorSwatch,
    props: defaultProps,
    mod: true,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/ColorSwatch',
    stylesApiSelectors: [
      'root',
      'alphaOverlay',
      'childrenOverlay',
      'colorOverlay',
      'shadowOverlay',
    ],
  });

  it('renders shadow overlay only when withShadow is true', () => {
    const { container, rerender } = render(<ColorSwatch {...defaultProps} withShadow={false} />);
    expect(container.querySelector('.mantine-ColorSwatch-shadowOverlay')).not.toBeInTheDocument();

    rerender(<ColorSwatch {...defaultProps} withShadow />);
    expect(container.querySelector('.mantine-ColorSwatch-shadowOverlay')).toBeInTheDocument();
  });
});
