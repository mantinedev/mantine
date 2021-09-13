import React from 'react';
import type { RichTextEditorProps } from '..';

const handleImageUpload = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const formData = new FormData();
    formData.append('image', file);

    fetch('https://api.imgbb.com/1/upload?key=68d008d7f73d320b03714d1375d36b19', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => resolve(result.data.url))
      .catch(() => reject(new Error('Upload failed')));
  });

export function SSRWrapper(props: RichTextEditorProps) {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line import/extensions, global-require
    const { RichTextEditor } = require('../components/RichTextEditor/RichTextEditor');
    return <RichTextEditor {...props} onImageUpload={handleImageUpload} />;
  }

  return null;
}
