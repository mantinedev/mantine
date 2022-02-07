import React, { useMemo, useRef, useEffect, forwardRef } from 'react';
import Editor, { Quill } from 'react-quill';
import 'quill-mention';
import { DefaultProps, ClassNames, Box, MantineNumberSize } from '@mantine/core';
import { useUuid, mergeRefs } from '@mantine/hooks';
import { Toolbar, ToolbarStylesNames } from '../Toolbar/Toolbar';
import { DEFAULT_CONTROLS } from './default-control';
import useStyles from './RichTextEditor.styles';
import { DEFAULT_LABELS, RichTextEditorLabels } from './default-labels';
import { ToolbarControl } from '../Toolbar/controls';
import { createImageBlot, ImageUploader } from '../../modules/image-uploader';
import { replaceIcons } from '../../modules/icons';
import { attachShortcuts } from '../../modules/shortcuts';

export type RichTextEditorStylesNames = ToolbarStylesNames | ClassNames<typeof useStyles>;

export type { RichTextEditorLabels };

export { DEFAULT_LABELS, DEFAULT_CONTROLS };

const InlineBlot = Quill.import('blots/block');
const ImageBlot = createImageBlot(InlineBlot);
Quill.register({ 'formats/imageBlot': ImageBlot });
Quill.register('modules/imageUploader', ImageUploader);

const icons = Quill.import('ui/icons');
replaceIcons(icons);

function defaultImageUpload(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(file);
  });
}

export interface RichTextEditorProps
  extends DefaultProps<RichTextEditorStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange'> {
  /** HTML content, value not forced as quill works in uncontrolled mode */
  value: string;

  /** Called each time value changes */
  onChange(value: string): void;

  /** Called when image image is inserted in editor */
  onImageUpload?(image: File): Promise<string>;

  /** Labels used in toolbar button titles and assets insertion popovers */
  labels?: RichTextEditorLabels;

  /** Toolbar controls divided into groups */
  controls?: ToolbarControl[][];

  /** Make toolbar sticky */
  sticky?: boolean;

  /** Quill mentions plugin setting */
  mentions?: Record<string, any>;

  /** Top toolbar position in any valid css value */
  stickyOffset?: number | string;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: MantineNumberSize;

  /** Make quill editor read only */
  readOnly?: boolean;

  /** Extra modules for react-quill */
  modules?: Record<string, any>;
}

export const RichTextEditor = forwardRef<Editor, RichTextEditorProps>(
  (
    {
      value,
      onChange,
      onImageUpload = defaultImageUpload,
      sticky = true,
      stickyOffset = 0,
      radius = 'sm',
      labels = DEFAULT_LABELS,
      controls = DEFAULT_CONTROLS,
      id,
      className,
      classNames,
      styles,
      placeholder,
      mentions,
      readOnly = false,
      modules: externalModules,
      ...others
    }: RichTextEditorProps,
    ref
  ) => {
    const uuid = useUuid(id);
    const editorRef = useRef<Editor>();
    const { classes, cx } = useStyles(
      {
        saveLabel: labels.save,
        editLabel: labels.edit,
        removeLabel: labels.remove,
        radius,
        readOnly,
      },
      { classNames, styles, name: 'RichTextEditor' }
    );

    const modules = useMemo(
      () => ({
        ...externalModules,
        ...(uuid ? { toolbar: { container: `#${uuid}` } } : undefined),
        mention: mentions,
        imageUploader: {
          upload: (file: File) => onImageUpload(file),
        },
      }),
      [uuid, mentions, externalModules]
    );

    useEffect(() => {
      if (editorRef.current) {
        attachShortcuts(editorRef?.current?.editor?.keyboard);
      }
    }, []);

    return (
      <Box className={cx(classes.root, className)} {...others}>
        <Toolbar
          controls={controls}
          labels={labels}
          sticky={sticky}
          stickyOffset={stickyOffset}
          classNames={classNames}
          styles={styles}
          id={uuid}
          className={classes.toolbar}
        />

        <Editor
          theme="snow"
          modules={modules}
          value={value}
          onChange={onChange}
          ref={mergeRefs(editorRef, ref)}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      </Box>
    );
  }
);

RichTextEditor.displayName = '@mantine/rte/RichTextEditor';
