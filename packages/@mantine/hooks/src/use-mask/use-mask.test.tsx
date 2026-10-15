import { useMemo, useState } from 'react';
import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  getDisplay,
  getEdit,
  getStateFromRaw,
  getStateFromText,
  MaskEditIntent,
  MaskState,
} from './mask-engine';
import {
  formatMask,
  generatePattern,
  isMaskComplete,
  unformatMask,
  useMask,
  UseMaskOptions,
} from './use-mask';

function InlineOptionsInput() {
  const { ref } = useMask({ mask: '99.08.2026' });
  return <input aria-label="date" ref={ref} />;
}

function MemoizedOptionsInput() {
  const options = useMemo<UseMaskOptions>(() => ({ mask: '99.08.2026' }), []);
  const { ref } = useMask(options);
  return <input aria-label="date" ref={ref} />;
}

function OnCompleteInput({ onComplete }: { onComplete: UseMaskOptions['onComplete'] }) {
  const { ref } = useMask({ mask: '999', onComplete });
  return <input aria-label="code" ref={ref} />;
}

function RefIdentityInput({ onRef }: { onRef: (ref: unknown) => void }) {
  const [, setCount] = useState(0);
  const { ref } = useMask({ mask: '999' });
  onRef(ref);
  return (
    <>
      <input aria-label="code" ref={ref} />
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        rerender
      </button>
    </>
  );
}

function ConditionalInput({
  onChangeRaw,
  defaultValue,
}: {
  onChangeRaw?: UseMaskOptions['onChangeRaw'];
  defaultValue?: string;
}) {
  const [visible, setVisible] = useState(true);
  const mask = useMask({ mask: '99/99/9999', onChangeRaw });
  return (
    <>
      {visible && <input aria-label="date" ref={mask.ref} defaultValue={defaultValue} />}
      <button type="button" onClick={() => setVisible((v) => !v)}>
        toggle
      </button>
      <span data-testid="raw">{mask.rawValue}</span>
    </>
  );
}

const nativeValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value'
)!.set!;

function setup(options: UseMaskOptions, configure?: (input: HTMLInputElement) => void) {
  const input = document.createElement('input');
  configure?.(input);
  document.body.appendChild(input);
  const hook = renderHook(() => useMask(options));
  act(() => hook.result.current.ref(input));
  act(() => input.focus());

  const keys = (sequence: string[]) =>
    act(() => {
      for (const key of sequence) {
        input.dispatchEvent(new KeyboardEvent('keydown', { key, cancelable: true }));
      }
    });

  const type = (text: string) => keys(text.split(''));

  const select = (start: number, end = start) => input.setSelectionRange(start, end);

  const paste = (text: string) =>
    act(() => {
      const event = new Event('paste', { bubbles: true, cancelable: true });
      Object.defineProperty(event, 'clipboardData', { value: { getData: () => text } });
      input.dispatchEvent(event);
    });

  const beforeInput = (inputType: string, data: string | null = null) => {
    let prevented = false;
    act(() => {
      const event = new InputEvent('beforeinput', { inputType, data, cancelable: true });
      input.dispatchEvent(event);
      prevented = event.defaultPrevented;
    });
    return prevented;
  };

  const nativeInput = (value: string, caret: number, inputType = 'insertText') =>
    act(() => {
      nativeValueSetter.call(input, value);
      input.setSelectionRange(caret, caret);
      input.dispatchEvent(new InputEvent('input', { inputType }));
    });

  const cleanup = () => {
    hook.unmount();
    input.remove();
  };

  return {
    input,
    result: hook.result,
    keys,
    type,
    select,
    paste,
    beforeInput,
    nativeInput,
    cleanup,
  };
}

const amexOptions: UseMaskOptions = {
  mask: '9999 9999 9999 9999',
  modify: (value) => {
    const digits = value.replace(/\D/g, '');
    if (digits.startsWith('34') || digits.startsWith('37')) {
      return { mask: '9999 999999 99999' };
    }
    return undefined;
  },
};

