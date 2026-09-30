import {
  StatBase,
  varsResolver,
  StatCssVariables,
  StatFactory,
  StatProps,
  StatStylesNames,
} from './StatBase';
import { StatCountdown, StatCountdownFactory, StatCountdownProps } from './StatCountdown';
import { StatDiff, StatDiffFactory, StatDiffProps, StatDiffStylesNames } from './StatDiff';
import { StatIcon, StatIconFactory, StatIconProps, StatIconStylesNames } from './StatIcon';
import { StatLabel, StatLabelFactory, StatLabelProps, StatLabelStylesNames } from './StatLabel';
import { StatValue, StatValueFactory, StatValueProps, StatValueStylesNames } from './StatValue';
import classes from './Stat.module.css';

export type { StatProps, StatStylesNames, StatCssVariables, StatFactory } from './StatBase';

export const Stat = StatBase;

Stat.displayName = '@mantine/core/Stat';
Stat.classes = classes;
Stat.varsResolver = varsResolver;
Stat.Label = StatLabel;
Stat.Value = StatValue;
Stat.Diff = StatDiff;
Stat.Icon = StatIcon;
Stat.Countdown = StatCountdown;

export namespace Stat {
  export type Props = StatProps;
  export type StylesNames = StatStylesNames;
  export type CssVariables = StatCssVariables;
  export type Factory = StatFactory;

  export namespace Label {
    export type Props = StatLabelProps;
    export type StylesNames = StatLabelStylesNames;
    export type Factory = StatLabelFactory;
  }

  export namespace Value {
    export type Props = StatValueProps;
    export type StylesNames = StatValueStylesNames;
    export type Factory = StatValueFactory;
  }

  export namespace Diff {
    export type Props = StatDiffProps;
    export type StylesNames = StatDiffStylesNames;
    export type Factory = StatDiffFactory;
  }

  export namespace Icon {
    export type Props = StatIconProps;
    export type StylesNames = StatIconStylesNames;
    export type Factory = StatIconFactory;
  }

  export namespace Countdown {
    export type Props = StatCountdownProps;
    export type Factory = StatCountdownFactory;
  }
}
