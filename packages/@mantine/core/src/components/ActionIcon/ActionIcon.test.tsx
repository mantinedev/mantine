import { render, tests } from '@mantine-tests/core';
import { ActionIcon, ActionIconProps, ActionIconStylesNames } from './ActionIcon';
import { ActionIconGroup } from './ActionIconGroup/ActionIconGroup';

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
    mod: true,
    polymorphic: true,
    classes: true,
    styleProps: true,
    children: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    id: true,
    refType: HTMLButtonElement,
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

  it('exposes ActionIcon.Group component', () => {
    expect(ActionIcon.Group).toBe(ActionIconGroup);
  });
});
