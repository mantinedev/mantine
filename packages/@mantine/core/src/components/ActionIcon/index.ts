import type {
  ActionIconCssVariables,
  ActionIconFactory,
  ActionIconProps,
  ActionIconStylesNames,
  ActionIconVariant,
} from './ActionIcon';
import type {
  ActionIconGroupCssVariables,
  ActionIconGroupFactory,
  ActionIconGroupProps,
  ActionIconGroupStylesNames,
} from './ActionIconGroup/ActionIconGroup';
import type {
  ActionIconGroupSectionCssVariables,
  ActionIconGroupSectionFactory,
  ActionIconGroupSectionProps,
  ActionIconGroupSectionStylesNames,
} from './ActionIconGroupSection/ActionIconGroupSection';

export { ActionIcon } from './ActionIcon';
export { ActionIconGroup } from './ActionIconGroup/ActionIconGroup';
export { ActionIconGroupSection } from './ActionIconGroupSection/ActionIconGroupSection';

export type {
  ActionIconProps,
  ActionIconStylesNames,
  ActionIconFactory,
  ActionIconCssVariables,
  ActionIconVariant,
  ActionIconGroupProps,
  ActionIconGroupCssVariables,
  ActionIconGroupStylesNames,
  ActionIconGroupFactory,
  ActionIconGroupSectionProps,
  ActionIconGroupSectionCssVariables,
  ActionIconGroupSectionStylesNames,
  ActionIconGroupSectionFactory,
};

export namespace ActionIcon {
  export type Props = ActionIconProps;
  export type StylesNames = ActionIconStylesNames;
  export type CssVariables = ActionIconCssVariables;
  export type Factory = ActionIconFactory;

  export namespace Group {
    export type Props = ActionIconGroupProps;
    export type StylesNames = ActionIconGroupStylesNames;
    export type CssVariables = ActionIconGroupCssVariables;
    export type Factory = ActionIconGroupFactory;
  }

  export namespace GroupSection {
    export type Props = ActionIconGroupSectionProps;
    export type StylesNames = ActionIconGroupSectionStylesNames;
    export type CssVariables = ActionIconGroupSectionCssVariables;
    export type Factory = ActionIconGroupSectionFactory;
  }
}
