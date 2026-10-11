import { act, fireEvent } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { Carousel } from './Carousel';

const mockEmbla = {
  selected: 0,
  listeners: new Set<() => void>(),
  scrollSnapList: () => [0, 1, 2, 3],
  selectedScrollSnap: () => mockEmbla.selected,
  scrollTo: (index: number) => {
    mockEmbla.selected = index;
    mockEmbla.listeners.forEach((listener) => listener());
  },
  scrollNext: () => mockEmbla.scrollTo(Math.min(mockEmbla.selected + 1, 3)),
  scrollPrev: () => mockEmbla.scrollTo(Math.max(mockEmbla.selected - 1, 0)),
  canScrollNext: () => mockEmbla.selected < 3,
  canScrollPrev: () => mockEmbla.selected > 0,
  on: (_event: string, listener: () => void) => mockEmbla.listeners.add(listener),
  off: (_event: string, listener: () => void) => mockEmbla.listeners.delete(listener),
  reInit: () => {},
};

jest.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: () => [() => {}, mockEmbla],
}));

function renderCarousel(props: Record<string, any> = {}) {
  return render(
    <Carousel withIndicators {...props}>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      <Carousel.Slide>4</Carousel.Slide>
    </Carousel>
  );
}

function getIndicators() {
  return Array.from(screen.getByRole('group', { name: 'Slides' }).querySelectorAll('button'));
}

function expectCurrent(index: number) {
  const current = getIndicators().map((indicator) => indicator.getAttribute('aria-current'));
  expect(current).toStrictEqual(current.map((_, i) => (i === index ? 'true' : null)));
}

describe('@mantine/carousel/Carousel/navigation', () => {
  beforeEach(() => {
    mockEmbla.selected = 0;
    mockEmbla.listeners.clear();
  });

  it('renders an indicator button for each slide, all reachable with Tab', () => {
    renderCarousel();
    const indicators = getIndicators();
    expect(indicators).toHaveLength(4);
    indicators.forEach((indicator) => expect(indicator).not.toHaveAttribute('tabindex', '-1'));
    expectCurrent(0);
  });

  it('selects slide when indicator is clicked and calls onSlideChange', async () => {
    const onSlideChange = jest.fn();
    renderCarousel({ onSlideChange });
    await userEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }));
    expectCurrent(2);
    expect(onSlideChange).toHaveBeenLastCalledWith(2);
    expect(screen.getByRole('status')).toHaveTextContent('Slide 3 of 4');
  });

  it('changes slide with arrow keys on the root element', () => {
    const onSlideChange = jest.fn();
    renderCarousel({ onSlideChange });
    const root = screen.getByRole('region');

    act(() => {
      fireEvent.keyDown(root, { key: 'ArrowRight' });
    });
    expectCurrent(1);
    expect(onSlideChange).toHaveBeenLastCalledWith(1);

    act(() => {
      fireEvent.keyDown(root, { key: 'End' });
    });
    expectCurrent(3);

    act(() => {
      fireEvent.keyDown(root, { key: 'ArrowLeft' });
    });
    expectCurrent(2);

    act(() => {
      fireEvent.keyDown(root, { key: 'Home' });
    });
    expectCurrent(0);
  });

  it('does not change slide with keyboard when withKeyboardEvents is false', () => {
    renderCarousel({ withKeyboardEvents: false });
    act(() => {
      fireEvent.keyDown(screen.getByRole('region'), { key: 'ArrowRight' });
    });
    expectCurrent(0);
  });

  it('moves focus and selection between indicators with arrow keys', async () => {
    renderCarousel({ withKeyboardEvents: false });
    const indicators = getIndicators();
    indicators[0].focus();

    await userEvent.keyboard('{ArrowRight}');
    expect(getIndicators()[1]).toHaveFocus();
    expectCurrent(1);

    await userEvent.keyboard('{ArrowLeft}');
    await userEvent.keyboard('{ArrowLeft}');
    expect(getIndicators()[3]).toHaveFocus();
    expectCurrent(3);
  });
});
