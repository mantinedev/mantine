import { fireEvent } from '@testing-library/react';
import { render, tests } from '@mantine-tests/core';
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
});

describe('@mantine/core/ScrollAreaAutosize', () => {
  tests.itSupportsSystemProps<ScrollAreaProps, ScrollAreaStylesNames>({
    component: ScrollArea.Autosize,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/ScrollAreaAutosize',
  });
});
