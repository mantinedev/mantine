import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { SliderStylesNames } from '../Slider.context';
import { Slider, SliderProps } from './Slider';

const defaultProps: SliderProps = {
  marks: [{ value: 0, label: 'test-mark' }],
  labelAlwaysOn: true,
  labelTransitionProps: { duration: 0 },
  thumbLabel: 'test-label',
};

const getInput = (container: HTMLElement) => container.querySelector('input[type="hidden"]');

const expectInputValue = (value: string, container: HTMLElement) =>
  expect(getInput(container)).toHaveValue(value);

const pressArrow = (kind: 'right' | 'left') =>
  userEvent.type(screen.getByRole('slider'), kind === 'right' ? '{arrowright}' : '{arrowleft}');

describe('@mantine/core/Slider', () => {
  tests.axe([<Slider {...defaultProps} key="1" />]);
  tests.itSupportsSystemProps<SliderProps, SliderStylesNames>({
    component: Slider,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/Slider',
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

  it('provides name and value to hidden input', () => {
    const { container } = render(<Slider name="test-input" value={50} />);
    expectInputValue('50', container);
    expect(getInput(container)).toHaveAttribute('name', 'test-input');
  });

  it('can be controlled with right/left arrows', async () => {
    const spy = jest.fn();
    render(<Slider value={50} step={10} onChange={spy} />);
    await pressArrow('right');
    expect(spy).toHaveBeenLastCalledWith(60);
    await pressArrow('left');
    expect(spy).toHaveBeenLastCalledWith(40);
  });

  it('should scale the value', async () => {
    const { container } = render(<Slider value={50} scale={(v) => v * 2} />);
    await pressArrow('right');
    expectInputValue('100', container);
  });

  it('supports uncontrolled state', async () => {
    const { container } = render(<Slider defaultValue={50} step={10} />);
    expectInputValue('50', container);
    await pressArrow('right');
    expectInputValue('60', container);
    await pressArrow('right');
    expectInputValue('70', container);
    await pressArrow('left');
    expectInputValue('60', container);
    await pressArrow('left');
    expectInputValue('50', container);
  });

  it('does not allow to set value greater than max', async () => {
    const { container } = render(<Slider defaultValue={115} step={10} max={120} />);
    expectInputValue('115', container);
    await pressArrow('right');
    expectInputValue('120', container);
  });

  it('does not allow to set value smaller than min', async () => {
    const { container } = render(<Slider defaultValue={50} step={10} min={45} />);
    expectInputValue('50', container);
    await pressArrow('left');
    expectInputValue('45', container);
  });

  it('shows label on hover', async () => {
    render(<Slider label="test-label" labelTransitionProps={{ duration: 0 }} />);
    expect(screen.queryAllByText('test-label')).toHaveLength(0);
    await userEvent.hover(screen.getByRole('slider'));
    expect(screen.getByText('test-label')).toBeInTheDocument();
    await userEvent.unhover(screen.getByRole('slider'));
    expect(screen.queryAllByText('test-label')).toHaveLength(0);
  });

  it('renders label with current value based on callback', async () => {
    render(
      <Slider
        defaultValue={50}
        step={10}
        label={(val) => `test-label-${val}`}
        labelTransitionProps={{ duration: 0 }}
        labelAlwaysOn
      />
    );
    expect(screen.getByText('test-label-50')).toBeInTheDocument();
    await pressArrow('left');
    expect(screen.getByText('test-label-40')).toBeInTheDocument();
    await pressArrow('right');
    await pressArrow('right');
    expect(screen.getByText('test-label-60')).toBeInTheDocument();
  });

  it('clamps initial value based on min prop', () => {
    const { container } = render(<Slider defaultValue={60} min={100} />);
    expectInputValue('100', container);
  });

  it('clamps initial value based on max prop', () => {
    const { container } = render(<Slider defaultValue={120} max={100} />);
    expectInputValue('100', container);
  });

  it('sets data-orientation attribute on root element', () => {
    const { container, rerender } = render(<Slider {...defaultProps} orientation="vertical" />);
    expect(container.querySelector('.mantine-Slider-root')).toHaveAttribute(
      'data-orientation',
      'vertical'
    );

    rerender(<Slider {...defaultProps} />);
    expect(container.querySelector('.mantine-Slider-root')).not.toHaveAttribute(
      'data-orientation',
      'vertical'
    );
  });

  it('will call onChange before onChangeEvent', async () => {
    const changeSpy = jest.fn();
    const endSpy = jest.fn();
    render(
      <Slider
        value={50}
        step={10}
        onChange={() => changeSpy(performance.now())}
        onChangeEnd={() => endSpy(performance.now())}
      />
    );

    await pressArrow('right');
    expect(changeSpy.mock.calls[0][0]).toBeLessThan(
      endSpy.mock.calls[endSpy.mock.calls.length - 1][0]
    );

    await pressArrow('left');
    expect(changeSpy.mock.calls[1][0]).toBeLessThan(
      endSpy.mock.calls[endSpy.mock.calls.length - 1][0]
    );
  });

  it('supports restrictToMarks prop', async () => {
    const spy = jest.fn();
    render(
      <Slider
        defaultValue={50}
        marks={[{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }]}
        restrictToMarks
        onChange={spy}
      />
    );

    await pressArrow('right');
    expect(spy).toHaveBeenLastCalledWith(75);
    await pressArrow('right');
    expect(spy).toHaveBeenLastCalledWith(100);
    await pressArrow('left');
    expect(spy).toHaveBeenLastCalledWith(75);
    await pressArrow('left');
    expect(spy).toHaveBeenLastCalledWith(50);
  });

  it('domain prop restricts keyboard navigation', async () => {
    const { container } = render(
      <Slider defaultValue={50} min={0} max={100} domain={[30, 70]} step={10} />
    );
    expectInputValue('50', container);

    await pressArrow('left');
    expectInputValue('40', container);

    await pressArrow('left');
    expectInputValue('30', container);

    await pressArrow('left');
    expectInputValue('30', container);

    await pressArrow('right');
    await pressArrow('right');
    await pressArrow('right');
    expectInputValue('60', container);

    await pressArrow('right');
    expectInputValue('70', container);

    await pressArrow('right');
    expectInputValue('70', container);
  });

  it('renders marks with labels', () => {
    const { container } = render(
      <Slider
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
    expect(container.querySelectorAll('.mantine-Slider-mark')).toHaveLength(3);
  });

  it('renders marks without labels', () => {
    const { container } = render(
      <Slider marks={[{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }]} />
    );
    expect(container.querySelectorAll('.mantine-Slider-mark')).toHaveLength(5);
  });

  it('renders thumbChildren inside thumb', () => {
    render(
      <Slider defaultValue={50} thumbChildren={<div data-testid="thumb-content">Custom</div>} />
    );
    expect(screen.getByTestId('thumb-content')).toBeInTheDocument();
    expect(screen.getByText('Custom')).toBeInTheDocument();
  });

  it('supports Home and End keys', async () => {
    const spy = jest.fn();
    render(<Slider defaultValue={50} min={0} max={100} onChange={spy} />);

    await userEvent.type(screen.getByRole('slider'), '{End}');
    expect(spy).toHaveBeenLastCalledWith(100);

    await userEvent.type(screen.getByRole('slider'), '{Home}');
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('automatically calculates precision based on step', async () => {
    const { container } = render(<Slider defaultValue={5} step={0.1} />);
    await pressArrow('right');
    expectInputValue('5.1', container);

    await pressArrow('right');
    expectInputValue('5.2', container);
  });

  it('respects explicit precision prop', async () => {
    const { container, rerender } = render(<Slider defaultValue={5} step={1} precision={2} />);
    await pressArrow('right');
    expectInputValue('6', container);

    rerender(<Slider defaultValue={5.12} step={0.1} precision={3} />);
    await userEvent.type(screen.getByRole('slider'), '{arrowright}');
    expectInputValue('5.22', container);
  });

  it('sets aria-disabled when disabled', () => {
    render(<Slider defaultValue={50} disabled />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-disabled', 'true');
  });

  it('sets aria-orientation', () => {
    const { rerender } = render(<Slider defaultValue={50} />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-orientation', 'horizontal');

    rerender(<Slider defaultValue={50} orientation="vertical" />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-orientation', 'vertical');
  });
});
