import type {
  ContainerCssVariables,
  ContainerFactory,
  ContainerProps,
  ContainerStylesNames,
} from './Container';

export { Container } from './Container';

export type { ContainerProps, ContainerStylesNames, ContainerCssVariables, ContainerFactory };

export namespace Container {
  export type Props = ContainerProps;
  export type StylesNames = ContainerStylesNames;
  export type CssVariables = ContainerCssVariables;
  export type Factory = ContainerFactory;
}
