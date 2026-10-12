import { useState } from 'react';
import { act } from '@testing-library/react';
import { FormMode, useForm, UseFormReturnType } from '@mantine/form';
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

  it('sets data-variant attribute on the root element and resolves thumb size', () => {
    const { container } = render(<RangeSlider variant="white" size="lg" />);
    const root = container.querySelector('.mantine-RangeSlider-root');
    expect(root).toHaveAttribute('data-variant', 'white');
    expect(root).toHaveStyle({ '--slider-thumb-size': 'var(--slider-thumb-size-lg)' });
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
    const { container, unmount } = render(
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

    unmount();
    const { container: container2 } = render(
      <RangeSlider defaultValue={[10, 50]} minRange={20} pushOnOverlap={false} step={10} />
    );
    const sliders2 = screen.getAllByRole('slider');
    await act(async () => {
      sliders2[1].focus();
    });
    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('40', container2, 1);

    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('30', container2, 1);

    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('30', container2, 1);
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

  it('moves the focused thumb by largeStep with Shift + Arrow and PageUp/PageDown', async () => {
    const { container } = render(<RangeSlider defaultValue={[20, 80]} largeStep={10} />);
    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });

    await userEvent.keyboard('{Shift>}{ArrowRight}{/Shift}');
    expectInputValue('30', container, 0);
    expectInputValue('80', container, 1);

    await userEvent.keyboard('{PageDown}');
    expectInputValue('20', container, 0);

    await userEvent.keyboard('{PageUp}');
    expectInputValue('30', container, 0);

    await userEvent.keyboard('{Shift>}{ArrowLeft}{/Shift}');
    expectInputValue('20', container, 0);
  });

  it('uses 10 × step as the default largeStep', async () => {
    const { container } = render(<RangeSlider defaultValue={[0, 90]} step={2} />);
    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });

    await userEvent.keyboard('{Shift>}{ArrowUp}{/Shift}');
    expectInputValue('20', container, 0);
  });

  it('applies largeStep to the focused thumb and respects the sibling bound', async () => {
    const { container } = render(
      <RangeSlider defaultValue={[40, 50]} minRange={10} largeStep={10} pushOnOverlap={false} />
    );
    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });

    await userEvent.keyboard('{PageUp}');
    expectInputValue('40', container, 0);
    expectInputValue('50', container, 1);

    await act(async () => {
      sliders[1].focus();
    });
    await userEvent.keyboard('{PageUp}');
    expectInputValue('60', container, 1);
  });

  it('ignores largeStep and stays mark-to-mark when restrictToMarks is set', async () => {
    const { container } = render(
      <RangeSlider
        defaultValue={[0, 100]}
        marks={[{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }]}
        restrictToMarks
        largeStep={10}
      />
    );
    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });

    await userEvent.keyboard('{Shift>}{ArrowRight}{/Shift}');
    expectInputValue('25', container, 0);

    await userEvent.keyboard('{PageUp}');
    expectInputValue('50', container, 0);

    await userEvent.keyboard('{PageDown}');
    expectInputValue('25', container, 0);
  });

  it('calls onChangeEnd with the final value after largeStep', async () => {
    const spy = jest.fn();
    render(<RangeSlider defaultValue={[20, 80]} largeStep={10} onChangeEnd={spy} />);
    const sliders = getSliders();
    await act(async () => {
      sliders[0].focus();
    });

    await userEvent.keyboard('{Shift>}{ArrowUp}{/Shift}');
    expect(spy).toHaveBeenLastCalledWith([30, 80]);
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

  it('does not set aria-valuetext when thumbValueText is not provided', () => {
    render(<RangeSlider defaultValue={[20, 80]} />);
    const sliders = getSliders();
    expect(sliders[0]).not.toHaveAttribute('aria-valuetext');
    expect(sliders[1]).not.toHaveAttribute('aria-valuetext');
  });

  it('sets aria-valuetext for both thumbs from a string', () => {
    render(<RangeSlider defaultValue={[20, 80]} thumbValueText="custom" />);
    const sliders = getSliders();
    expect(sliders[0]).toHaveAttribute('aria-valuetext', 'custom');
    expect(sliders[1]).toHaveAttribute('aria-valuetext', 'custom');
  });

  it('sets aria-valuetext for both thumbs from callback', () => {
    render(
      <RangeSlider
        defaultValue={[20, 80]}
        scale={(value) => value * 10}
        thumbValueText={(value) => `${value}%`}
      />
    );

    const sliders = getSliders();
    expect(sliders[0]).toHaveAttribute('aria-valuetext', '200%');
    expect(sliders[1]).toHaveAttribute('aria-valuetext', '800%');
  });

  it('passes thumbProps to each thumb element', () => {
    render(
      <RangeSlider
        defaultValue={[20, 80]}
        thumbProps={(index) => ({ 'aria-describedby': `help-${index}`, id: `thumb-${index}` })}
      />
    );

    const sliders = getSliders();
    expect(sliders[0]).toHaveAttribute('aria-describedby', 'help-0');
    expect(sliders[0]).toHaveAttribute('id', 'thumb-0');
    expect(sliders[1]).toHaveAttribute('aria-describedby', 'help-1');
    expect(sliders[1]).toHaveAttribute('id', 'thumb-1');
  });

  it('keeps the upper thumb in place when it reaches minRange with pushOnOverlap={false}', async () => {
    const { container } = render(
      <RangeSlider defaultValue={[30, 50]} pushOnOverlap={false} minRange={10} step={10} />
    );

    await act(async () => {
      getSliders()[1].focus();
    });
    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('30', container, 0);
    expectInputValue('40', container, 1);

    await userEvent.keyboard('{ArrowLeft}');
    expectInputValue('30', container, 0);
    expectInputValue('40', container, 1);
  });

  it('allows moving the lower thumb when max - minRange equals 0', async () => {
    const { container } = render(
      <RangeSlider min={-10} max={10} minRange={10} defaultValue={[-10, 10]} step={1} />
    );

    await act(async () => {
      getSliders()[0].focus();
    });
    await userEvent.keyboard('{ArrowRight}');
    expectInputValue('-9', container, 0);
    expectInputValue('10', container, 1);
  });

  it('moves focused thumb with Home and End keys within minRange', async () => {
    const spy = jest.fn();
    const { container } = render(
      <RangeSlider defaultValue={[30, 60]} minRange={10} onChangeEnd={spy} />
    );

    await act(async () => {
      getSliders()[0].focus();
    });
    await userEvent.keyboard('{Home}');
    expectInputValue('0', container, 0);
    expect(spy).toHaveBeenLastCalledWith([0, 60]);

    await userEvent.keyboard('{End}');
    expectInputValue('50', container, 0);
    expectInputValue('60', container, 1);

    await act(async () => {
      getSliders()[1].focus();
    });
    await userEvent.keyboard('{End}');
    expectInputValue('100', container, 1);

    await userEvent.keyboard('{Home}');
    expectInputValue('50', container, 0);
    expectInputValue('60', container, 1);
    expect(spy).toHaveBeenLastCalledWith([50, 60]);
  });

  it('uses thumbLabel as aria-label for both thumbs', () => {
    const { container } = render(<RangeSlider defaultValue={[20, 80]} thumbLabel="Price" />);
    const sliders = getSliders();
    expect(sliders[0]).toHaveAttribute('aria-label', 'Price');
    expect(sliders[1]).toHaveAttribute('aria-label', 'Price');
    expect(container.querySelector('.mantine-RangeSlider-root')).not.toHaveAttribute('thumbLabel');
  });

  it('prefers thumbFromLabel and thumbToLabel over thumbLabel', () => {
    render(
      <RangeSlider
        defaultValue={[20, 80]}
        thumbLabel="Price"
        thumbFromLabel="Min"
        thumbToLabel="Max"
      />
    );
    const sliders = getSliders();
    expect(sliders[0]).toHaveAttribute('aria-label', 'Min');
    expect(sliders[1]).toHaveAttribute('aria-label', 'Max');
  });

  describe('keyboard steps from the resolved value', () => {
    it.each<FormMode>(['uncontrolled', 'controlled'])(
      'steps from the reset value after form.reset() in %s form mode',
      async (mode) => {
        let form!: UseFormReturnType<{ range: [number, number] }>;

        function Wrapper() {
          form = useForm({ mode, initialValues: { range: [10, 50] } });
          return <RangeSlider {...form.getInputProps('range')} />;
        }

        render(<Wrapper />);
        act(() => getSliders()[0].focus());
        await userEvent.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}');
        expect(form.getValues().range).toStrictEqual([15, 50]);

        act(() => form.reset());
        expect(getSliders()[0]).toHaveAttribute('aria-valuenow', '10');

        await userEvent.keyboard('{ArrowRight}');
        expect(form.getValues().range).toStrictEqual([11, 50]);

        act(() => form.setFieldValue('range', [30, 40]));
        await userEvent.keyboard('{ArrowLeft}');
        expect(form.getValues().range).toStrictEqual([29, 40]);
      }
    );

    it('steps from the reset value inside a wrapper that spreads getInputProps', async () => {
      let form!: UseFormReturnType<{ range: [number, number] }>;

      function PriceRange(props: RangeSliderProps) {
        return <RangeSlider min={0} max={100} {...props} />;
      }

      function Wrapper() {
        form = useForm({ initialValues: { range: [10, 50] } });
        return <PriceRange {...form.getInputProps('range')} />;
      }

      render(<Wrapper />);
      act(() => getSliders()[0].focus());
      await userEvent.keyboard('{ArrowRight}{ArrowRight}');
      act(() => {
        form.setFieldValue('range', [20, 50]);
        form.reset();
      });
      expect(getSliders()[0]).toHaveAttribute('aria-valuenow', '10');
      await userEvent.keyboard('{ArrowRight}');
      expect(form.getValues().range).toStrictEqual([11, 50]);
    });

    it('steps from the current value for non-form controlled and uncontrolled callers', async () => {
      function Controlled() {
        const [value, setValue] = useState<[number, number]>([10, 50]);
        return (
          <>
            <RangeSlider value={value} onChange={setValue} />
            <button type="button" onClick={() => setValue([10, 50])}>
              reset
            </button>
          </>
        );
      }

      const { unmount } = render(<Controlled />);
      act(() => getSliders()[0].focus());
      await userEvent.keyboard('{ArrowRight}{ArrowRight}');
      expect(getSliders()[0]).toHaveAttribute('aria-valuenow', '12');
      await userEvent.click(screen.getByRole('button', { name: 'reset' }));
      act(() => getSliders()[0].focus());
      await userEvent.keyboard('{ArrowRight}');
      expect(getSliders()[0]).toHaveAttribute('aria-valuenow', '11');
      unmount();

      const spy = jest.fn();
      render(<RangeSlider defaultValue={[10, 50]} onChange={spy} />);
      act(() => getSliders()[1].focus());
      await userEvent.keyboard('{ArrowLeft}{ArrowLeft}');
      expect(spy).toHaveBeenLastCalledWith([10, 48]);
      expect(getSliders()[1]).toHaveAttribute('aria-valuenow', '48');
    });
  });
});
