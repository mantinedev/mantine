import { clamp } from '@mantine/hooks';
import { createStore, MantineStore, useStore } from '@mantine/store';

export interface SpotlightState {
  opened: boolean;
  selected: number;
  listId: string;
  query: string;
  empty: boolean;
  registeredActions: Set<string>;
}

export type SpotlightStore = MantineStore<SpotlightState>;

export const createSpotlightStore = () =>
  createStore<SpotlightState>({
    opened: false,
    empty: false,
    selected: -1,
    listId: '',
    query: '',
    registeredActions: new Set(),
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
  updateSpotlightStateAction(() => ({ opened: true, selected: -1 }), store);
}

export function closeSpotlightAction(store: SpotlightStore) {
  updateSpotlightStateAction(() => ({ opened: false }), store);
}

export function toggleSpotlightAction(store: SpotlightStore) {
  updateSpotlightStateAction(
    (state) => ({ opened: !state.opened, selected: state.opened ? state.selected : -1 }),
    store
  );
}

export function setSelectedAction(index: number, store: SpotlightStore) {
  store.updateState((state) => ({ ...state, selected: index }));
}

export function setListId(id: string, store: SpotlightStore) {
  store.updateState((state) => ({ ...state, listId: id }));
}

function findElementByQuerySelector<T extends HTMLElement>(
  selector: string,
  root: Document | Element | ShadowRoot = document
): T | null {
  // Directly try to find the element in the current root.
  const element = root.querySelector<T>(selector);
  if (element) {
    return element;
  }

  // Iterate through all children of the current root.
  const children = root instanceof ShadowRoot ? root.host.children : root.children;
  for (let i = 0; i < children.length; i += 1) {
    const child = children[i];

    // Recursively search in the child's shadow root if it exists.
    if (child.shadowRoot) {
      const shadowElement = findElementByQuerySelector<T>(selector, child.shadowRoot);
      if (shadowElement) {
        return shadowElement;
      }
    }

    // Also, search recursively in the child itself if it does not have a shadow root or the element wasn't found in its shadow root.
    const nestedElement = findElementByQuerySelector<T>(selector, child);
    if (nestedElement) {
      return nestedElement;
    }
  }

  // Return null if the element isn't found in the current root or any of its shadow DOMs.
  return null;
}

export function selectAction(index: number, store: SpotlightStore): number {
  const state = store.getState();
  const actionsList = state.listId ? findElementByQuerySelector(`#${state.listId}`) : null;
  const selected = actionsList?.querySelector<HTMLButtonElement>('[data-selected]');
  const actions = actionsList?.querySelectorAll<HTMLButtonElement>('[data-action]') ?? [];
  const nextIndex = index === -1 ? actions.length - 1 : index === actions.length ? 0 : index;

  const selectedIndex = clamp(nextIndex, 0, actions.length - 1);
  selected?.removeAttribute('data-selected');
  actions[selectedIndex]?.scrollIntoView({ block: 'nearest' });
  actions[selectedIndex]?.setAttribute('data-selected', 'true');
  setSelectedAction(selectedIndex, store);

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
  const selected = findElementByQuerySelector<HTMLButtonElement>(
    `#${state.listId} [data-selected]`
  );
  selected?.click();
}

export function registerAction(id: string, store: SpotlightStore) {
  const state = store.getState();
  state.registeredActions.add(id);
  return () => {
    state.registeredActions.delete(id);
  };
}

export function setQuery(query: string, store: SpotlightStore) {
  updateSpotlightStateAction(() => ({ query }), store);
  Promise.resolve().then(() => {
    selectAction(0, store);
    updateSpotlightStateAction(
      (state) => ({
        empty: (state.query.trim().length > 0 && state.registeredActions.size === 0) || false,
      }),
      store
    );
  });
}

export function clearSpotlightState(
  { clearQuery }: { clearQuery: boolean | undefined },
  store: SpotlightStore
) {
  store.updateState((state) => ({
    ...state,
    selected: -1,
    query: clearQuery ? '' : state.query,
    empty: clearQuery ? false : state.empty,
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
  registerAction,
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
