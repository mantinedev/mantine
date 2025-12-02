import 'dayjs/locale/ru';

import { render, screen, tests, userEvent } from '@mantine-tests/core';
import { ScheduleProvider } from '../../Schedule/Schedule.context';
import {
  MonthYearSelect,
  MonthYearSelectProps,
  MonthYearSelectStylesNames,
} from './MonthYearSelect';

const defaultProps: MonthYearSelectProps = {
  popoverProps: { opened: true },
  yearValue: 2025,
  monthValue: 10,
};

describe('@mantine/schedule/MonthYearSelect', () => {
  tests.itSupportsSystemProps<MonthYearSelectProps, MonthYearSelectStylesNames>({
    component: MonthYearSelect,
    props: defaultProps,
    styleProps: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/schedule/MonthYearSelect',
    stylesApiSelectors: [
      'monthYearSelectDropdown',
      'monthYearSelectTarget',
      'monthYearSelectControl',
      'monthYearSelectLabel',
      'monthYearSelectList',
    ],
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(<MonthYearSelect {...defaultProps} __staticSelector="Test" />);
    expect(container.querySelector('.mantine-Test-monthYearSelectTarget')).toBeInTheDocument();
    expect(container.querySelector('.mantine-Test-monthYearSelectDropdown')).toBeInTheDocument();
  });

  it('allows selecting month from the list', async () => {
    const spy = jest.fn();
    const { container } = render(<MonthYearSelect {...defaultProps} onMonthChange={spy} />);
    expect(
      container.querySelectorAll(
        '.mantine-MonthYearSelect-monthYearSelectControl[data-type="month"]'
      )
    ).toHaveLength(12);

    await userEvent.click(screen.getByRole('button', { name: /select month november/i }));
    expect(spy).toHaveBeenCalledWith(10);
  });

  it('allows selecting year from the list', async () => {
    const spy = jest.fn();
    const { container } = render(
      <MonthYearSelect {...defaultProps} onYearChange={spy} startYear={2021} endYear={2027} />
    );
    expect(
      container.querySelectorAll(
        '.mantine-MonthYearSelect-monthYearSelectControl[data-type="year"]'
      )
    ).toHaveLength(7);

    await userEvent.click(screen.getByRole('button', { name: /select year 2023/i }));
    expect(spy).toHaveBeenCalledWith(2023);
  });

  it('supports changing label format', () => {
    const { rerender } = render(<MonthYearSelect {...defaultProps} />);
    expect(screen.getByText('November 2025')).toBeInTheDocument();

    rerender(<MonthYearSelect {...defaultProps} labelFormat="MM/YYYY" />);
    expect(screen.getByText('11/2025')).toBeInTheDocument();

    rerender(<MonthYearSelect {...defaultProps} labelFormat={(date) => `Date: ${date}`} />);
    expect(screen.getByText('Date: 2025-11-01 00:00:00')).toBeInTheDocument();
  });

  it('supports locale (prop)', () => {
    const { rerender } = render(<MonthYearSelect {...defaultProps} />);
    expect(screen.getByText('November 2025')).toBeInTheDocument();

    rerender(<MonthYearSelect {...defaultProps} locale="ru" />);
    expect(screen.getByText('ноябрь 2025')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /select month ноябрь/i })).toBeInTheDocument();
  });

  it('support locale (ScheduleProvider)', () => {
    render(
      <ScheduleProvider locale="ru">
        <MonthYearSelect {...defaultProps} />
      </ScheduleProvider>
    );
    expect(screen.getByText('ноябрь 2025')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /select month ноябрь/i })).toBeInTheDocument();
  });

  it('supports custom startYear and endYear', () => {
    const { container } = render(
      <MonthYearSelect {...defaultProps} startYear={2020} endYear={2023} />
    );
    const controls = container.querySelectorAll(
      '.mantine-MonthYearSelect-monthYearSelectControl[data-type="year"]'
    );
    expect(controls).toHaveLength(4);
    expect(controls[0]).toHaveTextContent('2020');
    expect(controls[3]).toHaveTextContent('2023');
  });

  it('adds data-active attribute to active month and year controls', () => {
    render(
      <MonthYearSelect
        {...defaultProps}
        startYear={2020}
        endYear={2029}
        yearValue={2025}
        monthValue={10}
      />
    );

    expect(screen.getByRole('button', { name: /select month november/i })).toHaveAttribute(
      'data-active'
    );
    expect(screen.getByRole('button', { name: /select year 2025/i })).toHaveAttribute(
      'data-active'
    );
  });

  it('supports monthsListFormat prop', () => {
    const { rerender } = render(<MonthYearSelect {...defaultProps} monthsListFormat="MM" />);
    expect(screen.getByRole('button', { name: /select month 11/i })).toBeInTheDocument();

    rerender(<MonthYearSelect {...defaultProps} monthsListFormat={(date) => `Test ${date}`} />);
    expect(
      screen.getByRole('button', { name: /select month test 2025-11-01 00:00:00/i })
    ).toBeInTheDocument();
  });

  it('supports getMonthControlProps and getYearControlProps props', () => {
    render(
      <MonthYearSelect
        {...defaultProps}
        getMonthControlProps={(month) =>
          month === 10 ? { 'data-month-test': 'month-control-props' } : {}
        }
        getYearControlProps={(year) =>
          year === 2025 ? { 'data-year-test': 'year-control-props' } : {}
        }
      />
    );

    expect(screen.getByRole('button', { name: /select month november/i })).toHaveAttribute(
      'data-month-test',
      'month-control-props'
    );

    expect(screen.getByRole('button', { name: /select year 2025/i })).toHaveAttribute(
      'data-year-test',
      'year-control-props'
    );

    expect(screen.getByRole('button', { name: /select month october/i })).not.toHaveAttribute(
      'data-month-test'
    );
    expect(screen.getByRole('button', { name: /select year 2024/i })).not.toHaveAttribute(
      'data-year-test'
    );
  });

  it('supports keyboard navigation for year controls', async () => {
    render(<MonthYearSelect {...defaultProps} startYear={2020} endYear={2023} />);
    await userEvent.click(screen.getByRole('button', { name: /select year 2023/i }));
    expect(screen.getByRole('button', { name: /select year 2023/i })).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: /select year 2020/i })).toHaveFocus();

    await userEvent.keyboard('{ArrowUp}');
    expect(screen.getByRole('button', { name: /select year 2023/i })).toHaveFocus();

    await userEvent.keyboard('{ArrowUp}');
    expect(screen.getByRole('button', { name: /select year 2022/i })).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: /select year 2023/i })).toHaveFocus();

    await userEvent.keyboard('{Home}');
    expect(screen.getByRole('button', { name: /select year 2020/i })).toHaveFocus();

    await userEvent.keyboard('{End}');
    expect(screen.getByRole('button', { name: /select year 2023/i })).toHaveFocus();
  });

  it('supports keyboard navigation for month controls', async () => {
    render(<MonthYearSelect {...defaultProps} />);
    await userEvent.click(screen.getByRole('button', { name: /select month december/i }));
    expect(screen.getByRole('button', { name: /select month december/i })).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: /select month january/i })).toHaveFocus();

    await userEvent.keyboard('{ArrowUp}');
    expect(screen.getByRole('button', { name: /select month december/i })).toHaveFocus();

    await userEvent.keyboard('{ArrowUp}');
    expect(screen.getByRole('button', { name: /select month november/i })).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}');
    expect(screen.getByRole('button', { name: /select month december/i })).toHaveFocus();

    await userEvent.keyboard('{Home}');
    expect(screen.getByRole('button', { name: /select month january/i })).toHaveFocus();

    await userEvent.keyboard('{End}');
    expect(screen.getByRole('button', { name: /select month december/i })).toHaveFocus();
  });

  it('does not render months list if withMonths is set to false', () => {
    const { container } = render(<MonthYearSelect {...defaultProps} withMonths={false} />);
    expect(
      container.querySelectorAll(
        '.mantine-MonthYearSelect-monthYearSelectControl[data-type="month"]'
      )
    ).toHaveLength(0);
    expect(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectLabel')
    ).not.toBeInTheDocument();
  });

  it('closes/opens the dropdown when target is clicked', async () => {
    const { container } = render(<MonthYearSelect />);
    expect(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectDropdown')
    ).not.toBeInTheDocument();

    await userEvent.click(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectTarget')!
    );
    expect(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectDropdown')
    ).toBeInTheDocument();

    await userEvent.click(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectTarget')!
    );
    expect(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectDropdown')
    ).not.toBeInTheDocument();
  });

  it('closes the dropdown after year selection if withMonths is false', async () => {
    const { container } = render(<MonthYearSelect withMonths={false} />);
    await userEvent.click(container.querySelector('button')!);
    expect(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectDropdown')
    ).toBeInTheDocument();

    await userEvent.click(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectControl[data-type="year"]')!
    );

    expect(
      container.querySelector('.mantine-MonthYearSelect-monthYearSelectDropdown')
    ).not.toBeInTheDocument();
  });
});
