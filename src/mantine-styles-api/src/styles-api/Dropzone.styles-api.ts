import type { DropzoneStylesNames, DropzoneFullScreenStylesName } from '@mantine/dropzone';

export const Dropzone: Record<DropzoneStylesNames, string> = {
  root: 'Root element',
  inner: 'Inner element containing dropzone children',
};

export const DropzoneFullScreen: Record<DropzoneFullScreenStylesName, string> = {
  ...Dropzone,
  wrapper: 'Wrapper around dropzone',
};
