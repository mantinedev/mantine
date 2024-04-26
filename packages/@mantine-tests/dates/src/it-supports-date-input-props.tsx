import { screen } from '@testing-library/react';
import { render } from '@mantine-tests/core';
import {
  clickControl,
  clickInput,
  expectNoModal,
  expectNoPopover,
  expectOpenedModal,
  expectOpenedPopover,
  expectValue,
  getInputValue,
} from './date-input-test-helpers';

interface Options {
  component: React.ComponentType<any>;
  props: Record<string, any>;
}

export function itSupportsDateInputProps(options: Options, name = 'supports date input props') {
  describe(name, () => {
    it('supports uncontrolled state (type="default")', async () => {
      const { container } = render(
        <options.component {...options.props} placeholder="test-placeholder" />
      );
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
        <options.component {...options.props} type="range" placeholder="test-placeholder" />
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
        <options.component {...options.props} type="multiple" placeholder="test-placeholder" />
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
      const { container } = render(<options.component {...options.props} />);

      await clickInput(container);
      expectOpenedPopover(container);
      expectNoModal(container);

      await clickInput(container);
      expectNoPopover(container);
    });

    it('toggles modal when input is clicked (dropdownType="modal")', async () => {
      const { container } = render(<options.component {...options.props} dropdownType="modal" />);

      await clickInput(container);
      expectOpenedModal(container);
      expectNoPopover(container);

      await clickInput(container);
      expectNoModal(container);
    });

    it('closes dropdown when date is selected (type="default")', async () => {
      const { container } = render(<options.component {...options.props} />);
      expectNoPopover(container);

      await clickInput(container);
      expectOpenedPopover(container);

      await clickControl(container, 0);
      expectNoPopover(container);
    });

    it('closes dropdown when dates range is selected (type="range")', async () => {
      const { container } = render(<options.component {...options.props} type="range" />);
      expectNoPopover(container);

      await clickInput(container);
      expectOpenedPopover(container);

      await clickControl(container, 0);
      expectOpenedPopover(container);

      await clickControl(container, 3);
      expectNoPopover(container);
    });

    it('does not close dropdown when date is selected (type="multiple")', async () => {
      const { container } = render(<options.component {...options.props} type="multiple" />);
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
        <options.component {...options.props} type="default" closeOnChange={false} />
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
        <options.component {...options.props} type="range" closeOnChange={false} />
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
        <options.component
          {...options.props}
          type="default"
          value={new Date(2022, 3, 11)}
          onChange={spy}
        />
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
        <options.component
          {...options.props}
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
        <options.component
          {...options.props}
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
        <options.component
          {...options.props}
          type="default"
          placeholder="test-placeholder"
          allowDeselect
        />
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
        <options.component {...options.props} type="default" placeholder="test-placeholder" />
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
        <options.component
          {...options.props}
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
        <options.component {...options.props} type="range" placeholder="test-placeholder" />
      );

      expectValue(container, 'test-placeholder');
      await clickInput(container);
      await clickControl(container, 0);
      expect(getInputValue(container)).not.toBe('test-placeholder');

      await clickControl(container, 0);
      expect(getInputValue(container)).toBe('test-placeholder');
    });

    it('does not open popover if readOnly prop is set', async () => {
      const { container } = render(<options.component {...options.props} readOnly />);
      expectNoPopover(container);
      expectNoModal(container);

      await clickInput(container);
      expectNoPopover(container);
      expectNoModal(container);
    });

    it('does not open modal if readOnly prop is set', async () => {
      const { container } = render(
        <options.component {...options.props} readOnly dropdownType="modal" />
      );
      expectNoPopover(container);
      expectNoModal(container);

      await clickInput(container);
      expectNoPopover(container);
      expectNoModal(container);
    });

    it('does not render clear button if readOnly is set', async () => {
      const { rerender } = render(
        <options.component
          {...options.props}
          value={new Date(2022, 3, 11)}
          clearable
          readOnly
          clearButtonProps={{ 'aria-label': 'clear-button' }}
        />
      );

      expect(screen.queryAllByLabelText('clear-button')).toHaveLength(0);

      rerender(
        <options.component
          {...options.props}
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
        <options.component
          {...options.props}
          name="name-hidden"
          form="form-hidden"
          value={new Date(2022, 3, 11)}
        />
      );

      const input = container.querySelector('input[type="hidden"]');
      expect(input).toHaveAttribute('name', 'name-hidden');
      expect(input).toHaveAttribute('form', 'form-hidden');
      expect(input?.getAttribute('value')).not.toBe('');
    });
  });
}
