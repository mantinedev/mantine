import { act } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { Marquee, MarqueeProps, MarqueeStylesNames } from './Marquee';

const defaultProps: MarqueeProps = {
  children: 'Test content',
};

describe('@mantine/core/Marquee', () => {
  tests.axe([
    <Marquee key="1">
      <a href="#first">First</a>
      <button type="button">Second</button>
    </Marquee>,
  ]);

  tests.itSupportsSystemProps<MarqueeProps, MarqueeStylesNames>({
    component: Marquee,
    props: defaultProps,
    varsResolver: true,
    children: false,
    displayName: '@mantine/core/Marquee',
    stylesApiSelectors: ['root', 'content', 'group'],
  });

  it('renders children in all group elements', () => {
    const { container, rerender } = render(<Marquee repeat={4}>test-children</Marquee>);
    const groups = container.querySelectorAll('.mantine-Marquee-group');
    expect(groups).toHaveLength(4);
    groups.forEach((group) => {
      expect(group.textContent).toBe('test-children');
    });

    rerender(<Marquee repeat={2}>test-children</Marquee>);
    expect(container.querySelectorAll('.mantine-Marquee-group')).toHaveLength(2);
  });

  it('sets data-orientation attribute based on orientation prop', () => {
    const { rerender, container } = render(<Marquee {...defaultProps} orientation="horizontal" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute(
      'data-orientation',
      'horizontal'
    );

    rerender(<Marquee {...defaultProps} orientation="vertical" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });

  it('sets data-reverse attribute when reverse prop is true', () => {
    const { rerender, container } = render(<Marquee {...defaultProps} reverse={false} />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute('data-reverse');

    rerender(<Marquee {...defaultProps} reverse />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute('data-reverse');
  });

  it('sets data-pause-on-hover attribute when pauseOnHover prop is true', () => {
    const { rerender, container } = render(<Marquee {...defaultProps} pauseOnHover={false} />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute(
      'data-pause-on-hover'
    );

    rerender(<Marquee {...defaultProps} pauseOnHover />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute('data-pause-on-hover');
  });

  it('supports duration prop', () => {
    const { container } = render(<Marquee {...defaultProps} duration={10000} />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({
      '--marquee-duration': '10000ms',
    });
  });

  it('supports gap prop', () => {
    const { container } = render(<Marquee {...defaultProps} gap="xl" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({
      '--marquee-gap': 'var(--mantine-spacing-xl)',
    });
  });

  it('sets data-fade-edges attribute when fadeEdges prop is true (default)', () => {
    const { container } = render(<Marquee {...defaultProps} />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute('data-fade-edges');
  });

  it('does not set data-fade-edges attribute when fadeEdges prop is false', () => {
    const { container } = render(<Marquee {...defaultProps} fadeEdges={false} />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute('data-fade-edges');
  });

  it('supports fadeEdgeColor prop', () => {
    const { container } = render(<Marquee {...defaultProps} fadeEdgeColor="red" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({
      '--marquee-fade-color': 'red',
    });
  });

  it('supports fadeEdgeSize prop', () => {
    const { container } = render(<Marquee {...defaultProps} fadeEdgeSize="10%" />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({
      '--marquee-fade-size': '10%',
    });
  });

  it('hides repeated groups from assistive technologies', () => {
    const { container } = render(
      <Marquee repeat={3}>
        <a href="#">link</a>
      </Marquee>
    );
    const groups = container.querySelectorAll('.mantine-Marquee-group');
    expect(groups[0]).not.toHaveAttribute('aria-hidden');
    expect(groups[1]).toHaveAttribute('aria-hidden', 'true');
    expect(groups[2]).toHaveAttribute('aria-hidden', 'true');
    groups.forEach((group) => expect(group).not.toHaveAttribute('inert'));
    expect(screen.getAllByRole('link')).toHaveLength(1);
  });

  it('removes focusable elements of repeated groups from the tab order', async () => {
    function Content({ withButton }: { withButton: boolean }) {
      return (
        <>
          <a href="#">link</a>
          {withButton && <button type="button">button</button>}
        </>
      );
    }

    const { container, rerender } = render(
      <Marquee repeat={3}>
        <Content withButton={false} />
      </Marquee>
    );
    const groups = container.querySelectorAll('.mantine-Marquee-group');
    expect(groups[0].querySelector('a')).not.toHaveAttribute('tabindex');
    expect(groups[1].querySelector('a')).toHaveAttribute('tabindex', '-1');
    expect(groups[2].querySelector('a')).toHaveAttribute('tabindex', '-1');

    rerender(
      <Marquee repeat={3}>
        <Content withButton />
      </Marquee>
    );
    await act(async () => {});
    expect(groups[0].querySelector('button')).not.toHaveAttribute('tabindex');
    expect(groups[1].querySelector('button')).toHaveAttribute('tabindex', '-1');
    expect(groups[2].querySelector('button')).toHaveAttribute('tabindex', '-1');
  });

  it('normalizes invalid repeat values', () => {
    const count = (repeat: number) => {
      const { container, unmount } = render(<Marquee repeat={repeat}>content</Marquee>);
      const result = container.querySelectorAll('.mantine-Marquee-group').length;
      const variable = (
        container.querySelector('.mantine-Marquee-root') as HTMLElement
      ).style.getPropertyValue('--marquee-repeat');
      unmount();
      return [result, variable];
    };

    expect(count(0)).toStrictEqual([1, '1']);
    expect(count(-1)).toStrictEqual([1, '1']);
    expect(count(2.5)).toStrictEqual([2, '2']);
    expect(count(NaN)).toStrictEqual([4, '4']);
  });

  describe('container measurement', () => {
    const originalResizeObserver = window.ResizeObserver;
    const originalGetBoundingClientRect = HTMLElement.prototype.getBoundingClientRect;
    const sizeProperties = ['offsetWidth', 'offsetHeight', 'clientWidth', 'clientHeight'] as const;
    const originalDescriptors = sizeProperties.map((property) =>
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, property)
    );
    let callbacks: ResizeObserverCallback[] = [];
    let sizes: { root: number | ((content: number) => number); group: number };

    const getSize = (element: HTMLElement): number => {
      if (element.classList.contains('mantine-Marquee-root')) {
        const content = element.querySelector('.mantine-Marquee-content') as HTMLElement;
        return typeof sizes.root === 'function' ? sizes.root(getSize(content)) : sizes.root;
      }

      if (element.classList.contains('mantine-Marquee-group')) {
        return sizes.group;
      }

      if (element.classList.contains('mantine-Marquee-content')) {
        return element.children.length * sizes.group;
      }

      return 0;
    };

    beforeEach(() => {
      callbacks = [];
      sizes = { root: 1000, group: 100 };
      window.ResizeObserver = class {
        constructor(callback: ResizeObserverCallback) {
          callbacks.push(callback);
        }
        observe() {}
        unobserve() {}
        disconnect() {
          callbacks = [];
        }
      } as any;

      HTMLElement.prototype.getBoundingClientRect = function getBoundingClientRect() {
        const size = getSize(this);
        return { width: size, height: size } as DOMRect;
      };

      sizeProperties.forEach((property) =>
        Object.defineProperty(HTMLElement.prototype, property, {
          configurable: true,
          get() {
            return getSize(this);
          },
        })
      );
    });

    afterEach(() => {
      window.ResizeObserver = originalResizeObserver;
      HTMLElement.prototype.getBoundingClientRect = originalGetBoundingClientRect;
      sizeProperties.forEach((property, index) => {
        const descriptor = originalDescriptors[index];
        if (descriptor) {
          Object.defineProperty(HTMLElement.prototype, property, descriptor);
        } else {
          delete (HTMLElement.prototype as any)[property];
        }
      });
    });

    const resize = () => act(() => callbacks.forEach((callback) => callback([], {} as any)));
    const getGroups = (container: HTMLElement) =>
      container.querySelectorAll('.mantine-Marquee-group');
    const resizeRounds = (container: HTMLElement, rounds: number) =>
      Array.from({ length: rounds }, () => {
        resize();
        return getGroups(container).length;
      });

    it('renders enough copies to fill the container', () => {
      const { container } = render(<Marquee repeat={2}>content</Marquee>);
      expect(getGroups(container)).toHaveLength(2);

      resize();
      expect(getGroups(container)).toHaveLength(11);
      expect(container.querySelector('.mantine-Marquee-root')).toHaveStyle({
        '--marquee-repeat': '11',
      });

      sizes.root = 150;
      resize();
      expect(getGroups(container)).toHaveLength(3);

      sizes.root = 50;
      resize();
      expect(getGroups(container)).toHaveLength(2);
    });

    it('stops adding copies when the root is sized by its content', () => {
      sizes.root = (content) => content;
      const { container } = render(<Marquee repeat={4}>content</Marquee>);
      expect(resizeRounds(container, 6)).toStrictEqual([5, 5, 5, 5, 5, 5]);
    });

    it('stops adding copies when a padded root is sized by its content', () => {
      sizes.root = (content) => content + 32;
      const { container } = render(
        <Marquee orientation="vertical" repeat={4} style={{ paddingTop: 16, paddingBottom: 16 }}>
          content
        </Marquee>
      );
      expect(resizeRounds(container, 6)).toStrictEqual([5, 5, 5, 5, 5, 5]);
    });

    it('adds a copy when the content exactly fills a fixed root', () => {
      sizes.root = 400;
      const { container } = render(<Marquee repeat={4}>content</Marquee>);
      expect(resizeRounds(container, 3)).toStrictEqual([5, 5, 5]);
    });

    it('adds copies when a fixed root is resized to match the content', () => {
      sizes.root = 600;
      const { container } = render(<Marquee repeat={4}>content</Marquee>);
      expect(resizeRounds(container, 2)).toStrictEqual([7, 7]);

      sizes.root = 700;
      expect(resizeRounds(container, 3)).toStrictEqual([8, 8, 8]);
    });
  });

  it('sets data-reduce-motion attribute on content', () => {
    const { container } = render(<Marquee {...defaultProps} />);
    expect(container.querySelector('.mantine-Marquee-content')).toHaveAttribute(
      'data-reduce-motion'
    );
  });

  it('sets data-paused attribute when playing is false', () => {
    const { container, rerender } = render(<Marquee {...defaultProps} />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute('data-paused');

    rerender(<Marquee {...defaultProps} playing={false} />);
    expect(container.querySelector('.mantine-Marquee-root')).toHaveAttribute('data-paused');

    rerender(<Marquee {...defaultProps} playing />);
    expect(container.querySelector('.mantine-Marquee-root')).not.toHaveAttribute('data-paused');
  });
});
