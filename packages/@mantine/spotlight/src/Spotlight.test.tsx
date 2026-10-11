import { act } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Spotlight, SpotlightProps, SpotlightStylesNames } from './Spotlight';
import { createSpotlightStore, spotlight, triggerSelectedAction } from './spotlight.store';
import { SpotlightAction } from './SpotlightAction';
import { SpotlightActionsList } from './SpotlightActionsList';
import { SpotlightEmpty } from './SpotlightEmpty';
import { SpotlightFooter } from './SpotlightFooter';
import { SpotlightSearch } from './SpotlightSearch';

const defaultProps: SpotlightProps = {
  forceOpened: true,
  withinPortal: false,
  transitionProps: { duration: 0 },
  actions: [
    { id: '1', label: 'test-1', description: 'test-1', onClick: () => {}, leftSection: 'L' },
    { id: '2', label: 'test-2', description: 'test-2', onClick: () => {} },
    {
      group: 'test',
      actions: [{ id: '3', label: 'test-3', description: 'test-3', onClick: () => {} }],
    },
  ],
};

describe('@mantine/core/Spotlight', () => {
  tests.itSupportsSystemProps<SpotlightProps, SpotlightStylesNames>({
    component: Spotlight,
    props: defaultProps,
    displayName: '@mantine/spotlight/Spotlight',
    stylesApiSelectors: [
      'root',
      'action',
      'actionBody',
      'actionDescription',
      'actionLabel',
      'actionSection',
      'actionsList',
      'actionsGroup',
      'body',
      'content',
      'inner',
      'overlay',
      'search',
    ],
    selector: '.mantine-Spotlight-root',
    sizeSelector: '.mantine-Spotlight-root',
    variantSelector: '.mantine-Spotlight-root',
  });

  it('exposes static components and functions', () => {
    expect(Spotlight.Action).toBe(SpotlightAction);
    expect(Spotlight.ActionsList).toBe(SpotlightActionsList);
    expect(Spotlight.Empty).toBe(SpotlightEmpty);
    expect(Spotlight.Footer).toBe(SpotlightFooter);
    expect(Spotlight.Search).toBe(SpotlightSearch);
    expect(Spotlight.open).toBe(spotlight.open);
    expect(Spotlight.close).toBe(spotlight.close);
    expect(Spotlight.toggle).toBe(spotlight.toggle);
  });

  it('does not render actions list container when there are no actions', () => {
    const { container } = render(
      <Spotlight {...defaultProps} actions={[]} nothingFound="Nothing found" />
    );

    expect(screen.getByText('Nothing found')).toBeInTheDocument();
    expect(container.querySelector('.mantine-Spotlight-actionsList')).toBe(null);
  });

  it('triggerSelectedAction does not throw when listId is empty', () => {
    const store = createSpotlightStore();
    expect(() => triggerSelectedAction(store)).not.toThrow();
  });

  it('exposes combobox and listbox semantics', async () => {
    const store = createSpotlightStore();
    render(<Spotlight {...defaultProps} store={store} />);
    await act(async () => {});

    const input = screen.getByRole('combobox');
    const listbox = screen.getByRole('listbox');
    expect(input).toHaveAttribute('aria-controls', listbox.id);
    expect(input).toHaveAttribute('aria-expanded', 'true');
    expect(input).toHaveAttribute('aria-autocomplete', 'list');
    expect(screen.getAllByRole('option')).toHaveLength(3);
    expect(screen.getByRole('group', { name: 'test' })).toBeInTheDocument();

    await userEvent.type(input, '{ArrowDown}');
    const first = screen.getByRole('option', { name: /test-1/ });
    expect(first).toHaveAttribute('aria-selected', 'true');
    expect(input).toHaveAttribute('aria-activedescendant', first.id);
  });

  it('moves selection with arrow keys and wraps around', async () => {
    const store = createSpotlightStore();
    render(<Spotlight {...defaultProps} store={store} />);
    await act(async () => {});
    const input = screen.getByRole('combobox');

    await userEvent.type(input, '{ArrowDown}{ArrowUp}');
    expect(screen.getByRole('option', { name: /test-3/ })).toHaveAttribute('aria-selected', 'true');

    await userEvent.type(input, '{ArrowDown}');
    expect(screen.getByRole('option', { name: /test-1/ })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('option', { name: /test-3/ })).toHaveAttribute(
      'aria-selected',
      'false'
    );

    await userEvent.type(input, '{ArrowDown}{ArrowDown}');
    expect(screen.getByRole('option', { name: /test-3/ })).toHaveAttribute('aria-selected', 'true');
    expect(store.getState().selected).toBe(2);
  });

  it('triggers selected action on Enter and closes spotlight', async () => {
    const store = createSpotlightStore();
    const spy = jest.fn();
    store.setState({ ...store.getState(), opened: true });
    render(
      <Spotlight
        {...defaultProps}
        forceOpened={undefined}
        store={store}
        actions={[
          { id: '1', label: 'first', onClick: () => {} },
          { id: '2', label: 'second', onClick: spy },
        ]}
      />
    );
    await act(async () => {});

    await userEvent.type(screen.getByRole('combobox'), '{ArrowDown}{ArrowDown}{Enter}');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(store.getState().opened).toBe(false);
  });

  it('keeps spotlight opened when closeOnActionTrigger is false', async () => {
    const store = createSpotlightStore();
    const spy = jest.fn();
    store.setState({ ...store.getState(), opened: true });
    render(
      <Spotlight
        {...defaultProps}
        forceOpened={undefined}
        store={store}
        closeOnActionTrigger={false}
        actions={[{ id: '1', label: 'first', onClick: spy }]}
      />
    );
    await act(async () => {});

    await userEvent.type(screen.getByRole('combobox'), '{ArrowDown}{Enter}');
    expect(spy).toHaveBeenCalledTimes(1);
    expect(store.getState().opened).toBe(true);
  });

  it('per-action closeSpotlightOnTrigger overrides closeOnActionTrigger', async () => {
    const store = createSpotlightStore();
    store.setState({ ...store.getState(), opened: true });
    render(
      <Spotlight
        {...defaultProps}
        forceOpened={undefined}
        store={store}
        actions={[{ id: '1', label: 'first', closeSpotlightOnTrigger: false }]}
      />
    );
    await act(async () => {});

    await userEvent.type(screen.getByRole('combobox'), '{ArrowDown}{Enter}');
    expect(store.getState().opened).toBe(true);
  });

  it('works with list id that is not a valid CSS selector', async () => {
    const store = createSpotlightStore();
    const spy = jest.fn();
    render(
      <Spotlight
        {...defaultProps}
        store={store}
        scrollAreaProps={{ id: '1:list' } as any}
        actions={[{ id: '1', label: 'first', onClick: spy }]}
      />
    );
    await act(async () => {});

    await userEvent.type(screen.getByRole('combobox'), '{ArrowDown}{Enter}');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('announces the number of results when query changes', async () => {
    const store = createSpotlightStore();
    render(<Spotlight {...defaultProps} store={store} nothingFound="Nothing found" />);
    const status = screen.getByRole('status');
    expect(status).toHaveTextContent('');

    await userEvent.type(screen.getByRole('combobox'), 'test-1');
    expect(status).toHaveTextContent('1 result');

    await userEvent.type(screen.getByRole('combobox'), 'x');
    expect(status).toHaveTextContent('No results');
  });

  it('supports custom results announcement', async () => {
    const store = createSpotlightStore();
    render(
      <Spotlight
        {...defaultProps}
        store={store}
        getResultsAnnouncement={(count) => `Found ${count}`}
      />
    );

    await userEvent.type(screen.getByRole('combobox'), 'test');
    expect(screen.getByRole('status')).toHaveTextContent('Found 3');
  });
});
