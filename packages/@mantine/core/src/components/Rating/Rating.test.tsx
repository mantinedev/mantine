import userEvent from '@testing-library/user-event';
import { render, screen, tests } from '@mantine-tests/core';
import { Rating, RatingProps, RatingStylesNames } from './Rating';

const defaultProps: RatingProps = {};

describe('@mantine/core/Rating', () => {
  tests.itSupportsSystemProps<RatingProps, RatingStylesNames>({
    component: Rating,
    props: defaultProps,
    varsResolver: true,
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
    const targetInput = inputs.find((input) => (input as HTMLInputElement).value === '2.5');

    await userEvent.click(targetInput!.nextElementSibling as HTMLElement);

    expect(spy).toHaveBeenCalledWith(0);
  });

  it('changes value on Space key press', async () => {
    const spy = jest.fn();
    render(<Rating onChange={spy} defaultValue={0} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const thirdInput = inputs.find((input) => input.value === '3');

    thirdInput!.focus();
    await userEvent.keyboard(' ');

    expect(spy).toHaveBeenCalledWith(3);
  });

  it('changes value on Enter key press', async () => {
    const spy = jest.fn();
    render(<Rating onChange={spy} defaultValue={0} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const secondInput = inputs.find((input) => input.value === '2');

    secondInput!.focus();
    await userEvent.keyboard('{Enter}');

    expect(spy).toHaveBeenCalledWith(2);
  });

  it('throws error for negative fractions', () => {
    expect(() => render(<Rating fractions={-2} />)).toThrow();
  });

  it('handles zero count prop', () => {
    render(<Rating count={0} />);
    expect(screen.queryAllByRole('radio')).toHaveLength(0);
  });

  it('handles decimal precision with fractions', () => {
    const spy = jest.fn();
    render(<Rating fractions={3} onChange={spy} defaultValue={0} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const oneThirdInput = inputs.find(
      (input) => parseFloat(input.value) > 0.33 && parseFloat(input.value) < 0.34
    );

    expect(oneThirdInput).toBeDefined();
  });

  it('works in controlled mode', async () => {
    const spy = jest.fn();
    const { rerender } = render(<Rating value={2} onChange={spy} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const thirdInput = inputs.find((input) => input.value === '3');

    await userEvent.click(thirdInput!.nextElementSibling as HTMLElement);

    expect(spy).toHaveBeenCalledWith(3);

    let checkedInput = inputs.find((input) => input.checked);
    expect(checkedInput?.value).toBe('2');

    rerender(<Rating value={3} onChange={spy} />);
    checkedInput = screen
      .getAllByRole('radio')
      .find((input: any) => input.checked) as HTMLInputElement;
    expect(checkedInput?.value).toBe('3');
  });

  it('works in uncontrolled mode with defaultValue', async () => {
    const spy = jest.fn();
    render(<Rating defaultValue={2} onChange={spy} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const thirdInput = inputs.find((input) => input.value === '3');

    await userEvent.click(thirdInput!.nextElementSibling as HTMLElement);

    expect(spy).toHaveBeenCalledWith(3);

    const checkedInput = inputs.find((input) => input.checked);
    expect(checkedInput?.value).toBe('3');
  });

  it('includes value in form submission', () => {
    const handleSubmit = jest.fn((e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      return formData.get('rating');
    });

    const { container } = render(
      <form onSubmit={handleSubmit}>
        <Rating name="rating" defaultValue={4} />
      </form>
    );

    const form = container.querySelector('form')!;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(handleSubmit).toHaveBeenCalled();
    const result = handleSubmit.mock.results[0].value;
    expect(result).toBe('4');
  });

  it('does not change value when readOnly and clicked', async () => {
    const spy = jest.fn();
    render(<Rating readOnly value={3} onChange={spy} />);

    const labels = screen.queryAllByRole('radio', { hidden: true });
    expect(labels).toHaveLength(0);
  });

  it('does not render inputs when readOnly', () => {
    render(<Rating readOnly value={3} />);
    const inputs = screen.queryAllByRole('radio');
    expect(inputs).toHaveLength(0);
  });

  it('renders custom emptySymbol as ReactNode', () => {
    const { container } = render(<Rating emptySymbol={<span data-testid="empty">E</span>} />);
    expect(container.querySelector('[data-testid="empty"]')).toBeInTheDocument();
  });

  it('renders custom fullSymbol as ReactNode', () => {
    const { container } = render(
      <Rating fullSymbol={<span data-testid="full">F</span>} value={3} />
    );
    expect(container.querySelectorAll('[data-testid="full"]').length).toBeGreaterThanOrEqual(3);
  });

  it('calls symbol function with correct value', () => {
    const emptySymbolFn = jest.fn((value) => <span>Empty-{value}</span>);
    const fullSymbolFn = jest.fn((value) => <span>Full-{value}</span>);

    render(<Rating emptySymbol={emptySymbolFn} fullSymbol={fullSymbolFn} value={2} />);

    expect(emptySymbolFn).toHaveBeenCalled();
    expect(fullSymbolFn).toHaveBeenCalled();
  });

  it('calls onHover with correct value on mouse enter', async () => {
    const spy = jest.fn();
    const { container } = render(<Rating onHover={spy} />);

    const root = container.querySelector('[class*="root"]')!;
    await userEvent.hover(root);

    expect(spy).toHaveBeenCalled();
  });

  it('calls onHover with -1 on mouse leave', async () => {
    const spy = jest.fn();
    const { container } = render(<Rating onHover={spy} />);

    const root = container.querySelector('[class*="root"]')!;
    await userEvent.hover(root);
    await userEvent.unhover(root);

    expect(spy).toHaveBeenCalledWith(-1);
  });

  it('calls onChange at the correct time', async () => {
    const spy = jest.fn();
    render(<Rating onChange={spy} defaultValue={0} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const firstInput = inputs.find((input) => input.value === '1');

    await userEvent.click(firstInput!.nextElementSibling as HTMLElement);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('rounds values correctly with fractions', async () => {
    const spy = jest.fn();
    render(<Rating fractions={2} onChange={spy} defaultValue={0} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const halfStarInput = inputs.find((input) => input.value === '0.5');

    await userEvent.click(halfStarInput!.nextElementSibling as HTMLElement);

    expect(spy).toHaveBeenCalledWith(0.5);
  });

  it('handles first item with extra fraction (allows 0 rating)', () => {
    render(<Rating fractions={2} defaultValue={0} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const zeroInput = inputs.find((input) => input.value === '0');

    expect(zeroInput).toBeDefined();
  });

  it('uses getSymbolLabel for aria-labels', () => {
    const getSymbolLabel = (value: number) => `${value} stars`;
    render(<Rating getSymbolLabel={getSymbolLabel} />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const firstInput = inputs.find((input) => input.value === '1');

    expect(firstInput?.getAttribute('aria-label')).toBe('1 stars');
  });

  it('uses default aria-label when getSymbolLabel not provided', () => {
    render(<Rating />);

    const inputs = screen.getAllByRole('radio') as HTMLInputElement[];
    const secondInput = inputs.find((input) => input.value === '2');

    expect(secondInput?.getAttribute('aria-label')).toBe('2');
  });
});
