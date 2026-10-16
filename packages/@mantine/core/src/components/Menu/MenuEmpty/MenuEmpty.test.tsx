import { act } from '@testing-library/react';
import { createContextContainer, render, screen, tests } from '@mantine-tests/core';
import { Menu } from '../Menu';
import { MenuEmpty, MenuEmptyProps, MenuEmptyStylesNames } from './MenuEmpty';

const TestContainer = createContextContainer(MenuEmpty, Menu, { opened: true });

const defaultProps: MenuEmptyProps = {};

describe('@mantine/core/MenuEmpty', () => {
  tests.itSupportsSystemProps<MenuEmptyProps, MenuEmptyStylesNames>({
    component: TestContainer,
    props: defaultProps,
    children: true,
    displayName: '@mantine/core/MenuEmpty',
    stylesApiSelectors: ['empty'],
    stylesApiName: 'Menu',
    compound: true,
    providerStylesApi: false,
  });

  it('is exposed as a disabled menu item', () => {
    render(<TestContainer>Nothing found</TestContainer>);
    const item = screen.getByRole('menuitem', { name: 'Nothing found' });
    expect(item).toHaveAttribute('aria-disabled', 'true');
    expect(item).not.toHaveAttribute('data-menu-item');
    expect(item).not.toHaveAttribute('tabindex');
  });

  describe('announcements', () => {
    const getRegion = () => document.querySelector('[data-mantine-menu-announcer]');
    const advance = (ms: number) => act(() => jest.advanceTimersByTime(ms));

    function AnnounceMenu({ opened = true, message }: { opened?: boolean; message?: string }) {
      return (
        <Menu opened={opened} withinPortal={false} transitionProps={{ duration: 0 }}>
          <Menu.Target>
            <button type="button">target</button>
          </Menu.Target>
          <Menu.Dropdown>
            {message ? <MenuEmpty>{message}</MenuEmpty> : <Menu.Item>Apple</Menu.Item>}
          </Menu.Dropdown>
        </Menu>
      );
    }

    beforeEach(() => jest.useFakeTimers());
    afterEach(() => jest.useRealTimers());

    it('announces its text in a polite live region outside the menu', () => {
      render(<AnnounceMenu message="Nothing found" />);
      advance(100);
      const region = getRegion()!;
      expect(region).toHaveTextContent('Nothing found');
      expect(region).toHaveAttribute('aria-live', 'polite');
      expect(region.closest('[role="menu"]')).toBeNull();
    });

    it('announces text changes and clears the region afterwards', () => {
      const { rerender } = render(<AnnounceMenu message="Loading" />);
      advance(100);
      expect(getRegion()).toHaveTextContent('Loading');
      rerender(<AnnounceMenu message="No recent files" />);
      advance(100);
      expect(getRegion()).toHaveTextContent('No recent files');
      advance(7000);
      expect(getRegion()).toBeEmptyDOMElement();
    });

    it('clears the announcement when items replace the empty state', () => {
      const { rerender } = render(<AnnounceMenu message="Loading" />);
      advance(100);
      rerender(<AnnounceMenu />);
      expect(getRegion()).toBeEmptyDOMElement();
      advance(7000);
      expect(getRegion()).toBeEmptyDOMElement();
    });

    it('does not announce a pending message after unmount', () => {
      const { rerender } = render(<AnnounceMenu message="Loading" />);
      rerender(<AnnounceMenu />);
      advance(100);
      expect(getRegion()?.textContent ?? '').toBe('');
    });

    it('does not announce when the menu is closed', () => {
      render(
        <Menu opened={false} keepMounted withinPortal={false} transitionProps={{ duration: 0 }}>
          <Menu.Target>
            <button type="button">target</button>
          </Menu.Target>
          <Menu.Dropdown>
            <MenuEmpty>Nothing found</MenuEmpty>
          </Menu.Dropdown>
        </Menu>
      );
      advance(100);
      expect(getRegion()?.textContent ?? '').toBe('');
    });
  });
});
