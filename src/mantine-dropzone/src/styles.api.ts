import type { DropzoneStylesNames } from './Dropzone';
import type { FullScreenDropzoneStylesNames } from './FullScreenDropzone';

export const Dropzone: Record<DropzoneStylesNames, string> = {
  root: 'Root element',
  loading: 'Root element loading state modifier, controlled by loading prop',
  active:
    'Active state modifier, style is added to root element when valid files are dragged over dropzone',
  reject:
    'Active state modifier, style is added to root element when invalid files are dragged over dropzone',
};

export const FullScreenDropzone: Record<FullScreenDropzoneStylesNames, string> = {
  wrapper: 'Wraps dropzone, root element',
  dropzone: 'Dropzone itself',
  active:
    'Active state modifier, style is added to dropzone when valid files are dragged over browser window',
  reject:
    'Active state modifier, style is added to dropzone when invalid files are dragged over browser window',
};
