import type {
  GroupCssVariables,
  GroupFactory,
  GroupProps,
  GroupStylesCtx,
  GroupStylesNames,
} from './Group';

export { Group } from './Group';

export type { GroupCssVariables, GroupFactory, GroupProps, GroupStylesCtx, GroupStylesNames };

export namespace Group {
  export type Props = GroupProps;
  export type StylesNames = GroupStylesNames;
  export type CssVariables = GroupCssVariables;
  export type StylesCtx = GroupStylesCtx;
  export type Factory = GroupFactory;
}
