import type {
  BackgroundImageCssVariables,
  BackgroundImageFactory,
  BackgroundImageProps,
  BackgroundImageStylesNames,
} from './BackgroundImage';

export { BackgroundImage } from './BackgroundImage';

export type {
  BackgroundImageProps,
  BackgroundImageCssVariables,
  BackgroundImageFactory,
  BackgroundImageStylesNames,
};

export namespace BackgroundImage {
  export type Props = BackgroundImageProps;
  export type CssVariables = BackgroundImageCssVariables;
  export type Factory = BackgroundImageFactory;
  export type StylesNames = BackgroundImageStylesNames;
}
