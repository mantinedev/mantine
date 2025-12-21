import type { FlexFactory, FlexProps, FlexStylesNames } from './Flex';

export { FLEX_STYLE_PROPS_DATA } from './flex-props';
export { Flex } from './Flex';

export type { FlexProps, FlexStylesNames, FlexFactory };

export namespace Flex {
  export type Props = FlexProps;
  export type StylesNames = FlexStylesNames;
  export type Factory = FlexFactory;
}
