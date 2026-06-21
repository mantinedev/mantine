import { render, tests } from '@mantine-tests/core';
import { ActionIcon, ActionIconProps, ActionIconStylesNames } from './ActionIcon';
import { ActionIconGroup } from './ActionIconGroup/ActionIconGroup';
import { ActionIconGroupSection } from './ActionIconGroupSection/ActionIconGroupSection';

const defaultProps: ActionIconProps = {};

describe('@mantine/core/ActionIcon', () => {
  tests.axe([
    <ActionIcon aria-label="test" />,
    <ActionIcon.Group aria-label="test">
      <ActionIcon aria-label="test-1" />
      <ActionIcon aria-label="test-2" />
    </ActionIcon.Group>,
  ]);

  tests.itSupportsFocusEvents<ActionIconProps>({
    component: ActionIcon,
    props: defaultProps,
  });

  tests.itSupportsSystemProps<ActionIconProps, ActionIconStylesNames>({
    component: ActionIcon,
    props: defaultProps,
    varsResolver: true,
    polymorphic: true,
    children: true,
    displayName: '@mantine/core/ActionIcon',
    stylesApiSelectors: ['root'],
  });

  it('sets data-loading attribute when loading prop is set to true', () => {
    const { container, rerender } = render(<ActionIcon loading />);
    expect(container.querySelector('[data-loading]')).toBeInTheDocument();
    rerender(<ActionIcon loading={false} />);
    expect(container.querySelector('[data-loading]')).not.toBeInTheDocument();
  });

  it('sets data-disabled attribute when disabled prop is set to true', () => {
    const { container, rerender } = render(<ActionIcon disabled />);
    expect(container.querySelector('[data-disabled]')).toBeInTheDocument();
    rerender(<ActionIcon disabled={false} />);
    expect(container.querySelector('[data-disabled]')).not.toBeInTheDocument();
  });

  it('sets disabled attribute when disabled prop is set to true', () => {
    const { container, rerender } = render(<ActionIcon disabled />);
    expect(container.querySelector('button')).toHaveAttribute('disabled');
    rerender(<ActionIcon disabled={false} />);
    expect(container.querySelector('button')).not.toHaveAttribute('disabled');
  });

  it('sets aria-busy on the button while loading', () => {
    const { container, rerender } = render(<ActionIcon aria-label="test" loading />);
    expect(container.querySelector('button')).toHaveAttribute('aria-busy', 'true');
    rerender(<ActionIcon aria-label="test" />);
    expect(container.querySelector('button')).not.toHaveAttribute('aria-busy');
  });

  it('does not override a consumer-provided aria-busy when not loading', () => {
    const { container } = render(<ActionIcon aria-label="test" aria-busy />);
    expect(container.querySelector('button')).toHaveAttribute('aria-busy', 'true');
  });

  it('renders the loader and forwards loaderProps while loading', () => {
    const { container } = render(
      <ActionIcon aria-label="test" loading loaderProps={{ className: 'test-loader' }} />
    );
    expect(container.querySelector('.test-loader')).toBeInTheDocument();
  });

  it('disables the button while loading', () => {
    const { container } = render(<ActionIcon aria-label="test" loading />);
    expect(container.querySelector('button')).toHaveAttribute('disabled');
  });

  it('exposes internal components as static properties', () => {
    expect(ActionIcon.Group).toBe(ActionIconGroup);
    expect(ActionIcon.GroupSection).toBe(ActionIconGroupSection);
  });
});
