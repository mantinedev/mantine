import { assignRef, useId } from '@mantine/hooks';
import {
  BoxProps,
  createVarsResolver,
  DataAttributes,
  ElementProps,
  Factory,
  factory,
  getSize,
  MantineRadius,
  MantineSize,
  MantineSpacing,
  StylesApiProps,
  useController,
  useProps,
  useResolvedStylesApi,
  useStyles,
} from '../../core';
import { Group } from '../Group';
import { Input, InputProps } from '../Input';
import { InputBase } from '../InputBase';
import { createPinArray } from './create-pin-array/create-pin-array';
import { usePinInput, PinInputController } from './use-pin-input/use-pin-input';
import classes from './PinInput.module.css';

const regex = {
  number: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/i,
};

export type PinInputStylesNames = 'root' | 'pinInput' | 'input';

export type PinInputCssVariables = {
  root: '--pin-input-size';
};

export interface PinInputProps
  extends BoxProps, StylesApiProps<PinInputFactory>, ElementProps<'div', 'onChange' | 'ref'> {
  ref?: React.Ref<HTMLInputElement>;

  /** Hidden input `name` attribute */
  name?: string;

  /** Hidden input `form` attribute */
  form?: string;

  /** Key of `theme.spacing` or any valid CSS value to set `gap` between inputs, numbers are converted to rem @default 'sm' @category appearance */
  gap?: MantineSpacing;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** Controls inputs `width` and `height` @default 'sm' @category appearance */
  size?: MantineSize;

  /** If set, the first input is focused when component is mounted @default false @category behavior */
  autoFocus?: boolean;

  /** Controller returned by the `usePinInput` hook. When provided, the state is owned by the controller and `value`, `defaultValue`, `onChange`, `onComplete` and `length` props are ignored @category state */
  controller?: PinInputController;

  /** Controlled component value @category state */
  value?: string;

  /** Uncontrolled component default value @category state */
  defaultValue?: string;

  /** Called when value changes, an empty input is represented by a space, trailing empty inputs are omitted @category state */
  onChange?: (value: string) => void;

  /** Called when all inputs have value @category state */
  onComplete?: (value: string) => void;

  /** Inputs placeholder @default '○' @category appearance */
  placeholder?: string;

  /** Determines whether focus should be moved automatically to the next input once filled @default true @category behavior */
  manageFocus?: boolean;

  /** Determines whether `autocomplete="one-time-code"` attribute should be set on all inputs @default true @category behavior */
  oneTimeCode?: boolean;

  /** Base id used to generate unique ids for inputs */
  id?: string;

  /** Adds disabled attribute to all inputs @category behavior */
  disabled?: boolean;

  /** Sets `aria-invalid` attribute and applies error styles to all inputs @category state */
  error?: boolean;

  /** Applies success styles to all inputs @category state */
  success?: boolean;

  /** Determines which values can be entered @default 'alphanumeric' @category behavior */
  type?: 'alphanumeric' | 'number' | RegExp;

  /** Changes input type to `"password"` @default false @category appearance */
  mask?: boolean;

  /** Number of inputs, ignored when `controller` is set @default 4 @category appearance */
  length?: number;

  /** If set, the user cannot edit the value @category behavior */
  readOnly?: boolean;

  /** Inputs `type` attribute, inferred from the `type` prop if not specified */
  inputType?: React.HTMLInputTypeAttribute;

  /** `inputmode` attribute, inferred from the `type` prop if not specified */
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
    | undefined;

  /** Base of the `aria-label` applied to every input, the input position is appended to it, for example `Code 1 of 4`. Falls back to the root `aria-label`. @default 'PinInput' @category accessibility */
  ariaLabel?: string;

  /** Props passed down to the hidden input */
  hiddenInputProps?: React.ComponentProps<'input'>;

  /** Assigns ref of the root element */
  rootRef?: React.Ref<HTMLDivElement>;

  /** Props added to the input element depending on its index */
  getInputProps?: (index: number) => InputProps & ElementProps<'input', 'size'> & DataAttributes;
}

export type PinInputFactory = Factory<{
  props: PinInputProps;
  ref: HTMLDivElement;
  stylesNames: PinInputStylesNames;
  vars: PinInputCssVariables;
}>;

const defaultProps = {
  gap: 'sm',
  length: 4,
  manageFocus: true,
  oneTimeCode: true,
  placeholder: '○',
  type: 'alphanumeric',
  size: 'sm',
} satisfies Partial<PinInputProps>;

const varsResolver = createVarsResolver<PinInputFactory>((_, { size }) => ({
  root: {
    '--pin-input-size': getSize(size ?? 'sm', 'pin-input-size'),
  },
}));

