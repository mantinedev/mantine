import { render, tests } from '@mantine-tests/core';
import { AppShell, AppShellProps, AppShellStylesNames } from './AppShell';

const defaultProps: AppShellProps = {};

describe('@mantine/core/AppShell', () => {
  tests.itSupportsSystemProps<AppShellProps, AppShellStylesNames>({
    component: AppShell,
    props: defaultProps,
    mod: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AppShell',
    stylesApiSelectors: ['root'],
  });

  it('sets data-layout attribute based on layout prop', () => {
    const { container } = render(<AppShell layout="alt" />);
    expect(container.querySelector('.mantine-AppShell-root')).toHaveAttribute('data-layout', 'alt');
  });

  it('sets data-disabled attribute based on disabled prop', () => {
    const { container, rerender } = render(<AppShell disabled />);
    expect(container.querySelector('.mantine-AppShell-root')).toHaveAttribute('data-disabled');

    rerender(<AppShell disabled={false} />);
    expect(container.querySelector('.mantine-AppShell-root')).not.toHaveAttribute('data-disabled');
  });
});
