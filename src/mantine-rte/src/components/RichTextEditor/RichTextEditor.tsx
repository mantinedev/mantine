import React, { useMemo, useRef, useEffect, forwardRef } from 'react';
import Editor, { Quill } from 'react-quill';
import type { Delta, Sources } from 'quill';
import 'quill-mention';
import {
  DefaultProps,
  Selectors,
  Box,
  MantineNumberSize,
  useComponentDefaultProps,
} from '@mantine/core';
import { useId, mergeRefs } from '@mantine/hooks';
import { Toolbar, ToolbarStylesNames } from '../Toolbar/Toolbar';
import { DEFAULT_CONTROLS } from './default-control';
import useStyles from './RichTextEditor.styles';
import { DEFAULT_LABELS, RichTextEditorLabels } from './default-labels';
import { ToolbarControl } from '../Toolbar/controls';
import { createImageBlot, ImageUploader } from '../../modules/image-uploader';
import { replaceIcons } from '../../modules/icons';
import { attachShortcuts } from '../../modules/shortcuts';

export type RichTextEditorStylesNames = ToolbarStylesNames | Selectors<typeof useStyles>;

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
    Omit<React.ComponentPropsWithoutRef<'div'>, 'onChange' | 'defaultValue'> {
  /** HTML content, value not forced as quill works in uncontrolled mode */
  value?: string | Delta;

  /** Initial value of input */
  defaultValue?: string | Delta;

  /** Called each time value changes */
  onChange?(value: string, delta: Delta, sources: Sources, editor: Editor.UnprivilegedEditor): void;

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

  /** List of formats that should be supported by the editor */
  formats?: string[];
}

const defaultProps: Partial<RichTextEditorProps> = {
  onImageUpload: defaultImageUpload,
  sticky: true,
  stickyOffset: 0,
  labels: DEFAULT_LABELS,
  controls: DEFAULT_CONTROLS,
  readOnly: false,
};

export const RichTextEditor = forwardRef<Editor, RichTextEditorProps>(
  (props: RichTextEditorProps, ref) => {
    const {
      value,
      defaultValue,
      onChange,
      onImageUpload,
      sticky,
      stickyOffset,
      radius,
      labels,
      controls,
      id,
      className,
      classNames,
      styles,
      placeholder,
      mentions,
      readOnly,
      modules: externalModules,
      unstyled,
      formats,
      ...others
    } = useComponentDefaultProps('RichTextEditor', defaultProps, props);

    const uuid = useId(id);
    const editorRef = useRef<Editor>();
    const { classes, cx } = useStyles(
      {
        saveLabel: labels.save,
        editLabel: labels.edit,
        removeLabel: labels.remove,
        radius,
        readOnly,
      },
      { classNames, styles, unstyled, name: 'RichTextEditor' }
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
      [uuid, mentions, externalModules, onImageUpload]
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
          unstyled={unstyled}
        />

        <Editor
          theme="snow"
          modules={modules}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          ref={mergeRefs(editorRef, ref)}
          placeholder={placeholder}
          readOnly={readOnly}
          scrollingContainer="html"
          formats={formats}
        />
      </Box>
    );
  }
);

RichTextEditor.displayName = '@mantine/rte/RichTextEditor';
