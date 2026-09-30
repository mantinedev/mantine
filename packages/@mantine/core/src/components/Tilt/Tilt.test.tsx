import { fireEvent } from '@testing-library/react';
import { render, tests } from '@mantine-tests/core';
import { Tilt, TiltProps, TiltStylesNames } from './Tilt';
import { TiltLayer } from './TiltLayer';

const defaultProps: TiltProps = {
  withGlare: true,
  children: <Tilt.Layer>content</Tilt.Layer>,
};

function mockRect(node: Element) {
  node.getBoundingClientRect = () =>
    ({
      left: 0,
      top: 0,
      width: 200,
      height: 100,
      right: 200,
      bottom: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    }) as DOMRect;
}

describe('@mantine/core/Tilt', () => {
  tests.itSupportsSystemProps<TiltProps, TiltStylesNames>({
    component: Tilt,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Tilt',
    stylesApiSelectors: ['root', 'content', 'glare', 'layer'],
  });

  it('exposes TiltLayer as Tilt.Layer', () => {
    expect(Tilt.Layer).toBe(TiltLayer);
  });

  it('renders glare only when withGlare is set', () => {
    const { container, rerender } = render(
      <Tilt>
        <div>content</div>
      </Tilt>
    );
    expect(container.querySelector('.mantine-Tilt-glare')).toBeNull();

    rerender(
      <>
        <Tilt withGlare>
          <div>content</div>
        </Tilt>
      </>
    );
    expect(container.querySelector('.mantine-Tilt-glare')).not.toBeNull();
  });

  it('sets data-track-window attribute when trackWindow is set', () => {
    const { container, rerender } = render(
      <Tilt>
        <div>content</div>
      </Tilt>
    );
    expect(container.querySelector('.mantine-Tilt-root')).not.toHaveAttribute('data-track-window');

    rerender(
      <>
        <Tilt trackWindow>
          <div>content</div>
        </Tilt>
      </>
    );
    expect(container.querySelector('.mantine-Tilt-root')).toHaveAttribute('data-track-window');
  });

  it('rotates the content based on the pointer position', () => {
    const { container } = render(
      <Tilt maxRotate={20}>
        <div>content</div>
      </Tilt>
    );
    const root = container.querySelector('.mantine-Tilt-root')!;
    mockRect(root);
    fireEvent.mouseMove(root, { clientX: 200, clientY: 0 });

    const content = container.querySelector('.mantine-Tilt-content') as HTMLElement;
    expect(content.style.transform).toContain('rotateX(20deg)');
    expect(content.style.transform).toContain('rotateY(20deg)');
  });

  it('shifts Tilt.Layer based on its depth', () => {
    const { container } = render(
      <Tilt>
        <Tilt.Layer depth={1} shift={20}>
          layer
        </Tilt.Layer>
      </Tilt>
    );
    const root = container.querySelector('.mantine-Tilt-root')!;
    mockRect(root);

    fireEvent.mouseMove(root, { clientX: 200, clientY: 0 });

    const layer = container.querySelector('.mantine-Tilt-layer') as HTMLElement;
    expect(layer.style.transform).toBe('translate(20px, -20px)');
  });

  it('resets the content when the pointer leaves', () => {
    const { container } = render(
      <Tilt maxRotate={20}>
        <div>content</div>
      </Tilt>
    );
    const root = container.querySelector('.mantine-Tilt-root')!;
    mockRect(root);

    fireEvent.mouseMove(root, { clientX: 200, clientY: 0 });
    const content = container.querySelector('.mantine-Tilt-content') as HTMLElement;
    expect(content.style.transform).toContain('rotateX(20deg)');

    fireEvent.mouseLeave(root);
    expect(content.style.transform).toBe('rotateX(0deg) rotateY(0deg)');
  });

  it('moves the glare towards the pointer', () => {
    const { container } = render(
      <Tilt withGlare>
        <div>content</div>
      </Tilt>
    );
    const root = container.querySelector('.mantine-Tilt-root')!;
    mockRect(root);

    fireEvent.mouseMove(root, { clientX: 200, clientY: 0 });

    const glare = container.querySelector('.mantine-Tilt-glare') as HTMLElement;
    expect(glare.style.getPropertyValue('--tilt-glare-transform')).toBe('translate(28%, -28%)');
    expect(glare.style.transform).toBe('');
  });

  it('uses transitionDuration while moving and twice the duration on reset by default', () => {
    const { container } = render(
      <Tilt transitionDuration={100}>
        <div>content</div>
      </Tilt>
    );
    const root = container.querySelector('.mantine-Tilt-root')!;
    const content = container.querySelector('.mantine-Tilt-content') as HTMLElement;
    mockRect(root);

    fireEvent.mouseMove(root, { clientX: 200, clientY: 0 });
    expect(content.style.transition).toBe('transform 100ms ease-out');

    fireEvent.mouseLeave(root);
    expect(content.style.transition).toBe('transform 200ms ease-out');
  });

  it('uses resetTransitionDuration when the content returns to the neutral position', () => {
    const { container } = render(
      <Tilt transitionDuration={100} resetTransitionDuration={600}>
        <div>content</div>
      </Tilt>
    );
    const root = container.querySelector('.mantine-Tilt-root')!;
    const content = container.querySelector('.mantine-Tilt-content') as HTMLElement;
    mockRect(root);

    fireEvent.mouseMove(root, { clientX: 200, clientY: 0 });
    expect(content.style.transition).toBe('transform 100ms ease-out');

    fireEvent.mouseLeave(root);
    expect(content.style.transition).toBe('transform 600ms ease-out');
  });

  it('clamps rotation to maxRotate when the pointer is outside the element with trackWindow', () => {
    const { container } = render(
      <Tilt trackWindow maxRotate={20}>
        <div>content</div>
      </Tilt>
    );
    const root = container.querySelector('.mantine-Tilt-root')!;
    mockRect(root);

    fireEvent.mouseMove(window, { clientX: 2000, clientY: 1000 });

    const content = container.querySelector('.mantine-Tilt-content') as HTMLElement;
    expect(content.style.transform).toBe('rotateX(-20deg) rotateY(20deg)');
  });

  it('does not rotate the content when reduced motion is preferred', () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    try {
      const { container } = render(
        <Tilt maxRotate={20}>
          <div>content</div>
        </Tilt>
      );
      const root = container.querySelector('.mantine-Tilt-root')!;
      mockRect(root);

      fireEvent.mouseMove(root, { clientX: 200, clientY: 0 });

      const content = container.querySelector('.mantine-Tilt-content') as HTMLElement;
      expect(content.style.transform).toBe('rotateX(0deg) rotateY(0deg)');
    } finally {
      window.matchMedia = originalMatchMedia;
    }
  });
});
