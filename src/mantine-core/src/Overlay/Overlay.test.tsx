import React from 'react';
import {
  itRendersChildren,
  itIsPolymorphic,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { render } from '@testing-library/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Overlay, OverlayProps } from './Overlay';

const defaultProps: OverlayProps = {};

describe('@mantine/core/Overlay', () => {
  itIsPolymorphic(Overlay, defaultProps);
  itRendersChildren(Overlay, defaultProps);
  itSupportsProviderVariant(Overlay, defaultProps, 'Overlay');
  itSupportsSystemProps({
    component: Overlay,
    props: defaultProps,
    displayName: '@mantine/core/Overlay',
    refType: HTMLDivElement,
    providerName: 'Overlay',
  });

  it('adds data-center attribute to the root element when center prop is set', () => {
    const { container, rerender } = render(<Overlay center />);
    expect(container.firstChild).toHaveAttribute('data-center');

    rerender(<Overlay center={false} />);
    expect(container.firstChild).not.toHaveAttribute('data-center');
  });

  it('sets position style based on fixed prop', () => {
    const { container, rerender } = render(<Overlay fixed />);
    expect(container.firstChild).toHaveStyle({ position: 'fixed' });

    rerender(<Overlay fixed={false} />);
    expect(container.firstChild).toHaveStyle({ position: 'absolute' });
  });

  it('sets background-image styles if gradient prop is set', () => {
    const { container } = render(
      <Overlay gradient="linear-gradient(0deg, #000 0%, #fff 100%)" color="#EFF568" />
    );

    expect(container.firstChild).toHaveStyle({
      backgroundImage: 'linear-gradient(0deg, #000 0%, #fff 100%)',
    });

    expect(container.firstChild).not.toHaveStyle({ backgroundColor: '#EFF568' });
  });

  it('sets background-color based on color and opacity props', () => {
    const { container } = render(<Overlay color="#EFF568" opacity={0.2} />);
    expect(container.firstChild).toHaveStyle({
      backgroundColor: DEFAULT_THEME.fn.rgba('#EFF568', 0.2),
    });
  });

  it('sets border-radius styles based on radius prop', () => {
    const { container } = render(<Overlay radius={32} />);
    expect(container.firstChild).toHaveStyle({ borderRadius: '2rem' });
  });
});
