import { act } from '@testing-library/react';
import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { SliderStylesNames } from '../Slider.context';
import { RangeSlider, RangeSliderProps } from './RangeSlider';

const defaultProps: RangeSliderProps = {
  marks: [{ value: 0, label: 'test-mark' }],
  labelAlwaysOn: true,
  labelTransitionProps: { duration: 0 },
  thumbFromLabel: 'test-label-from',
  thumbToLabel: 'test-label-to',
};

const getInput = (container: HTMLElement, index: 0 | 1) =>
  container.querySelectorAll('input[type="hidden"]')[index];

const expectInputValue = (value: string, container: HTMLElement, index: 0 | 1) =>
  expect(getInput(container, index)).toHaveValue(value);

const getSliders = () => screen.getAllByRole('slider');

describe('@mantine/core/RangeSlider', () => {
  tests.axe([<RangeSlider {...defaultProps} key="1" />]);
  tests.itSupportsSystemProps<RangeSliderProps, SliderStylesNames>({
    component: RangeSlider,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/RangeSlider',
    stylesApiName: 'RangeSlider',
    stylesApiSelectors: [
      'root',
      'bar',
      'label',
      'mark',
      'markLabel',
      'markWrapper',
      'thumb',
      'track',
      'trackContainer',
    ],
  });

  it('sets data-orientation attribute on root element', () => {
    const { container, rerender } = render(
      <RangeSlider {...defaultProps} orientation="vertical" />
    );
    expect(container.querySelector('.mantine-RangeSlider-root')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );

    rerender(<RangeSlider {...defaultProps} />);
    expect(container.querySelector('.mantine-RangeSlider-root')).not.toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });

  it('provides name and value to hidden inputs', () => {
    const { container } = render(<RangeSlider name="test-input" value={[10, 20]} />);
    expectInputValue('10', container, 0);
    expectInputValue('20', container, 1);
    expect(getInput(container, 0)).toHaveAttribute('name', 'test-input_from');
    expect(getInput(container, 1)).toHaveAttribute('name', 'test-input_to');
  });

  it('enforces minRange constraint during keyboard interaction', async () => {
    const { container, rerender } = render(
      <RangeSlider defaultValue={[10, 50]} minRange={20} pushOnOverlap={false} step={10} />
    );
    expectInputValue('10', container, 0);
    expectInputValue('50', container, 1);

    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });
    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('20', container, 0);

    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('30', container, 0);

    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('30', container, 0);

    rerender(<RangeSlider defaultValue={[10, 50]} minRange={20} pushOnOverlap={false} step={10} />);
    const sliders2 = screen.getAllByRole('slider');
    await act(async () => {
      sliders2[1].focus();
    });
    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('40', container, 1);

    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('30', container, 1);

    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('30', container, 1);
  });

  it('enforces maxRange constraint during keyboard interaction', async () => {
    const { container } = render(
      <RangeSlider defaultValue={[30, 60]} maxRange={40} pushOnOverlap step={10} />
    );
    expectInputValue('30', container, 0);
    expectInputValue('60', container, 1);

    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });
    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('20', container, 0);
    expectInputValue('60', container, 1);

    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('10', container, 0);
    expectInputValue('50', container, 1);
  });

  it('pushes overlapping thumb when pushOnOverlap is true', async () => {
    const { container } = render(<RangeSlider defaultValue={[30, 50]} pushOnOverlap step={10} />);
    expectInputValue('30', container, 0);
    expectInputValue('50', container, 1);

    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });
    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('40', container, 0);
    expectInputValue('50', container, 1);

    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('50', container, 0);
    expectInputValue('60', container, 1);
  });

  it('prevents overlap when pushOnOverlap is false', async () => {
    const { container } = render(
      <RangeSlider defaultValue={[30, 50]} pushOnOverlap={false} minRange={10} step={10} />
    );
    expectInputValue('30', container, 0);
    expectInputValue('50', container, 1);

    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });
    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('40', container, 0);

    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('40', container, 0);
    expectInputValue('50', container, 1);
  });

  it('restricts movement to marks when restrictToMarks is true', async () => {
    const { container } = render(
      <RangeSlider
        defaultValue={[25, 75]}
        marks={[{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }]}
        restrictToMarks
      />
    );
    expectInputValue('25', container, 0);
    expectInputValue('75', container, 1);

    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });
    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('0', container, 0);

    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('25', container, 0);

    await act(async () => {
      sliders[1].focus();
    });
    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('100', container, 1);

    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('75', container, 1);
  });

  it('domain prop restricts keyboard navigation', async () => {
    const { container } = render(
      <RangeSlider defaultValue={[40, 60]} min={0} max={100} domain={[30, 70]} step={10} />
    );
    expectInputValue('40', container, 0);
    expectInputValue('60', container, 1);

    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });
    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('30', container, 0);

    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('30', container, 0);

    await act(async () => {
      sliders[1].focus();
    });
    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('70', container, 1);

    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('70', container, 1);
  });

  it('renders marks with labels', () => {
    render(
      <RangeSlider
        defaultValue={[20, 80]}
        marks={[
          { value: 0, label: 'Start' },
          { value: 50, label: 'Middle' },
          { value: 100, label: 'End' },
        ]}
      />
    );
    expect(screen.getByText('Start')).toBeInTheDocument();
    expect(screen.getByText('Middle')).toBeInTheDocument();
    expect(screen.getByText('End')).toBeInTheDocument();
  });

  it('sets aria-disabled when disabled', () => {
    render(<RangeSlider defaultValue={[20, 80]} disabled />);
    const sliders = getSliders();
    expect(sliders[0]).toHaveAttribute('aria-disabled', 'true');
    expect(sliders[1]).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets aria-orientation', () => {
    const { rerender } = render(<RangeSlider defaultValue={[20, 80]} />);
    let sliders = getSliders();
    expect(sliders[0]).toHaveAttribute('aria-orientation', 'horizontal');
    expect(sliders[1]).toHaveAttribute('aria-orientation', 'horizontal');

    rerender(<RangeSlider defaultValue={[20, 80]} orientation="vertical" />);
    sliders = getSliders();
    expect(sliders[0]).toHaveAttribute('aria-orientation', 'vertical');
    expect(sliders[1]).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('has correct aria-labels for thumbs', () => {
    render(
      <RangeSlider defaultValue={[20, 80]} thumbFromLabel="From slider" thumbToLabel="To slider" />
    );
    expect(screen.getByLabelText('From slider')).toBeInTheDocument();
    expect(screen.getByLabelText('To slider')).toBeInTheDocument();
  });
});
