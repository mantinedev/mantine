import { Dropzone as _Dropzone } from './Dropzone';
import { DropzoneFullScreen } from './DropzoneFullScreen';

_Dropzone.FullScreen = DropzoneFullScreen;
export const Dropzone = _Dropzone;

export { DropzoneFullScreen };
export { DropzoneAccept, DropzoneIdle, DropzoneReject } from './DropzoneStatus';
export * from './mime-types';

export type {
  DropzoneStylesNames,
  DropzoneProps,
  DropzoneCssVariables,
  DropzoneFactory,
  DropzoneVariant,
} from './Dropzone';
export type {
  DropzoneFullScreenProps,
  DropzoneFullScreenStylesNames,
  DropzoneFullScreenFactory,
} from './DropzoneFullScreen';
export type { DropzoneAcceptProps, DropzoneRejectProps, DropzoneIdleProps } from './DropzoneStatus';
export type { FileWithPath, FileRejection } from 'react-dropzone-esm';
