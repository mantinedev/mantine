import type { ImageCssVariables, ImageFactory, ImageProps, ImageStylesNames } from './Image';

export { Image } from './Image';

export type { ImageProps, ImageStylesNames, ImageCssVariables, ImageFactory };

export namespace Image {
  export type Props = ImageProps;
  export type StylesNames = ImageStylesNames;
  export type CssVariables = ImageCssVariables;
  export type Factory = ImageFactory;
}
