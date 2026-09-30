import { fireEvent } from '@testing-library/react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { PhoneInput, PhoneInputProps, PhoneInputStylesNames } from './PhoneInput';

const defaultProps: PhoneInputProps = {
  ...inputDefaultProps,
  label: 'Phone',
  defaultCountry: 'us',
};

const testProps: PhoneInputProps = {
  label: 'Phone',
  defaultCountry: 'us',
};

describe('@mantine/core/PhoneInput', () => {
  tests.axe([
    <PhoneInput aria-label="test-phone" key="1" />,
    <PhoneInput label="Phone number" key="2" />,
    <PhoneInput label="Phone number" error key="3" />,
    <PhoneInput label="Phone number" error="test-error" id="test" key="4" />,
    <PhoneInput label="Phone number" description="Enter your phone" key="5" />,
  ]);

  tests.itSupportsSystemProps<PhoneInputProps, PhoneInputStylesNames>({
    component: PhoneInput,
    props: defaultProps,
    displayName: '@mantine/core/PhoneInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<PhoneInputProps>({
    component: PhoneInput,
    props: defaultProps,
    selector: 'input',
  });

  it('renders input with type="tel"', () => {
    render(<PhoneInput {...testProps} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'tel');
  });

  it('renders with default country in button', () => {
    render(<PhoneInput {...testProps} defaultCountry="us" />);
    expect(screen.getByRole('button', { name: /United States/ })).toHaveTextContent('US');
  });

  it('renders with specified default country in button', () => {
    render(<PhoneInput {...testProps} defaultCountry="gb" />);
    expect(screen.getByRole('button', { name: /United Kingdom/ })).toHaveTextContent('GB');
  });

  it('works as uncontrolled with defaultValue', () => {
    render(<PhoneInput {...testProps} defaultValue="+12025551234" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toContain('202');
    expect(input.value).toContain('555');
  });

  it('calls onChange with raw and formatted values', async () => {
    const onChange = jest.fn();
    render(<PhoneInput {...testProps} onChange={onChange} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '2025551234');
    expect(onChange).toHaveBeenLastCalledWith('+12025551234', {
      formattedValue: '+1 (202) 555-1234',
      country: expect.objectContaining({ iso2: 'us', dialCode: '1' }),
    });
  });

  it('supports controlled value', () => {
    const spy = jest.fn();
    render(<PhoneInput {...testProps} value="+12025551234" onChange={spy} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('+1 (202) 555-1234');
  });

  it('opens dropdown on country button click', async () => {
    render(<PhoneInput {...testProps} />);
    expect(screen.queryByRole('listbox')).toBe(null);

    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    expect(screen.getByRole('listbox')).toBeVisible();
  });

  it('selects country from dropdown', async () => {
    render(<PhoneInput {...testProps} onlyCountries={['us', 'gb']} />);
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    await userEvent.click(screen.getByRole('option', { name: /United Kingdom/ }));

    expect(screen.getByRole('button', { name: /United Kingdom/ })).toHaveTextContent('GB');
  });

  it('calls onCountryChange when country is selected', async () => {
    const onCountryChange = jest.fn();
    render(
      <PhoneInput {...testProps} onlyCountries={['us', 'gb']} onCountryChange={onCountryChange} />
    );

    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    await userEvent.click(screen.getByRole('option', { name: /United Kingdom/ }));

    expect(onCountryChange).toHaveBeenCalledWith(
      expect.objectContaining({ iso2: 'gb', dialCode: '44' })
    );
  });

  it('filters dropdown with onlyCountries', async () => {
    render(<PhoneInput {...testProps} onlyCountries={['us', 'gb', 'de']} />);
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    expect(screen.getAllByRole('option')).toHaveLength(3);
  });

  it('excludes countries with excludeCountries', async () => {
    render(
      <PhoneInput {...testProps} onlyCountries={['us', 'gb', 'de']} excludeCountries={['de']} />
    );
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(2);
    expect(screen.queryByRole('option', { name: /Germany/ })).toBe(null);
  });

  it('shows preferred countries at the top with separator', async () => {
    render(
      <PhoneInput
        {...testProps}
        onlyCountries={['us', 'gb', 'de', 'fr']}
        preferredCountries={['gb', 'de']}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveAttribute('value', 'gb');
    expect(options[1]).toHaveAttribute('value', 'de');
  });

  it('supports search in country dropdown', async () => {
    render(<PhoneInput {...testProps} />);
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    await userEvent.type(screen.getByPlaceholderText('Search countries'), 'Germany');

    const options = screen.getAllByRole('option');
    expect(options.length).toBeGreaterThanOrEqual(1);
    expect(options[0]).toHaveAttribute('value', 'de');
  });

  it('hides search when searchable is false', async () => {
    render(<PhoneInput {...testProps} searchable={false} />);
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    expect(screen.queryByPlaceholderText('Search countries')).toBe(null);
  });

  it('applies classNames to component parts', () => {
    render(<PhoneInput {...testProps} classNames={{ countryButton: 'custom-country-button' }} />);
    expect(screen.getByRole('button', { name: /United States/ })).toHaveClass(
      'custom-country-button'
    );
  });

  it('disables country button when disabled', () => {
    render(<PhoneInput {...testProps} disabled />);
    expect(screen.getByRole('button', { name: /United States/ })).toBeDisabled();
  });

  it('disables country button when readOnly', () => {
    render(<PhoneInput {...testProps} readOnly />);
    expect(screen.getByRole('button', { name: /United States/ })).toBeDisabled();
  });

  it('updates dial code in input when country changes', async () => {
    render(<PhoneInput {...testProps} defaultCountry="us" onlyCountries={['us', 'gb']} />);

    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    await userEvent.click(screen.getByRole('option', { name: /United Kingdom/ }));

    expect((screen.getByRole('textbox') as HTMLInputElement).value).toContain('+44');
  });

  it('auto-detects country from typed dial code when withCountryAutoDetect is enabled', () => {
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        defaultCountry="us"
        withCountryAutoDetect
        onCountryChange={onCountryChange}
      />
    );

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '+442071234567' } });

    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
    expect(onCountryChange).toHaveBeenCalledWith(
      expect.objectContaining({ iso2: 'gb', dialCode: '44' })
    );
  });

  it('does not auto-detect country when withCountryAutoDetect is disabled', () => {
    const onCountryChange = jest.fn();
    render(<PhoneInput {...testProps} defaultCountry="us" onCountryChange={onCountryChange} />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '+442071234567' } });

    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  it('auto-detects a country sharing the dial code when its area code is typed', () => {
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        defaultCountry="us"
        withCountryAutoDetect
        onCountryChange={onCountryChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+12045551234' } });

    expect(screen.getByRole('button', { name: /Canada/ })).toBeInTheDocument();
    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'ca' }));
  });

  it('keeps selected country sharing the dial code when no area code matches', () => {
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        defaultCountry="ca"
        withCountryAutoDetect
        onCountryChange={onCountryChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+15' } });

    expect(screen.getByRole('button', { name: /Canada/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  it('re-guesses country from controlled value when onlyCountries changes', () => {
    const { rerender } = render(
      <PhoneInput
        {...testProps}
        value="+442071234567"
        onlyCountries={['us']}
        onChange={jest.fn()}
      />
    );
    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();

    rerender(
      <PhoneInput
        {...testProps}
        value="+442071234567"
        onlyCountries={['us', 'gb']}
        onChange={jest.fn()}
      />
    );
    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
  });

  it('calls onCountryChange when controlled value switches to another dial code', () => {
    const onCountryChange = jest.fn();
    const { rerender } = render(
      <PhoneInput
        {...testProps}
        value="+12025551234"
        onChange={jest.fn()}
        onCountryChange={onCountryChange}
      />
    );
    expect(onCountryChange).not.toHaveBeenCalled();

    rerender(
      <PhoneInput
        {...testProps}
        value="+442071234567"
        onChange={jest.fn()}
        onCountryChange={onCountryChange}
      />
    );
    expect(onCountryChange).toHaveBeenCalledTimes(1);
    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'gb' }));
  });

  it('does not call onCountryChange when controlled value keeps the same dial code without area match', () => {
    const onCountryChange = jest.fn();
    const { rerender } = render(
      <PhoneInput
        {...testProps}
        value="+1204"
        onChange={jest.fn()}
        onCountryChange={onCountryChange}
      />
    );
    expect(screen.getByRole('button', { name: /Canada/ })).toBeInTheDocument();

    rerender(
      <PhoneInput
        {...testProps}
        value="+15551234567"
        onChange={jest.fn()}
        onCountryChange={onCountryChange}
      />
    );
    expect(screen.getByRole('button', { name: /Canada/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  it('auto-detects country from typed dial code when international is false', () => {
    const onChange = jest.fn();
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        international={false}
        withCountryAutoDetect
        onChange={onChange}
        onCountryChange={onCountryChange}
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '+44' } });

    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'gb' }));
    expect(onChange).toHaveBeenLastCalledWith('+44', expect.anything());
    expect(input.value).toBe('');
  });

  it('does not display dial code prefix when international is false', async () => {
    const onChange = jest.fn();
    render(<PhoneInput {...testProps} international={false} onChange={onChange} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, '2025551234');

    expect((input as HTMLInputElement).value).not.toContain('+1');
    expect(onChange).toHaveBeenLastCalledWith(
      '+12025551234',
      expect.objectContaining({ formattedValue: expect.any(String) })
    );
  });

  it('keeps cursor after inserted digit when international is false', async () => {
    render(<PhoneInput {...testProps} international={false} defaultValue="+12025551234" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('(202) 555-1234');

    fireEvent.change(input, { target: { value: '(2092) 555-1234', selectionStart: 4 } });
    await new Promise((resolve) => setTimeout(resolve, 30));

    expect(input.value).toBe('(209) 255-5123');
    expect(input.selectionStart).toBe(4);
  });

  it('keeps cursor after digit inserted at the start of a short national value', async () => {
    render(<PhoneInput {...testProps} international={false} defaultValue="+12" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('(2');

    fireEvent.change(input, { target: { value: '9(2', selectionStart: 1 } });
    await new Promise((resolve) => setTimeout(resolve, 30));

    expect(input.value).toBe('(92');
    expect(input.selectionStart).toBe(2);
  });

  it('sets aria-expanded and aria-controls on country button', async () => {
    render(<PhoneInput {...testProps} onlyCountries={['us', 'gb']} />);
    const button = screen.getByRole('button', { name: /United States/ });
    expect(button).toHaveAttribute('aria-haspopup', 'listbox');
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(button).not.toHaveAttribute('aria-controls');

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(button).toHaveAttribute('aria-controls', screen.getByRole('listbox').id);
  });

  it('places cursor at the start of national digits after country change when international is false', async () => {
    render(
      <PhoneInput
        {...testProps}
        international={false}
        onlyCountries={['us', 'gb']}
        defaultValue="+12025551234"
      />
    );
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    await userEvent.click(screen.getByRole('option', { name: /United Kingdom/ }));
    await new Promise((resolve) => setTimeout(resolve, 30));

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).not.toContain('+44');
    expect(input.selectionStart).toBe(0);
  });

  it('forwards autoComplete to the input', () => {
    render(<PhoneInput {...testProps} autoComplete="tel" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('autocomplete', 'tel');
  });

  it('moves focus to the input when non-searchable dropdown is opened from country button', async () => {
    render(<PhoneInput {...testProps} searchable={false} onlyCountries={['us', 'gb']} />);
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    expect(screen.getByRole('textbox')).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
  });

  it('updates button when controlled value changes via rerender', () => {
    const { rerender } = render(
      <PhoneInput {...testProps} value="+12025551234" onChange={jest.fn()} />
    );
    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();

    rerender(<PhoneInput {...testProps} value="+442071234567" onChange={jest.fn()} />);
    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
  });

  it('infers country from defaultValue instead of defaultCountry', () => {
    render(<PhoneInput {...testProps} defaultValue="+442071234567" defaultCountry="us" />);
    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
  });

  it('restores dial code when input is cleared without withCountryAutoDetect', async () => {
    const onChange = jest.fn();
    render(<PhoneInput {...testProps} onChange={onChange} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, '2025551234');
    await userEvent.clear(input);

    expect(onChange).toHaveBeenLastCalledWith(
      '+1',
      expect.objectContaining({ country: expect.objectContaining({ iso2: 'us' }) })
    );
  });

  it('calls onChange with empty string when input is cleared with withCountryAutoDetect', async () => {
    const onChange = jest.fn();
    render(<PhoneInput {...testProps} withCountryAutoDetect onChange={onChange} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, '2025551234');
    await userEvent.clear(input);

    expect(onChange).toHaveBeenLastCalledWith(
      '',
      expect.objectContaining({ country: expect.objectContaining({ iso2: 'us' }) })
    );
  });

  it('clamps raw value to mask length when too many digits are typed', async () => {
    const onChange = jest.fn();
    render(<PhoneInput {...testProps} onChange={onChange} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, '20255512349999');

    expect(onChange).toHaveBeenLastCalledWith('+12025551234', expect.anything());
  });

  it('renders listbox immediately when dropdownOpened is set', () => {
    render(<PhoneInput {...testProps} dropdownOpened />);
    expect(screen.getByRole('listbox')).toBeVisible();
  });

  it('calls onDropdownOpen and onDropdownClose', async () => {
    const onDropdownOpen = jest.fn();
    const onDropdownClose = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        onlyCountries={['us', 'gb']}
        onDropdownOpen={onDropdownOpen}
        onDropdownClose={onDropdownClose}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    expect(onDropdownOpen).toHaveBeenCalled();

    await userEvent.click(screen.getByRole('option', { name: /United Kingdom/ }));
    expect(onDropdownClose).toHaveBeenCalled();
  });

  it('renders custom content with renderCountryOption', async () => {
    render(
      <PhoneInput
        {...testProps}
        onlyCountries={['us', 'gb']}
        renderCountryOption={(country) => (
          <span data-testid="custom-option">{`Custom-${country.iso2}`}</span>
        )}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    expect(screen.getByText('Custom-us')).toBeInTheDocument();
    expect(screen.getByText('Custom-gb')).toBeInTheDocument();
  });

  it('renders combobox chevron when withChevron is true', () => {
    const { container, rerender } = render(<PhoneInput {...testProps} />);
    expect(container.querySelector('[data-combobox-chevron]')).toBe(null);

    rerender(<PhoneInput {...testProps} withChevron />);
    expect(container.querySelector('[data-combobox-chevron]')).not.toBe(null);
  });
});
