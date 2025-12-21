import type { LoaderCssVariables, LoaderFactory, LoaderProps, LoaderStylesNames } from './Loader';
import type {
  MantineLoader,
  MantineLoaderComponent,
  MantineLoadersRecord,
  SvgLoaderProps,
} from './Loader.types';

export { Loader, defaultLoaders } from './Loader';

export type {
  LoaderProps,
  LoaderStylesNames,
  LoaderCssVariables,
  LoaderFactory,
  MantineLoader,
  SvgLoaderProps,
  MantineLoadersRecord,
  MantineLoaderComponent,
};

export namespace Loader {
  export type Props = LoaderProps;
  export type StylesNames = LoaderStylesNames;
  export type CssVariables = LoaderCssVariables;
  export type Factory = LoaderFactory;
}
