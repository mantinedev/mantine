import { render, tests } from '@mantine-tests/core';
import { ScheduleHeader, ScheduleHeaderProps, ScheduleHeaderStylesNames } from './ScheduleHeader';

const defaultProps: ScheduleHeaderProps = {};

describe('@mantine/schedule/ScheduleHeader', () => {
  tests.itSupportsSystemProps<ScheduleHeaderProps, ScheduleHeaderStylesNames>({
    component: ScheduleHeader,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLDivElement,
    displayName: '@mantine/schedule/ScheduleHeader',
    stylesApiSelectors: ['header'],
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(<ScheduleHeader {...defaultProps} __staticSelector="Test" />);
    expect(container.querySelector('.mantine-Test-header')).toBeInTheDocument();
  });

  it('exposes static components', () => {
    expect(ScheduleHeader.Next).toBeDefined();
    expect(ScheduleHeader.Previous).toBeDefined();
    expect(ScheduleHeader.Today).toBeDefined();
    expect(ScheduleHeader.ViewSelect).toBeDefined();
    expect(ScheduleHeader.MonthYearSelect).toBeDefined();
  });
});
