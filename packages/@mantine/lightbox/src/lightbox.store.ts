import { createStore, MantineStore, useStore } from '@mantine/store';
import { LightboxSlideData } from './lightbox.types';

export interface LightboxState {
  /** Controls whether the lightbox is opened */
  opened: boolean;

  /** Array of slide data objects */
  slides: LightboxSlideData[];

  /** Index of the current slide */
  currentIndex: number;

  /** Determines whether `next` and `prev` actions wrap around, synced from the `loop` prop of `Lightbox.Provider` */
  loop: boolean;
}

export type LightboxStore = MantineStore<LightboxState>;

/** Creates a new lightbox store, use to run multiple independent lightboxes */
export const createLightboxStore = () =>
  createStore<LightboxState>({
    opened: false,
    slides: [],
    currentIndex: 0,
    loop: false,
  });

/** Subscribes to the given lightbox store and returns its current state */
export const useLightboxStore = (store: LightboxStore) => useStore(store);

function clampIndex(index: number, slidesCount: number) {
  const normalized = Number.isFinite(index) ? Math.round(index) : 0;
  return Math.max(0, Math.min(normalized, Math.max(0, slidesCount - 1)));
}

function openLightboxAction(
  payload: { slides: LightboxSlideData[]; startIndex?: number },
  store: LightboxStore
) {
  store.setState((state) => ({
    ...state,
    opened: true,
    slides: payload.slides,
    currentIndex: clampIndex(payload.startIndex ?? 0, payload.slides.length),
  }));
}

function closeLightboxAction(store: LightboxStore) {
  store.setState((state) => ({ ...state, opened: false }));
}

function nextLightboxAction(store: LightboxStore) {
  store.setState((state) => {
    const nextIndex = state.currentIndex + 1;

    if (nextIndex < state.slides.length) {
      return { ...state, currentIndex: nextIndex };
    }

    return {
      ...state,
      currentIndex: state.loop && state.slides.length > 0 ? 0 : state.currentIndex,
    };
  });
}

function prevLightboxAction(store: LightboxStore) {
  store.setState((state) => {
    const prevIndex = state.currentIndex - 1;

    if (prevIndex >= 0) {
      return { ...state, currentIndex: prevIndex };
    }

    return {
      ...state,
      currentIndex: state.loop && state.slides.length > 0 ? state.slides.length - 1 : 0,
    };
  });
}

function setLightboxIndexAction(index: number, store: LightboxStore) {
  store.setState((state) => ({
    ...state,
    currentIndex: clampIndex(index, state.slides.length),
  }));
}

export function createLightboxActions(store: LightboxStore) {
  return {
    /** Opens the lightbox with the given slides, optionally at the given index */
    open: (payload: { slides: LightboxSlideData[]; startIndex?: number }) =>
      openLightboxAction(payload, store),

    /** Closes the lightbox */
    close: () => closeLightboxAction(store),

    /** Navigates to the next slide */
    next: () => nextLightboxAction(store),

    /** Navigates to the previous slide */
    prev: () => prevLightboxAction(store),

    /** Sets the current slide index, the value is clamped to the slides range */
    setIndex: (index: number) => setLightboxIndexAction(index, store),
  };
}

/** Creates an isolated store and a set of actions bound to it, use to run multiple independent lightboxes */
export function createLightbox() {
  const store = createLightboxStore();
  return [store, createLightboxActions(store)] as const;
}

/** Default lightbox store (`lightboxStore`) and actions bound to it (`lightbox`), used by `Lightbox.Provider` and static `Lightbox.open/close/next/prev/setIndex` methods */
export const [lightboxStore, lightbox] = createLightbox();
