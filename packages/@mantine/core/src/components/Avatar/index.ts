import type {
  AvatarCssVariables,
  AvatarFactory,
  AvatarProps,
  AvatarStylesNames,
  AvatarVariant,
} from './Avatar';
import type {
  AvatarGroupContextValue,
  AvatarGroupCssVariables,
  AvatarGroupFactory,
  AvatarGroupProps,
  AvatarGroupStylesNames,
} from './AvatarGroup/AvatarGroup';

export { Avatar } from './Avatar';
export { AvatarGroup, AvatarGroupContext } from './AvatarGroup/AvatarGroup';

export type {
  AvatarProps,
  AvatarStylesNames,
  AvatarCssVariables,
  AvatarVariant,
  AvatarFactory,
  AvatarGroupProps,
  AvatarGroupStylesNames,
  AvatarGroupCssVariables,
  AvatarGroupFactory,
  AvatarGroupContextValue,
};

export namespace Avatar {
  export type Props = AvatarProps;
  export type StylesNames = AvatarStylesNames;
  export type CssVariables = AvatarCssVariables;
  export type Variant = AvatarVariant;
  export type Factory = AvatarFactory;

  export namespace Group {
    export type Props = AvatarGroupProps;
    export type StylesNames = AvatarGroupStylesNames;
    export type CssVariables = AvatarGroupCssVariables;
    export type Factory = AvatarGroupFactory;
    export type ContextValue = AvatarGroupContextValue;
  }
}
