import { createRef } from 'react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { Chip, ChipProps, ChipStylesNames } from './Chip';

const defaultProps: ChipProps = {
  value: 'test-value',
  children: 'test-chip',
  checked: true,
};

describe('@mantine/core/Chip', () => {
  tests.axe([<Chip {...defaultProps} />]);

  tests.itSupportsSystemProps<ChipProps, ChipStylesNames>({
    component: Chip,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/Chip',
    stylesApiSelectors: ['root', 'iconWrapper', 'checkIcon', 'input', 'label'],
  });

  tests.itSupportsFocusEvents({
    component: Chip,
    props: defaultProps,
    selector: 'input',
  });

  it('displays check icon when checked prop is true', () => {
    const { rerender, container } = render(<Chip {...defaultProps} checked />);
    expect(container.querySelectorAll('.mantine-Chip-checkIcon')).toHaveLength(1);

    rerender(<Chip {...defaultProps} checked={false} />);
    expect(container.querySelectorAll('.mantine-Chip-checkIcon')).toHaveLength(0);
  });

  it('supports rootRef', () => {
    const ref = createRef<HTMLDivElement>();
    render(<Chip {...defaultProps} rootRef={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it('toggles uncontrolled standalone chip and calls onChange', async () => {
    const spy = jest.fn();
    render(<Chip onChange={spy}>Chip</Chip>);
    const input = screen.getByRole('checkbox');
    expect(input).not.toBeChecked();

    await userEvent.click(input);
    expect(input).toBeChecked();
    expect(spy).toHaveBeenLastCalledWith(true);

    await userEvent.click(input);
    expect(input).not.toBeChecked();
    expect(spy).toHaveBeenLastCalledWith(false);
  });
});
