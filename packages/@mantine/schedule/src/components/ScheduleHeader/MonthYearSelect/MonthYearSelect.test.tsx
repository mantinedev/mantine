import { render, tests } from '@mantine-tests/core';
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
  });
});
