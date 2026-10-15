import { act } from '@testing-library/react';
import { lightbox, lightboxStore } from './lightbox.store';
import { LightboxSlideData } from './lightbox.types';

const slides: LightboxSlideData[] = [
  { src: 'image1.jpg', alt: 'First image', caption: 'Caption 1' },
  { src: 'image2.jpg', alt: 'Second image', caption: 'Caption 2' },
  { src: 'image3.jpg', alt: 'Third image' },
];

describe('@mantine/lightbox/lightbox.store', () => {
  afterEach(() => {
    lightboxStore.setState({ opened: false, slides: [], currentIndex: 0, loop: false });
  });

  it('store next/prev update currentIndex', () => {
    act(() => {
      lightbox.open({ slides });
    });

    expect(lightboxStore.getState().currentIndex).toBe(0);

    act(() => {
      lightbox.next();
    });
    expect(lightboxStore.getState().currentIndex).toBe(1);

    act(() => {
      lightbox.prev();
    });
    expect(lightboxStore.getState().currentIndex).toBe(0);
  });

  it('store next does not exceed bounds', () => {
    act(() => {
      lightbox.open({ slides, startIndex: 2 });
    });

    act(() => {
      lightbox.next();
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);
  });

  it('store prev does not go below zero', () => {
    act(() => {
      lightbox.open({ slides, startIndex: 0 });
    });

    act(() => {
      lightbox.prev();
    });
    expect(lightboxStore.getState().currentIndex).toBe(0);
  });

  it('store setIndex sets specific index', () => {
    act(() => {
      lightbox.open({ slides });
    });

    act(() => {
      lightbox.setIndex(2);
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);
  });

  it('store open clamps out of range startIndex', () => {
    act(() => {
      lightbox.open({ slides, startIndex: 10 });
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);
  });

  it('store setIndex clamps out of range values', () => {
    act(() => {
      lightbox.open({ slides });
    });

    act(() => {
      lightbox.setIndex(10);
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);

    act(() => {
      lightbox.setIndex(-5);
    });
    expect(lightboxStore.getState().currentIndex).toBe(0);
  });

  it('normalizes fractional and non-finite indices in the store', async () => {
    await act(async () => {
      lightbox.open({ slides });
      lightbox.setIndex(1.6);
    });
    expect(lightboxStore.getState().currentIndex).toBe(2);

    await act(async () => {
      lightbox.setIndex(NaN);
    });
    expect(lightboxStore.getState().currentIndex).toBe(0);

    await act(async () => {
      lightbox.open({ slides, startIndex: 1.2 });
    });
    expect(lightboxStore.getState().currentIndex).toBe(1);
  });
});
