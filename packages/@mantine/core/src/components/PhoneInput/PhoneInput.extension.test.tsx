import { useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { PhoneInput } from './PhoneInput';

async function flushCursor() {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 30));
  });
}

describe('@mantine/core/PhoneInput extensions', () => {
  it('requests a text keyboard for extensions and allows overriding inputMode', () => {
    const { rerender } = render(<PhoneInput withExtension />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'tel');
    expect(screen.getByRole('textbox')).toHaveAttribute('inputmode', 'text');

    rerender(<PhoneInput withExtension inputMode="tel" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('inputmode', 'tel');

    rerender(<PhoneInput />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('inputmode');
  });

  it.each([true, false])(
    'supports typing an extension in controlled mode (international=%s)',
    async (international) => {
      const onChange = jest.fn();

      function Controlled() {
        const [value, setValue] = useState('+12025551234');
        return (
          <PhoneInput
            withExtension
            international={international}
            value={value}
            onChange={(nextValue, details) => {
              setValue(nextValue);
              onChange(nextValue, details);
            }}
          />
        );
      }

      render(<Controlled />);
      const input = screen.getByRole('textbox');
      await userEvent.type(input, 'x');
      expect(onChange).toHaveBeenLastCalledWith(
        '+12025551234x',
        expect.objectContaining({ extension: '' })
      );
      expect(input).toHaveValue(`${international ? '+1 ' : ''}(202) 555-1234 x`);

      await userEvent.type(input, '001234');
      expect(input).toHaveValue(`${international ? '+1 ' : ''}(202) 555-1234 x001234`);
      expect(onChange).toHaveBeenLastCalledWith('+12025551234x001234', {
        formattedValue: '+1 (202) 555-1234 x001234',
        country: expect.objectContaining({ iso2: 'us' }),
        extension: '001234',
      });
    }
  );

  it('formats an uncontrolled default value with an extension', () => {
    render(<PhoneInput withExtension defaultValue="+12025551234x1234" />);
    expect(screen.getByRole('textbox')).toHaveValue('+1 (202) 555-1234 x1234');
  });

  it('updates the extension from controlled props', () => {
    const { rerender } = render(<PhoneInput withExtension value="+12025551234x1234" />);
    rerender(<PhoneInput withExtension value="+12025551234x009" />);
    expect(screen.getByRole('textbox')).toHaveValue('+1 (202) 555-1234 x009');
    rerender(<PhoneInput withExtension value="+12025551234" />);
    expect(screen.getByRole('textbox')).toHaveValue('+1 (202) 555-1234');
  });

  it.each([true, false])(
    'pastes a foreign number with an uppercase extension marker (international=%s)',
    async (international) => {
      const onChange = jest.fn();
      render(
        <PhoneInput
          withExtension
          defaultCountry="us"
          international={international}
          onChange={onChange}
        />
      );
      const input = screen.getByRole('textbox');
      await userEvent.click(input);
      await userEvent.clear(input);
      await userEvent.paste('+44 2079 460958 X 0012');

      expect(input).toHaveValue(`${international ? '+44 ' : ''}2079 460958 x0012`);
      expect(onChange).toHaveBeenLastCalledWith(
        '+442079460958x0012',
        expect.objectContaining({
          extension: '0012',
          country: expect.objectContaining({ iso2: 'gb' }),
        })
      );
    }
  );

  it('normalizes a pasted national prefix without merging extension digits', () => {
    const onChange = jest.fn();
    render(<PhoneInput withExtension defaultCountry="ru" onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '8 (999) 123-45-67 x1234' },
    });
    expect(onChange).toHaveBeenLastCalledWith(
      '+79991234567x1234',
      expect.objectContaining({ formattedValue: '+7 (999) 123-45-67 x1234', extension: '1234' })
    );
  });

  it('does not use extension length to strip an ambiguous national prefix', () => {
    const onChange = jest.fn();
    render(<PhoneInput withExtension defaultCountry="ru" onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+7 812 x123456789' } });
    expect(onChange).toHaveBeenLastCalledWith('+7812x123456789', expect.anything());
    expect(screen.getByRole('textbox')).toHaveValue('+7 (812 x123456789');
  });

  it('does not use extension digits for country or area-code detection', () => {
    const resolveCountry = jest.fn(() => undefined);
    const onCountryChange = jest.fn();
    render(
      <PhoneInput
        withExtension
        withCountryAutoDetect
        defaultCountry="us"
        resolveCountry={resolveCountry}
        onCountryChange={onCountryChange}
      />
    );
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+1 x2045551234' } });
    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
    expect(onCountryChange).not.toHaveBeenCalled();
    expect(resolveCountry).toHaveBeenLastCalledWith('+1', expect.any(Array));
  });

  it('ignores extension digits when detecting a country from controlled props', () => {
    render(<PhoneInput withExtension value="+1x2045551234" />);
    expect(screen.getByRole('button', { name: /United States/ })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveValue('+1 x2045551234');
  });

  it.each([true, false])(
    'preserves the extension when selecting another country (international=%s)',
    async (international) => {
      const onChange = jest.fn();
      render(
        <PhoneInput
          withExtension
          international={international}
          defaultValue="+12025551234x001234"
          onlyCountries={['us', 'gb']}
          onChange={onChange}
        />
      );
      await userEvent.click(screen.getByRole('button', { name: /United States/ }));
      await userEvent.click(screen.getByRole('option', { name: /United Kingdom/ }));
      expect(screen.getByRole('textbox')).toHaveValue(
        `${international ? '+44 ' : ''}2025 551234 x001234`
      );
      expect(onChange).toHaveBeenLastCalledWith(
        '+442025551234x001234',
        expect.objectContaining({ extension: '001234' })
      );
    }
  );

  it('preserves an extension when changing countries with a partially entered number', async () => {
    const onChange = jest.fn();
    render(
      <PhoneInput
        withExtension
        defaultValue="+1202x1234"
        onlyCountries={['us', 'gb']}
        onChange={onChange}
      />
    );
    await userEvent.click(screen.getByRole('button', { name: /United States/ }));
    await userEvent.click(screen.getByRole('option', { name: /United Kingdom/ }));
    expect(onChange).toHaveBeenLastCalledWith('+44202x1234', expect.anything());
  });

  it.each([true, false])(
    'keeps the cursor in the extension after inserting a digit (international=%s)',
    async (international) => {
      render(
        <PhoneInput withExtension international={international} defaultValue="+12025551234x1234" />
      );
      const input = screen.getByRole('textbox') as HTMLInputElement;
      const nextDisplay = `${international ? '+1 ' : ''}(202) 555-1234 x12934`;
      const cursor = nextDisplay.indexOf('x') + 4;
      fireEvent.change(input, { target: { value: nextDisplay, selectionStart: cursor } });
      await flushCursor();
      expect(input).toHaveValue(nextDisplay);
      expect(input.selectionStart).toBe(cursor);
    }
  );

  it.each([true, false])(
    'keeps the cursor in the number and preserves its extension (international=%s)',
    async (international) => {
      render(
        <PhoneInput withExtension international={international} defaultValue="+12025551234x1234" />
      );
      const input = screen.getByRole('textbox') as HTMLInputElement;
      const prefix = international ? '+1 ' : '';
      fireEvent.change(input, {
        target: { value: `${prefix}(2092) 555-1234 x1234`, selectionStart: prefix.length + 4 },
      });
      await flushCursor();
      expect(input).toHaveValue(`${prefix}(209) 255-5123 x1234`);
      expect(input.selectionStart).toBe(prefix.length + 4);
    }
  );

  it('keeps the cursor before the extension when appending to an incomplete number', async () => {
    render(<PhoneInput withExtension defaultValue="+1202x1234" />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '+1 (2025 x1234', selectionStart: 8 } });
    await flushCursor();
    expect(input).toHaveValue('+1 (202) 5 x1234');
    expect(input.selectionStart).toBe(10);
  });

  it('supports deleting extension digits and then the separator', async () => {
    const onChange = jest.fn();
    render(<PhoneInput withExtension defaultValue="+12025551234x12" onChange={onChange} />);
    const input = screen.getByRole('textbox');
    await userEvent.type(input, '{Backspace}{Backspace}');
    expect(input).toHaveValue('+1 (202) 555-1234 x');
    expect(onChange).toHaveBeenLastCalledWith(
      '+12025551234x',
      expect.objectContaining({ extension: '' })
    );
    await userEvent.type(input, '{Backspace}');
    expect(input).toHaveValue('+1 (202) 555-1234');
    expect(onChange).toHaveBeenLastCalledWith(
      '+12025551234',
      expect.objectContaining({ extension: '' })
    );
  });

  it('removes the extension when its separator is deleted from a complete number', async () => {
    const onChange = jest.fn();
    render(<PhoneInput withExtension defaultValue="+12025551234x1234" onChange={onChange} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: '+1 (202) 555-1234 1234', selectionStart: 17 },
    });
    await flushCursor();
    expect(input).toHaveValue('+1 (202) 555-1234');
    expect(onChange).toHaveBeenLastCalledWith(
      '+12025551234',
      expect.objectContaining({ extension: '' })
    );
    expect(input.selectionStart).toBe(17);
  });

  it('clears both the phone number and extension', async () => {
    const onChange = jest.fn();
    render(<PhoneInput withExtension defaultValue="+12025551234x1234" onChange={onChange} />);
    await userEvent.clear(screen.getByRole('textbox'));
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(onChange).toHaveBeenLastCalledWith(
      '',
      expect.objectContaining({ formattedValue: '', extension: '' })
    );
  });

  it('supports an extension when the country is unknown', () => {
    const onChange = jest.fn();
    render(<PhoneInput withExtension onChange={onChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '+999x1234' } });
    expect(screen.getByRole('textbox')).toHaveValue('+999 x1234');
    expect(onChange).toHaveBeenLastCalledWith('+999x1234', {
      formattedValue: '+999 x1234',
      country: null,
      extension: '1234',
    });
  });

  it('does not enable extensions by default', async () => {
    const onChange = jest.fn();
    render(<PhoneInput defaultValue="+12025551234" onChange={onChange} />);
    await userEvent.type(screen.getByRole('textbox'), 'x1234');
    expect(screen.getByRole('textbox')).toHaveValue('+1 (202) 555-1234');
    expect(onChange).toHaveBeenLastCalledWith('+12025551234', {
      formattedValue: '+1 (202) 555-1234',
      country: expect.objectContaining({ iso2: 'us' }),
    });
  });
});
