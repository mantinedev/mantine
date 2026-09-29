import { useMergedRef } from '@mantine/hooks';
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
import { hasFocusableAncestor, useEditableFocus } from './use-editable-focus';
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

export interface EditablePlaceholder {
  /** Placeholder of the input displayed in edit mode */
  edit?: string;

  /** Text displayed in the preview when the value is empty */
  preview?: string;
}

export interface EditableProps
  extends BoxProps, StylesApiProps<EditableFactory>, ElementProps<'div', 'onChange'> {
  /** Controller returned by the `useEditable` hook. When provided, the editing state is controlled externally and these props are ignored: `value`, `defaultValue`, `onChange`, `onValueCommit`, `onValueRevert`, `editing`, `defaultEditing`, `onEditingChange`, `activationMode`, `submitMode`, `selectOnFocus`, `disabled` and `readOnly` – pass them to `useEditable` instead */
  controller?: UseEditableReturnValue;

  /** Controlled value */
  value?: string;

  /** Uncontrolled value initial state */
  defaultValue?: string;

  /** Called on every value change (on each keystroke) */
  onChange?: (value: string) => void;

  /** Called when the edit is confirmed, on every submit even when the value did not change */
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
  placeholder?: string | EditablePlaceholder;

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

  /** Element focused when edit mode is exited with the keyboard or a trigger click. Defaults to the preview, or to the first focusable element inside `Editable` when the preview is not focusable */
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
    onBlur,
    onMouseDown,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
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

  const focus = useEditableFocus({
    editing: editable.editing,
    selectOnFocus: editable.selectOnFocus,
    finalFocusRef,
  });
  const rootRef = useMergedRef(focus.rootRef, ref);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const relatedTarget = event.relatedTarget as Node | null;
    const leavesRoot = !relatedTarget || !event.currentTarget.contains(relatedTarget);

    if (
      editable.editing &&
      leavesRoot &&
      (editable.submitMode === 'both' || editable.submitMode === 'blur')
    ) {
      focus.markBlurExit();
      editable.submit();
    }

    onBlur?.(event);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (editable.editing && !hasFocusableAncestor(event.target as Element)) {
      event.preventDefault();
    }

    onMouseDown?.(event);
  };

  const normalizedPlaceholder =
    typeof placeholder === 'string'
      ? { edit: placeholder, preview: placeholder }
      : (placeholder ?? {});

  return (
    <EditableProvider
      value={{
        getStyles,
        controller: editable,
        focus,
        ariaProps: {
          'aria-label': ariaLabel,
          'aria-labelledby': ariaLabelledBy,
          'aria-describedby': ariaDescribedBy,
        },
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
      <Box
        ref={rootRef}
        {...getStyles('root')}
        {...others}
        onBlur={handleBlur}
        onMouseDown={handleMouseDown}
      >
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
