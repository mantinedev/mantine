import { act, renderHook } from '@testing-library/react';
import { formatMask, generatePattern, isMaskComplete, unformatMask, useMask } from './use-mask';

describe('@mantine/hooks/use-mask', () => {
  describe('useMask hook', () => {
    it('returns initial empty state', () => {
      const { result } = renderHook(() => useMask({ mask: '(999) 999-9999' }));
      expect(result.current.value).toBe('');
      expect(result.current.rawValue).toBe('');
      expect(result.current.isComplete).toBe(false);
      expect(result.current.ref).toBeDefined();
      expect(result.current.reset).toBeDefined();
    });

    it('returns a ref callback function', () => {
      const { result } = renderHook(() => useMask({ mask: '999' }));
      expect(typeof result.current.ref).toBe('function');
    });

    it('reset clears state and calls onChangeRaw', () => {
      const onChangeRaw = jest.fn();
      const { result } = renderHook(() => useMask({ mask: '999', onChangeRaw }));

      act(() => {
        result.current.reset();
      });

      expect(result.current.value).toBe('');
      expect(result.current.rawValue).toBe('');
      expect(onChangeRaw).toHaveBeenCalledWith('', '');
    });

    it('shows mask when alwaysShowMask is true and input is mounted', () => {
      const input = document.createElement('input');
      const { result } = renderHook(() =>
        useMask({ mask: '99/99', alwaysShowMask: true, slotChar: '_' })
      );

      act(() => {
        result.current.ref(input);
      });

      expect(input.value).toBe('__/__');
    });

    it('shows multi-character slotChar correctly with alwaysShowMask', () => {
      const input = document.createElement('input');
      const { result } = renderHook(() =>
        useMask({ mask: '99/99/9999', alwaysShowMask: true, slotChar: 'DD/MM/YYYY' })
      );

      act(() => {
        result.current.ref(input);
      });

      expect(input.value).toBe('DD/MM/YYYY');
    });

    it('does not show mask when alwaysShowMask is false', () => {
      const input = document.createElement('input');
      const { result } = renderHook(() => useMask({ mask: '99/99', alwaysShowMask: false }));

      act(() => {
        result.current.ref(input);
      });

      expect(input.value).toBe('');
    });

    it('sets aria-invalid when invalid option is true', () => {
      const input = document.createElement('input');
      const { result } = renderHook(() => useMask({ mask: '999', invalid: true }));

      act(() => {
        result.current.ref(input);
      });

      expect(input.getAttribute('aria-invalid')).toBe('true');
    });

    it('clears display on blur when input was focused but nothing was typed', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      const { result } = renderHook(() => useMask({ mask: '(999) 999-9999' }));

      act(() => {
        result.current.ref(input);
      });

      act(() => {
        input.focus();
      });

      expect(input.value).toBe('(___) ___-____');

      act(() => {
        input.blur();
      });

      expect(input.value).toBe('');
      expect(result.current.value).toBe('');
      expect(result.current.rawValue).toBe('');

      document.body.removeChild(input);
    });

    it('clears display on blur when typed value was fully deleted', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      const { result } = renderHook(() => useMask({ mask: '(999) 999-9999' }));

      act(() => {
        result.current.ref(input);
      });

      act(() => {
        input.focus();
      });

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '1' }));
      });

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace' }));
      });

      act(() => {
        input.blur();
      });

      expect(input.value).toBe('');
      expect(result.current.value).toBe('');
      expect(result.current.rawValue).toBe('');

      document.body.removeChild(input);
    });

    it('moves cursor to end of typed value when cursor lands before the first editable slot', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      const { result } = renderHook(() => useMask({ mask: '(999) 999-9999' }));

      act(() => {
        result.current.ref(input);
      });

      act(() => {
        input.focus();
      });

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '1' }));
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '2' }));
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '3' }));
      });

      const endOfTyped = input.selectionStart;
      expect(endOfTyped).toBeGreaterThan(0);

      input.setSelectionRange(0, 0);
      act(() => {
        input.dispatchEvent(new MouseEvent('mouseup'));
      });

      expect(input.selectionStart).toBe(endOfTyped);
      expect(input.selectionEnd).toBe(endOfTyped);

      document.body.removeChild(input);
    });

    it('preserves active selection on mouseup (does not collapse drag selection)', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      const { result } = renderHook(() => useMask({ mask: '(999) 999-9999' }));

      act(() => {
        result.current.ref(input);
      });

      act(() => {
        input.focus();
      });

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '1' }));
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '2' }));
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '3' }));
      });

      const fullDisplayLength = input.value.length;
      input.setSelectionRange(0, fullDisplayLength);
      act(() => {
        input.dispatchEvent(new MouseEvent('mouseup'));
      });

      expect(input.selectionStart).toBe(0);
      expect(input.selectionEnd).toBe(fullDisplayLength);

      document.body.removeChild(input);
    });

    it('clamps cursor to end of typed value on mousedown when click lands past typed content', async () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      const { result } = renderHook(() => useMask({ mask: '(999) 999-9999' }));

      act(() => {
        result.current.ref(input);
      });

      act(() => {
        input.focus();
      });

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '1' }));
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '2' }));
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '3' }));
      });

      const endOfTyped = input.selectionStart;
      expect(endOfTyped).toBeGreaterThan(0);

      input.setSelectionRange(input.value.length, input.value.length);
      act(() => {
        input.dispatchEvent(new MouseEvent('mousedown'));
      });

      await act(async () => {
        await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
      });

      expect(input.selectionStart).toBe(endOfTyped);
      expect(input.selectionEnd).toBe(endOfTyped);

      document.body.removeChild(input);
    });

    it('removes event listeners on cleanup', () => {
      const input = document.createElement('input');
      const removeSpy = jest.spyOn(input, 'removeEventListener');
      const { result } = renderHook(() => useMask({ mask: '999' }));

      act(() => {
        result.current.ref(input);
      });

      act(() => {
        result.current.ref(null);
      });

      expect(removeSpy).toHaveBeenCalled();
    });
  });

  describe('formatMask utility', () => {
    it('formats raw digits into phone mask', () => {
      const result = formatMask('1234567890', { mask: '(999) 999-9999' });
      expect(result).toBe('(123) 456-7890');
    });

    it('formats partial input', () => {
      const result = formatMask('123', { mask: '(999) 999-9999' });
      expect(result).toBe('(123) ');
    });

    it('handles empty input', () => {
      const result = formatMask('', { mask: '999-999' });
      expect(result).toBe('');
    });

    it('filters non-matching characters', () => {
      const result = formatMask('1a2b3', { mask: '999' });
      expect(result).toBe('123');
    });

    it('applies transform before validation', () => {
      const result = formatMask('abc', {
        mask: 'AAA',
        transform: (char) => char.toUpperCase(),
      });
      expect(result).toBe('ABC');
    });

    it('transform does not affect non-matching characters', () => {
      const result = formatMask('123', {
        mask: 'AAA',
        transform: (char) => char.toUpperCase(),
      });
      expect(result).toBe('');
    });

    it('works with letter tokens', () => {
      const result = formatMask('AB', { mask: 'aa-aa' });
      expect(result).toBe('AB-');
    });

    it('works with custom tokens', () => {
      const result = formatMask('ff00aa', {
        mask: 'hh:hh:hh',
        tokens: { h: /[0-9a-fA-F]/ },
      });
      expect(result).toBe('ff:00:aa');
    });

    it('works with regex array format', () => {
      const result = formatMask('123', {
        mask: ['(', /[1-9]/, /\d/, /\d/, ')'],
      });
      expect(result).toBe('(123)');
    });

    it('truncates values longer than mask', () => {
      const result = formatMask('12345', { mask: '999' });
      expect(result).toBe('123');
    });

    it('handles date mask', () => {
      const result = formatMask('12252023', { mask: '99/99/9999' });
      expect(result).toBe('12/25/2023');
    });

    it('handles SSN mask', () => {
      const result = formatMask('123456789', { mask: '999-99-9999' });
      expect(result).toBe('123-45-6789');
    });
  });

  describe('unformatMask utility', () => {
    it('extracts raw value from phone number', () => {
      const result = unformatMask('(123) 456-7890', { mask: '(999) 999-9999' });
      expect(result).toBe('1234567890');
    });

    it('extracts raw value from date', () => {
      const result = unformatMask('12/25/2023', { mask: '99/99/9999' });
      expect(result).toBe('12252023');
    });

    it('returns empty for empty input', () => {
      const result = unformatMask('', { mask: '999-999' });
      expect(result).toBe('');
    });

    it('extracts raw from partial value', () => {
      const result = unformatMask('(12', { mask: '(999) 999-9999' });
      expect(result).toBe('12');
    });
  });

  describe('isMaskComplete utility', () => {
    it('returns true for complete phone number', () => {
      const result = isMaskComplete('(123) 456-7890', { mask: '(999) 999-9999' });
      expect(result).toBe(true);
    });

    it('returns false for incomplete phone number', () => {
      const result = isMaskComplete('(123) 456-', { mask: '(999) 999-9999' });
      expect(result).toBe(false);
    });

    it('returns false for empty input', () => {
      const result = isMaskComplete('', { mask: '999' });
      expect(result).toBe(false);
    });

    it('returns true for complete date', () => {
      const result = isMaskComplete('12/25/2023', { mask: '99/99/9999' });
      expect(result).toBe(true);
    });

    it('handles optional segments', () => {
      const result = isMaskComplete('(123) 456-7890', { mask: '(999) 999-9999? x9999' });
      expect(result).toBe(true);
    });
  });

  describe('generatePattern utility', () => {
    it('generates pattern for digit mask', () => {
      const result = generatePattern('full', { mask: '999' });
      expect(result).toContain('[0-9]');
    });

    it('generates pattern with literal escaping', () => {
      const result = generatePattern('full', { mask: '(999)' });
      expect(result).toContain('\\(');
      expect(result).toContain('\\)');
    });

    it('generates full-inexact pattern without groups', () => {
      const result = generatePattern('full-inexact', { mask: '99' });
      expect(result).not.toContain('(');
    });
  });

  describe('mask parsing', () => {
    it('handles escaped characters', () => {
      const result = formatMask('99123', { mask: '\\A99-999' });
      expect(result).toBe('A99-123');
    });

    it('handles uppercase letter token', () => {
      const result = formatMask('AB', { mask: 'AA' });
      expect(result).toBe('AB');
    });

    it('uppercase token rejects lowercase', () => {
      const result = formatMask('ab', { mask: 'AA' });
      expect(result).toBe('');
    });

    it('alphanumeric token accepts mixed', () => {
      const result = formatMask('a1B2', { mask: '****' });
      expect(result).toBe('a1B2');
    });

    it('sign token accepts signs and digits', () => {
      const result = formatMask('+123', { mask: '####' });
      expect(result).toBe('+123');
    });
  });
});
