import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { datesTests } from '@mantine-tests/dates';
import { QuarterPicker, QuarterPickerProps, QuarterPickerStylesNames } from './QuarterPicker';

const defaultProps = {
  defaultDate: '2022-04-11',
};

describe('@mantine/dates/QuarterPicker', () => {
  tests.itSupportsSystemProps<QuarterPickerProps, QuarterPickerStylesNames>({
    component: QuarterPicker,
    props: {
      ...defaultProps,
      presets: [{ label: 'This quarter', value: '2022-04-01' }],
    },
    varsResolver: true,
    displayName: '@mantine/dates/QuarterPicker',
    stylesApiSelectors: [
      'calendarHeader',
      'calendarHeaderControl',
      'calendarHeaderControlIcon',
      'calendarHeaderLevel',
      'quartersList',
      'quartersListCell',
      'quartersListControl',
      'quartersListRow',
      'presetsList',
      'presetButton',
      'quarterPickerRoot',
    ],
    providerStylesApi: false,
  });

  datesTests.itSupportsYearsListProps({
    component: QuarterPicker,
    props: { ...defaultProps, defaultLevel: 'decade' },
  });

  datesTests.itSupportsQuartersListProps({
    component: QuarterPicker,
    props: defaultProps,
  });

  describe('keyboard navigation', () => {
    it('handles arrow keyboard events correctly with numberOfColumns=1', async () => {
      const { container } = render(<QuarterPicker {...defaultProps} numberOfColumns={1} />);
      const controls = container.querySelectorAll('table button');

      await userEvent.click(controls[0]);
      expect(controls[0]).toHaveFocus();

      await userEvent.type(controls[0], '{ArrowRight}', { skipClick: true });
      expect(controls[1]).toHaveFocus();

      await userEvent.type(controls[1], '{ArrowRight}', { skipClick: true });
      expect(controls[2]).toHaveFocus();

      await userEvent.type(controls[2], '{ArrowRight}', { skipClick: true });
      expect(controls[3]).toHaveFocus();

      await userEvent.type(controls[3], '{ArrowLeft}', { skipClick: true });
      expect(controls[2]).toHaveFocus();

      await userEvent.type(controls[2], '{ArrowDown}', { skipClick: true });
      expect(controls[2]).toHaveFocus();

      await userEvent.type(controls[2], '{ArrowUp}', { skipClick: true });
      expect(controls[2]).toHaveFocus();
    });

    it('handles cross-column keyboard navigation with numberOfColumns=2', async () => {
      const { container } = render(<QuarterPicker {...defaultProps} numberOfColumns={2} />);
      const columns = container.querySelectorAll('.mantine-QuarterPicker-quartersList');
      const firstColumnControls = columns[0].querySelectorAll('button');
      const secondColumnControls = columns[1].querySelectorAll('button');

      await userEvent.click(firstColumnControls[3]);
      expect(firstColumnControls[3]).toHaveFocus();

      await userEvent.type(firstColumnControls[3], '{ArrowRight}');
      expect(secondColumnControls[0]).toHaveFocus();

      await userEvent.type(secondColumnControls[0], '{ArrowLeft}');
      expect(firstColumnControls[3]).toHaveFocus();
    });

    it('switches year when navigation runs off the grid with numberOfColumns=1', async () => {
      const { container } = render(<QuarterPicker {...defaultProps} numberOfColumns={1} />);
      const getControls = () => container.querySelectorAll('table button');
      const getLabel = () => container.querySelector('[data-level-control]')!.textContent;

      await userEvent.type(getControls()[0], '{ArrowLeft}');
      expect(getLabel()).toBe('2021');
      expect(getControls()[3]).toHaveFocus();

      await userEvent.keyboard('{ArrowRight}');
      expect(getLabel()).toBe('2022');
      expect(getControls()[0]).toHaveFocus();

      await userEvent.keyboard('{ArrowUp}');
      expect(getLabel()).toBe('2021');
      expect(getControls()[0]).toHaveFocus();

      await userEvent.type(getControls()[2], '{ArrowDown}');
      expect(getLabel()).toBe('2022');
      expect(getControls()[2]).toHaveFocus();
    });

    it('does not switch year past minDate and maxDate', async () => {
      const { container } = render(
        <QuarterPicker
          {...defaultProps}
          numberOfColumns={1}
          minDate="2022-01-01"
          maxDate="2022-12-31"
        />
      );
      const controls = container.querySelectorAll('table button');

      await userEvent.type(controls[0], '{ArrowLeft}');
      expect(controls[0]).toHaveFocus();

      await userEvent.type(controls[3], '{ArrowRight}');
      expect(controls[3]).toHaveFocus();
    });
  });

  it('can be uncontrolled (type="default")', async () => {
    const { container } = render(<QuarterPicker {...defaultProps} date="2022-04-11" />);
    expect(container.querySelector('[data-selected]')).toBe(null);
    await userEvent.click(container.querySelector('table button')!);
    expect(container.querySelector('[data-selected]')!.textContent).toBe('Q1');
  });

  it('can be controlled (type="default")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuarterPicker {...defaultProps} date="2022-04-11" value="2022-05-20" onChange={spy} />
    );

    expect(container.querySelector('[data-selected]')!.textContent).toBe('Q2');

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith('2022-01-01');
  });

  it('can be uncontrolled (type="multiple")', async () => {
    const { container } = render(
      <QuarterPicker {...defaultProps} type="multiple" date="2022-04-11" />
    );
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);
    await userEvent.click(container.querySelectorAll('table button')[0]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);

    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(
      Array.from(container.querySelectorAll('[data-selected]')).map((node) => node.textContent)
    ).toStrictEqual(['Q1', 'Q3']);
  });

  it('can be controlled (type="multiple")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuarterPicker
        {...defaultProps}
        type="multiple"
        date="2022-04-11"
        value={['2022-04-01']}
        onChange={spy}
      />
    );

    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalledWith(['2022-04-01', '2022-01-01']);
  });

  it('can be uncontrolled (type="range")', async () => {
    const { container } = render(<QuarterPicker {...defaultProps} type="range" />);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(0);

    await userEvent.click(container.querySelectorAll('table button')[0]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(1);

    await userEvent.click(container.querySelectorAll('table button')[3]);
    expect(container.querySelectorAll('[data-selected]')).toHaveLength(2);
    expect(container.querySelectorAll('[data-selected]')[0].textContent).toBe('Q1');
    expect(container.querySelectorAll('[data-selected]')[1].textContent).toBe('Q4');
    expect(container.querySelectorAll('[data-in-range]')).toHaveLength(2);
  });

  it('can be controlled (type="range")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuarterPicker {...defaultProps} type="range" value={[null, null]} onChange={spy} />
    );
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenLastCalledWith(['2022-01-01', null]);
  });

  it('supports onClick handler from getQuarterControlProps', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuarterPicker {...defaultProps} getQuarterControlProps={() => ({ onClick: spy })} />
    );
    await userEvent.click(container.querySelector('table button')!);
    expect(spy).toHaveBeenCalled();
  });

  it('handles allowSingleDateInRange={true} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuarterPicker {...defaultProps} type="range" allowSingleDateInRange onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-07-01', null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-07-01', '2022-07-01']);
  });

  it('handles allowSingleDateInRange={false} correctly', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuarterPicker {...defaultProps} type="range" allowSingleDateInRange={false} onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith(['2022-07-01', null]);
    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(spy).toHaveBeenCalledWith([null, null]);
  });

  it('supports allowDeselect', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuarterPicker {...defaultProps} allowDeselect value="2022-04-01" onChange={spy} />
    );
    await userEvent.click(container.querySelectorAll('table button')[1]);
    expect(spy).toHaveBeenCalledWith(null);
  });

  it('switches to decade level when header label is clicked and back when a year is picked', async () => {
    const levelSpy = jest.fn();
    const yearSpy = jest.fn();
    const { container } = render(
      <QuarterPicker
        {...defaultProps}
        onLevelChange={levelSpy}
        onYearSelect={yearSpy}
        ariaLabels={{ yearLevelControl: 'level-control' }}
      />
    );

    await userEvent.click(screen.getByLabelText('level-control'));
    expect(levelSpy).toHaveBeenLastCalledWith('decade');
    expect(container.querySelector('.mantine-QuarterPicker-yearsList')).toBeInTheDocument();

    await userEvent.click(container.querySelectorAll('table button')[3]);
    expect(yearSpy).toHaveBeenCalledWith('2023-01-01');
    expect(levelSpy).toHaveBeenLastCalledWith('year');
    expect(screen.getByLabelText('level-control')).toHaveTextContent('2023');
  });

  it('does not allow going to decade level when maxLevel="year"', () => {
    render(
      <QuarterPicker
        {...defaultProps}
        maxLevel="year"
        ariaLabels={{ yearLevelControl: 'level-control' }}
      />
    );
    expect(screen.getByLabelText('level-control')).toHaveAttribute('data-static');
  });

  it('respects controlled level prop', () => {
    const { container } = render(<QuarterPicker {...defaultProps} level="decade" />);
    expect(container.querySelector('.mantine-QuarterPicker-yearsList')).toBeInTheDocument();
  });

  it('navigates years with next/previous controls', async () => {
    const nextSpy = jest.fn();
    render(
      <QuarterPicker
        {...defaultProps}
        onNextYear={nextSpy}
        ariaLabels={{ yearLevelControl: 'level-control', nextYear: 'next' }}
      />
    );
    await userEvent.click(screen.getByLabelText('next'));
    expect(nextSpy).toHaveBeenCalledWith('2023-04-11');
    expect(screen.getByLabelText('level-control')).toHaveTextContent('2023');
  });

  it('supports numberOfColumns and columnsToScroll', async () => {
    const { container } = render(
      <QuarterPicker
        {...defaultProps}
        numberOfColumns={2}
        columnsToScroll={1}
        ariaLabels={{ yearLevelControl: 'level-control', nextYear: 'next' }}
      />
    );
    expect(container.querySelectorAll('table')).toHaveLength(2);
    expect(screen.getAllByLabelText('level-control')[0]).toHaveTextContent('2022');
    expect(screen.getAllByLabelText('level-control')[1]).toHaveTextContent('2023');
    await userEvent.click(screen.getByLabelText('next'));
    expect(screen.getAllByLabelText('level-control')[0]).toHaveTextContent('2023');
  });

  it('marks year of the selected quarter as selected on decade level', () => {
    const { container } = render(
      <QuarterPicker {...defaultProps} value="2024-07-01" defaultLevel="decade" />
    );
    expect(container.querySelector('[data-selected]')!.textContent).toBe('2024');
  });

  it('has correct default __staticSelector', () => {
    const { container } = render(<QuarterPicker {...defaultProps} />);
    expect(container.querySelector('.mantine-QuarterPicker-quartersList')).toBeInTheDocument();
  });

  it('supports custom __staticSelector', () => {
    const { container } = render(
      <QuarterPicker {...defaultProps} __staticSelector="QuarterPickerInput" />
    );
    expect(container.querySelector('.mantine-QuarterPickerInput-quartersList')).toBeInTheDocument();
  });

  it('correctly handles presets', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuarterPicker
        {...defaultProps}
        onChange={spy}
        presets={[
          { label: 'This quarter', value: '2022-04-01' },
          { label: 'Next year Q1', value: '2023-01-01' },
        ]}
        ariaLabels={{ yearLevelControl: 'level-control' }}
      />
    );

    expect(screen.getByText('This quarter')).toBeInTheDocument();
    await userEvent.click(screen.getByText('Next year Q1'));
    expect(spy).toHaveBeenCalledWith('2023-01-01');
    expect(screen.getByLabelText('level-control')).toHaveTextContent('2023');
    expect(container.querySelector('[data-selected]')!.textContent).toBe('Q1');
  });

  it('does not change the displayed date when a quarter is clicked', async () => {
    const onDateChange = jest.fn();
    const onQuarterSelect = jest.fn();
    const { container } = render(
      <QuarterPicker
        {...defaultProps}
        onDateChange={onDateChange}
        onQuarterSelect={onQuarterSelect}
      />
    );

    await userEvent.click(container.querySelectorAll('table button')[2]);
    expect(onQuarterSelect).toHaveBeenCalledWith('2022-07-01');
    expect(onDateChange).not.toHaveBeenCalled();
  });

  it('normalizes a preset value to the start of its quarter before calling onChange', async () => {
    const spy = jest.fn();
    const { container } = render(
      <QuarterPicker
        {...defaultProps}
        onChange={spy}
        presets={[{ label: 'Mid Q2', value: '2026-05-15' }]}
      />
    );

    await userEvent.click(screen.getByText('Mid Q2'));
    expect(spy).toHaveBeenCalledWith('2026-04-01');
    expect(container.querySelector('[data-selected]')!.textContent).toBe('Q2');
  });

  it('normalizes range preset values to the start of their quarter before calling onChange', async () => {
    const spy = jest.fn();
    render(
      <QuarterPicker
        {...defaultProps}
        type="range"
        onChange={spy}
        presets={[{ label: 'Custom range', value: ['2026-02-10', '2026-08-20'] }]}
      />
    );

    await userEvent.click(screen.getByText('Custom range'));
    expect(spy).toHaveBeenCalledWith(['2026-01-01', '2026-07-01']);
  });

  it('supports withNativeLevelSelect', () => {
    const { container } = render(<QuarterPicker {...defaultProps} withNativeLevelSelect />);
    expect(container.querySelector('select[data-select="year"]')).toBeInTheDocument();
    expect(container.querySelector('select[data-select="month"]')).not.toBeInTheDocument();
  });
});
