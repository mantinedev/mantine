import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  itSupportsSystemProps,
  itRendersChildren,
  checkAccessibility,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Carousel, CarouselProps } from './Carousel';

const defaultProps: CarouselProps = {
  children: (
    <>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      <Carousel.Slide>4</Carousel.Slide>
    </>
  ),
};

describe('@mantine/carousel/Carousel', () => {
  checkAccessibility([
    <Carousel nextControlLabel="Next slide" previousControlLabel="Previous slide" withIndicators>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      <Carousel.Slide>4</Carousel.Slide>
    </Carousel>,
  ]);

  itRendersChildren(Carousel, defaultProps);
  itSupportsProviderVariant(Carousel, defaultProps, 'Carousel', ['root', 'slide']);
  itSupportsSystemProps({
    component: Carousel,
    props: defaultProps,
    refType: HTMLDivElement,
    displayName: '@mantine/carousel/Carousel',
    providerName: 'Carousel',
  });

  it('calls onNextSlide and onPreviousSlide when next/previous buttons are clicked', async () => {
    const onNextSlide = jest.fn();
    const onPreviousSlide = jest.fn();

    render(
      <Carousel
        nextControlLabel="Next slide"
        previousControlLabel="Previous slide"
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
});
