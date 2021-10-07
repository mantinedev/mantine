import type { DropzoneStylesNames } from './Dropzone';

export const Dropzone: Record<DropzoneStylesNames, string> = {
  root: 'Root element',
  loading: 'Root element loading state modifier, controlled by loading prop',
  active:
    'Active state modifier, style is added to root element when valid files are dragged over dropzone',
  reject:
    'Active state modifier, style is added to root element when invalid files are dragged over dropzone',
};