describe('@mantine/hooks/use-mask', () => {
  describe('useMask hook', () => {
    it('reset clears state, keeps the focused placeholder and calls onChangeRaw', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      const onChangeRaw = jest.fn();
      const { result } = renderHook(() => useMask({ mask: '999', onChangeRaw }));

      act(() => {
        result.current.ref(input);
      });

      act(() => {
        input.focus();
      });

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '1' }));
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '2' }));
      });

      expect(input.value).toBe('12_');
      expect(result.current.rawValue).toBe('12');

      act(() => {
        result.current.reset();
      });

      expect(input.value).toBe('___');
      expect(result.current.value).toBe('___');
      expect(result.current.rawValue).toBe('');
      expect(onChangeRaw).toHaveBeenLastCalledWith('', '___');

      act(() => input.blur());
      expect(input.value).toBe('');

      document.body.removeChild(input);
    });

    it('reset shows the empty mask when alwaysShowMask is true', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      const { result } = renderHook(() =>
        useMask({ mask: '99/99', alwaysShowMask: true, slotChar: '_' })
      );

      act(() => {
        result.current.ref(input);
      });

      act(() => {
        input.focus();
      });

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '1' }));
      });

      expect(input.value).toBe('1_/__');

      act(() => {
        result.current.reset();
      });

      expect(input.value).toBe('__/__');
      expect(result.current.value).toBe('__/__');
      expect(result.current.rawValue).toBe('');

      document.body.removeChild(input);
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

    it('applies transform to the initial input value', () => {
      const input = document.createElement('input');
      input.value = 'abc';
      const { result } = renderHook(() =>
        useMask({ mask: 'AAA', transform: (char) => char.toUpperCase() })
      );

      act(() => {
        result.current.ref(input);
      });

      expect(input.value).toBe('ABC');
      expect(result.current.value).toBe('ABC');
      expect(result.current.rawValue).toBe('ABC');
    });

    it('applies transform to the initial input value that contains literals', () => {
      const input = document.createElement('input');
      input.value = '(123) abc';
      const { result } = renderHook(() =>
        useMask({ mask: '(999) AAA', transform: (char) => char.toUpperCase() })
      );

      act(() => {
        result.current.ref(input);
      });

      expect(input.value).toBe('(123) ABC');
      expect(result.current.rawValue).toBe('123ABC');
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

    it('positions cursor at the cut location when content is removed via cut', () => {
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
        for (const d of '3334445555') {
          input.dispatchEvent(new KeyboardEvent('keydown', { key: d }));
        }
      });

      expect(input.value).toBe('(333) 444-5555');

      act(() => {
        const nativeSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          'value'
        )!.set!;
        input.setSelectionRange(6, 9);
        nativeSetter.call(input, '(333) -5555');
        input.setSelectionRange(6, 6);
        input.dispatchEvent(new InputEvent('input', { inputType: 'deleteByCut' }));
      });

      expect(input.selectionStart).toBe(6);
      expect(input.selectionEnd).toBe(6);
      expect(result.current.rawValue).toBe('3335555');

      document.body.removeChild(input);
    });

    it('positions cursor at the cut location for partially filled mask with placeholders', () => {
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
        for (const d of '12345') {
          input.dispatchEvent(new KeyboardEvent('keydown', { key: d }));
        }
      });

      expect(input.value).toBe('(123) 45_-____');

      act(() => {
        const nativeSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          'value'
        )!.set!;
        input.setSelectionRange(6, 7);
        nativeSetter.call(input, '(123) 5_-____');
        input.setSelectionRange(6, 6);
        input.dispatchEvent(new InputEvent('input', { inputType: 'deleteByCut' }));
      });

      expect(input.selectionStart).toBe(6);
      expect(input.selectionEnd).toBe(6);
      expect(result.current.rawValue).toBe('1235');

      document.body.removeChild(input);
    });

    it('positions cursor after pasted content rather than at the end', () => {
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
        for (const d of '3335555') {
          input.dispatchEvent(new KeyboardEvent('keydown', { key: d }));
        }
      });

      act(() => {
        input.setSelectionRange(4, 4);
        const pasteEvent = new Event('paste', { bubbles: true, cancelable: true });
        Object.defineProperty(pasteEvent, 'clipboardData', {
          value: { getData: () => '444' },
        });
        input.dispatchEvent(pasteEvent);
      });

      expect(input.value).toBe('(333) 444-5555');
      expect(input.selectionStart).toBe(10);
      expect(input.selectionEnd).toBe(10);

      document.body.removeChild(input);
    });

    it('undoes a single character insertion via Ctrl+Z', () => {
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

      expect(input.value).toBe('(1__) ___-____');
      expect(result.current.rawValue).toBe('1');

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
      });

      expect(result.current.rawValue).toBe('');

      document.body.removeChild(input);
    });

    it('undoes a backspace deletion and restores cursor position', () => {
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
        for (const d of '123') {
          input.dispatchEvent(new KeyboardEvent('keydown', { key: d }));
        }
      });

      act(() => {
        input.setSelectionRange(3, 3);
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Backspace' }));
      });

      expect(result.current.rawValue).toBe('13');

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
      });

      expect(result.current.rawValue).toBe('123');
      expect(input.selectionStart).toBe(3);

      document.body.removeChild(input);
    });

    it('supports redo via Ctrl+Shift+Z', () => {
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
      });

      expect(result.current.rawValue).toBe('12');

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
      });

      expect(result.current.rawValue).toBe('1');

      act(() => {
        input.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'z', ctrlKey: true, shiftKey: true })
        );
      });

      expect(result.current.rawValue).toBe('12');

      document.body.removeChild(input);
    });

    it('supports redo via Ctrl+Y', () => {
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
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
      });

      expect(result.current.rawValue).toBe('');

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'y', ctrlKey: true }));
      });

      expect(result.current.rawValue).toBe('1');

      document.body.removeChild(input);
    });

    it('supports Cmd+Z (Mac) for undo', () => {
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
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', metaKey: true }));
      });

      expect(result.current.rawValue).toBe('');

      document.body.removeChild(input);
    });

    it('clears redo stack on new edit', () => {
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
      });

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
      });

      expect(result.current.rawValue).toBe('1');

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '9' }));
      });

      expect(result.current.rawValue).toBe('19');

      // Redo should do nothing because new edit cleared redo stack
      act(() => {
        input.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'z', ctrlKey: true, shiftKey: true })
        );
      });

      expect(result.current.rawValue).toBe('19');

      document.body.removeChild(input);
    });

    it('clears undo/redo stacks on reset', () => {
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
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '2' }));
      });

      expect(result.current.rawValue).toBe('12');

      act(() => {
        result.current.reset();
      });

      act(() => {
        input.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
      });

      expect(result.current.rawValue).toBe('');

      document.body.removeChild(input);
    });

    it('removes event listeners on cleanup', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      const { result } = renderHook(() => useMask({ mask: '999' }));

      act(() => {
        result.current.ref(input);
      });

      act(() => {
        result.current.ref(null);
      });

      act(() => {
        input.focus();
        input.dispatchEvent(new KeyboardEvent('keydown', { key: '1', cancelable: true }));
      });

      expect(result.current.rawValue).toBe('');
      expect(input.value).toBe('');

      document.body.removeChild(input);
    });
  });

  describe('raw value round trip', () => {
    const roundTripMasks: Array<[string, UseMaskOptions, string]> = [
      ['letters and digits', { mask: 'AAA-9999' }, 'XYZ1234ab'],
      ['time', { mask: [/[0-2]/, /\d/, ':', /[0-5]/, /\d/] }, '0123456789'],
      ['postal code', { mask: 'A9A 9A9' }, 'KAB019'],
      ['literal prefix', { mask: '+1 (999) 999-9999' }, '0123456789+'],
      ['optional part', { mask: '99?-99' }, '1234a'],
      ['lowercase letters', { mask: 'aa-9999' }, 'xyXY12'],
      ['multi-character placeholder', { mask: '99/99/9999', slotChar: 'DD/MM/YYYY' }, '0123a'],
      ['hidden placeholder', { mask: 'AA 99', slotChar: null }, 'XY12'],
      [
        'growing layout',
        {
          mask: 'AAA-9999',
          modify: (value) => (value.length >= 7 ? { mask: 'AAA-99999' } : undefined),
        },
        'XYZ123',
      ],
    ];

    function createRandom(seed: number) {
      let state = seed;
      return (max: number) => {
        state = (state * 1103515245 + 12345) % 2147483648;
        return state % max;
      };
    }

    it.each(roundTripMasks)(
      'rebuilds every edited %s value from its raw value',
      (_, options, alphabet) => {
        const random = createRandom(alphabet.length * 7919);
        const intents: Array<() => MaskEditIntent> = [
          () => ({ type: 'insert', text: alphabet[random(alphabet.length)] }),
          () => ({ type: 'insert', text: alphabet.slice(random(alphabet.length)) }),
          () => ({ type: 'deleteBackward' }),
          () => ({ type: 'deleteForward' }),
          () => ({ type: 'deleteToStart' }),
        ];

        for (let run = 0; run < 200; run++) {
          let state: MaskState = getStateFromRaw(options, alphabet);
          for (let step = 0; step < 12; step++) {
            const start = random(state.cells.length + 1);
            const end = random(3) === 0 ? start + random(4) : start;
            const edit = getEdit(options, state, start, end, intents[random(intents.length)]());
            state = edit ? edit.state : state;
            expect(getStateFromRaw(options, state.raw).cells).toBe(state.cells);
            for (const focused of [true, false]) {
              const display = getDisplay(state, options, focused);
              expect(getStateFromText(options, display).raw).toBe(state.raw);
            }
          }
        }
      }
    );

    it.each(['XY1234', 'XY_-1234', 'XY-1234'])(
      'pastes %s into the slots that fit after an empty slot',
      (text) => {
        const view = setup({ mask: 'AAA-9999' });
        view.paste(text);
        expect(view.result.current.rawValue).toBe('XY1234');
        expect(view.input.value).toBe('XY_-1234');
        view.cleanup();
      }
    );

    it('reads the placeholders of a pasted display as empty slots', () => {
      const view = setup({ mask: 'A9A 9A9', slotChar: '#' });
      view.paste('#1A 0B1');
      expect(view.result.current.rawValue).toBe('1A0B1');
      expect(view.input.value).toBe('#1A 0B1');

      view.select(0, view.input.value.length);
      view.paste('### ###');
      expect(view.result.current.rawValue).toBe('1A0B1');
      view.cleanup();
    });

    const dynamicOptions: UseMaskOptions = {
      mask: '99-99',
      modify: (raw) => (raw.length > 4 ? { mask: '99-999' } : undefined),
    };

    it.each([
      ['12345', '12345', '12-345'],
      ['12-345', '12345', '12-345'],
      ['1234567', '12345', '12-345'],
      ['1234', '1234', '12-34'],
    ])('pastes %s into a dynamic mask that grows', (text, raw, display) => {
      const view = setup(dynamicOptions);
      view.paste(text);
      expect(view.result.current.rawValue).toBe(raw);
      expect(view.input.value).toBe(display);
      view.cleanup();
    });

    it('types and autofills past the capacity of the current dynamic layout', () => {
      const view = setup(dynamicOptions);
      view.type('123456');
      expect(view.result.current.rawValue).toBe('12345');
      expect(view.input.value).toBe('12-345');

      view.select(0);
      view.type('9');
      expect(view.result.current.rawValue).toBe('91234');

      view.keys(['Backspace']);
      expect(view.input.value).toBe('12-34');
      view.nativeInput('12-345', 6);
      expect(view.result.current.rawValue).toBe('12345');

      act(() => view.result.current.setValue(''));
      view.nativeInput('12345', 5, 'insertReplacementText');
      expect(view.result.current.rawValue).toBe('12345');
      view.cleanup();
    });

    it('switches a phone mask by digit count while typing and pasting', () => {
      const options: UseMaskOptions = {
        mask: '(999) 999-9999',
        modify: (raw) => (raw.length > 10 ? { mask: '9 (999) 999-9999' } : undefined),
      };
      const view = setup(options);
      view.type('12345678901');
      expect(view.input.value).toBe('1 (234) 567-8901');

      view.select(0, view.input.value.length);
      view.paste('(234) 567-8901');
      expect(view.result.current.rawValue).toBe('2345678901');
      view.select(view.input.value.length);
      view.type('2');
      expect(view.input.value).toBe('2 (345) 678-9012');
      expect(unformatMask('2 (345) 678-9012', options)).toBe('23456789012');
      view.cleanup();
    });

    it('lays out a raw value with an empty slot in the middle', () => {
      expect(formatMask('XY1234', { mask: 'AAA-9999' })).toBe('XY_-1234');
      expect(formatMask('359', { mask: [/[0-2]/, /\d/, ':', /[0-5]/, /\d/] })).toBe('_3:59');
      expect(formatMask('1A0B1', { mask: 'A9A 9A9' })).toBe('_1A 0B1');
      expect(formatMask('1234', { mask: 'AAA-9999' })).toBe('___-1234');
      expect(formatMask('1a2', { mask: '999' })).toBe('12');
    });

    it('keeps the value and undo history when a display option changes', () => {
      const input = document.createElement('input');
      document.body.appendChild(input);
      const hook = renderHook((props: UseMaskOptions) => useMask(props), {
        initialProps: { mask: 'AAA-9999' } as UseMaskOptions,
      });
      const press = (key: string, ctrlKey = false) =>
        act(() => {
          input.dispatchEvent(new KeyboardEvent('keydown', { key, ctrlKey, cancelable: true }));
        });

      act(() => hook.result.current.ref(input));
      act(() => input.focus());
      act(() => hook.result.current.setValue('XYZ1234'));
      input.setSelectionRange(3, 3);
      press('Backspace');
      expect(input.value).toBe('XY_-1234');

      hook.rerender({ mask: 'AAA-9999', alwaysShowMask: true, slotChar: '#' });
      expect(input.value).toBe('XY#-1234');
      expect(hook.result.current.rawValue).toBe('XY1234');

      press('z', true);
      expect(input.value).toBe('XYZ-1234');

      input.setSelectionRange(3, 3);
      press('Backspace');
      hook.rerender({ mask: 'AAA-99999', alwaysShowMask: true, slotChar: '#' });
      expect(input.value).toBe('XY#-1234#');

      act(() => hook.result.current.setValue(hook.result.current.rawValue));
      expect(input.value).toBe('XY#-1234#');

      hook.unmount();
      input.remove();
    });

    it('places the caret at the first editable position after clearing a literal prefix', () => {
      const view = setup({ mask: '+1 (999) 999' });
      view.type('123456');
      view.select(0, view.input.value.length);
      view.keys(['Backspace']);
      expect(view.input.value).toBe('+1 (___) ___');
      expect(view.input.selectionStart).toBe(4);
      view.cleanup();
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

    it('formats the value as the unfocused input displays it', () => {
      expect(formatMask('12', { mask: '99?-99' })).toBe('12');
      expect(formatMask('1234', { mask: '(999) 999-9999', alwaysShowMask: true })).toBe(
        '(123) 4__-____'
      );
      expect(formatMask('XY1234', { mask: 'AAA-9999', slotChar: '#' })).toBe('XY#-1234');
    });
  });

  describe('unformatMask utility', () => {
    it('extracts raw value from phone number', () => {
      const result = unformatMask('(123) 456-7890', { mask: '(999) 999-9999' });
      expect(result).toBe('1234567890');
    });

    it('returns empty for empty input', () => {
      const result = unformatMask('', { mask: '999-999' });
      expect(result).toBe('');
    });

    it('extracts raw from partial value', () => {
      const result = unformatMask('(12', { mask: '(999) 999-9999' });
      expect(result).toBe('12');
    });

    it('skips slot characters of a partial value', () => {
      expect(unformatMask('(555) 12_-____', { mask: '(999) 999-9999' })).toBe('55512');
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

    it('handles optional segments', () => {
      const result = isMaskComplete('(123) 456-7890', { mask: '(999) 999-9999? x9999' });
      expect(result).toBe(true);
    });
  });

  describe('generatePattern utility', () => {
    it('generates pattern for digit mask', () => {
      const result = generatePattern('full', { mask: '999' });
      expect(result).toBe('([0-9])([0-9])([0-9])');
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

  describe('edit pipeline', () => {
    it('parses a pasted formatted value whose literals are token-compatible', () => {
      const view = setup({ mask: '+1 (999) 999-9999' });
      view.select(4);
      view.paste('+1 (555) 123-4567');
      expect(view.input.value).toBe('+1 (555) 123-4567');
      expect(view.result.current.rawValue).toBe('5551234567');
      view.cleanup();
    });

    it('does not insert a literal digit of a pasted formatted value as data', () => {
      const view = setup({ mask: '+7 (999) 999-9999' });
      view.select(0, view.input.value.length);
      view.paste('+7 (123) 456-7890');
      expect(view.input.value).toBe('+7 (123) 456-7890');
      expect(view.result.current.rawValue).toBe('1234567890');
      view.cleanup();
    });

    it('parses an autofilled value delivered through the input event', () => {
      const view = setup({ mask: '+7 (999) 999-99-99' });
      act(() => view.input.blur());
      view.nativeInput('+79123456789', 12, 'insertReplacementText');
      expect(view.input.value).toBe('+7 (912) 345-67-89');
      expect(view.result.current.rawValue).toBe('9123456789');
      view.cleanup();
    });

    it('keeps raw digits of a pasted raw value that match a mask literal', () => {
      const view = setup({ mask: '+7 (999) 999-99-99' });
      view.select(0, view.input.value.length);
      view.paste('7001234568');
      expect(view.result.current.rawValue).toBe('7001234568');
      view.cleanup();
    });

    it('applies setValue as a raw value', () => {
      const view = setup({ mask: '+7 (999) 999-99-99' });
      act(() => view.result.current.setValue('7001234568'));
      expect(view.input.value).toBe('+7 (700) 123-45-68');
      expect(view.result.current.rawValue).toBe('7001234568');
      view.cleanup();
    });

    it('does not read multi-character slot placeholders as data on the input event', () => {
      const onComplete = jest.fn();
      const view = setup({
        mask: 'AAA-9999',
        slotChar: 'XXX-0000',
        transform: (char) => char.toUpperCase(),
        onComplete,
      });
      expect(view.input.value).toBe('XXX-0000');
      view.nativeInput('aXXX-0000', 1);
      expect(view.result.current.rawValue).toBe('A');
      expect(view.input.value).toBe('AXX-0000');
      expect(onComplete).not.toHaveBeenCalled();

      view.nativeInput('AbXX-0000', 2);
      expect(view.result.current.rawValue).toBe('AB');

      view.nativeInput('AX-0000', 1, 'deleteContentBackward');
      expect(view.result.current.rawValue).toBe('A');
      expect(view.input.value).toBe('AXX-0000');
      view.cleanup();
    });

    it.each([
      ['readOnly', (input: HTMLInputElement) => (input.readOnly = true)],
      ['disabled', (input: HTMLInputElement) => (input.disabled = true)],
    ])('does not edit a %s input', (_, configure) => {
      const view = setup({ mask: '999' }, (input) => {
        input.value = '12';
        configure(input);
      });
      expect(view.result.current.rawValue).toBe('12');
      const displayed = view.input.value;
      view.select(2);
      view.keys(['Backspace', '3', 'Delete']);
      view.paste('9');
      expect(view.beforeInput('deleteContentBackward')).toBe(false);
      expect(view.beforeInput('insertText', '5')).toBe(false);
      act(() => {
        view.input.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
      });
      expect(view.result.current.rawValue).toBe('12');
      expect(view.input.value).toBe(displayed);
      view.cleanup();
    });

    it('resolves a dynamic mask from the current value when pasting', () => {
      const view = setup(amexOptions);
      view.type('378282246310005');
      expect(view.input.value).toBe('3782 822463 10005');
      view.select(12);
      view.paste('7');
      expect(view.input.value).toBe('3782 822463 71000');
      expect(view.input.selectionStart).toBe(13);
      view.cleanup();
    });

    it('keeps a dynamic mask layout when the input is refocused', () => {
      const view = setup(amexOptions);
      view.type('3712');
      act(() => view.input.blur());
      act(() => view.input.focus());
      expect(view.input.value).toBe('3712 ______ _____');
      view.cleanup();
    });

    it('deletes through the input event against the dynamic mask', () => {
      const view = setup(amexOptions);
      view.type('341234567890123');
      expect(view.input.value).toBe('3412 345678 90123');
      view.nativeInput('3412 345678 9012', 16, 'deleteContentBackward');
      expect(view.result.current.rawValue).toBe('34123456789012');
      view.cleanup();
    });

    it('resolves dynamic masks against the value in the utilities', () => {
      expect(unformatMask('3782 822463 10005', amexOptions)).toBe('378282246310005');
      expect(isMaskComplete('3782 822463 10005', amexOptions)).toBe(true);
      expect(isMaskComplete('3782 8224 6310 005', amexOptions)).toBe(false);
    });

    it('deletes the previous slot on beforeinput deleteContentBackward after a literal', () => {
      const view = setup({ mask: '(999) 999-9999' });
      view.type('55512');
      view.select(6);
      expect(view.beforeInput('deleteContentBackward')).toBe(true);
      expect(view.result.current.rawValue).toBe('5512');
      expect(view.input.value).toBe('(551) 2__-____');
      expect(view.input.selectionStart).toBe(3);
      view.cleanup();
    });

    it('deletes the previous slot on input deleteContentBackward after a literal', () => {
      const view = setup({ mask: '99-99' });
      view.type('1234');
      expect(view.input.value).toBe('12-34');
      view.nativeInput('1234', 2, 'deleteContentBackward');
      expect(view.result.current.rawValue).toBe('134');
      expect(view.input.value).toBe('13-4_');
      expect(view.input.selectionStart).toBe(1);
      view.cleanup();
    });

    it('handles beforeinput deleteContentForward and insertText like the keyboard', () => {
      const view = setup({ mask: '(999) 999-9999' });
      view.type('123');
      view.select(4);
      expect(view.beforeInput('insertText', '4')).toBe(true);
      expect(view.result.current.rawValue).toBe('1234');
      expect(view.input.selectionStart).toBe(7);
      view.select(0);
      expect(view.beforeInput('deleteContentForward')).toBe(true);
      expect(view.result.current.rawValue).toBe('234');
      view.cleanup();
    });

    it('does not cancel composition input', () => {
      const view = setup({ mask: '999' });
      expect(view.beforeInput('insertCompositionText', '1')).toBe(false);
      view.cleanup();
    });

    it('drops the empty optional part from onComplete and the blurred display', () => {
      const onComplete = jest.fn();
      const view = setup({ mask: '(999) 999-9999? x9999', onComplete });
      view.type('1234567890');
      expect(onComplete).toHaveBeenCalledWith('(123) 456-7890', '1234567890');
      act(() => view.input.blur());
      expect(view.input.value).toBe('(123) 456-7890');
      expect(view.result.current.value).toBe('(123) 456-7890');
      act(() => view.input.focus());
      view.select(14);
      view.type('12');
      expect(view.input.value).toBe('(123) 456-7890 x12__');
      act(() => view.input.blur());
      expect(view.input.value).toBe('(123) 456-7890 x12');
      view.cleanup();
    });

    it('handles boundary values of setValue', () => {
      const view = setup({ mask: '(999) 999-9999' });
      act(() => view.result.current.setValue('(123) 456-7890'));
      expect(view.result.current.rawValue).toBe('1234567890');
      act(() => view.result.current.setValue('123456789012'));
      expect(view.result.current.rawValue).toBe('1234567890');
      act(() => view.result.current.setValue('12'));
      expect(view.input.value).toBe('(12_) ___-____');
      act(() => view.result.current.setValue(''));
      expect(view.result.current.rawValue).toBe('');
      view.cleanup();

      const dynamic = setup(amexOptions);
      act(() => dynamic.result.current.setValue('378282246310005'));
      expect(dynamic.input.value).toBe('3782 822463 10005');
      dynamic.cleanup();
    });

    it('does not change the value when pasted text has no acceptable characters', () => {
      const view = setup({ mask: '(999) 999-9999' });
      view.type('123');
      view.select(0, view.input.value.length);
      view.paste('abc');
      expect(view.result.current.rawValue).toBe('123');
      view.paste('');
      expect(view.result.current.rawValue).toBe('123');
      view.cleanup();
    });

    it('pastes a partial formatted value over the whole field', () => {
      const view = setup({ mask: '+1 (999) 999-9999' });
      view.type('999');
      view.select(0, view.input.value.length);
      view.paste('+1 (555');
      expect(view.result.current.rawValue).toBe('555');
      expect(view.input.selectionStart).toBe(9);
      view.cleanup();
    });

    it('restores the display when an input event deletes only the literal prefix', () => {
      const view = setup({ mask: '+7 (999) 999-99-99' });
      view.type('12');
      view.nativeInput('+7 12_) ___-__-__', 3, 'deleteContentBackward');
      expect(view.result.current.rawValue).toBe('12');
      expect(view.input.value).toBe('+7 (12_) ___-__-__');
      expect(view.input.selectionStart).toBe(4);

      view.select(4);
      expect(view.beforeInput('deleteContentBackward')).toBe(true);
      expect(view.result.current.rawValue).toBe('12');
      view.cleanup();
    });

    it('cancels rejected beforeinput characters without changing the value', () => {
      const view = setup({ mask: '999' });
      view.type('1');
      expect(view.beforeInput('insertText', 'a')).toBe(true);
      expect(view.result.current.rawValue).toBe('1');
      expect(view.input.value).toBe('1__');
      view.cleanup();
    });

    it('undoes a paste to the value the user last saw', () => {
      const view = setup({ mask: '+1 (999) 999-9999' });
      view.type('12');
      view.select(0, view.input.value.length);
      view.paste('+1 (555) 123-4567');
      expect(view.result.current.rawValue).toBe('5551234567');
      act(() => {
        view.input.dispatchEvent(new KeyboardEvent('keydown', { key: 'z', ctrlKey: true }));
      });
      expect(view.result.current.rawValue).toBe('12');
      view.cleanup();
    });

    it('generates a pattern with an optional group for optional segments', () => {
      const pattern = new RegExp(`^${generatePattern('full', { mask: '99? x99' })}$`);
      expect(pattern.test('12')).toBe(true);
      expect(pattern.test('12 x3')).toBe(true);
      expect(pattern.test('12 x34')).toBe(true);
      expect(pattern.test('1')).toBe(false);
      const inexact = new RegExp(`^${generatePattern('full-inexact', { mask: '99? x99' })}$`);
      expect(inexact.test('12')).toBe(true);
      expect(inexact.test('12 x34')).toBe(true);
    });

    it('leaves aria-invalid alone when invalid is not passed', () => {
      const input = document.createElement('input');
      input.setAttribute('aria-invalid', 'true');
      const { result } = renderHook(() => useMask({ mask: '999' }));
      act(() => result.current.ref(input));
      expect(input.getAttribute('aria-invalid')).toBe('true');
    });

    it('removes aria-invalid it has set when invalid is no longer passed', () => {
      const input = document.createElement('input');
      const { result, rerender } = renderHook(
        (props: { invalid?: boolean }) => useMask({ mask: '999', invalid: props.invalid }),
        { initialProps: { invalid: true } as { invalid?: boolean } }
      );
      act(() => result.current.ref(input));
      expect(input.getAttribute('aria-invalid')).toBe('true');
      rerender({ invalid: false });
      expect(input.hasAttribute('aria-invalid')).toBe(false);
      rerender({ invalid: true });
      rerender({});
      expect(input.hasAttribute('aria-invalid')).toBe(false);
    });
  });

  describe('external values and edits', () => {
    const growingOptions: UseMaskOptions = {
      mask: '(99) 9999-9999',
      modify: (value) => (value.length >= 10 ? { mask: '(99) 99999-9999' } : undefined),
    };

    const ctrl = (view: ReturnType<typeof setup>, key: string, init: KeyboardEventInit = {}) =>
      act(() => {
        view.input.dispatchEvent(
          new KeyboardEvent('keydown', { key, ctrlKey: true, cancelable: true, ...init })
        );
      });

    it('reads formatted text already in the input when its literals fit a token', () => {
      const options: UseMaskOptions = { mask: '+1 (999) 999-9999' };
      const view = setup(options, (input) => {
        input.value = formatMask('2345678901', options);
      });
      expect(view.result.current.rawValue).toBe('2345678901');
      expect(view.input.value).toBe('+1 (234) 567-8901');
      view.cleanup();
    });

    it('reads text already in the input as user text and setValue as a raw value', () => {
      const mounted = setup({ mask: '+7 (999) 999-99-99' }, (input) => {
        input.value = '9123456789';
      });
      act(() => mounted.input.blur());
      expect(mounted.input.value).toBe('+7 (912) 345-67-89');
      act(() => mounted.result.current.setValue('1'));
      act(() => mounted.result.current.setValue('9123456789'));
      expect(mounted.input.value).toBe('+7 (912) 345-67-89');
      mounted.cleanup();

      const masked = setup({ mask: '+7 (999) 999-99-99' }, (input) => {
        input.value = '+7 (912) 345-67-89';
      });
      const display = masked.input.value;
      expect(masked.result.current.rawValue).toBe('9123456789');
      act(() => masked.result.current.setValue('9123456789'));
      expect(masked.input.value).toBe(display);
      masked.cleanup();
    });

    it('keeps all characters of a growing dynamic mask on mount, setValue and paste', () => {
      const mounted = setup(growingOptions, (input) => {
        input.value = '11987654321';
      });
      expect(mounted.result.current.rawValue).toBe('11987654321');
      expect(mounted.input.value).toBe('(11) 98765-4321');
      act(() => mounted.result.current.setValue('11987654321'));
      expect(mounted.input.value).toBe('(11) 98765-4321');
      mounted.cleanup();

      const pasted = setup(growingOptions);
      pasted.paste('11987654321');
      expect(pasted.input.value).toBe('(11) 98765-4321');
      expect(pasted.input.selectionStart).toBe(15);
      pasted.cleanup();
    });

    it('switches a dynamic mask when a pasted value replaces the whole field', () => {
      const view = setup(amexOptions);
      view.type('378282246310005');
      view.select(0, view.input.value.length);
      view.paste('4111111111111111');
      expect(view.result.current.rawValue).toBe('4111111111111111');
      expect(view.input.value).toBe('4111 1111 1111 1111');

      view.select(0, view.input.value.length);
      view.paste('3712 341234 56789');
      view.select(0, view.input.value.length);
      view.paste('4111 1111 1111 1111');
      expect(view.input.value).toBe('4111 1111 1111 1111');
      view.cleanup();
    });

    it('drops the empty optional part from every unfocused value', () => {
      const mounted = setup({ mask: '(999) 999-9999? x9999' }, (input) => {
        input.value = '5551234567';
      });
      act(() => mounted.input.blur());
      expect(mounted.input.value).toBe('(555) 123-4567');
      act(() => mounted.result.current.setValue('5559876543'));
      expect(mounted.input.value).toBe('(555) 987-6543');
      act(() => mounted.result.current.setValue('55598765431'));
      expect(mounted.input.value).toBe('(555) 987-6543 x1');
      mounted.cleanup();

      const input = document.createElement('input');
      input.value = '5551234567';
      const { result } = renderHook(() => useMask({ mask: '(999) 999-9999? x9999' }));
      act(() => result.current.ref(input));
      expect(input.value).toBe('(555) 123-4567');
      expect(result.current.value).toBe('(555) 123-4567');
    });

    it('creates one literal slot per character of a string entry in an array mask', () => {
      const view = setup({ mask: ['+7 ', /\d/, /\d/] });
      expect(view.input.value).toBe('+7 __');
      view.paste('12');
      expect(view.input.value).toBe('+7 12');
      expect(view.result.current.rawValue).toBe('12');
      expect(formatMask('12', { mask: ['+7 ', /\d/, /\d/] })).toBe('+7 12');
      view.cleanup();
    });

    it('ignores the state of global and sticky token regexes', () => {
      const view = setup({ mask: 'hhhhhh', tokens: { h: /[0-9a-f]/gi } });
      view.paste('abcdef');
      expect(view.result.current.rawValue).toBe('abcdef');
      view.type('');
      expect(formatMask('a1b2', { mask: ['x', /\d/y, /\d/y] })).toBe('x12');
      view.cleanup();
    });

    it('leaves composition input alone and normalizes it on compositionend', () => {
      const onChangeRaw = jest.fn();
      const view = setup({ mask: '(999) 999-9999', onChangeRaw });
      view.type('12');
      act(() => view.input.dispatchEvent(new CompositionEvent('compositionstart')));

      const keydown = new KeyboardEvent('keydown', {
        key: 'Backspace',
        cancelable: true,
        isComposing: true,
      });
      act(() => {
        view.input.dispatchEvent(keydown);
      });
      expect(keydown.defaultPrevented).toBe(false);

      act(() => {
        nativeValueSetter.call(view.input, '(123__) ___-____');
        view.input.setSelectionRange(4, 4);
        view.input.dispatchEvent(
          new InputEvent('input', { inputType: 'insertCompositionText', isComposing: true })
        );
      });
      expect(view.input.value).toBe('(123__) ___-____');
      expect(view.result.current.rawValue).toBe('12');

      act(() => view.input.dispatchEvent(new CompositionEvent('compositionend')));
      expect(view.input.value).toBe('(123) ___-____');
      expect(view.result.current.rawValue).toBe('123');
      expect(onChangeRaw).toHaveBeenLastCalledWith('123', '(123) ___-____');
      view.cleanup();
    });

    it('deletes the selection on Ctrl/Cmd+Backspace', () => {
      const view = setup({ mask: '99-99' });
      view.type('1234');
      view.select(3, 5);
      act(() => {
        view.input.dispatchEvent(
          new KeyboardEvent('keydown', { key: 'Backspace', metaKey: true, cancelable: true })
        );
      });
      expect(view.input.value).toBe('12-__');
      expect(view.input.selectionStart).toBe(3);

      view.select(3);
      ctrl(view, 'Backspace');
      expect(view.input.value).toBe('__-__');
      view.cleanup();
    });

    it('shows the mask by one rule with alwaysShowMask and showMaskOnFocus={false}', () => {
      const view = setup({ mask: '99/99', alwaysShowMask: true, showMaskOnFocus: false });
      expect(view.input.value).toBe('__/__');
      view.type('1');
      expect(view.input.value).toBe('1_/__');
      view.keys(['Backspace']);
      expect(view.input.value).toBe('__/__');
      act(() => view.input.blur());
      expect(view.input.value).toBe('__/__');
      view.cleanup();

      const hidden = setup({ mask: '99/99', showMaskOnFocus: false });
      expect(hidden.input.value).toBe('');
      hidden.type('1');
      expect(hidden.input.value).toBe('1_/__');
      hidden.keys(['Backspace']);
      expect(hidden.input.value).toBe('');
      hidden.cleanup();
    });

    it('calls onChangeRaw and pushes history only when the raw value changes', () => {
      const onChangeRaw = jest.fn();
      const view = setup({ mask: '999', onChangeRaw });
      act(() => view.input.blur());
      act(() => view.input.focus());
      view.keys(['Backspace', 'Delete', 'a']);
      expect(onChangeRaw).not.toHaveBeenCalled();

      view.type('123');
      onChangeRaw.mockClear();
      view.nativeInput('a', 1, 'insertText');
      expect(view.input.value).toBe('123');
      expect(view.result.current.rawValue).toBe('123');
      expect(onChangeRaw).not.toHaveBeenCalled();

      ctrl(view, 'z');
      expect(view.result.current.rawValue).toBe('12');
      view.cleanup();
    });

    it('keeps characters that cannot shift into a freed slot in place', () => {
      const view = setup({ mask: 'AAA-9999' });
      view.type('XYZ1234');
      expect(view.input.value).toBe('XYZ-1234');

      view.select(3);
      view.keys(['Backspace']);
      expect(view.input.value).toBe('XY_-1234');
      expect(view.result.current.rawValue).toBe('XY1234');
      expect(view.result.current.isComplete).toBe(false);
      expect(view.input.selectionStart).toBe(2);

      view.type('W');
      expect(view.input.value).toBe('XYW-1234');
      expect(view.result.current.isComplete).toBe(true);

      view.select(4);
      view.keys(['Backspace']);
      expect(view.input.value).toBe('XY_-1234');
      view.type('Z');

      view.select(1);
      view.keys(['Delete']);
      expect(view.input.value).toBe('XZ_-1234');
      expect(view.input.selectionStart).toBe(1);

      view.select(0, 1);
      view.keys(['Backspace']);
      expect(view.input.value).toBe('Z__-1234');

      view.nativeInput('Z_-1234', 1, 'deleteByCut');
      expect(view.input.value).toBe('Z__-1234');

      view.select(0, 2);
      expect(view.beforeInput('deleteContentBackward')).toBe(true);
      expect(view.input.value).toBe('___-1234');
      expect(view.result.current.rawValue).toBe('1234');

      act(() => view.input.blur());
      expect(view.input.value).toBe('___-1234');
      view.cleanup();
    });

    it('shifts characters that fit and keeps the rest when deleting in a mixed mask', () => {
      const view = setup({ mask: 'A9A9' });
      view.type('A1B2');
      view.select(2);
      view.keys(['Backspace']);
      expect(view.input.value).toBe('A_B2');
      view.select(0);
      view.keys(['Delete']);
      expect(view.input.value).toBe('B2__');
      view.cleanup();
    });

    it('restores the caret from before an input-event edit on undo', () => {
      const view = setup({ mask: '(999) 999-9999' });
      view.type('55512');
      expect(view.input.value).toBe('(555) 12_-____');
      view.nativeInput('(555) 182_-____', 8);
      expect(view.result.current.rawValue).toBe('555182');
      ctrl(view, 'z');
      expect(view.result.current.rawValue).toBe('55512');
      expect(view.input.selectionStart).toBe(7);
      view.cleanup();
    });

    it('does not take over non-cancelable beforeinput events', () => {
      const view = setup({ mask: '999-999' });
      view.type('1234');
      view.select(5);
      act(() => {
        view.input.dispatchEvent(
          new InputEvent('beforeinput', { inputType: 'deleteContentBackward', cancelable: false })
        );
      });
      expect(view.result.current.rawValue).toBe('1234');
      view.nativeInput('123-_', 4, 'deleteContentBackward');
      expect(view.result.current.rawValue).toBe('123');
      view.cleanup();
    });

    it('deletes the last character on Backspace with the caret in the placeholder area', () => {
      const view = setup({ mask: '(999) 999-9999' });
      view.type('1234');
      view.select(14);
      view.keys(['Backspace']);
      expect(view.input.value).toBe('(123) ___-____');
      view.cleanup();
    });
  });

  describe('rendered input', () => {
    it('does not parse slot placeholders back into the value when the ref is reattached', async () => {
      render(<InlineOptionsInput />);
      const input = screen.getByLabelText('date');

      await userEvent.click(input);
      expect(input).toHaveValue('__.08.2026');

      await userEvent.keyboard('01');
      expect(input).toHaveValue('01.08.2026');
    });

    it('does not parse slot placeholders back into the value with memoized options', async () => {
      render(<MemoizedOptionsInput />);
      const input = screen.getByLabelText('date');

      await userEvent.click(input);
      expect(input).toHaveValue('__.08.2026');

      await userEvent.keyboard('0');
      expect(input).toHaveValue('0_.08.2026');

      await userEvent.keyboard('1');
      expect(input).toHaveValue('01.08.2026');
    });

    it('calls onComplete once and again after the value is cleared and refilled', async () => {
      const onComplete = jest.fn();
      render(<OnCompleteInput onComplete={onComplete} />);
      const input = screen.getByLabelText('code');

      await userEvent.click(input);
      await userEvent.keyboard('123');
      expect(onComplete).toHaveBeenCalledTimes(1);
      expect(onComplete).toHaveBeenLastCalledWith('123', '123');

      await userEvent.keyboard('4');
      expect(onComplete).toHaveBeenCalledTimes(1);

      await userEvent.keyboard('{Backspace}');
      expect(onComplete).toHaveBeenCalledTimes(1);

      await userEvent.keyboard('9');
      expect(onComplete).toHaveBeenCalledTimes(2);
      expect(onComplete).toHaveBeenLastCalledWith('129', '129');
    });

    it('keeps ref callback identity between renders and typing', async () => {
      const refs: unknown[] = [];
      render(<RefIdentityInput onRef={(ref) => refs.push(ref)} />);

      await userEvent.click(screen.getByLabelText('code'));
      await userEvent.keyboard('12');
      await userEvent.click(screen.getByRole('button', { name: 'rerender' }));

      expect(refs.length).toBeGreaterThan(1);
      expect(new Set(refs).size).toBe(1);
    });
  });

  describe('input element lifecycle and native events', () => {
    it('keeps the value when the input is unmounted and rendered again', async () => {
      const onChangeRaw = jest.fn();
      render(<ConditionalInput onChangeRaw={onChangeRaw} />);

      await userEvent.click(screen.getByLabelText('date'));
      await userEvent.keyboard('0102');
      expect(onChangeRaw).toHaveBeenCalledTimes(4);

      await userEvent.click(screen.getByRole('button', { name: 'toggle' }));
      expect(screen.queryByLabelText('date')).toBeNull();

      await userEvent.click(screen.getByRole('button', { name: 'toggle' }));
      expect(screen.getByTestId('raw')).toHaveTextContent('0102');
      expect(screen.getByLabelText('date')).toHaveValue('01/02/');
      expect(onChangeRaw).toHaveBeenCalledTimes(4);

      await userEvent.click(screen.getByLabelText('date'));
      await userEvent.keyboard('2');
      expect(screen.getByLabelText('date')).toHaveValue('01/02/2___');
      expect(screen.getByTestId('raw')).toHaveTextContent('01022');
    });

    it('takes the text of a new input element as a user edit and notifies', async () => {
      const onChangeRaw = jest.fn();
      const { rerender } = render(<ConditionalInput onChangeRaw={onChangeRaw} />);

      await userEvent.click(screen.getByLabelText('date'));
      await userEvent.keyboard('01');
      await userEvent.click(screen.getByRole('button', { name: 'toggle' }));
      rerender(<ConditionalInput onChangeRaw={onChangeRaw} defaultValue="03/04/2020" />);
      await userEvent.click(screen.getByRole('button', { name: 'toggle' }));

      expect(screen.getByLabelText('date')).toHaveValue('03/04/2020');
      expect(screen.getByTestId('raw')).toHaveTextContent('03042020');
      expect(onChangeRaw).toHaveBeenLastCalledWith('03042020', '03/04/2020');
    });

    it('does not rewrite the input when the ref is reattached during composition', () => {
      const view = setup({ mask: '(999) 999-9999' });
      view.type('12');
      act(() => view.input.dispatchEvent(new CompositionEvent('compositionstart')));
      act(() => {
        nativeValueSetter.call(view.input, '(123__) ___-____');
        view.input.dispatchEvent(
          new InputEvent('input', { inputType: 'insertCompositionText', isComposing: true })
        );
      });

      act(() => {
        view.result.current.ref(null);
        view.result.current.ref(view.input);
      });
      expect(view.input.value).toBe('(123__) ___-____');
      expect(view.result.current.rawValue).toBe('12');

      act(() => view.input.dispatchEvent(new CompositionEvent('compositionend')));
      expect(view.input.value).toBe('(123) ___-____');
      expect(view.result.current.rawValue).toBe('123');
      view.cleanup();
    });

    it('leaves arrow keys with modifiers to the browser', () => {
      const view = setup({ mask: '99/99/9999' });
      view.type('010220');
      for (const modifier of ['metaKey', 'altKey', 'ctrlKey']) {
        view.select(6);
        const event = new KeyboardEvent('keydown', {
          key: 'ArrowLeft',
          [modifier]: true,
          cancelable: true,
        });
        act(() => {
          view.input.dispatchEvent(event);
        });
        expect(event.defaultPrevented).toBe(false);
        expect(view.input.selectionStart).toBe(6);
      }
      view.cleanup();
    });

    it('collapses a selection on ArrowLeft and ArrowRight like a native input', () => {
      const view = setup({ mask: '99/99/9999' });
      view.type('010220');
      for (const key of ['ArrowLeft', 'ArrowRight']) {
        view.select(3, 6);
        const event = new KeyboardEvent('keydown', { key, cancelable: true });
        act(() => {
          view.input.dispatchEvent(event);
        });
        expect(event.defaultPrevented).toBe(false);
        expect(view.input.selectionStart).toBe(3);
        expect(view.input.selectionEnd).toBe(6);
      }
      view.cleanup();
    });

    it('formats values written by a change event and does not process them twice', () => {
      const onChangeRaw = jest.fn();
      const view = setup({ mask: '99/99/9999', onChangeRaw });

      act(() => {
        nativeValueSetter.call(view.input, '01022020');
        view.input.dispatchEvent(new Event('change', { bubbles: true }));
      });
      expect(view.input.value).toBe('01/02/2020');
      expect(view.result.current.rawValue).toBe('01022020');
      expect(onChangeRaw).toHaveBeenCalledTimes(1);

      view.nativeInput('01/02/2021', 10);
      act(() => {
        view.input.dispatchEvent(new Event('change', { bubbles: true }));
      });
      expect(view.result.current.rawValue).toBe('01022021');
      expect(onChangeRaw).toHaveBeenCalledTimes(2);
      view.cleanup();
    });
  });
});
