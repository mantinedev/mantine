import { createStore, MantineStore, useStore } from '@mantine/store';
import type { LightboxSlideData } from './lightbox.types';

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
  return Math.max(0, Math.min(index, Math.max(0, slidesCount - 1)));
}

export function updateLightboxStateAction(
  update: (state: LightboxState) => Partial<LightboxState>,
  store: LightboxStore
) {
  const state = store.getState();
  store.setState({ ...state, ...update(state) });
}

export function openLightboxAction(
  payload: { slides: LightboxSlideData[]; startIndex?: number },
  store: LightboxStore
) {
  updateLightboxStateAction(
    () => ({
      opened: true,
      slides: payload.slides,
      currentIndex: clampIndex(payload.startIndex ?? 0, payload.slides.length),
    }),
    store
  );
}

export function closeLightboxAction(store: LightboxStore) {
  updateLightboxStateAction(() => ({ opened: false }), store);
}

export function nextLightboxAction(store: LightboxStore) {
  updateLightboxStateAction((state) => {
    const nextIndex = state.currentIndex + 1;

    if (nextIndex < state.slides.length) {
      return { currentIndex: nextIndex };
    }

    return { currentIndex: state.loop && state.slides.length > 0 ? 0 : state.currentIndex };
  }, store);
}

export function prevLightboxAction(store: LightboxStore) {
  updateLightboxStateAction((state) => {
    const prevIndex = state.currentIndex - 1;

    if (prevIndex >= 0) {
      return { currentIndex: prevIndex };
    }

    return {
      currentIndex: state.loop && state.slides.length > 0 ? state.slides.length - 1 : 0,
    };
  }, store);
}

export function setLightboxIndexAction(index: number, store: LightboxStore) {
  updateLightboxStateAction(
    (state) => ({ currentIndex: clampIndex(index, state.slides.length) }),
    store
  );
}

export const lightboxActions = {
  open: openLightboxAction,
  close: closeLightboxAction,
  next: nextLightboxAction,
  prev: prevLightboxAction,
  setIndex: setLightboxIndexAction,
  updateState: updateLightboxStateAction,
};

/** Creates an isolated store and a set of actions bound to it, use to run multiple independent lightboxes */
export function createLightbox() {
  const store = createLightboxStore();
  const actions = {
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

  return [store, actions] as const;
}

/** Default lightbox store (`lightboxStore`) and actions bound to it (`lightbox`), used by `Lightbox.Provider` and static `Lightbox.open/close/next/prev/setIndex` methods */
export const [lightboxStore, lightbox] = createLightbox();
