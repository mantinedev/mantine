import { fireEvent } from '@testing-library/react';
import { render, screen, tests } from '@mantine-tests/core';
import { AngleSlider, AngleSliderProps, AngleSliderStylesNames } from './AngleSlider';

const defaultProps: AngleSliderProps = {
  withLabel: true,
  marks: [{ value: 0, label: 'test-mark' }],
};

function mockRect(element: HTMLElement) {
  element.getBoundingClientRect = () =>
    ({ left: 0, top: 0, width: 200, height: 200, right: 200, bottom: 200, x: 0, y: 0 }) as DOMRect;
}

function pointAt(degree: number) {
  const radians = (degree * Math.PI) / 180;
  return { clientX: 100 + 90 * Math.sin(radians), clientY: 100 - 90 * Math.cos(radians) };
}

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

  it('rounds pointer value to the nearest step', () => {
    const onChange = jest.fn();
    const { container } = render(<AngleSlider step={15} onChange={onChange} />);
    const root = container.querySelector<HTMLElement>('.mantine-AngleSlider-root')!;
    mockRect(root);

    fireEvent.mouseDown(root, pointAt(20));
    fireEvent.mouseUp(document, pointAt(20));
    expect(onChange).toHaveBeenLastCalledWith(15);
  });

  it('wraps keyboard values for steps that do not divide 360', () => {
    const onChange = jest.fn();
    const { rerender } = render(<AngleSlider value={357} step={7} onChange={onChange} />);
    const slider = screen.getByRole('slider');

    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(onChange).toHaveBeenLastCalledWith(0);

    rerender(
      <>
        <AngleSlider value={0} step={7} onChange={onChange} />
      </>
    );
    fireEvent.keyDown(slider, { key: 'ArrowLeft' });
    expect(onChange).toHaveBeenLastCalledWith(357);
  });

  it('sets aria-disabled when disabled', () => {
    render(<AngleSlider {...defaultProps} disabled />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-disabled', 'true');
  });
});
