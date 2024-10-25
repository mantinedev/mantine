import {
  Accept,
  DropEvent,
  FileError,
  FileRejection,
  FileWithPath,
  useDropzone,
} from 'react-dropzone-esm';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getRadius,
  LoaderProps,
  LoadingOverlay,
  MantineColor,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '@mantine/core';
import { assignRef } from '@mantine/hooks';
import { DropzoneProvider } from './Dropzone.context';
import type { DropzoneFullScreenType } from './DropzoneFullScreen';
import { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus';
import classes from './Dropzone.module.css';

export type DropzoneStylesNames = 'root' | 'inner';
export type DropzoneVariant = 'filled' | 'light';
export type DropzoneCssVariables = {
  root:
    | '--dropzone-radius'
    | '--dropzone-accept-color'
    | '--dropzone-accept-bg'
    | '--dropzone-reject-color'
    | '--dropzone-reject-bg';
};

export interface DropzoneProps
  extends BoxProps,
    StylesApiProps<DropzoneFactory>,
    ElementProps<'div', 'onDrop'> {
  /** Key of `theme.colors` or any valid CSS color to set colors of `Dropzone.Accept`, `theme.primaryColor` by default */
  acceptColor?: MantineColor;

  /** Key of `theme.colors` or any valid CSS color to set colors of `Dropzone.Reject`, `'red'` by default */
  rejectColor?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, numbers are converted to rem, `theme.defaultRadius` by default */
  radius?: MantineRadius;

  /** Determines whether files capturing should be disabled, `false` by default */
  disabled?: boolean;

  /** Called when any files are dropped to the dropzone */
  onDropAny?: (files: FileWithPath[], fileRejections: FileRejection[]) => void;

  /** Called when valid files are dropped to the dropzone */
  onDrop: (files: FileWithPath[]) => void;

  /** Called when dropped files do not meet file restrictions */
  onReject?: (fileRejections: FileRejection[]) => void;

  /** Determines whether a loading overlay should be displayed over the dropzone, `false` by default */
  loading?: boolean;

  /** Mime types of the files that dropzone can accepts. By default, dropzone accepts all file types. */
  accept?: Accept | string[];

  /** A ref function which when called opens the file system file picker */
  openRef?: React.ForwardedRef<() => void | undefined>;

  /** Determines whether multiple files can be dropped to the dropzone or selected from file system picker, `true` by default */
  multiple?: boolean;

  /** Maximum file size in bytes */
  maxSize?: number;

  /** Name of the form control. Submitted with the form as part of a name/value pair. */
  name?: string;

  /** Maximum number of files that can be picked at once */
  maxFiles?: number;

  /** Set to autofocus the root element */
  autoFocus?: boolean;

  /** If `false`, disables click to open the native file selection dialog */
  activateOnClick?: boolean;

  /** If `false`, disables drag 'n' drop */
  activateOnDrag?: boolean;

  /** If `false`, disables Space/Enter to open the native file selection dialog. Note that it also stops tracking the focus state. */
  activateOnKeyboard?: boolean;

  /** If `false`, stops drag event propagation to parents */
  dragEventsBubbling?: boolean;

  /** Called when the `dragenter` event occurs */
  onDragEnter?: (event: React.DragEvent<HTMLElement>) => void;

  /** Called when the `dragleave` event occurs */
  onDragLeave?: (event: React.DragEvent<HTMLElement>) => void;

  /** Called when the `dragover` event occurs */
  onDragOver?: (event: React.DragEvent<HTMLElement>) => void;

  /** Called when user closes the file selection dialog with no selection */
  onFileDialogCancel?: () => void;

  /** Called when user opens the file selection dialog */
  onFileDialogOpen?: () => void;

  /** If `false`, allow dropped items to take over the current browser window */
  preventDropOnDocument?: boolean;

  /** Set to true to use the File System Access API to open the file picker instead of using an <input type="file"> click event, defaults to true */
  useFsAccessApi?: boolean;

  /** Use this to provide a custom file aggregator */
  getFilesFromEvent?: (event: DropEvent) => Promise<Array<File | DataTransferItem>>;

  /** Custom validation function. It must return null if there's no errors. */
  validator?: <T extends File>(file: T) => FileError | FileError[] | null;

  /** Determines whether pointer events should be enabled on the inner element, `false` by default */
  enablePointerEvents?: boolean;

  /** Props passed down to the Loader component */
  loaderProps?: LoaderProps;

  /** Props passed down to the internal Input component */
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export type DropzoneFactory = Factory<{
  props: DropzoneProps;
  ref: HTMLDivElement;
  stylesNames: DropzoneStylesNames;
  vars: DropzoneCssVariables;
  staticComponents: {
    Accept: typeof DropzoneAccept;
    Idle: typeof DropzoneIdle;
    Reject: typeof DropzoneReject;
    FullScreen: DropzoneFullScreenType;
  };
}>;

const defaultProps: Partial<DropzoneProps> = {
  loading: false,
  multiple: true,
  maxSize: Infinity,
  autoFocus: false,
  activateOnClick: true,
  activateOnDrag: true,
  dragEventsBubbling: true,
  activateOnKeyboard: true,
  useFsAccessApi: true,
  variant: 'light',
  rejectColor: 'red',
};

const varsResolver = createVarsResolver<DropzoneFactory>(
  (theme, { radius, variant, acceptColor, rejectColor }) => {
    const acceptColors = theme.variantColorResolver({
      color: acceptColor || theme.primaryColor,
      theme,
      variant: variant!,
    });

    const rejectColors = theme.variantColorResolver({
      color: rejectColor || 'red',
      theme,
      variant: variant!,
    });

    return {
      root: {
        '--dropzone-radius': getRadius(radius),
        '--dropzone-accept-color': acceptColors.color,
        '--dropzone-accept-bg': acceptColors.background,
        '--dropzone-reject-color': rejectColors.color,
        '--dropzone-reject-bg': rejectColors.background,
      },
    };
  }
);

export const Dropzone = factory<DropzoneFactory>((_props, ref) => {
  const props = useProps('Dropzone', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    radius,
    disabled,
    loading,
    multiple,
    maxSize,
    accept,
    children,
    onDropAny,
    onDrop,
    onReject,
    openRef,
    name,
    maxFiles,
    autoFocus,
    activateOnClick,
    activateOnDrag,
    dragEventsBubbling,
    activateOnKeyboard,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi,
    getFilesFromEvent,
    validator,
    rejectColor,
    acceptColor,
    enablePointerEvents,
    loaderProps,
    inputProps,
    mod,
    ...others
  } = props;

  const getStyles = useStyles<DropzoneFactory>({
    name: 'Dropzone',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject, open } = useDropzone({
    onDrop: onDropAny,
    onDropAccepted: onDrop,
    onDropRejected: onReject,
    disabled: disabled || loading,
    accept: Array.isArray(accept) ? accept.reduce((r, key) => ({ ...r, [key]: [] }), {}) : accept,
    multiple,
    maxSize,
    maxFiles,
    autoFocus,
    noClick: !activateOnClick,
    noDrag: !activateOnDrag,
    noDragEventsBubbling: !dragEventsBubbling,
    noKeyboard: !activateOnKeyboard,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onFileDialogCancel,
    onFileDialogOpen,
    preventDropOnDocument,
    useFsAccessApi,
    validator,
    ...(getFilesFromEvent ? { getFilesFromEvent } : null),
  });

  assignRef(openRef, open);

  const isIdle = !isDragAccept && !isDragReject;

  return (
    <DropzoneProvider value={{ accept: isDragAccept, reject: isDragReject, idle: isIdle }}>
      <Box
        {...getRootProps()}
        {...getStyles('root', { focusable: true })}
        {...others}
        mod={[
          {
            accept: isDragAccept,
            reject: isDragReject,
            idle: isIdle,
            disabled,
            loading,
            'activate-on-click': activateOnClick,
          },
          mod,
        ]}
      >
        <LoadingOverlay
          visible={loading}
          overlayProps={{ radius }}
          unstyled={unstyled}
          loaderProps={loaderProps}
        />
        <input {...getInputProps(inputProps)} name={name} />
        <div
          {...getStyles('inner')}
          ref={ref}
          data-enable-pointer-events={enablePointerEvents || undefined}
        >
          {children}
        </div>
      </Box>
    </DropzoneProvider>
  );
});

Dropzone.classes = classes;
Dropzone.displayName = '@mantine/dropzone/Dropzone';
Dropzone.Accept = DropzoneAccept;
Dropzone.Idle = DropzoneIdle;
Dropzone.Reject = DropzoneReject;
