import {
  Box,
  BoxProps,
  ElementProps,
  factory,
  Factory,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { ImageCropperCropData } from './compute-crop-area';
import { ImageCropperFlip } from './get-cropped-image';
import { ImageCropperProvider } from './ImageCropper.context';
import { ImageCropperControls } from './ImageCropperControls';
import { ImageCropperImage } from './ImageCropperImage';
import { ImageCropperViewport } from './ImageCropperViewport';
import {
  ImageCropperCropShape,
  ResolvedImageCropperFlip,
  useImageCropper,
  UseImageCropperReturnValue,
} from './use-image-cropper';
import classes from './ImageCropper.module.css';

export type ImageCropperStylesNames =
  | 'root'
  | 'viewport'
  | 'image'
  | 'overlay'
  | 'grid'
  | 'gridLine'
  | 'controls'
  | 'zoomSlider';

export interface ImageCropperProps
  extends BoxProps, StylesApiProps<ImageCropperFactory>, ElementProps<'div', 'onChange'> {
  /** Controller returned by the `useImageCropper` hook. When provided, the option props below are ignored */
  controller?: UseImageCropperReturnValue;

  /** Image source, can be an object URL, data URL or remote URL @category appearance */
  src?: string;

  /** `crossorigin` attribute of the underlying image, set to `'anonymous'` to allow exporting CORS-enabled remote images */
  crossOrigin?: React.ImgHTMLAttributes<HTMLImageElement>['crossOrigin'];

  /** Crop aspect ratio, e.g. `1` or `16 / 9`. Defaults to the viewport aspect ratio when not set @category appearance */
  aspectRatio?: number;

  /** Crop shape, `'rectangle'` by default. `'circle'` enforces a square aspect ratio @category appearance */
  cropShape?: ImageCropperCropShape;

  /** Controlled zoom value @category state */
  zoom?: number;

  /** Uncontrolled zoom initial value, `1` by default @category state */
  defaultZoom?: number;

  /** Minimum zoom value, `1` by default @category behavior */
  minZoom?: number;

  /** Maximum zoom value, `5` by default @category behavior */
  maxZoom?: number;

  /** Zoom step used by wheel and default controls, `0.1` by default @category behavior */
  zoomStep?: number;

  /** Controlled rotation value in degrees @category state */
  rotation?: number;

  /** Uncontrolled rotation initial value in degrees, `0` by default @category state */
  defaultRotation?: number;

  /** Controlled flip value @category state */
  flip?: ImageCropperFlip;

  /** Uncontrolled flip initial value @category state */
  defaultFlip?: ImageCropperFlip;

  /** Called when zoom changes @category state */
  onZoomChange?: (zoom: number) => void;

  /** Called when rotation changes @category state */
  onRotationChange?: (rotation: number) => void;

  /** Called when flip changes @category state */
  onFlipChange?: (flip: ResolvedImageCropperFlip) => void;

  /** Called with the resolved crop rectangle when the crop changes @category state */
  onCropChange?: (data: ImageCropperCropData) => void;

  /** If set, a rule-of-thirds grid is displayed over the crop area, `false` by default @category appearance */
  withGrid?: boolean;

  /** If set, default zoom, rotation and flip controls are rendered under the viewport, `false` by default @category appearance */
  withControls?: boolean;

  /** If set, the cropper is static and non-interactive, `false` by default @category behavior */
  disabled?: boolean;

  /** Custom layout built with `ImageCropper.Viewport`, `ImageCropper.Image` and `ImageCropper.Controls` @category appearance */
  children?: React.ReactNode;
}

export type ImageCropperFactory = Factory<{
  props: ImageCropperProps;
  ref: HTMLDivElement;
  stylesNames: ImageCropperStylesNames;
  staticComponents: {
    Viewport: typeof ImageCropperViewport;
    Image: typeof ImageCropperImage;
    Controls: typeof ImageCropperControls;
  };
}>;

const defaultProps = {
  cropShape: 'rectangle',
  minZoom: 1,
  maxZoom: 5,
  zoomStep: 0.1,
  withGrid: false,
  withControls: false,
  disabled: false,
} satisfies Partial<ImageCropperProps>;

export const ImageCropper = factory<ImageCropperFactory>((_props) => {
  const props = useProps('ImageCropper', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    controller,
    src,
    crossOrigin,
    aspectRatio,
    cropShape,
    zoom,
    defaultZoom,
    minZoom,
    maxZoom,
    zoomStep,
    rotation,
    defaultRotation,
    flip,
    defaultFlip,
    onZoomChange,
    onRotationChange,
    onFlipChange,
    onCropChange,
    withGrid,
    withControls,
    disabled,
    children,
    attributes,
    ref,
    ...others
  } = props;

  const selfController = useImageCropper(
    controller
      ? undefined
      : {
          aspectRatio,
          cropShape,
          zoom,
          defaultZoom,
          minZoom,
          maxZoom,
          zoomStep,
          rotation,
          defaultRotation,
          flip,
          defaultFlip,
          onZoomChange,
          onRotationChange,
          onFlipChange,
          onCropChange,
        }
  );

  const cropper = controller ?? selfController;

  const getStyles = useStyles<ImageCropperFactory>({
    name: 'ImageCropper',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
  });

  return (
    <ImageCropperProvider
      value={{
        getStyles,
        controller: cropper,
        src,
        crossOrigin,
        cropShape: cropper.cropShape,
        withGrid: !!withGrid,
        disabled: !!disabled,
      }}
    >
      <Box ref={ref} {...getStyles('root')} mod={{ disabled }} {...others}>
        {children ?? (
          <>
            <ImageCropperViewport>
              <ImageCropperImage />
            </ImageCropperViewport>
            {withControls && <ImageCropperControls />}
          </>
        )}
      </Box>
    </ImageCropperProvider>
  );
});

ImageCropper.classes = classes;
ImageCropper.displayName = '@mantine/core/ImageCropper';
ImageCropper.Viewport = ImageCropperViewport;
ImageCropper.Image = ImageCropperImage;
ImageCropper.Controls = ImageCropperControls;

export namespace ImageCropper {
  export type Props = ImageCropperProps;
  export type StylesNames = ImageCropperStylesNames;
  export type Factory = ImageCropperFactory;
}
