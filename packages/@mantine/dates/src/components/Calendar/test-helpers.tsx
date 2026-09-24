import { useStyles } from '@mantine/core';
import { render } from '@mantine-tests/core';
import { Calendar, CalendarEngineFactory } from './Calendar';
import { CalendarContextValue, CalendarNavigation, CalendarProvider } from './Calendar.context';
import { useCalendar } from './use-calendar/use-calendar';

export type CalendarContextOverrides = Partial<
  Omit<CalendarContextValue, 'controller' | 'getStyles' | 'navigation'>
> & {
  date?: string;
  navigation?: Partial<CalendarNavigation>;
};

const noop = () => {};

interface CalendarTestProviderProps {
  overrides?: CalendarContextOverrides;
  children: React.ReactNode;
}

export function CalendarTestProvider({ overrides = {}, children }: CalendarTestProviderProps) {
  const { date, navigation, ...rest } = overrides;
  const controller = useCalendar({ defaultDate: date ?? '2022-04-11' });
  const getStyles = useStyles<CalendarEngineFactory>({
    name: 'Calendar',
    classes: Calendar.classes,
    props: {},
  });

  const value: CalendarContextValue = {
    controller,
    level: 'month',
    locale: 'en',
    minDate: undefined,
    maxDate: undefined,
    static: false,
    getStyles,
    stylesApiProps: {
      __staticSelector: 'Calendar',
      classNames: undefined,
      styles: undefined,
      unstyled: undefined,
      size: undefined,
      attributes: undefined,
    },
    navigation: {
      getControlRef: noop,
      onControlKeyDown: noop,
      getDayRef: noop,
      onDayKeyDown: noop,
      getWeekControlRef: noop,
      onWeekControlKeyDown: noop,
      ...navigation,
    },
    weekControls: { enabled: false },
    ...rest,
  };

  return <CalendarProvider value={value}>{children}</CalendarProvider>;
}

export function renderInCalendar(ui: React.ReactNode, overrides?: CalendarContextOverrides) {
  return render(<CalendarTestProvider overrides={overrides}>{ui}</CalendarTestProvider>);
}
