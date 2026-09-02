import { useEffect, useRef } from 'react';
import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { EditableProvider } from './Editable.context';
import { EditableArea } from './EditableArea';
import { EditableCancelTrigger } from './EditableCancelTrigger';
import { EditableControl } from './EditableControl';
import { EditableEditTrigger } from './EditableEditTrigger';
import { EditableInput } from './EditableInput';
import { EditablePreview } from './EditablePreview';
import { EditableSubmitTrigger } from './EditableSubmitTrigger';
import { EditableTextarea } from './EditableTextarea';
import {
  EditableActivationMode,
  EditableSubmitMode,
  useEditable,
  UseEditableReturnValue,
} from './use-editable';
import classes from './Editable.module.css';

export type EditableStylesNames =
  | 'root'
  | 'area'
  | 'preview'
  | 'input'
  | 'control'
  | 'editTrigger'
  | 'submitTrigger'
  | 'cancelTrigger';

export interface EditableProps
  extends BoxProps, StylesApiProps<EditableFactory>, ElementProps<'div', 'onChange'> {
  /** Controller returned by the `useEditable` hook. When provided, the editing state is controlled externally and the option props below are ignored */
  controller?: UseEditableReturnValue;

  /** Controlled value */
  value?: string;

  /** Uncontrolled value initial state */
  defaultValue?: string;

  /** Called on every value change (on each keystroke) */
  onChange?: (value: string) => void;

  /** Called when the edit is confirmed */
  onValueCommit?: (value: string) => void;

  /** Called when the edit is cancelled */
  onValueRevert?: (value: string) => void;

  /** Controlled editing state */
  editing?: boolean;

  /** Uncontrolled editing state initial value, `false` by default */
  defaultEditing?: boolean;

  /** Called when the editing state changes */
  onEditingChange?: (editing: boolean) => void;

  /** How the preview enters edit mode, `'focus'` by default */
  activationMode?: EditableActivationMode;

  /** What confirms the edit, `'both'` by default */
  submitMode?: EditableSubmitMode;

  /** If set, the input contents are selected when entering edit mode, `true` by default */
  selectOnFocus?: boolean;

  /** If set, a `textarea` is used instead of an `input`, `false` by default */
  multiline?: boolean;

  /** If set, the `textarea` grows to fit its content, `false` by default. Only used when `multiline` is set */
  autosize?: boolean;

  /** Minimum `textarea` rows, only used with `autosize` */
  minRows?: number;

  /** Maximum `textarea` rows to grow to, only used with `autosize` */
  maxRows?: number;

  /** Placeholder text displayed when the value is empty. Can be a string or an object with `edit` and `preview` keys */
  placeholder?: string | { edit?: string; preview?: string };

  /** If set, entering edit mode is disabled, `false` by default */
  disabled?: boolean;

  /** If set, the value cannot be changed, `false` by default */
  readOnly?: boolean;

  /** Adds `required` attribute to the input */
  required?: boolean;

  /** Maximum length of the value */
  maxLength?: number;

  /** `name` attribute of the input, used for form submission */
  name?: string;

  /** Element focused after the edit is confirmed with the keyboard. Defaults to the preview element */
  finalFocusRef?: React.RefObject<HTMLElement | null>;

  /** Custom layout built with `Editable.Preview`, `Editable.Input` and other compound components */
  children?: React.ReactNode;
}

export type EditableFactory = Factory<{
  props: EditableProps;
  ref: HTMLDivElement;
  stylesNames: EditableStylesNames;
  staticComponents: {
    Area: typeof EditableArea;
    Preview: typeof EditablePreview;
    Input: typeof EditableInput;
    Textarea: typeof EditableTextarea;
    Control: typeof EditableControl;
    EditTrigger: typeof EditableEditTrigger;
    SubmitTrigger: typeof EditableSubmitTrigger;
    CancelTrigger: typeof EditableCancelTrigger;
  };
}>;

const defaultProps = {
  activationMode: 'focus',
  submitMode: 'both',
  selectOnFocus: true,
} satisfies Partial<EditableProps>;

export const Editable = factory<EditableFactory>((_props) => {
  const props = useProps('Editable', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    attributes,
    ref,
    controller,
    value,
    defaultValue,
    onChange,
    onValueCommit,
    onValueRevert,
    editing,
    defaultEditing,
    onEditingChange,
    activationMode,
    submitMode,
    selectOnFocus,
    multiline,
    autosize,
    minRows,
    maxRows,
    placeholder,
    disabled,
    readOnly,
    required,
    maxLength,
    name,
    finalFocusRef,
    children,
    ...others
  } = props;

  const selfController = useEditable(
    controller
      ? undefined
      : {
          value,
          defaultValue,
          onChange,
          onValueCommit,
          onValueRevert,
          editing,
          defaultEditing,
          onEditingChange,
          activationMode,
          submitMode,
          selectOnFocus,
          disabled,
          readOnly,
        }
  );

  const editable = controller ?? selfController;

  const getStyles = useStyles<EditableFactory>({
    name: 'Editable',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const returningFocusRef = useRef(false);
  const exitViaBlurRef = useRef(false);
  const isFirstRenderRef = useRef(true);

  const normalizedPlaceholder =
    typeof placeholder === 'string'
      ? { edit: placeholder, preview: placeholder }
      : (placeholder ?? {});

  useEffect(() => {
    if (editable.editing) {
      const input = inputRef.current;
      if (input) {
        input.focus();
        if (editable.selectOnFocus) {
          input.select();
        }
      }
    } else if (!isFirstRenderRef.current) {
      if (exitViaBlurRef.current) {
        exitViaBlurRef.current = false;
      } else {
        const target = finalFocusRef?.current ?? previewRef.current;
        if (target) {
          if (target === previewRef.current) {
            returningFocusRef.current = true;
          }
          target.focus();
        }
      }
    }

    isFirstRenderRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editable.editing]);

  return (
    <EditableProvider
      value={{
        getStyles,
        controller: editable,
        inputRef,
        previewRef,
        returningFocusRef,
        exitViaBlurRef,
        multiline: !!multiline,
        autosize: !!autosize,
        minRows,
        maxRows,
        placeholder: normalizedPlaceholder,
        required,
        maxLength,
        name,
      }}
    >
      <Box ref={ref} {...getStyles('root')} {...others}>
        {name && !editable.editing ? (
          <input
            type="hidden"
            name={name}
            value={editable.value}
            disabled={editable.disabled}
            readOnly
          />
        ) : null}
        {children ?? (
          <>
            {multiline ? <EditableTextarea /> : <EditableInput />}
            <EditablePreview />
          </>
        )}
      </Box>
    </EditableProvider>
  );
});

Editable.classes = classes;
Editable.displayName = '@mantine/core/Editable';
Editable.Area = EditableArea;
Editable.Preview = EditablePreview;
Editable.Input = EditableInput;
Editable.Textarea = EditableTextarea;
Editable.Control = EditableControl;
Editable.EditTrigger = EditableEditTrigger;
Editable.SubmitTrigger = EditableSubmitTrigger;
Editable.CancelTrigger = EditableCancelTrigger;
