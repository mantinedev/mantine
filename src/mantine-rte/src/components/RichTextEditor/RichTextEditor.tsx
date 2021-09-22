import React, { useMemo, useRef, useEffect } from 'react';
import Editor, { Quill } from 'react-quill';
import { DefaultProps, mergeStyles, ClassNames } from '@mantine/core';
import { useId } from '@mantine/hooks';
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

  /** Top toolbar position in any valid css value */
  stickyOffset?: number | string;
}

export function RichTextEditor({
  value,
  onChange,
  onImageUpload = defaultImageUpload,
  sticky = true,
  stickyOffset = 0,
  labels = DEFAULT_LABELS,
  controls = DEFAULT_CONTROLS,
  id,
  style,
  className,
  classNames,
  styles,
  ...others
}: RichTextEditorProps) {
  const uuid = useId(id);
  const editorRef = useRef<any>();
  const { classes, cx } = useStyles(
    { saveLabel: labels.save, editLabel: labels.edit, removeLabel: labels.remove },
    classNames,
    'rte'
  );
  const _styles = mergeStyles(classes, styles);

  const modules = useMemo(
    () => ({
      toolbar: { container: `#${uuid}` },
      imageUploader: {
        upload: (file: File) => onImageUpload(file),
      },
    }),
    []
  );

  useEffect(() => {
    attachShortcuts(editorRef?.current?.editor?.keyboard);
  }, []);

  return (
    <div className={cx(classes.root, className)} style={{ ...style, ..._styles.root }} {...others}>
      <Toolbar
        controls={controls}
        labels={labels}
        sticky={sticky}
        stickyOffset={stickyOffset}
        classNames={classNames}
        styles={styles}
        id={uuid}
      />

      <Editor theme="snow" modules={modules} value={value} onChange={onChange} ref={editorRef} />
    </div>
  );
}

RichTextEditor.displayName = '@mantine/rte/RichTextEditor';
