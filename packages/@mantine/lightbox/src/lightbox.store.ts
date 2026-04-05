import { createStore, MantineStore, useStore } from '@mantine/store';
import type { LightboxSlideData } from './lightbox.types';

export interface LightboxState {
  opened: boolean;
  slides: LightboxSlideData[];
  currentIndex: number;
}

export type LightboxStore = MantineStore<LightboxState>;

export const createLightboxStore = () =>
  createStore<LightboxState>({
    opened: false,
    slides: [],
    currentIndex: 0,
  });

export const useLightboxStore = (store: LightboxStore) => useStore(store);

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
      currentIndex: payload.startIndex ?? 0,
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
    return {
      currentIndex: nextIndex < state.slides.length ? nextIndex : state.currentIndex,
    };
  }, store);
}

export function prevLightboxAction(store: LightboxStore) {
  updateLightboxStateAction((state) => {
    const prevIndex = state.currentIndex - 1;
    return {
      currentIndex: prevIndex >= 0 ? prevIndex : state.currentIndex,
    };
  }, store);
}

export function setLightboxIndexAction(index: number, store: LightboxStore) {
  updateLightboxStateAction(() => ({ currentIndex: index }), store);
}

export const lightboxActions = {
  open: openLightboxAction,
  close: closeLightboxAction,
  next: nextLightboxAction,
  prev: prevLightboxAction,
  setIndex: setLightboxIndexAction,
  updateState: updateLightboxStateAction,
};

export function createLightbox() {
  const store = createLightboxStore();
  const actions = {
    open: (payload: { slides: LightboxSlideData[]; startIndex?: number }) =>
      openLightboxAction(payload, store),
    close: () => closeLightboxAction(store),
    next: () => nextLightboxAction(store),
    prev: () => prevLightboxAction(store),
    setIndex: (index: number) => setLightboxIndexAction(index, store),
  };

  return [store, actions] as const;
}

export const [lightboxStore, lightbox] = createLightbox();
