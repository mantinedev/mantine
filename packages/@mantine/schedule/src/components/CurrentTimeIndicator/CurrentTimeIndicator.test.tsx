import 'dayjs/locale/ru';

import { DatesProvider } from '@mantine/dates';
import { render, tests } from '@mantine-tests/core';
import {
  CurrentTimeIndicator,
  CurrentTimeIndicatorProps,
  CurrentTimeIndicatorStylesNames,
} from './CurrentTimeIndicator';

const defaultProps: CurrentTimeIndicatorProps = {};

describe('@mantine/schedule/CurrentTimeIndicator', () => {
  tests.itSupportsSystemProps<CurrentTimeIndicatorProps, CurrentTimeIndicatorStylesNames>({
    component: CurrentTimeIndicator,
    props: defaultProps,
    displayName: '@mantine/schedule/CurrentTimeIndicator',
    stylesApiSelectors: [
      'currentTimeIndicator',
      'currentTimeIndicatorLine',
      'currentTimeIndicatorThumb',
    ],
  });

  it('renders correct time in bubble', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 14:30:00').getTime());
    const { container } = render(<CurrentTimeIndicator currentTimeFormat="HH:mm" withTimeBubble />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicatorTimeBubble')
    ).toHaveTextContent('14:30');
    jest.useRealTimers();
  });

  it('hides thumb when withThumb is false', () => {
    const { container, rerender } = render(<CurrentTimeIndicator withThumb={false} />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicatorThumb')
    ).not.toBeInTheDocument();

    rerender(<CurrentTimeIndicator withThumb />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicatorThumb')
    ).toBeInTheDocument();
  });

  it('hides time bubble when withTimeBubble is false', () => {
    const { container, rerender } = render(<CurrentTimeIndicator withTimeBubble={false} />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicatorTimeBubble')
    ).not.toBeInTheDocument();

    rerender(<CurrentTimeIndicator withTimeBubble />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicatorTimeBubble')
    ).toBeInTheDocument();
  });

  it('supports changing locale (prop)', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 14:30:00').getTime());
    const { container } = render(
      <CurrentTimeIndicator currentTimeFormat="h:mm a" withTimeBubble locale="ru" />
    );
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicatorTimeBubble')
    ).toHaveTextContent('2:30 дня');
    jest.useRealTimers();
  });

  it('supports changing locale (DatesProvider)', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 14:30:00').getTime());
    const { container } = render(
      <DatesProvider settings={{ locale: 'ru' }}>
        <CurrentTimeIndicator currentTimeFormat="h:mm a" withTimeBubble />
      </DatesProvider>
    );
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicatorTimeBubble')
    ).toHaveTextContent('2:30 дня');
    jest.useRealTimers();
  });

  it('supports changing format of the current time (dayjs string format)', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 14:30:00').getTime());
    const { container } = render(
      <CurrentTimeIndicator currentTimeFormat="h:mm A" withTimeBubble />
    );
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicatorTimeBubble')
    ).toHaveTextContent('2:30 PM');
    jest.useRealTimers();
  });

  it('supports changing format of the current time (function)', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 14:30:00').getTime());
    const format = (date: string) => `Current time is: ${date}`;
    const { container } = render(
      <CurrentTimeIndicator currentTimeFormat={format} withTimeBubble />
    );
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicatorTimeBubble')
    ).toHaveTextContent('Current time is: 2025-11-17 14:30:00');
    jest.useRealTimers();
  });

  it('returns null when current time is outside the specified time range (before)', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 08:00:00').getTime());
    const { container } = render(<CurrentTimeIndicator startTime="09:00:00" endTime="17:00:00" />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicator')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('returns null when current time is outside the specified time range (after)', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 18:00:00').getTime());
    const { container } = render(<CurrentTimeIndicator startTime="09:00:00" endTime="17:00:00" />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicator')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('renders indicator when current time is within the specified time range', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 12:30:00').getTime());
    const { container } = render(<CurrentTimeIndicator startTime="09:00:00" endTime="17:00:00" />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicator')
    ).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('returns null when current time equals start time boundary', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 09:00:00').getTime());
    const { container } = render(<CurrentTimeIndicator startTime="09:00:00" endTime="17:00:00" />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicator')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('returns null when current time equals end time boundary', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 17:00:00').getTime());
    const { container } = render(<CurrentTimeIndicator startTime="09:00:00" endTime="17:00:00" />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicator')
    ).not.toBeInTheDocument();
    jest.useRealTimers();
  });

  it('renders indicator when current time is just after start boundary', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 09:00:01').getTime());
    const { container } = render(<CurrentTimeIndicator startTime="09:00:00" endTime="17:00:00" />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicator')
    ).toBeInTheDocument();
    jest.useRealTimers();
  });

  it('renders indicator when current time is just before end boundary', () => {
    jest.useFakeTimers().setSystemTime(new Date('2025-11-17 16:59:59').getTime());
    const { container } = render(<CurrentTimeIndicator startTime="09:00:00" endTime="17:00:00" />);
    expect(
      container.querySelector('.mantine-CurrentTimeIndicator-currentTimeIndicator')
    ).toBeInTheDocument();
    jest.useRealTimers();
  });
});
