import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rating, RatingProps } from './Rating';

const defaultProps: RatingProps = {
  defaultValue: 80,
};

describe('@mantine/core/Progress', () => {
  checkAccessibility([<Rating defaultValue={3.5} fractions={2} aria-label="test-rating" />]);

  itSupportsSystemProps({
    component: Rating,
    props: defaultProps,
    displayName: '@mantine/core/Rating',
    refType: HTMLDivElement,
    providerName: 'Rating',
  });

  it('should always have name property', () => {
    const { container } = render(<Rating defaultValue={1} />);

    const inputs = Array.from(container.querySelectorAll('input'));
    const nameSet = new Set(inputs.map((item) => item.name));

    expect(nameSet.size).toEqual(1);
    expect(nameSet.has('')).toEqual(false);
  });

  it('supports defaultValue', () => {
    const { container } = render(<Rating defaultValue={2} />);

    const checkedInput: HTMLInputElement = container.querySelector('input[type="radio"]:checked');
    expect(checkedInput.value).toEqual('2');
  });

  it('supports hover events', async () => {
    const spy = jest.fn();
    const { container } = render(<Rating defaultValue={2} onChangeHover={spy} />);

    container.firstElementChild.getBoundingClientRect = jest
      .fn()
      .mockImplementation(() => ({ left: 0, right: 0, width: 20 * 5 }));

    await userEvent.pointer({ target: container.firstElementChild, coords: { clientX: 18 } });

    const firstInput: HTMLInputElement = container.querySelector('input[data-active="true"]');
    expect(firstInput.value).toEqual('1');

    await userEvent.pointer({ target: container.firstElementChild, coords: { clientX: 35 } });
    const secondInput: HTMLInputElement = container.querySelector('input[data-active="true"]');

    expect(secondInput.value).toEqual('2');

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenNthCalledWith(1, 1);
    expect(spy).toHaveBeenNthCalledWith(2, 2);
  });

  it('supports uncontrolled state', async () => {
    const { container } = render(<Rating name="click-test" defaultValue={2} />);
    await userEvent.click(container.querySelector('input[name="click-test"][value="5"] + label'));
    const labelCheckedInput: HTMLInputElement = container.querySelector(
      'input[name="click-test"][value="5"]:checked'
    );
    expect(labelCheckedInput.value).toEqual('5');

    await userEvent.click(container.querySelector('input[name="click-test"][value="4"]'));
    const inputCheckedInput: HTMLInputElement = container.querySelector(
      'input[name="click-test"][value="4"]:checked'
    );
    expect(inputCheckedInput.value).toEqual('4');
  });

  it('supports deselecting the value', async () => {
    const { container } = render(<Rating name="zero-test" defaultValue={3} />);

    userEvent.pointer({
      target: container.querySelector('input[name="zero-test"][value="3"]'),
      keys: '[MouseLeft]',
      coords: {
        clientX: 1,
      },
    });

    const zeroInput: HTMLInputElement = container.querySelector(
      'input[name="zero-test"][value="0"]:checked'
    );

    expect(zeroInput.value).toEqual('0');
  });

  it('supports onChange', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Rating defaultValue={1} fractions={2} name="test-onchange" onChange={spy} />
    );

    await userEvent.click(container.querySelector('input[value="3"]'));
    await userEvent.click(container.querySelector('input[value="4.5"]'));
    await userEvent.click(container.querySelector('input[value="4"]'));
    await userEvent.click(container.querySelector('input[value="2.5"]'));
    await userEvent.click(container.querySelector('input[value="1"]'));
    await userEvent.pointer({
      target: container.querySelector('input[value="1"]'),
      keys: '[MouseLeft]',
      coords: {
        clientX: 1,
      },
    });

    expect(spy).toBeCalledTimes(6);
    expect(spy.mock.calls).toEqual([[3], [4.5], [4], [2.5], [1], [0]]);
  });

  it('selects 0, if value or defaultValue is null', () => {
    const { container } = render(
      <div>
        <Rating value={null} name="rating-null-value" />
        <Rating defaultValue={null} name="rating-null-defaultValue" />
      </div>
    );

    const checkedInputI: HTMLInputElement = container.querySelector(
      'input[name="rating-null-value"]:checked'
    );
    const checkedInputII: HTMLInputElement = container.querySelector(
      'input[name="rating-null-defaultValue"]:checked'
    );

    expect(checkedInputI.value).toBe('0');
    expect(checkedInputII.value).toBe('0');
  });
});