export const PinInput = factory<PinInputFactory>((props) => {
  const {
    name,
    form,
    className,
    value,
    defaultValue,
    variant,
    gap,
    style,
    size,
    classNames,
    styles,
    unstyled,
    length,
    controller,
    onChange,
    onComplete,
    manageFocus,
    autoFocus,
    error,
    success,
    radius,
    disabled,
    oneTimeCode,
    placeholder,
    type,
    mask,
    readOnly,
    inputType,
    inputMode,
    ariaLabel,
    vars,
    id,
    hiddenInputProps,
    rootRef,
    getInputProps,
    attributes,
    ref,
    ...others
  } = useProps(['Input', 'PinInput'], defaultProps, props);

  const uuid = useId(id);

  const getStyles = useStyles<PinInputFactory>({
    name: 'PinInput',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<PinInputFactory>({
    classNames,
    styles,
    props,
  });

  const pinInput = useController(usePinInput, controller, {
    length,
    value,
    defaultValue,
    onChange,
    onComplete,
  });

  const currentLength = pinInput.length;
  const inputLabel = ariaLabel ?? others['aria-label'] ?? 'PinInput';
  const currentValue = pinInput.fieldValues;

  const validate = (code: string) => {
    const re = type instanceof RegExp ? type : type && type in regex ? regex[type] : null;
    return re?.test(code);
  };

  const focusInputField = (dir: 'next' | 'prev', index: number) => {
    if (manageFocus) {
      pinInput.focus(dir === 'next' ? index + 1 : index - 1);
    }
  };

  const setFieldValue = (val: string, index: number) => {
    pinInput.setFieldValue(index, val);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = event.target.value;

    if (inputValue.length > 1) {
      const isPaste = inputValue.length > 2;
      if (isPaste) {
        const isValid = validate(inputValue);
        if (isValid) {
          pinInput.setValue(inputValue);
          const filledCount = Math.min(inputValue.length, currentLength);
          if (filledCount < currentLength) {
            focusInputField('next', filledCount - 1);
          }
        }
        return;
      }

      const newChar = inputValue.split('')[inputValue.length - 1];
      if (validate(newChar)) {
        setFieldValue(newChar, index);
        focusInputField('next', index);
      }
      return;
    }

    if (inputValue.length === 1) {
      if (validate(inputValue)) {
        setFieldValue(inputValue, index);
        focusInputField('next', index);
      } else {
        setFieldValue('', index);
      }
    } else if (inputValue.length === 0) {
      setFieldValue('', index);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const { ctrlKey, metaKey, key, shiftKey, target } = event;
    const inputValue = (target as HTMLInputElement).value;

    if (inputMode === 'numeric') {
      const isModifierShortcut = ctrlKey || metaKey;
      const isBlockedKey =
        key.length === 1 && key !== ' ' && !/[0-9]/.test(key) && !isModifierShortcut;

      if (isBlockedKey) {
        event.preventDefault();
        return;
      }
    }

    switch (key) {
      case 'ArrowLeft':
        event.preventDefault();
        focusInputField('prev', index);
        break;

      case 'ArrowRight':
        event.preventDefault();
        focusInputField('next', index);
        break;

      case 'Tab':
        if (shiftKey) {
          if (index > 0 && manageFocus) {
            event.preventDefault();
            focusInputField('prev', index);
          }
        }
        break;

      case ' ':
        event.preventDefault();
        focusInputField('next', index);
        break;

      case 'Delete':
        event.preventDefault();
        if (!readOnly) {
          setFieldValue('', index);
        }
        break;

      case 'Backspace':
        if (readOnly) {
          event.preventDefault();
          focusInputField('prev', index);
        } else if (inputValue === '') {
          event.preventDefault();
          focusInputField('prev', index);
        } else {
          setFieldValue('', index);
          if (index < currentLength - 1) {
            event.preventDefault();
            focusInputField('prev', index);
          }
        }
        break;

      default:
        if (inputValue.length > 0 && key === currentValue[index]) {
          event.preventDefault();
          focusInputField('next', index);
        }
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>, index: number) => {
    event.target.select();
    pinInput.setFocusedIndex(index);
  };

  const handleBlur = () => {
    pinInput.setFocusedIndex(-1);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (readOnly) {
      return;
    }

    const pasteData = event.clipboardData.getData('text/plain').replace(/[\n\r\s]+/g, '');
    const isValid = validate(pasteData.trim());

    if (isValid) {
      const pasteArray = createPinArray(currentLength, pasteData);
      pinInput.setValue(pasteData);
      const filledCount = pasteArray.filter((val) => val !== '').length;
      pinInput.focus(Math.min(filledCount, currentLength - 1));
    }
  };

  return (
    <>
      <Group
        {...others}
        {...getStyles('root')}
        ref={rootRef}
        role="group"
        id={uuid}
        gap={gap}
        unstyled={unstyled}
        wrap="nowrap"
        variant={variant}
        __size={size}
        dir="ltr"
      >
        {currentValue.map((char: string, index: number) => (
          <Input
            component="input"
            {...getStyles('pinInput', {
              style: {
                '--input-padding': '0',
                '--input-text-align': 'center',
              } as React.CSSProperties,
            })}
            classNames={resolvedClassNames}
            styles={resolvedStyles}
            size={size}
            __staticSelector="PinInput"
            id={`${uuid}-${index + 1}`}
            key={`${uuid}-${index}`}
            inputMode={inputMode || (type === 'number' ? 'numeric' : 'text')}
            onChange={(event) => handleChange(event, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onFocus={(event) => handleFocus(event, index)}
            onBlur={handleBlur}
            onPaste={handlePaste}
            type={inputType || (mask ? 'password' : type === 'number' ? 'tel' : 'text')}
            radius={radius}
            error={error}
            success={success}
            variant={variant}
            disabled={disabled}
            ref={(node) => {
              if (node) {
                index === 0 && assignRef(ref, node);
              }

              pinInput.registerInput(index, node);
            }}
            autoComplete={oneTimeCode ? 'one-time-code' : 'off'}
            placeholder={pinInput.focusedIndex === index ? '' : placeholder}
            value={char}
            autoFocus={autoFocus && index === 0}
            unstyled={unstyled}
            aria-label={`${inputLabel} ${index + 1} of ${currentLength}`}
            readOnly={readOnly}
            {...getInputProps?.(index)}
          />
        ))}
      </Group>

      <input type="hidden" name={name} form={form} value={pinInput.value} {...hiddenInputProps} />
    </>
  );
});

PinInput.classes = { ...classes, ...InputBase.classes };
PinInput.varsResolver = varsResolver;
PinInput.displayName = '@mantine/core/PinInput';

export namespace PinInput {
  export type Props = PinInputProps;
  export type StylesNames = PinInputStylesNames;
  export type Factory = PinInputFactory;
}
