import { DropzoneFullScreen } from './DropzoneFullScreen';
import { Dropzone as _Dropzone } from './Dropzone';

_Dropzone.FullScreen = DropzoneFullScreen;
export const Dropzone = _Dropzone;

export type { DropzoneStylesNames, DropzoneProps } from './Dropzone';
export type { DropzoneFullScreenProps, DropzoneFullScreenStylesName } from './DropzoneFullScreen';
export type { DropzoneStylesParams } from './Dropzone.styles';
export type { DropzoneAcceptProps, DropzoneRejectProps, DropzoneIdleProps } from './DropzoneStatus';
export * from './mime-types';
export type { FileWithPath, FileRejection } from 'react-dropzone';
