import { render, screen, userEvent } from '@mantine-tests/core';
import { PresetsList } from './PresetsList';

const presets = [
  { label: 'Today', value: '2022-04-11' },
  { label: 'Tomorrow', value: '2022-04-12' },
  { label: 'Next week', value: '2022-04-18' },
];

describe('@mantine/dates/PresetsList', () => {
  it('keeps only one preset in the tab order', () => {
    render(<PresetsList presets={presets} onPresetSelect={() => {}} buttonProps={{}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('tabindex', '0');
    expect(buttons[1]).toHaveAttribute('tabindex', '-1');
    expect(buttons[2]).toHaveAttribute('tabindex', '-1');
  });

  it('moves focus with ArrowDown and ArrowUp without selecting', async () => {
    const spy = jest.fn();
    render(<PresetsList presets={presets} onPresetSelect={spy} buttonProps={{}} />);
    const buttons = screen.getAllByRole('button');

    await userEvent.tab();
    expect(buttons[0]).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(buttons[1]).toHaveFocus();
    expect(buttons[1]).toHaveAttribute('tabindex', '0');
    expect(buttons[0]).toHaveAttribute('tabindex', '-1');

    await userEvent.keyboard('{ArrowDown}');
    expect(buttons[2]).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(buttons[2]).toHaveFocus();

    await userEvent.keyboard('{ArrowUp}');
    expect(buttons[1]).toHaveFocus();

    expect(spy).not.toHaveBeenCalled();

    await userEvent.keyboard('{Enter}');
    expect(spy).toHaveBeenCalledWith('2022-04-12');
  });

  it('moves focus out of the list with Tab', async () => {
    render(
      <>
        <PresetsList presets={presets} onPresetSelect={() => {}} buttonProps={{}} />
        <button type="button">after</button>
      </>
    );
    const buttons = screen.getAllByRole('button');

    await userEvent.tab();
    await userEvent.keyboard('{ArrowDown}');
    expect(buttons[1]).toHaveFocus();

    await userEvent.tab();
    expect(screen.getByText('after')).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(buttons[1]).toHaveFocus();
  });

  it('calls onPresetSelect with preset value on click', async () => {
    const spy = jest.fn();
    render(<PresetsList presets={presets} onPresetSelect={spy} buttonProps={{}} />);
    await userEvent.click(screen.getByText('Next week'));
    expect(spy).toHaveBeenCalledWith('2022-04-18');
  });
});
