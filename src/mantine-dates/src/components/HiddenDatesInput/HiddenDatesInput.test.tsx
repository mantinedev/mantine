import React from 'react';
import { render } from '@testing-library/react';
import { HiddenDatesInput } from './HiddenDatesInput';

describe('@mantine/dates/HiddenDatesInput', () => {
  it('sets name and form on the input', () => {
    const { container } = render(
      <HiddenDatesInput
        name="test-name"
        form="test-form"
        type="default"
        value={new Date(2022, 3, 11)}
      />
    );

    expect(container.firstChild).toHaveAttribute('name', 'test-name');
    expect(container.firstChild).toHaveAttribute('form', 'test-form');
  });

  it('formats date correctly for type="default"', () => {
    const { container, rerender } = render(
      <HiddenDatesInput
        name="test-name"
        form="test-form"
        type="default"
        value={new Date(2022, 3, 11)}
      />
    );

    expect(container.firstChild).toHaveValue(new Date(2022, 3, 11).toISOString());
    rerender(<HiddenDatesInput name="test-name" form="test-form" type="default" value={null} />);
    expect(container.firstChild).toHaveValue('');
  });

  it('formats date correctly for type="multiple"', () => {
    const { container, rerender } = render(
      <HiddenDatesInput
        name="test-name"
        form="test-form"
        type="multiple"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />
    );

    expect(container.firstChild).toHaveValue(
      `${new Date(2022, 3, 11).toISOString()}, ${new Date(2022, 4, 11).toISOString()}`
    );
    rerender(<HiddenDatesInput name="test-name" form="test-form" type="multiple" value={[]} />);
    expect(container.firstChild).toHaveValue('');
  });

  it('formats date correctly for type="range"', () => {
    const { container, rerender } = render(
      <HiddenDatesInput
        name="test-name"
        form="test-form"
        type="range"
        value={[new Date(2022, 3, 11), new Date(2022, 4, 11)]}
      />
    );

    expect(container.firstChild).toHaveValue(
      `${new Date(2022, 3, 11).toISOString()} – ${new Date(2022, 4, 11).toISOString()}`
    );
    rerender(
      <HiddenDatesInput
        name="test-name"
        form="test-form"
        type="range"
        value={[new Date(2022, 3, 11), null]}
      />
    );
    expect(container.firstChild).toHaveValue(`${new Date(2022, 3, 11).toISOString()} –`);

    rerender(
      <HiddenDatesInput name="test-name" form="test-form" type="range" value={[null, null]} />
    );
    expect(container.firstChild).toHaveValue('');
  });
});
