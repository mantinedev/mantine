import dayjs from 'dayjs';
import { render } from '@mantine-tests/core';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

const defaultQuarterNames = ['Q1', 'Q2', 'Q3', 'Q4'];
const customFormatQuarterNames = ['Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022'];
const functionFormatQuarterNames = ['#1', '#2', '#3', '#4'];

function expectQuarterNames(container: HTMLElement, names: string[]) {
  expect(
    Array.from(container.querySelectorAll('table button')).map((node) => node.textContent)
  ).toStrictEqual(names);
}

export function itSupportsQuartersListProps(
  options: Options,
  name = 'supports quarters list props'
) {
  describe(name, () => {
    it('renders correct quarters list', () => {
      const { container } = render(<options.component {...options.props} />);
      expectQuarterNames(container, defaultQuarterNames);
    });

    it('supports custom quartersListFormat format', () => {
      const { container } = render(
        <options.component {...options.props} quartersListFormat="[Q]Q YYYY" />
      );
      expectQuarterNames(container, customFormatQuarterNames);
    });

    it('supports quartersListFormat as a function', () => {
      const { container } = render(
        <options.component
          {...options.props}
          quartersListFormat={(date: string) => `#${Math.floor(dayjs(date).month() / 3) + 1}`}
        />
      );
      expectQuarterNames(container, functionFormatQuarterNames);
    });

    it('disables quarters if they are before minDate', () => {
      const { container } = render(
        <options.component {...options.props} year="2022-04-11" minDate="2022-05-11" />
      );
      const quarters = container.querySelectorAll('table button');
      expect(quarters[0]).toBeDisabled();
      expect(quarters[1]).not.toBeDisabled();
      expect(quarters[3]).not.toBeDisabled();
    });

    it('disables quarters if they are after maxDate', () => {
      const { container } = render(
        <options.component {...options.props} year="2022-04-11" maxDate="2022-05-11" />
      );
      const quarters = container.querySelectorAll('table button');
      expect(quarters[0]).not.toBeDisabled();
      expect(quarters[1]).not.toBeDisabled();
      expect(quarters[2]).toBeDisabled();
      expect(quarters[3]).toBeDisabled();
    });

    it('supports getQuarterControlProps', () => {
      const { container } = render(
        <options.component
          {...options.props}
          getQuarterControlProps={(date: string) => ({ selected: date === '2022-04-01' })}
        />
      );

      const quarters = container.querySelectorAll('table button');
      expect(quarters[0]).not.toHaveAttribute('data-selected');
      expect(quarters[1]).toHaveAttribute('data-selected');
      expect(quarters[2]).not.toHaveAttribute('data-selected');
    });
  });
}
