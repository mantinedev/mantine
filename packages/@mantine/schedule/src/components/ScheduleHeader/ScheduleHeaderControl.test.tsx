import { render, tests } from '@mantine-tests/core';
import {
  ScheduleHeaderControl,
  ScheduleHeaderControlProps,
  ScheduleHeaderControlStylesNames,
} from './ScheduleHeaderControl';

const defaultProps: ScheduleHeaderControlProps = {};

describe('@mantine/schedule/ScheduleHeaderControl', () => {
  tests.itSupportsSystemProps<ScheduleHeaderControlProps, ScheduleHeaderControlStylesNames>({
    component: ScheduleHeaderControl,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    variant: true,
    size: true,
    classes: true,
    refType: HTMLButtonElement,
    displayName: '@mantine/schedule/ScheduleHeaderControl',
    stylesApiSelectors: ['headerControl'],
  });

  it('assigns data-active attribute based on active prop', () => {
    const { container, rerender } = render(<ScheduleHeaderControl active />);
    expect(container.querySelector('.mantine-ScheduleHeaderControl-headerControl')).toHaveAttribute(
      'data-active'
    );

    rerender(<ScheduleHeaderControl active={false} />);
    expect(
      container.querySelector('.mantine-ScheduleHeaderControl-headerControl')
    ).not.toHaveAttribute('data-active');
  });

  it('assigns data-square attribute based on square prop', () => {
    const { container, rerender } = render(<ScheduleHeaderControl square />);
    expect(container.querySelector('.mantine-ScheduleHeaderControl-headerControl')).toHaveAttribute(
      'data-square'
    );

    rerender(<ScheduleHeaderControl square={false} />);
    expect(
      container.querySelector('.mantine-ScheduleHeaderControl-headerControl')
    ).not.toHaveAttribute('data-square');
  });

  it('supports __staticSelector prop', () => {
    const { container } = render(
      <ScheduleHeaderControl {...defaultProps} __staticSelector="Test" />
    );
    expect(container.querySelector('.mantine-Test-headerControl')).toBeInTheDocument();
  });
});
