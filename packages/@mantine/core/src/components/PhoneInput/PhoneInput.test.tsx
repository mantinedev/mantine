import { useState } from 'react';
import { act, fireEvent, within } from '@testing-library/react';
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

  it('normalizes pasted national numbers with trunk prefixes', () => {
    const onChange = jest.fn();
    const { rerender } = render(<PhoneInput defaultCountry="ru" onChange={onChange} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '8 (999) 123-45-67' } });
    expect(onChange).toHaveBeenLastCalledWith(
      '+79991234567',
      expect.objectContaining({ formattedValue: '+7 (999) 123-45-67' })
    );

    rerender(<PhoneInput defaultCountry="gb" onChange={onChange} key="gb" />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '020 7946 0958' } });
    expect(onChange).toHaveBeenLastCalledWith(
      '+442079460958',
      expect.objectContaining({ formattedValue: '+44 2079 460958' })
    );
  });

  it('normalizes a zero-prefix number while typing', async () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="gb" onChange={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), '02079460958');

    expect(onChange).toHaveBeenLastCalledWith('+442079460958', expect.anything());
  });

  it('preserves leading national digits on subsequent edits in national mode', () => {
    const onChange = jest.fn();
    render(
      <PhoneInput
        defaultCountry="ru"
        international={false}
        defaultValue="+78001234567"
        onChange={onChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '(800) 123-45-68' } });

    expect(onChange).toHaveBeenLastCalledWith('+78001234568', expect.anything());
  });

  it('preserves an international Russian number with a leading 8 on subsequent edits', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" onChange={onChange} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '+78121234567' } });
    expect(onChange).toHaveBeenLastCalledWith('+78121234567', expect.anything());

    fireEvent.change(input, { target: { value: '+7 (812) 123-45-68' } });
    expect(onChange).toHaveBeenLastCalledWith('+78121234568', expect.anything());
  });

  it('preserves a legitimate leading 8 while typing an international number', async () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" onChange={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), '8121234567');

    expect(onChange).toHaveBeenLastCalledWith('+78121234567', expect.anything());
  });

  it('does not remove a valid leading 8 when another digit is added to a complete number', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" defaultValue="+78121234567" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '+7 (812) 123-45-678' },
    });

    expect(onChange).toHaveBeenLastCalledWith('+78121234567', expect.anything());
  });

  it('preserves a valid leading 8 when a digit is inserted into a complete number', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" defaultValue="+78121234567" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '+7 (812) 9123-45-67' },
    });

    expect(onChange).toHaveBeenLastCalledWith('+78129123456', expect.anything());
  });

  it('preserves a valid leading 8 when multiple digits are inserted into a complete number', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" defaultValue="+78121234567" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '+7 (812) 99123-45-67' },
    });

    expect(onChange).toHaveBeenLastCalledWith('+78129912345', expect.anything());
  });

  it('preserves a typed Russian area code starting with 8 when the mask is full', async () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" onChange={onChange} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, '8431234567');
    await userEvent.type(input, '8');

    expect(onChange).toHaveBeenLastCalledWith('+78431234567', expect.anything());
  });

  it('does not strip a legitimate Russian 879 area code when the mask is full', async () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" onChange={onChange} />);
    const input = screen.getByRole('textbox');

    await userEvent.type(input, '8793123456');
    await userEvent.type(input, '7');

    expect(onChange).toHaveBeenLastCalledWith('+78793123456', expect.anything());
  });

  it('normalizes a national number pasted after the displayed dial code', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+7 89991234567' } });

    expect(onChange).toHaveBeenLastCalledWith('+79991234567', expect.anything());
  });

  it.each([true, false])(
    'normalizes a national number pasted over an existing value (international=%s)',
    (international) => {
      const onChange = jest.fn();
      render(
        <PhoneInput
          defaultCountry="ru"
          defaultValue="+79991234567"
          international={international}
          onChange={onChange}
        />
      );

      fireEvent.change(screen.getByRole('textbox'), { target: { value: '89991234567' } });

      expect(onChange).toHaveBeenLastCalledWith('+79991234567', expect.anything());
    }
  );

  it('keeps foreign dial-code detection when national trunk prefix matches its first digit', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" withCountryAutoDetect onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '8613812345678' } });

    expect(onChange).toHaveBeenLastCalledWith(
      '+8613812345678',
      expect.objectContaining({ country: expect.objectContaining({ iso2: 'cn' }) })
    );
    expect(screen.getByRole('button', { name: /China/ })).toBeInTheDocument();
  });

  it('still normalizes a Russian trunk prefix with country auto-detection enabled', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" withCountryAutoDetect onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '89991234567' } });

    expect(onChange).toHaveBeenLastCalledWith(
      '+79991234567',
      expect.objectContaining({ country: expect.objectContaining({ iso2: 'ru' }) })
    );
  });

  it('uses the default country detection when resolveCountry returns undefined', () => {
    render(
      <PhoneInput
        defaultValue="+77011234567"
        resolveCountry={() => undefined}
        onlyCountries={['ru', 'kz']}
      />
    );

    expect(screen.getByRole('button', { name: /Russia/ })).toBeInTheDocument();
  });

  it('uses resolveCountry to choose among countries sharing a dial code', () => {
    const resolveCountry = jest.fn(() => 'kz');
    render(
      <PhoneInput
        defaultValue="+77011234567"
        resolveCountry={resolveCountry}
        onlyCountries={['ru', 'kz']}
      />
    );

    expect(screen.getByRole('button', { name: /Kazakhstan/ })).toBeInTheDocument();
    expect(resolveCountry).toHaveBeenCalledWith(
      '+77011234567',
      expect.arrayContaining([
        expect.objectContaining({ iso2: 'ru' }),
        expect.objectContaining({ iso2: 'kz' }),
      ])
    );
  });

  it('ignores a resolved country that is not among the detected dial-code candidates', () => {
    render(
      <PhoneInput
        defaultValue="+77011234567"
        resolveCountry={() => 'gb'}
        onlyCountries={['ru', 'kz', 'gb']}
      />
    );

    expect(screen.getByRole('button', { name: /Russia/ })).toBeInTheDocument();
  });

  it('re-resolves a controlled value when its shared-dial-code preference changes', () => {
    const onCountryChange = jest.fn();
    const { rerender } = render(
      <PhoneInput
        value="+77011234567"
        onChange={jest.fn()}
        resolveCountry={() => 'ru'}
        onCountryChange={onCountryChange}
      />
    );

    rerender(
      <>
        <PhoneInput
          value="+77011234567"
          onChange={jest.fn()}
          resolveCountry={() => 'kz'}
          onCountryChange={onCountryChange}
        />
      </>
    );

    expect(screen.getByRole('button', { name: /Kazakhstan/ })).toBeInTheDocument();
    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'kz' }));
  });

  it('restores default country detection when a resolver stops overriding', () => {
    const onCountryChange = jest.fn();
    const { rerender } = render(
      <PhoneInput
        value="+79991234567"
        onChange={jest.fn()}
        resolveCountry={() => 'kz'}
        onCountryChange={onCountryChange}
      />
    );
    expect(screen.getByRole('button', { name: /Kazakhstan/ })).toBeInTheDocument();

    rerender(
      <>
        <PhoneInput
          value="+79991234567"
          onChange={jest.fn()}
          resolveCountry={() => undefined}
          onCountryChange={onCountryChange}
        />
      </>
    );

    expect(screen.getByRole('button', { name: /Russia/ })).toBeInTheDocument();
    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'ru' }));
  });

  it('restores default detection after a resolver keeps the current country', () => {
    const onCountryChange = jest.fn();
    const { rerender } = render(
      <PhoneInput value="+77172123456" onChange={jest.fn()} onCountryChange={onCountryChange} />
    );
    expect(screen.getByRole('button', { name: /Kazakhstan/ })).toBeInTheDocument();

    rerender(
      <>
        <PhoneInput
          value="+79991234567"
          onChange={jest.fn()}
          resolveCountry={() => 'kz'}
          onCountryChange={onCountryChange}
        />
      </>
    );
    expect(screen.getByRole('button', { name: /Kazakhstan/ })).toBeInTheDocument();

    rerender(
      <>
        <PhoneInput
          value="+79991234567"
          onChange={jest.fn()}
          resolveCountry={() => undefined}
          onCountryChange={onCountryChange}
        />
      </>
    );

    expect(screen.getByRole('button', { name: /Russia/ })).toBeInTheDocument();
    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'ru' }));
  });

  it('re-resolves an echoed controlled value when the country resolver changes', () => {
    const onCountryChange = jest.fn();
    const resolveRussia = () => 'ru';
    const resolveKazakhstan = () => 'kz';

    function Controlled({ resolveCountry }: { resolveCountry: PhoneInputProps['resolveCountry'] }) {
      const [value, setValue] = useState('+7');
      return (
        <PhoneInput
          value={value}
          onChange={setValue}
          resolveCountry={resolveCountry}
          onCountryChange={onCountryChange}
        />
      );
    }

    const { rerender } = render(<Controlled resolveCountry={resolveRussia} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+77011234567' } });
    expect(screen.getByRole('button', { name: /Russia/ })).toBeInTheDocument();

    rerender(
      <>
        <Controlled resolveCountry={resolveKazakhstan} />
      </>
    );

    expect(screen.getByRole('button', { name: /Kazakhstan/ })).toBeInTheDocument();
    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'kz' }));
  });

  it('keeps a manually selected country with a controlled inline resolver', async () => {
    function Controlled() {
      const [value, setValue] = useState('+79991234567');
      return (
        <PhoneInput
          value={value}
          onChange={setValue}
          resolveCountry={() => 'ru'}
          onlyCountries={['ru', 'kz']}
        />
      );
    }

    render(<Controlled />);
    await userEvent.click(screen.getByRole('button', { name: /Russia/ }));
    await userEvent.click(screen.getByRole('option', { name: /Kazakhstan/ }));
    await userEvent.type(screen.getByRole('textbox'), '8');

    expect(screen.getByRole('button', { name: /Kazakhstan/ })).toBeInTheDocument();
  });

  it('does not re-detect a shared area code from an inline resolver echo', () => {
    function Controlled() {
      const [value, setValue] = useState('+1');
      return (
        <PhoneInput
          defaultCountry="us"
          value={value}
          onChange={setValue}
          resolveCountry={() => undefined}
        />
      );
    }

    render(<Controlled />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+12045551234' } });

    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
  });

  it('switches to a resolved country sharing the selected dial code during auto-detection', () => {
    const onChange = jest.fn();
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        defaultCountry="ru"
        withCountryAutoDetect
        resolveCountry={(rawValue) => (rawValue.startsWith('+77') ? 'kz' : undefined)}
        onChange={onChange}
        onCountryChange={onCountryChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+77011234567' } });

    expect(screen.getByRole('button', { name: /Kazakhstan/ })).toBeInTheDocument();
    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'kz' }));
    expect(onChange).toHaveBeenLastCalledWith(
      '+77011234567',
      expect.objectContaining({ country: expect.objectContaining({ iso2: 'kz' }) })
    );
  });

  it.each([true, false])(
    'strips a typed Russian trunk prefix when opted in (international=%s)',
    async (international) => {
      const onChange = jest.fn();
      render(
        <PhoneInput
          defaultCountry="ru"
          international={international}
          nationalPrefixBehavior="strip"
          onChange={onChange}
        />
      );

      await userEvent.type(screen.getByRole('textbox'), '89991234567');

      expect(onChange).toHaveBeenLastCalledWith('+79991234567', expect.anything());
    }
  );

  it('preserves the first national digit after an opted-in trunk prefix', async () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" nationalPrefixBehavior="strip" onChange={onChange} />);

    await userEvent.type(screen.getByRole('textbox'), '88001234567');

    expect(onChange).toHaveBeenLastCalledWith('+78001234567', expect.anything());
  });

  it('strips a national prefix when typing over an existing number', async () => {
    const onChange = jest.fn();
    render(
      <PhoneInput
        defaultCountry="ru"
        defaultValue="+78121234567"
        nationalPrefixBehavior="strip"
        onChange={onChange}
      />
    );
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '8' } });
    await userEvent.type(input, '9991234567');

    expect(onChange).toHaveBeenLastCalledWith('+79991234567', expect.anything());
  });

  it('keeps a valid leading digit when editing a national number in strip mode', () => {
    const onChange = jest.fn();
    render(
      <PhoneInput
        defaultCountry="ru"
        international={false}
        defaultValue="+78001234567"
        nationalPrefixBehavior="strip"
        onChange={onChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '(800) 123-45-68' } });

    expect(onChange).toHaveBeenLastCalledWith('+78001234568', expect.anything());
  });

  it.each([false, true])(
    'keeps Kazakhstan national digits after clearing the input (autoDetect=%s)',
    async (withCountryAutoDetect) => {
      const onChange = jest.fn();
      render(
        <PhoneInput
          defaultCountry="kz"
          withCountryAutoDetect={withCountryAutoDetect}
          onChange={onChange}
        />
      );
      const input = screen.getByRole('textbox');

      await userEvent.clear(input);
      await userEvent.type(input, '7011234567');

      expect(onChange).toHaveBeenLastCalledWith(
        '+77011234567',
        expect.objectContaining({ country: expect.objectContaining({ iso2: 'kz' }) })
      );
    }
  );

  it('detects an unprefixed complete international number without duplicating its dial code', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="us" withCountryAutoDetect onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '12025551234' } });

    expect(onChange).toHaveBeenLastCalledWith('+12025551234', expect.anything());
  });

  it('keeps a short unprefixed international number with its selected dial code', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="de" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '4930123456' } });

    expect(onChange).toHaveBeenLastCalledWith('+4930123456', expect.anything());
  });

  it('prefers a selected country trunk prefix over an unprefixed foreign dial code when opted in', () => {
    const onChange = jest.fn();
    render(
      <PhoneInput
        defaultCountry="ru"
        withCountryAutoDetect
        nationalPrefixBehavior="strip"
        onChange={onChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '84951234567' } });

    expect(onChange).toHaveBeenLastCalledWith(
      '+74951234567',
      expect.objectContaining({ country: expect.objectContaining({ iso2: 'ru' }) })
    );
  });

  it('keeps national digits with auto-detection enabled in strip mode', () => {
    const onChange = jest.fn();
    render(
      <PhoneInput
        defaultCountry="ru"
        withCountryAutoDetect
        nationalPrefixBehavior="strip"
        onChange={onChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '9121234567' } });

    expect(onChange).toHaveBeenLastCalledWith(
      '+79121234567',
      expect.objectContaining({ country: expect.objectContaining({ iso2: 'ru' }) })
    );
  });

  it('still detects explicitly international numbers in strip mode', () => {
    const onChange = jest.fn();
    render(
      <PhoneInput
        defaultCountry="ru"
        withCountryAutoDetect
        nationalPrefixBehavior="strip"
        onChange={onChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+919876543210' } });

    expect(onChange).toHaveBeenLastCalledWith(
      '+919876543210',
      expect.objectContaining({ country: expect.objectContaining({ iso2: 'in' }) })
    );
  });

  it('keeps an explicitly entered international number when strip is enabled', () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultCountry="ru" nationalPrefixBehavior="strip" onChange={onChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+78121234567' } });

    expect(onChange).toHaveBeenLastCalledWith('+78121234567', expect.anything());
  });

  it('preserves pasted national prefixes when opted out', () => {
    const onChange = jest.fn();
    render(
      <PhoneInput defaultCountry="ru" nationalPrefixBehavior="preserve" onChange={onChange} />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '8999' } });

    expect(onChange).toHaveBeenLastCalledWith('+78999', expect.anything());
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

  it('selects the first filtered option on Enter after typing in search', async () => {
    const onCountryChange = jest.fn();
    render(<PhoneInput {...testProps} onCountryChange={onCountryChange} />);
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    await userEvent.type(screen.getByPlaceholderText('Search countries'), 'germ');
    await userEvent.keyboard('{Enter}');

    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'de' }));
    expect(screen.getByRole('button', { name: /Germany/ })).toBeInTheDocument();
    expect(screen.queryByRole('listbox')).toBe(null);
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

  it('detects country from a pasted international number without withCountryAutoDetect', () => {
    const onChange = jest.fn();
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        defaultCountry="us"
        onChange={onChange}
        onCountryChange={onCountryChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+442071234567' } });

    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
    expect(onCountryChange).toHaveBeenCalledWith(expect.objectContaining({ iso2: 'gb' }));
    expect(onChange).toHaveBeenLastCalledWith('+442071234567', {
      formattedValue: '+44 2071 234567',
      country: expect.objectContaining({ iso2: 'gb', dialCode: '44' }),
    });
  });

  it('detects country while typing an international number without withCountryAutoDetect', async () => {
    const onChange = jest.fn();
    render(<PhoneInput {...testProps} defaultCountry="us" onChange={onChange} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;

    await userEvent.clear(input);
    await userEvent.type(input, '+442071234567');

    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
    expect(input.value).toBe('+44 2071 234567');
    expect(onChange).toHaveBeenLastCalledWith('+442071234567', {
      formattedValue: '+44 2071 234567',
      country: expect.objectContaining({ iso2: 'gb' }),
    });
  });

  it('keeps a lone plus and an unmatched dial code as typed without withCountryAutoDetect', async () => {
    const onChange = jest.fn();
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        defaultCountry="us"
        onChange={onChange}
        onCountryChange={onCountryChange}
      />
    );
    const input = screen.getByRole('textbox') as HTMLInputElement;

    await userEvent.clear(input);
    expect(onChange).toHaveBeenLastCalledWith('', expect.anything());

    await userEvent.type(input, '+');
    expect(input.value).toBe('+');
    expect(onChange).toHaveBeenLastCalledWith('+', expect.anything());

    await userEvent.type(input, '4');
    expect(input.value).toBe('+4');
    expect(onChange).toHaveBeenLastCalledWith('+4', expect.anything());
    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  it('keeps selected country when national digits are typed without withCountryAutoDetect', async () => {
    const onCountryChange = jest.fn();
    render(<PhoneInput {...testProps} defaultCountry="us" onCountryChange={onCountryChange} />);

    await userEvent.type(screen.getByRole('textbox'), '2045551234');

    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  it('does not switch country on area code without withCountryAutoDetect', () => {
    const onCountryChange = jest.fn();
    render(<PhoneInput {...testProps} defaultCountry="us" onCountryChange={onCountryChange} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+12045551234' } });

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
      <>
        <PhoneInput
          {...testProps}
          value="+442071234567"
          onlyCountries={['us', 'gb']}
          onChange={jest.fn()}
        />
      </>
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
      <>
        <PhoneInput
          {...testProps}
          value="+442071234567"
          onChange={jest.fn()}
          onCountryChange={onCountryChange}
        />
      </>
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
      <>
        <PhoneInput
          {...testProps}
          value="+15551234567"
          onChange={jest.fn()}
          onCountryChange={onCountryChange}
        />
      </>
    );
    expect(screen.getByRole('button', { name: /Canada/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  it('does not re-detect country from the component own onChange echo in controlled mode', async () => {
    const onCountryChange = jest.fn();
    function Controlled() {
      const [value, setValue] = useState('+1');
      return (
        <PhoneInput
          {...testProps}
          defaultCountry="us"
          value={value}
          onChange={setValue}
          onCountryChange={onCountryChange}
        />
      );
    }

    render(<Controlled />);
    await userEvent.type(screen.getByRole('textbox'), '4165550199');

    expect((screen.getByRole('textbox') as HTMLInputElement).value).toBe('+1 (416) 555-0199');
    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  it('auto-detects a different dial code after a country was picked from the dropdown', async () => {
    const onChange = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        withCountryAutoDetect
        onlyCountries={['us', 'gb', 'ca']}
        onChange={onChange}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    await userEvent.click(screen.getByRole('option', { name: /United Kingdom/ }));
    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+12025551234' } });

    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
    expect(onChange).toHaveBeenLastCalledWith('+12025551234', expect.anything());
  });

  it('keeps the lock when national digits are typed with international false', async () => {
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        international={false}
        withCountryAutoDetect
        onlyCountries={['us', 'ca', 'eg']}
        onCountryChange={onCountryChange}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    await userEvent.click(screen.getByRole('option', { name: /United States/ }));
    onCountryChange.mockClear();

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '2045551234' } });

    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  it('keeps the selected country for national input with auto-detection enabled', () => {
    const onChange = jest.fn();
    render(
      <PhoneInput
        defaultCountry="us"
        international={false}
        withCountryAutoDetect
        onChange={onChange}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '2025551234' } });

    expect(onChange).toHaveBeenLastCalledWith(
      '+12025551234',
      expect.objectContaining({ country: expect.objectContaining({ iso2: 'us' }) })
    );
  });

  it('keeps the picked country on an area code match while locked', async () => {
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        {...testProps}
        withCountryAutoDetect
        onlyCountries={['us', 'gb', 'ca']}
        onCountryChange={onCountryChange}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    await userEvent.click(screen.getByRole('option', { name: /United States/ }));
    onCountryChange.mockClear();

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+12045551234' } });

    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
  });

  it('matches localized labels from getCountryLabel in search', async () => {
    const labels: Record<string, string> = { us: 'Estados Unidos', gb: 'Reino Unido' };
    render(
      <PhoneInput
        {...testProps}
        onlyCountries={['us', 'gb', 'de']}
        getCountryLabel={(country) => labels[country.iso2] ?? country.name}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Estados Unidos' }));
    await userEvent.type(screen.getByPlaceholderText('Search countries'), 'reino');

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveAttribute('value', 'gb');
  });

  it('renders searchPlaceholder and selectCountryLabel', async () => {
    render(
      <PhoneInput
        label="Phone"
        searchPlaceholder="Buscar países"
        selectCountryLabel="Seleccionar país"
      />
    );

    await userEvent.click(screen.getByRole('button', { name: 'Seleccionar país' }));
    expect(screen.getByPlaceholderText('Buscar países')).toBeInTheDocument();
  });

  it('renders renderFlag output in the country button and in options', async () => {
    render(
      <PhoneInput
        {...testProps}
        onlyCountries={['us', 'gb']}
        renderFlag={(country) => <span data-testid={`flag-${country?.iso2 ?? 'none'}`} />}
      />
    );

    const button = screen.getByRole('button', { name: /United States/ });
    expect(within(button).getByTestId('flag-us')).toBeInTheDocument();
    expect(button).not.toHaveTextContent('US');

    await userEvent.click(button);
    const options = screen.getAllByRole('option');
    expect(within(options[0]).getByTestId('flag-us')).toBeInTheDocument();
    expect(within(options[1]).getByTestId('flag-gb')).toBeInTheDocument();
  });

  it('renders no flag when renderFlag returns null', () => {
    const { container } = render(<PhoneInput {...testProps} renderFlag={() => null} />);
    const button = screen.getByRole('button', { name: /United States/ });
    expect(button).not.toHaveTextContent('US');
    expect(container.querySelectorAll('img')).toHaveLength(0);
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
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 30));
    });

    expect(input.value).toBe('(209) 255-5123');
    expect(input.selectionStart).toBe(4);
  });

  it('keeps cursor after digit inserted at the start of a short national value', async () => {
    render(<PhoneInput {...testProps} international={false} defaultValue="+12" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('(2');

    fireEvent.change(input, { target: { value: '9(2', selectionStart: 1 } });
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 30));
    });

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
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 30));
    });

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
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('does not open the country list on ArrowDown or ArrowUp in the phone input', async () => {
    const onDropdownOpen = jest.fn();
    render(<PhoneInput {...testProps} onDropdownOpen={onDropdownOpen} />);
    const input = screen.getByRole('textbox');
    await userEvent.click(input);

    await userEvent.keyboard('{ArrowDown}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(screen.queryByRole('option')).not.toBeInTheDocument();
    expect(input).not.toHaveAttribute('aria-haspopup');
    expect(input).not.toHaveAttribute('aria-controls');
    expect(screen.getByRole('button', { name: /United States/ })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
    expect(input).toHaveFocus();

    await userEvent.keyboard('{ArrowUp}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(onDropdownOpen).not.toHaveBeenCalled();
  });

  it('supports keyboard navigation in non-searchable list opened from country button', async () => {
    render(<PhoneInput {...testProps} searchable={false} onlyCountries={['us', 'gb', 'ca']} />);
    const input = screen.getByRole('textbox');
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));

    await userEvent.keyboard('{ArrowDown}{ArrowDown}{ArrowUp}');
    const selected = screen.getByRole('option', { name: /United States/ });
    expect(selected).toHaveAttribute('data-combobox-selected');
    expect(input).toHaveAttribute('aria-activedescendant', selected.id);
    expect(input).toHaveAttribute('aria-controls', screen.getByRole('listbox').id);
    expect(input).not.toHaveAttribute('aria-haspopup');

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    expect(input).not.toHaveAttribute('aria-activedescendant');
    expect(input).not.toHaveAttribute('aria-controls');
    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
  });

  it('selects option with ArrowDown and Enter in search after opening from country button', async () => {
    render(<PhoneInput {...testProps} onlyCountries={['us', 'gb']} />);
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    expect(screen.getByPlaceholderText('Search countries')).toHaveFocus();

    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
  });

  it('updates button when controlled value changes via rerender', () => {
    const { rerender } = render(
      <PhoneInput {...testProps} value="+12025551234" onChange={jest.fn()} />
    );
    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();

    rerender(
      <>
        <PhoneInput {...testProps} value="+442071234567" onChange={jest.fn()} />
      </>
    );
    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
  });

  it('infers country from defaultValue instead of defaultCountry', () => {
    render(<PhoneInput {...testProps} defaultValue="+442071234567" defaultCountry="us" />);
    expect(screen.getByRole('button', { name: /United Kingdom/ })).toBeInTheDocument();
  });

  it('emits an empty value when input is cleared without withCountryAutoDetect', async () => {
    const onChange = jest.fn();
    render(<PhoneInput {...testProps} onChange={onChange} />);

    const input = screen.getByRole('textbox');
    await userEvent.type(input, '2025551234');
    await userEvent.clear(input);

    expect(onChange).toHaveBeenLastCalledWith('', {
      formattedValue: '',
      country: expect.objectContaining({ iso2: 'us' }),
    });
    expect((input as HTMLInputElement).value).toBe('');
  });

  it('keeps a controlled input empty after clearing its national digits', async () => {
    function Controlled() {
      const [value, setValue] = useState('+79991234567');
      return <PhoneInput defaultCountry="ru" value={value} onChange={setValue} />;
    }

    render(<Controlled />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    await userEvent.clear(input);

    expect(input.value).toBe('');
    expect(screen.getByRole('button', { name: /Russia/ })).toBeInTheDocument();
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

    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1];
    const rawValue: string = lastCall[0];
    const digits = rawValue.replace(/\D/g, '');
    expect(digits.length).toBeLessThanOrEqual(11);
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
