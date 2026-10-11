import { render } from '@mantine-tests/core';
import { HiddenDatesInput } from './HiddenDatesInput';

describe('@mantine/dates/HiddenDatesInput', () => {
  it('sets name and form on the input', () => {
    const { container } = render(
      <HiddenDatesInput name="test-name" form="test-form" type="default" value="2022-04-11" />
    );

    expect(container.querySelector('input')).toHaveAttribute('name', 'test-name');
    expect(container.querySelector('input')).toHaveAttribute('form', 'test-form');
  });

  it('formats date correctly for type="default"', () => {
    const { container, rerender } = render(
      <HiddenDatesInput name="test-name" form="test-form" type="default" value="2022-04-11" />
    );

    expect(container.querySelector('input')).toHaveValue('2022-04-11');
    rerender(<HiddenDatesInput name="test-name" form="test-form" type="default" value={null} />);
    expect(container.querySelector('input')).toHaveValue('');
  });

  it('formats date correctly for type="multiple"', () => {
    const { container, rerender } = render(
      <HiddenDatesInput
        name="test-name"
        form="test-form"
        type="multiple"
        value={['2022-04-11', '2022-05-11']}
      />
    );

    expect(container.querySelector('input')).toHaveValue('2022-04-11, 2022-05-11');
    rerender(<HiddenDatesInput name="test-name" form="test-form" type="multiple" value={[]} />);
    expect(container.querySelector('input')).toHaveValue('');
  });

  it('formats date correctly for type="range"', () => {
    const { container, rerender } = render(
      <HiddenDatesInput
        name="test-name"
        form="test-form"
        type="range"
        value={['2022-04-11', '2022-05-11']}
      />
    );

    expect(container.querySelector('input')).toHaveValue('2022-04-11 – 2022-05-11');
    rerender(
      <HiddenDatesInput
        name="test-name"
        form="test-form"
        type="range"
        value={['2022-04-11', null]}
      />
    );
    expect(container.querySelector('input')).toHaveValue(`2022-04-11 –`);

    rerender(
      <HiddenDatesInput name="test-name" form="test-form" type="range" value={[null, null]} />
    );
    expect(container.querySelector('input')).toHaveValue('');
  });

  it('formats Date values', () => {
    const { container, rerender } = render(
      <HiddenDatesInput name="n" form="f" type="default" value={new Date(2022, 3, 11, 14, 30)} />
    );
    expect(container.querySelector('input')).toHaveValue('2022-04-11');

    rerender(
      <HiddenDatesInput
        name="n"
        form="f"
        type="multiple"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />
    );
    expect(container.querySelector('input')).toHaveValue('2022-04-11, 2022-05-11');

    rerender(
      <HiddenDatesInput
        name="n"
        form="f"
        type="range"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />
    );
    expect(container.querySelector('input')).toHaveValue('2022-04-11 – 2022-05-11');
  });

  it('includes time when withTime is set', () => {
    const { container, rerender } = render(
      <HiddenDatesInput
        name="n"
        form="f"
        type="default"
        value={new Date(2022, 3, 11, 14, 30)}
        withTime
      />
    );
    expect(container.querySelector('input')).toHaveValue('2022-04-11 14:30:00');

    rerender(
      <HiddenDatesInput
        name="n"
        form="f"
        type="multiple"
        value={['2022-04-11 10:00:00', null, '2022-05-11 12:15:00']}
        withTime
      />
    );
    expect(container.querySelector('input')).toHaveValue(
      '2022-04-11 10:00:00, 2022-05-11 12:15:00'
    );

    rerender(
      <HiddenDatesInput
        name="n"
        form="f"
        type="range"
        value={['2022-04-11 10:00:00', '2022-05-11 12:15:00']}
        withTime
      />
    );
    expect(container.querySelector('input')).toHaveValue(
      '2022-04-11 10:00:00 – 2022-05-11 12:15:00'
    );
  });
});
