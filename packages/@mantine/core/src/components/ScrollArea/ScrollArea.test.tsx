import { fireEvent } from '@testing-library/react';
import { render, tests } from '@mantine-tests/core';
import { DirectionProvider } from '../../core';
import { ScrollArea, ScrollAreaProps, ScrollAreaStylesNames } from './ScrollArea';

const defaultProps: ScrollAreaProps = {
  type: 'always',
  children: 'test',
};

function getViewport(container: HTMLElement) {
  const elements = container.querySelectorAll('div');
  const viewport = Array.from(elements).find((el) => {
    const style = window.getComputedStyle(el);
    return style.overflowX === 'scroll' || style.overflowY === 'scroll';
  });

  if (!viewport) {
    throw new Error('Viewport not found');
  }

  return viewport;
}

function mockResizeObserver(observe: jest.Mock, unobserve: jest.Mock) {
  const originalDescriptor = Object.getOwnPropertyDescriptor(window, 'ResizeObserver');

  Object.defineProperty(window, 'ResizeObserver', {
    configurable: true,
    writable: true,
    value: jest.fn().mockImplementation(() => ({
      observe,
      unobserve,
    })),
  });

  return () => {
    if (originalDescriptor) {
      Object.defineProperty(window, 'ResizeObserver', originalDescriptor);
    } else {
      Reflect.deleteProperty(window, 'ResizeObserver');
    }
  };
}

