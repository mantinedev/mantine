import dayjs from 'dayjs';
import { DatesProvider } from '@mantine/dates';
import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

const defaultYearsNames = [
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
  '2027',
  '2028',
  '2029',
];

const ruYearsNames = [
  'янв. 2020',
  'янв. 2021',
  'янв. 2022',
  'янв. 2023',
  'янв. 2024',
  'янв. 2025',
  'янв. 2026',
  'янв. 2027',
  'янв. 2028',
  'янв. 2029',
];

const customFormatYearsNames = [
  'Jan 20',
  'Jan 21',
  'Jan 22',
  'Jan 23',
  'Jan 24',
  'Jan 25',
  'Jan 26',
  'Jan 27',
  'Jan 28',
  'Jan 29',
];

function expectYearNames(container: HTMLElement, monthNames: string[]) {
  expect(
    Array.from(container.querySelectorAll('table button')).map((node) => node.textContent)
  ).toStrictEqual(monthNames);
}

export function itSupportsYearsListProps(options: Options, name = 'supports years list props') {
  describe(name, () => {
    it('renders correct years list', () => {
      const { container } = render(<options.component {...options.props} />);
      expectYearNames(container, defaultYearsNames);
    });

    it('supports locale prop with custom yearsListFormat', () => {
      const { container } = render(
        <options.component {...options.props} locale="ru" yearsListFormat="MMM YYYY" />
      );
      expectYearNames(container, ruYearsNames);
    });

    it('supports years list localization with DatesProvider', () => {
      const { container } = render(
        <DatesProvider settings={{ locale: 'ru' }}>
          <options.component {...options.props} yearsListFormat="MMM YYYY" />
        </DatesProvider>
      );
      expectYearNames(container, ruYearsNames);
    });

    it('supports custom yearsListFormat format', () => {
      const { container } = render(
        <options.component {...options.props} yearsListFormat="MMM YY" />
      );
      expectYearNames(container, customFormatYearsNames);
    });

    it('disables years if they are before minDate', () => {
      const { container } = render(
        <options.component
          {...options.props}
          decade={new Date(2022, 3, 11)}
          minDate={new Date(2023, 4, 11)}
        />
      );
      const years = container.querySelectorAll('table button');
      expect(years[0]).toBeDisabled();
      expect(years[1]).toBeDisabled();
      expect(years[2]).toBeDisabled();
      expect(years[3]).not.toBeDisabled();
      expect(years[9]).not.toBeDisabled();
    });

    it('disables years if they are after minDate', () => {
      const { container } = render(
        <options.component
          {...options.props}
          decade={new Date(2022, 3, 11)}
          maxDate={new Date(2023, 4, 11)}
        />
      );
      const years = container.querySelectorAll('[data-picker-control]');
      expect(years[0]).not.toBeDisabled();
      expect(years[3]).not.toBeDisabled();
      expect(years[4]).toBeDisabled();
      expect(years[9]).toBeDisabled();
    });

    it('supports getYearControlProps', () => {
      const { container } = render(
        <options.component
          {...options.props}
          getYearControlProps={(date: Date) => ({
            selected: dayjs(date).isSame(new Date(2022, 3, 11), 'year'),
          })}
        />
      );

      const years = container.querySelectorAll('[data-picker-control]');
      expect(years[1]).not.toHaveAttribute('data-selected');
      expect(years[2]).toHaveAttribute('data-selected');
      expect(years[3]).not.toHaveAttribute('data-selected');
    });
  });
}
