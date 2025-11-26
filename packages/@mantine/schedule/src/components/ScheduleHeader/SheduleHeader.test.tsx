import { render, tests } from '@mantine-tests/core';
import { ScheduleHeader, ScheduleHeaderProps, ScheduleHeaderStylesNames } from './ScheduleHeader';

const defaultProps: ScheduleHeaderProps = {};

describe('@mantine/schedule/ScheduleHeader', () => {
  tests.itSupportsSystemProps<ScheduleHeaderProps, ScheduleHeaderStylesNames>({
    component: ScheduleHeader,
    props: defaultProps,
    polymorphic: true,
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
    const { container } = render(<ScheduleHeader __staticSelector="Test" className="test-class" />);
    expect(container.querySelector('.mantine-Test-header')).toHaveClass('test-class');
  });
});
