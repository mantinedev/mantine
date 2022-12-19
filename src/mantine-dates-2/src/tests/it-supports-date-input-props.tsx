import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  getInputValue,
  clickInput,
  expectOpenedPopover,
  expectNoPopover,
  expectOpenedModal,
  expectNoModal,
  clickControl,
  expectValue,
} from './date-input-test-helpers';

export interface DateInputTestProps {
  dropdownType?: 'modal' | 'popover';
  type?: any;
  closeOnChange?: boolean;
  value?: any;
  onChange?(value: any): void;
  placeholder?: string;
  allowDeselect?: boolean;
  allowSingleDateInRange?: boolean;
  readOnly?: boolean;
  clearable?: boolean;
  clearButtonProps?: Record<string, any>;
  name?: string;
  form?: string;
}

export function itSupportsDateInputProps(
  Component: React.FC<DateInputTestProps>,
  requiredProps?: Record<string, any>
) {
  it('supports uncontrolled state (type="default")', async () => {
    const { container } = render(<Component {...requiredProps} placeholder="test-placeholder" />);
    expectValue(container, 'test-placeholder');

    await clickInput(container);
    await clickControl(container, 0);
    const selectedValue = getInputValue(container);
    expect(selectedValue).not.toBe('test-placeholder');

    await clickInput(container);
    await clickControl(container, 3);
    expect(getInputValue(container)).not.toBe(selectedValue);
    expect(getInputValue(container)).not.toBe('');
  });

  it('supports uncontrolled state (type="range")', async () => {
    const { container } = render(
      <Component {...requiredProps} type="range" placeholder="test-placeholder" />
    );
    expectValue(container, 'test-placeholder');

    await clickInput(container);
    await clickControl(container, 0);
    const selectedValue = getInputValue(container);
    expect(selectedValue).not.toBe('test-placeholder');

    await clickControl(container, 3);
    expect(getInputValue(container)).not.toBe(selectedValue);
    expect(getInputValue(container)).not.toBe('test-placeholder');
  });

  it('supports uncontrolled state (type="multiple")', async () => {
    const { container } = render(
      <Component {...requiredProps} type="multiple" placeholder="test-placeholder" />
    );
    expectValue(container, 'test-placeholder');

    await clickInput(container);
    await clickControl(container, 0);
    const selectedValue = getInputValue(container);
    expect(selectedValue).not.toBe('test-placeholder');

    await clickControl(container, 3);
    expect(getInputValue(container)).not.toBe(selectedValue);
    expect(getInputValue(container)).not.toBe('test-placeholder');
  });

  it('toggles popover when input is clicked (dropdownType="popover")', async () => {
    const { container } = render(<Component {...requiredProps} />);

    await clickInput(container);
    expectOpenedPopover(container);
    expectNoModal(container);

    await clickInput(container);
    expectNoPopover(container);
  });

  it('toggles modal when input is clicked (dropdownType="modal")', async () => {
    const { container } = render(<Component {...requiredProps} dropdownType="modal" />);

    await clickInput(container);
    expectOpenedModal(container);
    expectNoPopover(container);

    await clickInput(container);
    expectNoModal(container);
  });

  it('closes dropdown when date is selected (type="default")', async () => {
    const { container } = render(<Component {...requiredProps} />);
    expectNoPopover(container);

    await clickInput(container);
    expectOpenedPopover(container);

    await clickControl(container, 0);
    expectNoPopover(container);
  });

  it('closes dropdown when dates range is selected (type="range")', async () => {
    const { container } = render(<Component {...requiredProps} type="range" />);
    expectNoPopover(container);

    await clickInput(container);
    expectOpenedPopover(container);

    await clickControl(container, 0);
    expectOpenedPopover(container);

    await clickControl(container, 3);
    expectNoPopover(container);
  });

  it('does not close dropdown when date is selected (type="multiple")', async () => {
    const { container } = render(<Component {...requiredProps} type="multiple" />);
    expectNoPopover(container);

    await clickInput(container);
    expectOpenedPopover(container);

    await clickControl(container, 0);
    expectOpenedPopover(container);

    await clickControl(container, 3);
    expectOpenedPopover(container);
  });

  it('does not close dropdown when date is selected if closeOnChange is set to false (type="default")', async () => {
    const { container } = render(
      <Component {...requiredProps} type="default" closeOnChange={false} />
    );
    expectNoPopover(container);

    await clickInput(container);
    expectOpenedPopover(container);

    await clickControl(container, 0);
    expectOpenedPopover(container);

    await clickControl(container, 3);
    expectOpenedPopover(container);
  });

  it('does not close dropdown when dates range is selected if closeOnChange is set to false (type="range")', async () => {
    const { container } = render(
      <Component {...requiredProps} type="range" closeOnChange={false} />
    );
    expectNoPopover(container);

    await clickInput(container);
    expectOpenedPopover(container);

    await clickControl(container, 0);
    expectOpenedPopover(container);

    await clickControl(container, 3);
    expectOpenedPopover(container);
  });

  it('supports controlled state (type="default")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Component {...requiredProps} type="default" value={new Date(2022, 3, 11)} onChange={spy} />
    );

    const initialValue = getInputValue(container);
    expect(initialValue).not.toBe('');

    await clickInput(container);
    await clickControl(container, 0);
    expect(spy).toHaveBeenCalledWith(expect.any(Date));
    expect(getInputValue(container)).toBe(initialValue);
  });

  it('supports controlled state (type="range")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Component
        {...requiredProps}
        type="range"
        value={[new Date(2022, 3, 11), null]}
        onChange={spy}
      />
    );

    const initialValue = getInputValue(container);
    expect(initialValue).not.toBe('');

    await clickInput(container);
    await clickControl(container, 0);
    expect(spy).toHaveBeenCalledWith(expect.arrayContaining([expect.any(Date)]));
    expect(spy).toHaveBeenCalledWith(expect.not.arrayContaining([null]));
    expect(getInputValue(container)).toBe(initialValue);
  });

  it('supports controlled state (type="multiple")', async () => {
    const spy = jest.fn();
    const { container } = render(
      <Component
        {...requiredProps}
        type="multiple"
        value={[new Date(2022, 3, 11)]}
        onChange={spy}
      />
    );

    const initialValue = getInputValue(container);
    expect(initialValue).not.toBe('');

    await clickInput(container);
    await clickControl(container, 0);
    expect(spy).toHaveBeenCalledWith(expect.arrayContaining([expect.any(Date)]));
    expect(spy).toHaveBeenCalledWith(expect.not.arrayContaining([null]));
    expect(getInputValue(container)).toBe(initialValue);
  });

  it('supports deselecting values when allowDeselect prop is set (type="default")', async () => {
    const { container } = render(
      <Component {...requiredProps} type="default" placeholder="test-placeholder" allowDeselect />
    );

    expectValue(container, 'test-placeholder');
    await clickInput(container);
    await clickControl(container, 8);
    expect(getInputValue(container)).not.toBe('test-placeholder');

    await clickInput(container);
    await clickControl(container, 8);
    expectValue(container, 'test-placeholder');
  });

  it('does not allow to deselect value if allowDeselect is not set (type="default")', async () => {
    const { container } = render(
      <Component {...requiredProps} type="default" placeholder="test-placeholder" />
    );

    expectValue(container, 'test-placeholder');
    await clickInput(container);
    await clickControl(container, 0);
    expect(getInputValue(container)).not.toBe('test-placeholder');

    await clickInput(container);
    await clickControl(container, 0);
    expect(getInputValue(container)).not.toBe('test-placeholder');
  });

  it('allows to pick single date as range if allowSingleDateInRange prop is set (type="range")', async () => {
    const { container } = render(
      <Component
        {...requiredProps}
        type="range"
        placeholder="test-placeholder"
        allowSingleDateInRange
      />
    );

    expectValue(container, 'test-placeholder');
    await clickInput(container);
    await clickControl(container, 0);
    expect(getInputValue(container)).not.toBe('test-placeholder');

    await clickControl(container, 0);
    expect(getInputValue(container)).not.toBe('test-placeholder');
  });

  it('does not allow to pick single date as range if allowSingleDateInRange prop is not set (type="range")', async () => {
    const { container } = render(
      <Component {...requiredProps} type="range" placeholder="test-placeholder" />
    );

    expectValue(container, 'test-placeholder');
    await clickInput(container);
    await clickControl(container, 0);
    expect(getInputValue(container)).not.toBe('test-placeholder');

    await clickControl(container, 0);
    expect(getInputValue(container)).toBe('test-placeholder');
  });

  it('does not open popover if readOnly prop is set', async () => {
    const { container } = render(<Component {...requiredProps} readOnly />);
    expectNoPopover(container);
    expectNoModal(container);

    await clickInput(container);
    expectNoPopover(container);
    expectNoModal(container);
  });

  it('does not open modal if readOnly prop is set', async () => {
    const { container } = render(<Component {...requiredProps} readOnly dropdownType="modal" />);
    expectNoPopover(container);
    expectNoModal(container);

    await clickInput(container);
    expectNoPopover(container);
    expectNoModal(container);
  });

  it('does not render clear button if readOnly is set', async () => {
    const { rerender } = render(
      <Component
        {...requiredProps}
        value={new Date(2022, 3, 11)}
        clearable
        readOnly
        clearButtonProps={{ 'aria-label': 'clear-button' }}
      />
    );

    expect(screen.queryAllByLabelText('clear-button')).toHaveLength(0);

    rerender(
      <Component
        {...requiredProps}
        value={new Date(2022, 3, 11)}
        clearable
        readOnly={false}
        clearButtonProps={{ 'aria-label': 'clear-button' }}
      />
    );

    expect(screen.getByLabelText('clear-button')).toBeInTheDocument();
  });

  it('renders hidden input with given name, form and value attributes', () => {
    const { container } = render(
      <Component
        {...requiredProps}
        name="name-hidden"
        form="form-hidden"
        value={new Date(2022, 3, 11)}
      />
    );

    const input = container.querySelector('input[type="hidden"]');
    expect(input).toHaveAttribute('name', 'name-hidden');
    expect(input).toHaveAttribute('form', 'form-hidden');
    expect(input.getAttribute('value')).not.toBe('');
  });
}
