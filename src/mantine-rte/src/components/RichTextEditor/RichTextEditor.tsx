import React, { useMemo } from 'react';
import cx from 'clsx';
import Editor, { Quill } from 'react-quill';
import { useMantineTheme, DefaultProps, mergeStyles } from '@mantine/core';
import { Toolbar, ToolbarStylesNames } from '../Toolbar/Toolbar';
import { DEFAULT_CONTROLS } from './default-control';
import useStyles from './RichTextEditor.styles';
import { DEFAULT_LABELS, RichTextEditorLabels } from './default-labels';
import { ToolbarControl } from '../Toolbar/controls';
import { createImageBlot, ImageUploader } from '../../modules/image-uploader';
import { replaceIcons } from '../../modules/icons';

export type RichTextEditorStylesNames = ToolbarStylesNames | keyof ReturnType<typeof useStyles>;

export type { RichTextEditorLabels };

export { DEFAULT_LABELS, DEFAULT_CONTROLS };

const InlineBlot = Quill.import('blots/block');
const ImageBlot = createImageBlot(InlineBlot);
Quill.register({ 'formats/imageBlot': ImageBlot });
Quill.register('modules/imageUploader', ImageUploader);

const icons = Quill.import('ui/icons');
replaceIcons(icons);

export interface RichTextEditorProps extends DefaultProps<RichTextEditorStylesNames> {
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

  /** Top toolbar position in any valid css value */
  stickyOffset?: number | string;
}

export function RichTextEditor({
  value,
  onChange,
  onImageUpload = () => Promise.resolve(null),
  sticky = true,
  stickyOffset = 0,
  labels = DEFAULT_LABELS,
  controls = DEFAULT_CONTROLS,
  themeOverride,
  style,
  className,
  classNames,
  styles,
  ...others
}: RichTextEditorProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles(
    { theme, saveLabel: labels.save, editLabel: labels.edit, removeLabel: labels.remove },
    classNames,
    'rte'
  );
  const _styles = mergeStyles(classes, styles);

  const modules = useMemo(
    () => ({
      toolbar: { container: '#toolbar' },
      imageUploader: {
        upload: (file: File) => onImageUpload(file),
      },
    }),
    []
  );

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      <Toolbar
        controls={controls}
        themeOverride={themeOverride}
        labels={labels}
        sticky={sticky}
        stickyOffset={stickyOffset}
        classNames={classNames}
        styles={styles}
      />

      <Editor theme="snow" modules={modules} value={value} onChange={onChange} />
    </div>
  );
}
