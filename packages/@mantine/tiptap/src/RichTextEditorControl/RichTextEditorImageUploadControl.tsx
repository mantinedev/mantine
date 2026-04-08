import { useRef } from 'react';
import { BoxProps, CompoundStylesApiProps, factory, Factory, useProps } from '@mantine/core';
import { insertImageWithUpload } from '../extensions/UploadImage';
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
    const { classNames, className, style, styles, vars, icon, accept, ...others } = props;

    const ctx = useRichTextEditorContext();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
      fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0 || !ctx.editor || !ctx.onImageUpload) {
        return;
      }

      const { view } = ctx.editor;
      const { from } = view.state.selection;

      Array.from(files).forEach((file) => {
        if (file.type.startsWith('image/')) {
          insertImageWithUpload(view, file, from, {
            onImageUpload: ctx.onImageUpload,
            onImageUploadError: ctx.onImageUploadError,
          });
        }
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
          onClick={handleClick}
          className={className}
          style={style}
          classNames={classNames}
          styles={styles}
          variant={ctx.variant}
          {...others}
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
