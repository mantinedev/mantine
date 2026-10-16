import { act } from '@testing-library/react';
import { createContextContainer, render, screen, tests, userEvent } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { MenuLoadMore, MenuLoadMoreProps, MenuLoadMoreStylesNames } from './MenuLoadMore';

const TestContainer = createContextContainer<any>(MenuLoadMore, Menu, { opened: true });

type ObserverCallback = (entries: Partial<IntersectionObserverEntry>[]) => void;

const observers: { callback: ObserverCallback; disconnect: jest.Mock }[] = [];

class MockIntersectionObserver {
  disconnect = jest.fn();
  observe = jest.fn();
  unobserve = jest.fn();

  constructor(callback: ObserverCallback) {
    observers.push({ callback, disconnect: this.disconnect });
  }
}

const intersect = (isIntersecting: boolean) =>
  act(() => {
    observers[observers.length - 1]!.callback([{ isIntersecting }]);
  });

describe('@mantine/core/MenuLoadMore', () => {
  const originalObserver = window.IntersectionObserver;

  beforeEach(() => {
    observers.length = 0;
    window.IntersectionObserver = MockIntersectionObserver as any;
  });

  afterEach(() => {
    window.IntersectionObserver = originalObserver;
  });

  tests.itSupportsSystemProps<MenuLoadMoreProps, MenuLoadMoreStylesNames>({
    component: TestContainer,
    props: { children: 'Load more', leftSection: '$$' },
    children: true,
    displayName: '@mantine/core/MenuLoadMore',
    stylesApiSelectors: ['item', 'itemSection', 'itemLabel'],
    stylesApiName: 'Menu',
    compound: true,
    providerStylesApi: false,
  });

  it('calls onLoadMore on click and keeps the menu opened', async () => {
    const onLoadMore = jest.fn();
    const onClose = jest.fn();
    render(
      <Menu opened onClose={onClose} withinPortal={false}>
        <Menu.Dropdown>
          <Menu.LoadMore onLoadMore={onLoadMore}>Load more</Menu.LoadMore>
        </Menu.Dropdown>
      </Menu>
    );
    await userEvent.click(screen.getByRole('menuitem', { name: 'Load more' }));
    expect(onLoadMore).toHaveBeenCalled();
    expect(onClose).not.toHaveBeenCalled();
  });

  it('calls onLoadMore when focused', () => {
    const onLoadMore = jest.fn();
    render(<TestContainer onLoadMore={onLoadMore}>Load more</TestContainer>);
    act(() => screen.getByRole('menuitem').focus());
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it('calls onLoadMore when scrolled into view', () => {
    const onLoadMore = jest.fn();
    render(<TestContainer onLoadMore={onLoadMore}>Load more</TestContainer>);
    intersect(false);
    expect(onLoadMore).not.toHaveBeenCalled();
    intersect(true);
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it('does not observe or call onLoadMore while loading', async () => {
    const onLoadMore = jest.fn();
    render(
      <TestContainer onLoadMore={onLoadMore} loading>
        Load more
      </TestContainer>
    );
    expect(observers).toHaveLength(0);
    const item = screen.getByRole('menuitem');
    act(() => item.focus());
    await userEvent.click(item);
    expect(onLoadMore).not.toHaveBeenCalled();
  });

  it('does not observe or call onLoadMore when disabled', () => {
    const onLoadMore = jest.fn();
    render(
      <TestContainer onLoadMore={onLoadMore} disabled>
        Load more
      </TestContainer>
    );
    expect(observers).toHaveLength(0);
    expect(screen.getByRole('menuitem')).toBeDisabled();
  });

  it('observes again when loading finishes', () => {
    const onLoadMore = jest.fn();
    const { rerender } = render(
      <TestContainer onLoadMore={onLoadMore} loading>
        Load more
      </TestContainer>
    );
    rerender(<TestContainer onLoadMore={onLoadMore}>Load more</TestContainer>);
    expect(observers).toHaveLength(1);
    intersect(true);
    expect(onLoadMore).toHaveBeenCalledTimes(1);
  });

  it('marks the item busy and disabled and replaces left section with a loader while loading', () => {
    render(
      <TestContainer loading leftSection="$$">
        Load more
      </TestContainer>
    );
    const item = screen.getByRole('menuitem');
    expect(item).toHaveAttribute('aria-busy', 'true');
    expect(item).toHaveAttribute('aria-disabled', 'true');
    expect(item).toHaveAttribute('data-disabled');
    expect(item).not.toBeDisabled();
    expect(item).not.toHaveTextContent('$$');
    expect(item.querySelector('.mantine-Loader-root')).toBeInTheDocument();
  });
});
