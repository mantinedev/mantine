import React from 'react';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Rating, RatingProps } from './Rating';

const defaultProps: RatingProps = {
  defaultValue: 80,
};

describe('@mantine/core/Rating', () => {
  itSupportsProviderVariant(Rating, defaultProps, 'Rating');
  itSupportsProviderSize(Rating, defaultProps, 'Rating');
  checkAccessibility([<Rating defaultValue={3.5} fractions={2} aria-label="test-rating" />]);
  itSupportsSystemProps({
    component: Rating,
    props: defaultProps,
    displayName: '@mantine/core/Rating',
    refType: HTMLDivElement,
    providerName: 'Rating',
  });
  itDisablesInputInsideDisabledFieldset(Rating, defaultProps);

  it('has correct name', () => {
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
    const { container } = render(<Rating defaultValue={2} onHover={spy} />);

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

  it('selects 0, if value or defaultValue is null', () => {
    const { container } = render(
      <>
        <Rating value={null} name="rating-null-value" />
        <Rating defaultValue={null} name="rating-null-defaultValue" />
      </>
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
