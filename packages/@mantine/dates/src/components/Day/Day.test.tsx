import lodash from 'lodash';
import { render, screen, tests } from '@mantine-tests/core';
import { Day, DayProps, DayStylesNames } from './Day';

const defaultProps: DayProps = {
  date: new Date(2022, 1, 3),
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
    mod: true,
    styleProps: true,
    extend: true,
    withProps: true,
    variant: true,
    size: true,
    classes: true,
    id: true,
    refType: HTMLButtonElement,
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
    expect(screen.getByRole('button')).toHaveTextContent(defaultProps.date.getDate().toString());
  });

  it('adds correct disabled attributes when disabled prop is set', () => {
    render(<Day {...defaultProps} disabled />);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
    expect(screen.getByRole('button')).toHaveAttribute('data-disabled');
  });

  it('has correct default __staticSelector', () => {
    render(<Day {...defaultProps} />);
    expect(screen.getByRole('button')).toHaveClass('mantine-Day-day');
  });

  it('supports __staticSelector', () => {
    render(<Day {...defaultProps} __staticSelector="Month" />);
    expect(screen.getByRole('button')).toHaveClass('mantine-Month-day');
  });

  it('allows to customize day rendering with renderDay function', () => {
    render(<Day {...defaultProps} renderDay={(date) => date.getFullYear()} />);
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
    const { rerender } = render(<Day {...defaultProps} date={new Date(2021, 11, 1)} />);
    expect(screen.getByRole('button')).not.toHaveAttribute('data-today');

    rerender(<Day {...defaultProps} date={new Date()} />);
    expect(screen.getByRole('button')).toHaveAttribute('data-today');
  });
});
