import { clamp } from '@mantine/hooks';
import { createStore, MantineStore, useStore } from '@mantine/store';

export interface SpotlightState {
  opened: boolean;
  selected: number;
  listId: string;
  query: string;
  selectedActionId: string | null;
}

export type SpotlightStore = MantineStore<SpotlightState>;

export const createSpotlightStore = () =>
  createStore<SpotlightState>({
    opened: false,
    selected: -1,
    selectedActionId: null,
    listId: '',
    query: '',
  });

export const useSpotlight = (store: SpotlightStore) => useStore(store);

export function updateSpotlightStateAction(
  update: (state: SpotlightState) => Partial<SpotlightState>,
  store: SpotlightStore
) {
  const state = store.getState();
  store.setState({ ...state, ...update(store.getState()) });
}

export function openSpotlightAction(store: SpotlightStore) {
  updateSpotlightStateAction(() => ({ opened: true, selected: -1, selectedActionId: null }), store);
}

export function closeSpotlightAction(store: SpotlightStore) {
  updateSpotlightStateAction(() => ({ opened: false }), store);
}

export function toggleSpotlightAction(store: SpotlightStore) {
  updateSpotlightStateAction(
    (state) =>
      state.opened ? { opened: false } : { opened: true, selected: -1, selectedActionId: null },
    store
  );
}

export function setSelectedAction(
  index: number,
  store: SpotlightStore,
  selectedActionId: string | null = null
) {
  store.setState((state) => ({ ...state, selected: index, selectedActionId }));
}

export function setListId(id: string, store: SpotlightStore) {
  store.setState((state) => ({ ...state, listId: id }));
}

function findElementById<T extends HTMLElement>(
  id: string,
  root: Document | ShadowRoot = document
): T | null {
  const element = root.getElementById(id);
  if (element) {
    return element as T;
  }

  const elements = root.querySelectorAll('*');
  for (let i = 0; i < elements.length; i += 1) {
    const shadowRoot = elements[i].shadowRoot;
    if (shadowRoot) {
      const shadowElement = findElementById<T>(id, shadowRoot);
      if (shadowElement) {
        return shadowElement;
      }
    }
  }

  return null;
}

export function selectAction(index: number, store: SpotlightStore): number {
  const state = store.getState();
  const actionsList = state.listId ? findElementById(state.listId) : null;
  const selected = actionsList?.querySelector<HTMLButtonElement>('[data-selected]');
  const actions = actionsList?.querySelectorAll<HTMLButtonElement>('[data-action]') ?? [];
  const nextIndex = index === -1 ? actions.length - 1 : index === actions.length ? 0 : index;

  const selectedIndex = clamp(nextIndex, 0, actions.length - 1);
  const nextSelected = actions[selectedIndex];
  selected?.removeAttribute('data-selected');
  selected?.setAttribute('aria-selected', 'false');
  nextSelected?.scrollIntoView({ block: 'nearest' });
  nextSelected?.setAttribute('data-selected', 'true');
  nextSelected?.setAttribute('aria-selected', 'true');
  setSelectedAction(selectedIndex, store, nextSelected?.id || null);

  return selectedIndex;
}

export function selectNextAction(store: SpotlightStore) {
  return selectAction(store.getState().selected + 1, store);
}

export function selectPreviousAction(store: SpotlightStore) {
  return selectAction(store.getState().selected - 1, store);
}

export function triggerSelectedAction(store: SpotlightStore) {
  const state = store.getState();
  const actionsList = state.listId ? findElementById(state.listId) : null;
  actionsList?.querySelector<HTMLButtonElement>('[data-selected]')?.click();
}

export function setQuery(query: string, store: SpotlightStore) {
  updateSpotlightStateAction(() => ({ query }), store);
  Promise.resolve().then(() => {
    selectAction(0, store);
  });
}

export function clearSpotlightState(
  { clearQuery }: { clearQuery: boolean | undefined },
  store: SpotlightStore
) {
  store.updateState((state) => ({
    ...state,
    selected: -1,
    selectedActionId: null,
    query: clearQuery ? '' : state.query,
  }));
}

export const spotlightActions = {
  open: openSpotlightAction,
  close: closeSpotlightAction,
  toggle: toggleSpotlightAction,
  updateState: updateSpotlightStateAction,
  setSelectedAction,
  setListId,
  selectAction,
  selectNextAction,
  selectPreviousAction,
  triggerSelectedAction,
  setQuery,
  clearSpotlightState,
};

export function createSpotlight() {
  const store = createSpotlightStore();
  const actions = {
    open: () => openSpotlightAction(store),
    close: () => closeSpotlightAction(store),
    toggle: () => toggleSpotlightAction(store),
  };

  return [store, actions] as const;
}

export const [spotlightStore, spotlight] = createSpotlight();
export const { open: openSpotlight, close: closeSpotlight, toggle: toggleSpotlight } = spotlight;
