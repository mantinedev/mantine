import { render, screen, userEvent } from '@mantine-tests/core';
import { Presets } from './Presets';

const getStyles = (selector: string) => ({
  className: `cls-${selector}`,
  style: { color: 'red' },
  'data-test-id': selector,
});

const presets = [
  { label: 'Today', value: '2022-04-11' },
  { label: 'Tomorrow', value: '2022-04-12' },
];

describe('@mantine/dates/Presets', () => {
  it('renders only children when presets are not provided', () => {
    const { container } = render(
      <Presets
        presets={undefined}
        onPresetSelect={() => {}}
        getStyles={getStyles}
        rootSelector="datePickerRoot"
        size="sm"
      >
        <div data-child>child</div>
      </Presets>
    );

    expect(container.querySelector('[data-child]')).toBeInTheDocument();
    expect(container.querySelector('.cls-datePickerRoot')).not.toBeInTheDocument();
  });

  it('renders presets list next to children and sets --preset-font-size on the root', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Presets
        presets={presets}
        onPresetSelect={spy}
        getStyles={getStyles}
        rootSelector="datePickerRoot"
        size="md"
        rootProps={{ 'data-root': true }}
      >
        <div data-child>child</div>
      </Presets>
    );

    const root = container.querySelector('.cls-datePickerRoot') as HTMLElement;
    expect(root).toHaveAttribute('data-test-id', 'datePickerRoot');
    expect(root).toHaveAttribute('data-root');
    expect(root.style.getPropertyValue('--preset-font-size')).toBe('var(--mantine-font-size-md)');
    expect(root.style.color).toBe('red');
    expect(container.querySelector('.cls-presetsList')).toBeInTheDocument();
    expect(container.querySelectorAll('[data-preset]')).toHaveLength(2);
    expect(container.querySelector('[data-child]')).toBeInTheDocument();

    await userEvent.click(screen.getByText('Tomorrow'));
    expect(spy).toHaveBeenCalledWith('2022-04-12');
  });
});
