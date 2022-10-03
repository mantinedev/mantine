import React from 'react';
import { checkAccessibility, itSupportsSystemProps } from '@mantine/tests';
import { fireEvent, render } from '@testing-library/react';

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

  it('default value should work', () => {
    const { container } = render(
      <div>
        <Rating defaultValue={2} />
      </div>
    );

    const checkedInput: HTMLInputElement = container.querySelector('input[type="radio"]:checked');
    expect(checkedInput.value).toEqual('2');
  });

  it('hover should work properly', () => {
    const spy = jest.fn();
    const { container } = render(<Rating defaultValue={2} onChangeHover={spy} />);

    container.firstElementChild.getBoundingClientRect = jest
      .fn()
      .mockImplementation(() => ({ left: 0, right: 0, width: 20 * 5 }));

    fireEvent.mouseMove(container.firstChild, {
      clientX: 18,
    });

    const firstInput: HTMLInputElement = container.querySelector('input[data-active="true"]');
    expect(firstInput.value).toEqual('1');

    fireEvent.mouseMove(container.firstChild, {
      clientX: 35,
    });
    const secondInput: HTMLInputElement = container.querySelector('input[data-active="true"]');

    expect(secondInput.value).toEqual('2');

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenNthCalledWith(1, 1);
    expect(spy).toHaveBeenNthCalledWith(2, 2);
  });

  it('should select the rating', () => {
    const { container } = render(<Rating name="click-test" defaultValue={2} />);
    fireEvent.click(container.querySelector('input[name="click-test"][value="5"] + label'));
    const labelCheckedInput: HTMLInputElement = container.querySelector(
      'input[name="click-test"][value="5"]:checked'
    );
    expect(labelCheckedInput.value).toEqual('5');

    fireEvent.click(container.querySelector('input[name="click-test"][value="4"]'));
    const inputCheckedInput: HTMLInputElement = container.querySelector(
      'input[name="click-test"][value="4"]:checked'
    );
    expect(inputCheckedInput.value).toEqual('4');
  });

  it('should select the zero rating', async () => {
    const { container } = render(<Rating name="zero-test" defaultValue={3} />);

    fireEvent.click(container.querySelector('input[name="zero-test"][value="3"]'), {
      clientX: 1,
    });

    const zeroInput: HTMLInputElement = container.querySelector(
      'input[name="zero-test"][value="0"]:checked'
    );

    expect(zeroInput.value).toEqual('0');
  });

  it('onChange should work properly', () => {
    const spy = jest.fn();
    const { container } = render(
      <Rating defaultValue={1} fractions={2} name="test-onchange" onChange={spy} />
    );

    fireEvent.click(container.querySelector('input[value="3"]'));
    fireEvent.click(container.querySelector('input[value="4.5"]'));
    fireEvent.click(container.querySelector('input[value="4"]'));
    fireEvent.click(container.querySelector('input[value="2.5"]'));
    fireEvent.click(container.querySelector('input[value="1"]'));
    fireEvent.click(container.querySelector('input[value="1"]'), { clientX: 1 });

    expect(spy).toBeCalledTimes(6);
    expect(spy.mock.calls).toEqual([[3], [4.5], [4], [2.5], [1], [0]]);
  });

  it('if value is null, 0 rating should be selected', () => {
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