describe('@mantine/core/ScrollArea', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/ScrollArea',
    stylesApiSelectors: ['root', 'viewport'],
  });

  it('calls onScrollPositionChange when scrolled', () => {
    const spy = jest.fn();
    const { container } = render(
      <ScrollArea h={100} w={100} onScrollPositionChange={spy}>
        <div style={{ height: 500, width: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);

    Object.defineProperty(viewport, 'scrollTop', { value: 50, configurable: true });
    Object.defineProperty(viewport, 'scrollLeft', { value: 25, configurable: true });
    fireEvent.scroll(viewport);

    expect(spy).toHaveBeenCalledWith({ x: 25, y: 50 });
  });

  it('calls onBottomReached when scrolled to bottom', () => {
    const spy = jest.fn();
    const { container } = render(
      <ScrollArea h={100} onBottomReached={spy}>
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);

    Object.defineProperty(viewport, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollTop', { value: 400, configurable: true });

    fireEvent.scroll(viewport);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onTopReached when scrolled to top', () => {
    const spy = jest.fn();
    const { container } = render(
      <ScrollArea h={100} onTopReached={spy}>
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);

    Object.defineProperty(viewport, 'scrollTop', { value: 50, configurable: true });
    fireEvent.scroll(viewport);

    Object.defineProperty(viewport, 'scrollTop', { value: 0, configurable: true });
    fireEvent.scroll(viewport);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onLeftReached when scrolled to left', () => {
    const spy = jest.fn();
    const { container } = render(
      <ScrollArea w={100} onLeftReached={spy}>
        <div style={{ width: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);

    Object.defineProperty(viewport, 'scrollLeft', { value: 50, configurable: true });
    fireEvent.scroll(viewport);

    Object.defineProperty(viewport, 'scrollLeft', { value: 0, configurable: true });
    fireEvent.scroll(viewport);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onRightReached when scrolled to right', () => {
    const spy = jest.fn();
    const { container } = render(
      <ScrollArea w={100} onRightReached={spy}>
        <div style={{ width: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);

    Object.defineProperty(viewport, 'scrollWidth', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientWidth', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollLeft', { value: 400, configurable: true });

    fireEvent.scroll(viewport);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls scrollTo with startScrollPosition on mount', () => {
    const scrollToSpy = jest.fn();
    const originalScrollTo = Element.prototype.scrollTo;
    Element.prototype.scrollTo = scrollToSpy;

    render(
      <ScrollArea h={100} w={100} startScrollPosition={{ x: 50, y: 100 }}>
        <div style={{ height: 500, width: 500 }}>Content</div>
      </ScrollArea>
    );

    expect(scrollToSpy).toHaveBeenCalledWith({ left: 50, top: 100 });
    Element.prototype.scrollTo = originalScrollTo;
  });

  it('does not call scrollTo when startScrollPosition is not provided', () => {
    const scrollToSpy = jest.fn();
    const originalScrollTo = Element.prototype.scrollTo;
    Element.prototype.scrollTo = scrollToSpy;

    render(
      <ScrollArea h={100} w={100}>
        <div style={{ height: 500, width: 500 }}>Content</div>
      </ScrollArea>
    );

    expect(scrollToSpy).not.toHaveBeenCalled();
    Element.prototype.scrollTo = originalScrollTo;
  });

  it('does not call boundary callbacks multiple times when at boundary', () => {
    const topSpy = jest.fn();
    const bottomSpy = jest.fn();
    const { container } = render(
      <ScrollArea h={100} onTopReached={topSpy} onBottomReached={bottomSpy}>
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);

    Object.defineProperty(viewport, 'scrollTop', { value: 200, configurable: true });
    Object.defineProperty(viewport, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientHeight', { value: 100, configurable: true });
    fireEvent.scroll(viewport);

    Object.defineProperty(viewport, 'scrollTop', { value: 0, configurable: true });
    fireEvent.scroll(viewport);
    fireEvent.scroll(viewport);
    fireEvent.scroll(viewport);

    expect(topSpy).toHaveBeenCalledTimes(1);
    expect(bottomSpy).toHaveBeenCalledTimes(0);

    Object.defineProperty(viewport, 'scrollTop', { value: 200, configurable: true });
    fireEvent.scroll(viewport);

    Object.defineProperty(viewport, 'scrollTop', { value: 400, configurable: true });
    fireEvent.scroll(viewport);
    fireEvent.scroll(viewport);

    expect(bottomSpy).toHaveBeenCalledTimes(1);
  });

  it('observes viewport when offsetScrollbars is present', () => {
    const observe = jest.fn();
    const unobserve = jest.fn();
    const restoreResizeObserver = mockResizeObserver(observe, unobserve);

    try {
      const { container } = render(
        <ScrollArea h={100} type="always" offsetScrollbars="present">
          <div style={{ height: 500 }}>Content</div>
        </ScrollArea>
      );

      expect(observe).toHaveBeenCalledWith(container.querySelector('[data-scrollarea-viewport]'));
    } finally {
      restoreResizeObserver();
    }
  });

  it('does not set scroll fade attributes when scrollFade is not set', () => {
    const { container } = render(
      <ScrollArea h={100}>
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);
    expect(viewport).not.toHaveAttribute('data-scroll-fade');
    expect(viewport).not.toHaveAttribute('data-fade-top');
    expect(viewport).not.toHaveAttribute('data-fade-bottom');
  });

  it('sets data-scroll-fade attribute on the viewport, resolving true to the scrollbars axis', () => {
    const { container } = render(
      <ScrollArea h={100} scrollFade>
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    expect(getViewport(container)).toHaveAttribute('data-scroll-fade', 'xy');
  });

  it('resolves scrollFade to the restricted scrollbars axis when scrollbars is set', () => {
    const { container } = render(
      <ScrollArea h={100} scrollbars="y" scrollFade>
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    expect(getViewport(container)).toHaveAttribute('data-scroll-fade', 'y');
  });

  it('does not fade when scrollbars is false and scrollFade is true (bounded by scrollbars)', () => {
    const { container } = render(
      <ScrollArea h={100} scrollbars={false} scrollFade>
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    expect(container.querySelector('[data-scrollarea-viewport]')).not.toHaveAttribute(
      'data-scroll-fade'
    );
  });

  it('recomputes fade attributes when the fade axis changes', () => {
    const { container, rerender } = render(
      <ScrollArea w={100} scrollFade="x">
        <div style={{ width: 500, height: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);
    Object.defineProperty(viewport, 'scrollWidth', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientWidth', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollLeft', { value: 200, configurable: true });
    Object.defineProperty(viewport, 'scrollTop', { value: 200, configurable: true });
    fireEvent.scroll(viewport);

    expect(viewport).toHaveAttribute('data-fade-left');
    expect(viewport).toHaveAttribute('data-fade-right');

    // Wrapped in a fragment to match the test `render` wrapper so the component updates in place
    rerender(
      <ScrollArea w={100} scrollFade="y">
        <div style={{ width: 500, height: 500 }}>Content</div>
      </ScrollArea>
    );

    expect(viewport).not.toHaveAttribute('data-fade-left');
    expect(viewport).not.toHaveAttribute('data-fade-right');
    expect(viewport).toHaveAttribute('data-fade-top');
    expect(viewport).toHaveAttribute('data-fade-bottom');
  });

  it('shows the end fade and hides the start fade based on vertical scroll position', () => {
    const { container } = render(
      <ScrollArea h={100} scrollFade="y">
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);
    Object.defineProperty(viewport, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientHeight', { value: 100, configurable: true });

    Object.defineProperty(viewport, 'scrollTop', { value: 0, configurable: true });
    fireEvent.scroll(viewport);
    expect(viewport).not.toHaveAttribute('data-fade-top');
    expect(viewport).toHaveAttribute('data-fade-bottom');

    Object.defineProperty(viewport, 'scrollTop', { value: 200, configurable: true });
    fireEvent.scroll(viewport);
    expect(viewport).toHaveAttribute('data-fade-top');
    expect(viewport).toHaveAttribute('data-fade-bottom');

    Object.defineProperty(viewport, 'scrollTop', { value: 400, configurable: true });
    fireEvent.scroll(viewport);
    expect(viewport).toHaveAttribute('data-fade-top');
    expect(viewport).not.toHaveAttribute('data-fade-bottom');
  });

  it('scrollFade="x" only toggles horizontal fade attributes', () => {
    const { container } = render(
      <ScrollArea w={100} scrollFade="x">
        <div style={{ width: 500, height: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);
    Object.defineProperty(viewport, 'scrollWidth', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientWidth', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollLeft', { value: 200, configurable: true });
    Object.defineProperty(viewport, 'scrollTop', { value: 200, configurable: true });
    fireEvent.scroll(viewport);

    expect(viewport).toHaveAttribute('data-fade-left');
    expect(viewport).toHaveAttribute('data-fade-right');
    expect(viewport).not.toHaveAttribute('data-fade-top');
    expect(viewport).not.toHaveAttribute('data-fade-bottom');
  });

  it('scrollFade="y" only toggles vertical fade attributes', () => {
    const { container } = render(
      <ScrollArea scrollFade="y">
        <div style={{ width: 500, height: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);
    Object.defineProperty(viewport, 'scrollWidth', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientWidth', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollLeft', { value: 200, configurable: true });
    Object.defineProperty(viewport, 'scrollTop', { value: 200, configurable: true });
    fireEvent.scroll(viewport);

    expect(viewport).toHaveAttribute('data-fade-top');
    expect(viewport).toHaveAttribute('data-fade-bottom');
    expect(viewport).not.toHaveAttribute('data-fade-left');
    expect(viewport).not.toHaveAttribute('data-fade-right');
  });

  it('normalizes RTL scroll positions for horizontal fade attributes', () => {
    const { container } = render(
      <DirectionProvider initialDirection="rtl" detectDirection={false}>
        <ScrollArea w={100} scrollFade="x">
          <div style={{ width: 500 }}>Content</div>
        </ScrollArea>
      </DirectionProvider>
    );

    const viewport = getViewport(container);
    Object.defineProperty(viewport, 'scrollWidth', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientWidth', { value: 100, configurable: true });

    // At the start (right) edge in RTL scrollLeft is 0 – only the left edge has hidden content
    Object.defineProperty(viewport, 'scrollLeft', { value: 0, configurable: true });
    fireEvent.scroll(viewport);
    expect(viewport).not.toHaveAttribute('data-fade-right');
    expect(viewport).toHaveAttribute('data-fade-left');

    // Scrolled towards the left in RTL scrollLeft is negative – both edges have hidden content
    Object.defineProperty(viewport, 'scrollLeft', { value: -200, configurable: true });
    fireEvent.scroll(viewport);
    expect(viewport).toHaveAttribute('data-fade-right');
    expect(viewport).toHaveAttribute('data-fade-left');

    // Fully scrolled to the left (end) edge in RTL – only the right edge has hidden content
    Object.defineProperty(viewport, 'scrollLeft', { value: -400, configurable: true });
    fireEvent.scroll(viewport);
    expect(viewport).toHaveAttribute('data-fade-right');
    expect(viewport).not.toHaveAttribute('data-fade-left');
  });

  it('reuses the 0.8px sub-pixel tolerance so the end fade clears at the real bottom', () => {
    const { container } = render(
      <ScrollArea h={100} scrollFade="y">
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = getViewport(container);
    Object.defineProperty(viewport, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollTop', { value: 399.5, configurable: true });
    fireEvent.scroll(viewport);

    expect(viewport).not.toHaveAttribute('data-fade-bottom');
  });

  it('sets --scrollarea-fade-size from a numeric scrollFadeSize', () => {
    const { container } = render(
      <ScrollArea scrollFade scrollFadeSize={48}>
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    const root = getViewport(container).parentElement as HTMLElement;
    expect(root.style.getPropertyValue('--scrollarea-fade-size')).toBe(
      'calc(3rem * var(--mantine-scale))'
    );
  });

  it('sets --scrollarea-fade-size from a string scrollFadeSize', () => {
    const { container } = render(
      <ScrollArea scrollFade scrollFadeSize="2.5rem">
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea>
    );

    const root = getViewport(container).parentElement as HTMLElement;
    expect(root.style.getPropertyValue('--scrollarea-fade-size')).toBe('2.5rem');
  });

  it('sets data-vertical-scrollbar-position on viewport and scrollbars when verticalScrollbarPosition is set', () => {
    const { container } = render(
      <ScrollArea type="always" h={100} verticalScrollbarPosition="right">
        <div style={{ height: 500, width: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = container.querySelector('[data-scrollarea-viewport]');
    const verticalScrollbar = container.querySelector('[data-orientation="vertical"]');
    const horizontalScrollbar = container.querySelector('[data-orientation="horizontal"]');

    expect(viewport).toHaveAttribute('data-vertical-scrollbar-position', 'right');
    expect(verticalScrollbar).toHaveAttribute('data-vertical-scrollbar-position', 'right');
    expect(horizontalScrollbar).toHaveAttribute('data-vertical-scrollbar-position', 'right');
  });

  it('does not set data-vertical-scrollbar-position when verticalScrollbarPosition is omitted', () => {
    const { container } = render(
      <ScrollArea type="always" h={100}>
        <div style={{ height: 500, width: 500 }}>Content</div>
      </ScrollArea>
    );

    const viewport = container.querySelector('[data-scrollarea-viewport]');
    const verticalScrollbar = container.querySelector('[data-orientation="vertical"]');

    expect(viewport).not.toHaveAttribute('data-vertical-scrollbar-position');
    expect(verticalScrollbar).not.toHaveAttribute('data-vertical-scrollbar-position');
  });
});

describe('@mantine/core/ScrollAreaAutosize', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea.Autosize,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/ScrollAreaAutosize',
  });

  it('observes viewport when onOverflowChange is provided', () => {
    const observe = jest.fn();
    const unobserve = jest.fn();
    const restoreResizeObserver = mockResizeObserver(observe, unobserve);

    try {
      const { container } = render(
        <ScrollArea.Autosize h={100} type="always" onOverflowChange={jest.fn()}>
          <div style={{ height: 500 }}>Content</div>
        </ScrollArea.Autosize>
      );

      expect(observe).toHaveBeenCalledWith(container.querySelector('[data-scrollarea-viewport]'));
    } finally {
      restoreResizeObserver();
    }
  });

  it('forwards scrollFade to the inner ScrollArea', () => {
    const { container } = render(
      <ScrollArea.Autosize mah={100} scrollFade="y">
        <div style={{ height: 500 }}>Content</div>
      </ScrollArea.Autosize>
    );

    expect(getViewport(container)).toHaveAttribute('data-scroll-fade', 'y');
  });

  it('hides scrollbars and corner with type="never" while boundary callbacks still fire', () => {
    const onBottomReached = jest.fn();
    const { container } = render(
      <ScrollArea h={100} type="never" onBottomReached={onBottomReached}>
        <div style={{ height: 500, width: 500 }}>Content</div>
      </ScrollArea>
    );

    const scrollbars = container.querySelectorAll('.mantine-ScrollArea-scrollbar');
    expect(scrollbars).toHaveLength(2);
    scrollbars.forEach((scrollbar) => expect(scrollbar).toHaveAttribute('data-hidden'));
    container
      .querySelectorAll('.mantine-ScrollArea-corner')
      .forEach((corner) => expect(corner).toHaveAttribute('data-hidden'));

    const viewport = getViewport(container);
    Object.defineProperty(viewport, 'scrollHeight', { value: 500, configurable: true });
    Object.defineProperty(viewport, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(viewport, 'scrollTop', { value: 400, configurable: true });
    fireEvent.scroll(viewport);

    expect(onBottomReached).toHaveBeenCalledTimes(1);
  });
});
