import React from 'react';
import cx from 'clsx';
import Editor, { Quill } from 'react-quill';
import { useMantineTheme, DefaultProps } from '@mantine/core';
import { Toolbar } from '../Toolbar/Toolbar';
import { ALL_CONTROLS } from './default-control';
import useStyles from './RichTextEditor.styles';
import { replaceIcons } from './replace-icons';
import { DEFAULT_LABELS, RichTextEditorLabels } from './default-labels';
import { createImageBlot, ImageUploader } from '../../modules/image-uploader';
// import './lib.css';

export type { RichTextEditorLabels };

const icons = Quill.import('ui/icons');
const InlineBlot = Quill.import('blots/block');
const ImageBlot = createImageBlot(InlineBlot);

Quill.register({ 'formats/imageBlot': ImageBlot });
Quill.register('modules/imageUploader', ImageUploader);

replaceIcons(icons);

export interface RichTextEditorProps extends DefaultProps {
  value: string;
  onChange(value: string): void;
  labels?: RichTextEditorLabels;
}

export function RichTextEditor({
  value,
  onChange,
  labels = DEFAULT_LABELS,
  themeOverride,
  className,
  ...others
}: RichTextEditorProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, null, 'rte');

  return (
    <div className={cx(classes.root, className)} {...others}>
      <Toolbar controls={ALL_CONTROLS} themeOverride={themeOverride} labels={labels} />
      <Editor
        theme="snow"
        modules={{
          toolbar: { container: '#toolbar' },
          imageUploader: {
            upload: (file) =>
              new Promise((resolve, reject) => {
                const formData = new FormData();
                formData.append('image', file);

                fetch('https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22', {
                  method: 'POST',
                  body: formData,
                })
                  .then((response) => response.json())
                  .then((result) => {
                    console.log(result);
                    resolve(result.data.url);
                  })
                  .catch((error) => {
                    reject('Upload failed');
                    console.error('Error:', error);
                  });
              }),
          },
        }}
        // value={value}
        // onChange={onChange}
      />
    </div>
  );
}
