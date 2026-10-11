import dayjs from 'dayjs';
import lodash from 'lodash';
import { render, screen, tests } from '@mantine-tests/core';
import { Day, DayProps, DayStylesNames } from './Day';

const defaultProps: DayProps = {
  date: '2022-02-03',
};

function validateDataAttribute(prop: string) {
  const attr = `data-${lodash.kebabCase(prop)}`;
  it(`sets ${attr} prop when ${prop} prop is set`, () => {
    const { rerender } = render(<Day {...defaultProps} />);
    expect(screen.getByRole('button')).not.toHaveAttribute(attr);

    rerender(<Day {...defaultProps} {...{ [prop]: true }} />);
    expect(screen.getByRole('button')).toHaveAttribute(attr);

    rerender(<Day {...defaultProps} {...{ [prop]: true }} disabled />);
    expect(screen.getByRole('button')).not.toHaveAttribute(attr);
  });
}

describe('@mantine/dates/Day', () => {
  tests.itSupportsSystemProps<DayProps, DayStylesNames>({
    component: Day,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/dates/Day',
    stylesApiSelectors: ['day'],
  });

  validateDataAttribute('weekend');
  validateDataAttribute('outside');
  validateDataAttribute('selected');
  validateDataAttribute('inRange');
  validateDataAttribute('firstInRange');
  validateDataAttribute('lastInRange');

  it('renders given date value', () => {
    render(<Day {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveTextContent(
      Number(defaultProps.date.split('-')[2]).toString()
    );
  });

  it('adds correct disabled attributes when disabled prop is set', () => {
    render(<Day {...defaultProps} disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });

  it('supports __staticSelector', () => {
    render(<Day {...defaultProps} __staticSelector="Month" />);
    expect(screen.getByRole('button')).toHaveClass('mantine-Month-day');
  });

  it('allows to customize day rendering with renderDay function', () => {
    render(<Day {...defaultProps} renderDay={(date) => new Date(date).getFullYear()} />);
    expect(screen.getByRole('button')).toHaveTextContent('2022');
  });

  it('does not add data-weekend attribute when outside prop is true', () => {
    render(<Day {...defaultProps} weekend outside />);
    expect(screen.getByRole('button')).toHaveAttribute('data-outside');
    expect(screen.getByRole('button')).not.toHaveAttribute('data-weekend');
  });

  it('adds data-hidden attribute when hidden prop is set', () => {
    const { rerender, container } = render(<Day {...defaultProps} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-hidden');

    rerender(<Day {...defaultProps} hidden />);
    expect(container.querySelector('button')).toHaveAttribute('data-hidden');
  });

  it('supports static prop', () => {
    const { container, rerender } = render(<Day {...defaultProps} weekend />);
    expect((container.querySelector('[data-weekend]') as HTMLElement).tagName).toBe('BUTTON');

    rerender(<Day {...defaultProps} static weekend />);
    expect((container.querySelector('[data-weekend]') as HTMLElement).tagName).toBe('DIV');
  });

  it('adds data-today attribute if date is the same as today', () => {
    const { rerender } = render(<Day {...defaultProps} date="2021-11-01" />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-today');

    rerender(<Day {...defaultProps} date={dayjs().format('YYYY-MM-DD')} />);
    expect(screen.getByRole('button')).toHaveAttribute('data-today');
  });

  it('exposes selected state with aria-pressed', () => {
    const { rerender } = render(<Day {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');

    rerender(<Day {...defaultProps} selected />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');

    rerender(<Day {...defaultProps} selected disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'false');
  });

  it('sets aria-current="date" on today', () => {
    const { rerender } = render(<Day {...defaultProps} date="2021-11-01" />);
    expect(screen.getByRole('button')).not.toHaveAttribute('aria-current');

    rerender(<Day {...defaultProps} date={dayjs().format('YYYY-MM-DD')} />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-current', 'date');
  });

  it('does not set button-only attributes on static day', () => {
    const { container } = render(<Day {...defaultProps} static selected disabled tabIndex={0} />);
    const day = container.querySelector('[data-static]')!;
    expect(day).not.toHaveAttribute('disabled');
    expect(day).not.toHaveAttribute('aria-pressed');
    expect(day).not.toHaveAttribute('tabindex');
    expect(day).toHaveAttribute('data-disabled');
  });

  it('renders falsy renderDay result as is and falls back to day number for nullish result', () => {
    const { rerender } = render(<Day {...defaultProps} renderDay={() => 0} />);
    expect(screen.getByRole('button').textContent).toBe('0');

    rerender(<Day {...defaultProps} renderDay={() => ''} />);
    expect(screen.getByRole('button').textContent).toBe('');

    rerender(<Day {...defaultProps} renderDay={() => null} />);
    expect(screen.getByRole('button').textContent).toBe(
      String(new Date(defaultProps.date).getDate())
    );
  });
});
