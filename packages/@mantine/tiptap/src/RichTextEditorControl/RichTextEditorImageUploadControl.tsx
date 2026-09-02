import { useRef } from 'react';
import { BoxProps, CompoundStylesApiProps, factory, Factory, useProps } from '@mantine/core';
import {
  getImageFiles,
  getUploadImageExtensionOptions,
  insertImageFilesWithUpload,
} from '../extensions/UploadImage';
import { IconPhoto } from '../icons/Icons';
import { useRichTextEditorContext } from '../RichTextEditor.context';
import { RichTextEditorControlBase, RichTextEditorControlBaseProps } from './RichTextEditorControl';
import classes from '../RichTextEditor.module.css';

export interface RichTextEditorImageUploadControlProps
  extends
    BoxProps,
    Omit<RichTextEditorControlBaseProps, 'classNames' | 'styles' | 'vars'>,
    CompoundStylesApiProps<RichTextEditorImageUploadControlFactory> {
  /** Accepted file types, @default 'image/*' */
  accept?: string;
}

export type RichTextEditorImageUploadControlFactory = Factory<{
  props: RichTextEditorImageUploadControlProps;
  ref: HTMLButtonElement;
  stylesNames: 'control';
  compound: true;
}>;

const PhotoIcon: RichTextEditorControlBaseProps['icon'] = (props) => <IconPhoto {...props} />;

export const RichTextEditorImageUploadControl = factory<RichTextEditorImageUploadControlFactory>(
  (_props) => {
    const props = useProps('RichTextEditorImageUploadControl', null, _props);
    const { classNames, className, style, styles, vars, icon, accept, onClick, ...others } = props;

    const ctx = useRichTextEditorContext();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = getImageFiles(event.target.files);
      if (files.length === 0 || !ctx.editor) {
        return;
      }

      const extensionOptions = getUploadImageExtensionOptions(ctx.editor);
      const onImageUpload = ctx.onImageUpload ?? extensionOptions.onImageUpload;
      if (!onImageUpload) {
        return;
      }

      const { view } = ctx.editor;
      insertImageFilesWithUpload(view, files, view.state.selection.from, {
        onImageUpload,
        onImageUploadError: ctx.onImageUploadError ?? extensionOptions.onImageUploadError,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

    return (
      <>
        <RichTextEditorControlBase
          icon={icon || PhotoIcon}
          aria-label={ctx.labels.imageUploadControlLabel}
          title={ctx.labels.imageUploadControlLabel}
          className={className}
          style={style}
          classNames={classNames}
          styles={styles}
          variant={ctx.variant}
          {...others}
          onClick={(event) => {
            onClick?.(event);

            if (event.defaultPrevented) {
              return;
            }

            fileInputRef.current?.click();
          }}
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={accept || 'image/*'}
          style={{ display: 'none' }}
        />
      </>
    );
  }
);

RichTextEditorImageUploadControl.classes = classes;
RichTextEditorImageUploadControl.displayName = '@mantine/tiptap/RichTextEditorImageUploadControl';
