import { createSafeContext, GetStylesApi } from '../../core';
import type { ImageCropperCropShape } from './compute-crop-area';
import type { ImageCropperFactory } from './ImageCropper';
import type { UseImageCropperReturnValue } from './use-image-cropper';

export interface ImageCropperContextValue {
  getStyles: GetStylesApi<ImageCropperFactory>;
  controller: UseImageCropperReturnValue;
  src: string | undefined;
  crossOrigin: React.ImgHTMLAttributes<HTMLImageElement>['crossOrigin'];
  cropShape: ImageCropperCropShape;
  withGrid: boolean;
  disabled: boolean;
}

export const [ImageCropperProvider, useImageCropperContext] =
  createSafeContext<ImageCropperContextValue>('ImageCropper component was not found in the tree');
