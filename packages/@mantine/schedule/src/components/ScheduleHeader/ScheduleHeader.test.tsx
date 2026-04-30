import { render, screen, tests } from '@mantine-tests/core';
import { ScheduleHeader, ScheduleHeaderProps, ScheduleHeaderStylesNames } from './ScheduleHeader';

const defaultProps: ScheduleHeaderProps = {};

describe('@mantine/schedule/ScheduleHeader', () => {
  tests.itSupportsSystemProps<ScheduleHeaderProps, ScheduleHeaderStylesNames>({
    component: ScheduleHeader,
    props: defaultProps,
    varsResolver: true,
    children: true,
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

  it('propagates labels to compound children via context', () => {
    render(
      <ScheduleHeader labels={{ today: 'Hoy', previous: 'Atras', next: 'Siguiente' }}>
        <ScheduleHeader.Previous />
        <ScheduleHeader.Today />
        <ScheduleHeader.Next />
      </ScheduleHeader>
    );

    expect(screen.getByRole('button', { name: 'Atras' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Hoy' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Siguiente' })).toBeInTheDocument();
  });

  it('explicit child labels override context labels', () => {
    render(
      <ScheduleHeader labels={{ today: 'Hoy' }}>
        <ScheduleHeader.Today labels={{ today: 'Aujourd’hui' }} />
      </ScheduleHeader>
    );

    expect(screen.getByRole('button', { name: 'Aujourd’hui' })).toBeInTheDocument();
  });
});
