import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { AngleSlider, AngleSliderProps, AngleSliderStylesNames } from './AngleSlider';

const defaultProps: AngleSliderProps = {
  withLabel: true,
  marks: [{ value: 0, label: 'test-mark' }],
};

const getSlider = () => screen.getByRole('slider');
const getValue = () => getSlider().getAttribute('aria-valuenow');

describe('@mantine/core/AngleSlider', () => {
  tests.axe([<AngleSlider {...defaultProps} aria-label="Test label" />]);

  tests.itSupportsSystemProps<AngleSliderProps, AngleSliderStylesNames>({
    component: AngleSlider,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/AngleSlider',
    stylesApiSelectors: ['root', 'thumb', 'label', 'mark', 'marks'],
  });

  it('renders hidden input with correct name', () => {
    const { container } = render(<AngleSlider {...defaultProps} value={120} name="test-name" />);
    const input = container.querySelector('input[type="hidden"]');
    expect(input).toHaveAttribute('name', 'test-name');
    expect(input).toHaveAttribute('value', '120');
  });

  it('changes value with arrow keys', () => {
    render(<AngleSlider defaultValue={10} aria-label="angle" />);

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight' });
    expect(getValue()).toBe('11');

    fireEvent.keyDown(getSlider(), { key: 'ArrowDown' });
    expect(getValue()).toBe('10');
  });

  it('wraps around on the value grid defined by step', () => {
    render(<AngleSlider defaultValue={0} step={5} aria-label="angle" />);

    fireEvent.keyDown(getSlider(), { key: 'ArrowLeft' });
    expect(getValue()).toBe('355');

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight' });
    expect(getValue()).toBe('0');
  });

  it('sets value to 0 with Home and to the largest value on the grid with End', () => {
    render(<AngleSlider defaultValue={100} step={5} aria-label="angle" />);

    fireEvent.keyDown(getSlider(), { key: 'End' });
    expect(getValue()).toBe('355');

    fireEvent.keyDown(getSlider(), { key: 'Home' });
    expect(getValue()).toBe('0');
  });

  it('uses largeStep for PageUp/PageDown and Shift + Arrow keys', () => {
    render(<AngleSlider defaultValue={100} aria-label="angle" />);

    fireEvent.keyDown(getSlider(), { key: 'PageUp' });
    expect(getValue()).toBe('110');

    fireEvent.keyDown(getSlider(), { key: 'PageDown' });
    expect(getValue()).toBe('100');

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight', shiftKey: true });
    expect(getValue()).toBe('110');
  });

  it('supports largeStep prop', () => {
    render(<AngleSlider defaultValue={100} largeStep={45} aria-label="angle" />);

    fireEvent.keyDown(getSlider(), { key: 'PageUp' });
    expect(getValue()).toBe('145');
  });

  it('does not call onChangeEnd for keys that do not change the value', () => {
    const onChangeEnd = jest.fn();
    render(<AngleSlider defaultValue={10} onChangeEnd={onChangeEnd} aria-label="angle" />);

    fireEvent.keyDown(getSlider(), { key: 'Tab' });
    fireEvent.keyDown(getSlider(), { key: 'a' });
    expect(onChangeEnd).not.toHaveBeenCalled();

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight' });
    expect(onChangeEnd).toHaveBeenCalledWith(11);
  });

  it('moves between marks with arrow keys when restrictToMarks is set', () => {
    render(
      <AngleSlider
        defaultValue={0}
        restrictToMarks
        marks={[{ value: 0 }, { value: 45 }, { value: 90 }]}
        aria-label="angle"
      />
    );

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight' });
    expect(getValue()).toBe('45');

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight' });
    expect(getValue()).toBe('90');

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight' });
    expect(getValue()).toBe('0');

    fireEvent.keyDown(getSlider(), { key: 'ArrowLeft' });
    expect(getValue()).toBe('90');
  });

  it('snaps to the closest mark when the value is not a mark and restrictToMarks is set', () => {
    render(
      <AngleSlider
        defaultValue={80}
        restrictToMarks
        marks={[{ value: 0 }, { value: 45 }, { value: 90 }]}
        aria-label="angle"
      />
    );

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight' });
    expect(getValue()).toBe('90');
  });

  it('sets aria-valuetext based on formatLabel and mark labels', () => {
    const { rerender } = render(
      <AngleSlider defaultValue={45} formatLabel={(value) => `${value} degrees`} aria-label="a" />
    );
    expect(getSlider()).toHaveAttribute('aria-valuetext', '45 degrees');

    rerender(
      <AngleSlider defaultValue={45} marks={[{ value: 45, label: 'North' }]} aria-label="a" />
    );
    expect(getSlider()).toHaveAttribute('aria-valuetext', 'North');
  });

  it('does not set aria-valuetext when formatLabel returns a non-text node', () => {
    render(
      <AngleSlider
        defaultValue={45}
        formatLabel={(value) => <span>{value}°</span>}
        aria-label="a"
      />
    );
    expect(getSlider()).not.toHaveAttribute('aria-valuetext');
  });

  it('sets aria-valuemax to the largest value on the grid', () => {
    const { rerender } = render(<AngleSlider aria-label="a" />);
    expect(getSlider()).toHaveAttribute('aria-valuemax', '359');

    rerender(<AngleSlider step={10} aria-label="a" />);
    expect(getSlider()).toHaveAttribute('aria-valuemax', '350');
  });

  it('supports disabled prop', () => {
    const onChange = jest.fn();
    const { container } = render(
      <AngleSlider defaultValue={10} disabled onChange={onChange} aria-label="angle" />
    );

    expect(container.querySelector('.mantine-AngleSlider-root')).toHaveAttribute('data-disabled');
    expect(getSlider()).toHaveAttribute('tabindex', '-1');
    expect(getSlider()).toHaveAttribute('aria-disabled', 'true');

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight' });
    expect(getValue()).toBe('10');
    expect(onChange).not.toHaveBeenCalled();
  });

  it('supports readOnly prop', () => {
    const onChange = jest.fn();
    const { container } = render(
      <AngleSlider defaultValue={10} readOnly onChange={onChange} aria-label="angle" />
    );

    expect(container.querySelector('.mantine-AngleSlider-root')).toHaveAttribute('data-read-only');
    expect(getSlider()).toHaveAttribute('tabindex', '0');
    expect(getSlider()).toHaveAttribute('aria-readonly', 'true');
    expect(getSlider()).not.toHaveAttribute('aria-disabled');

    fireEvent.keyDown(getSlider(), { key: 'ArrowRight' });
    expect(getValue()).toBe('10');
    expect(onChange).not.toHaveBeenCalled();
  });
});
