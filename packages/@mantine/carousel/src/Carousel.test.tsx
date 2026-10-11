import { fireEvent } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Carousel, CarouselProps, CarouselStylesNames } from './Carousel';

const defaultProps: CarouselProps = {
  children: (
    <>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      <Carousel.Slide>4</Carousel.Slide>
    </>
  ),
  withIndicators: true,
};

describe('@mantine/carousel/Carousel', () => {
  tests.axe([<Carousel {...defaultProps} />]);

  tests.itSupportsSystemProps<CarouselProps, CarouselStylesNames>({
    component: Carousel,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/carousel/Carousel',
    stylesApiSelectors: [
      'root',
      'container',
      'control',
      'controls',
      'indicators',
      'slide',
      'viewport',
    ],
  });

  it('calls onNextSlide and onPreviousSlide when next/previous buttons are clicked', async () => {
    const onNextSlide = jest.fn();
    const onPreviousSlide = jest.fn();

    render(
      <Carousel
        nextControlProps={{ 'aria-label': 'Next slide' }}
        previousControlProps={{ 'aria-label': 'Previous slide' }}
        onNextSlide={onNextSlide}
        onPreviousSlide={onPreviousSlide}
      />
    );

    await userEvent.click(screen.getByLabelText('Next slide'));
    expect(onNextSlide).toHaveBeenCalledTimes(1);
    expect(onPreviousSlide).toHaveBeenCalledTimes(0);

    await userEvent.click(screen.getByLabelText('Previous slide'));
    expect(onNextSlide).toHaveBeenCalledTimes(1);
    expect(onPreviousSlide).toHaveBeenCalledTimes(1);
  });

  it('sets data-orientation on the viewport', () => {
    const { container, rerender } = render(<Carousel {...defaultProps} />);
    expect(container.querySelector('.mantine-Carousel-viewport')).toHaveAttribute(
      'data-orientation',
      'horizontal'
    );

    rerender(<Carousel {...defaultProps} orientation="vertical" height={200} />);
    expect(container.querySelector('.mantine-Carousel-viewport')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });

  it('renders controls if withControls is true', () => {
    const { container } = render(<Carousel withControls />);
    expect(container.querySelector('.mantine-Carousel-controls')).toBeInTheDocument();
  });

  it('does not render controls if withControls is false', () => {
    const { container } = render(<Carousel withControls={false} />);
    expect(container.querySelector('.mantine-Carousel-controls')).not.toBeInTheDocument();
  });

  it('renders indicators if withIndicators is true', () => {
    const { container } = render(<Carousel withIndicators />);
    expect(container.querySelector('.mantine-Carousel-indicators')).toBeInTheDocument();
  });

  it('does not render indicators if withIndicators is false', () => {
    const { container } = render(<Carousel withIndicators={false} />);
    expect(container.querySelector('.mantine-Carousel-indicators')).not.toBeInTheDocument();
  });

  it('supports custom next/previous controls icons', () => {
    render(<Carousel nextControlIcon="Next icon" previousControlIcon="Previous icon" />);
    expect(screen.getByText('Next icon')).toBeInTheDocument();
    expect(screen.getByText('Previous icon')).toBeInTheDocument();
  });

  it('points previous/next controls aria-controls at the slides container', () => {
    const { container } = render(<Carousel {...defaultProps} id="test-carousel" />);
    const slides = container.querySelector('.mantine-Carousel-container')!;
    expect(slides).toHaveAttribute('id', 'test-carousel-slides');
    expect(screen.getByLabelText('Next slide')).toHaveAttribute('aria-controls', slides.id);
    expect(screen.getByLabelText('Previous slide')).toHaveAttribute('aria-controls', slides.id);
  });

  it('passes draggable attribute to the root element', () => {
    const { container } = render(<Carousel {...defaultProps} draggable={false} />);
    expect(container.querySelector('.mantine-Carousel-root')).toHaveAttribute('draggable', 'false');
  });

  it('calls latest onNextSlide and onPreviousSlide after rerender', async () => {
    const first = jest.fn();
    const second = jest.fn();
    const { rerender } = render(<Carousel {...defaultProps} onNextSlide={first} />);
    rerender(<Carousel {...defaultProps} onNextSlide={second} onPreviousSlide={second} />);

    await userEvent.click(screen.getByLabelText('Next slide'));
    await userEvent.click(screen.getByLabelText('Previous slide'));
    expect(first).not.toHaveBeenCalled();
    expect(second).toHaveBeenCalledTimes(2);
  });

  it('handles arrow keys on the root element', () => {
    const onNextSlide = jest.fn();
    const onPreviousSlide = jest.fn();
    render(
      <Carousel {...defaultProps} onNextSlide={onNextSlide} onPreviousSlide={onPreviousSlide} />
    );
    const root = screen.getByRole('region');
    fireEvent.keyDown(root, { key: 'ArrowRight' });
    expect(onNextSlide).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(root, { key: 'ArrowLeft' });
    expect(onPreviousSlide).toHaveBeenCalledTimes(1);
  });

  it('ignores arrow keys when withKeyboardEvents is false', () => {
    const onNextSlide = jest.fn();
    render(<Carousel {...defaultProps} withKeyboardEvents={false} onNextSlide={onNextSlide} />);
    fireEvent.keyDown(screen.getByRole('region'), { key: 'ArrowRight' });
    expect(onNextSlide).not.toHaveBeenCalled();
  });
});
