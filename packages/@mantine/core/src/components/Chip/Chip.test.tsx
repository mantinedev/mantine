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

  it('does not toggle controlled chip on click when readOnly is set', async () => {
    const spy = jest.fn();
    render(
      <Chip checked={false} readOnly onChange={spy}>
        readonly
      </Chip>
    );
    const input = screen.getByRole('checkbox') as HTMLInputElement;
    expect(input).toHaveAttribute('readonly');

    await userEvent.click(input);
    expect(input.checked).toBe(false);
    expect(spy).not.toHaveBeenCalled();
  });

  it('does not toggle uncontrolled chip on click when readOnly is set', async () => {
    const spy = jest.fn();
    render(
      <Chip defaultChecked readOnly onChange={spy}>
        readonly
      </Chip>
    );
    const input = screen.getByRole('checkbox') as HTMLInputElement;

    await userEvent.click(input);
    expect(input.checked).toBe(true);
    expect(spy).not.toHaveBeenCalled();
  });

  it('does not change Chip.Group value when a readOnly chip is clicked', async () => {
    const spy = jest.fn();
    render(
      <Chip.Group multiple value={[]} onChange={spy}>
        <Chip value="test-value" readOnly>
          readonly
        </Chip>
      </Chip.Group>
    );

    await userEvent.click(screen.getByRole('checkbox'));
    expect(spy).not.toHaveBeenCalled();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('keeps white text when autoContrast is disabled on the component', () => {
    const { container } = render(<Chip {...defaultProps} autoContrast={false} />, {
      autoContrast: true,
      primaryColor: 'yellow',
    });
    expect(container.querySelector('.mantine-Chip-root')).toHaveStyle({
      '--chip-color': 'var(--mantine-color-white)',
    });
  });

  it('does not set --chip-color inline when color, variant and autoContrast are not set', () => {
    const { container } = render(<Chip {...defaultProps} />, {
      autoContrast: true,
      primaryColor: 'yellow',
    });
    const root = container.querySelector('.mantine-Chip-root') as HTMLElement;
    expect(root.style.getPropertyValue('--chip-color')).toBe('');
  });
});
