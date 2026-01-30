import userEvent from '@testing-library/user-event';
import { render, screen, tests } from '@mantine-tests/core';
import { Rating, RatingProps, RatingStylesNames } from './Rating';

const defaultProps: RatingProps = {};

describe('@mantine/core/Rating', () => {
  tests.itSupportsSystemProps<RatingProps, RatingStylesNames>({
    component: Rating,
    props: defaultProps,
    displayName: '@mantine/core/Rating',
    stylesApiSelectors: ['root', 'starSymbol', 'input', 'label', 'symbolBody', 'symbolGroup'],
  });

  it('clears rating when clicking the same value with allowClear=true', async () => {
    const spy = jest.fn();
    render(<Rating allowClear onChange={spy} defaultValue={3} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const thirdInput = inputs.find((input) => input.value === '3'); // Find input with value 3

    await userEvent.click(thirdInput!.nextElementSibling as HTMLElement); // Click the label

    expect(spy).toHaveBeenCalledWith(0);
  });

  it('does not clear rating when clicking the same value with allowClear=false', async () => {
    const spy = jest.fn();
    render(<Rating allowClear={false} onChange={spy} defaultValue={3} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const thirdInput = inputs.find((input) => input.value === '3');

    await userEvent.click(thirdInput?.nextElementSibling as HTMLElement);

    expect(spy).toHaveBeenCalledWith(3);
  });

  it('does not clear rating when clicking different value with allowClear=true', async () => {
    const spy = jest.fn();
    render(<Rating allowClear onChange={spy} defaultValue={3} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const fourthInput = inputs.find((input) => input.value === '4'); // Find input with value 4

    await userEvent.click(fourthInput!.nextElementSibling as HTMLElement);

    expect(spy).toHaveBeenCalledWith(4);
  });

  it('allows setting rating from 0 with allowClear=true', async () => {
    const spy = jest.fn();
    render(<Rating allowClear onChange={spy} defaultValue={0} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const firstInput = inputs.find((input) => input.value === '1'); // Find input with value 1

    await userEvent.click(firstInput!.nextElementSibling as HTMLElement);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('clears rating with fractions when clicking the same value', async () => {
    const spy = jest.fn();
    render(<Rating allowClear fractions={2} onChange={spy} defaultValue={2.5} />);

    const inputs = screen.getAllByRole('radio');
    // Find the input with value 2.5 (3rd star, 1st fraction)
    const targetInput = inputs.find((input) => (input as HTMLInputElement).value === '2.5');

    await userEvent.click(targetInput!.nextElementSibling as HTMLElement);

    expect(spy).toHaveBeenCalledWith(0);
  });
});
