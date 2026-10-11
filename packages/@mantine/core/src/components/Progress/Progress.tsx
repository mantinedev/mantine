import {
  factory,
  Factory,
  MantineColor,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '../../core';
import { ProgressContextValue } from './Progress.context';
import { ProgressLabel, ProgressLabelProps } from './ProgressLabel/ProgressLabel';
import {
  __ProgressRootProps,
  ProgressRoot,
  ProgressRootCssVariables,
  ProgressRootStylesNames,
  ProgressRootProps,
} from './ProgressRoot/ProgressRoot';
import { ProgressSection, ProgressSectionProps } from './ProgressSection/ProgressSection';
import classes from './Progress.module.css';
export type ProgressStylesNames = ProgressRootStylesNames;

export interface ProgressProps extends __ProgressRootProps, StylesApiProps<ProgressFactory> {
  /** Value of the progress in 0–100 range, ignored when `indeterminate` is set */
  value?: number;

  /** Key of `theme.colors` or any valid CSS value @default theme.primaryColor */
  color?: MantineColor;

  /** If set, the section has stripes @default false */
  striped?: boolean;

  /** If set, the sections stripes are animated (automatically enables striped) @default false */
  animated?: boolean;

  /** If set, displays an indeterminate loading animation for progress of unknown duration, `value` is ignored @default false */
  indeterminate?: boolean;
}

export type ProgressFactory = Factory<{
  props: ProgressProps;
  ref: HTMLDivElement;
  stylesNames: ProgressStylesNames;
  vars: ProgressRootCssVariables;
  staticComponents: {
    Section: typeof ProgressSection;
    Root: typeof ProgressRoot;
    Label: typeof ProgressLabel;
  };
}>;

export const Progress = factory<ProgressFactory>((_props) => {
  const props = useProps('Progress', null, _props);
  const {
    value,
    classNames,
    styles,
    vars,
    color,
    striped,
    animated,
    indeterminate,
    'aria-label': label,
    'aria-valuetext': valueText,
    ...others
  } = props;

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<ProgressFactory>({
    classNames,
    styles,
    props,
  });

  return (
    <ProgressRoot
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      vars={vars as any}
      {...others}
    >
      <ProgressSection
        value={value ?? 0}
        color={color}
        striped={striped}
        animated={animated}
        indeterminate={indeterminate}
        aria-label={label}
        aria-valuetext={valueText}
      />
    </ProgressRoot>
  );
});

Progress.classes = classes;
Progress.displayName = '@mantine/core/Progress';
Progress.Section = ProgressSection;
Progress.Root = ProgressRoot;
Progress.Label = ProgressLabel;

export namespace Progress {
  export type Props = ProgressProps;
  export type Factory = ProgressFactory;
  export type StylesNames = ProgressStylesNames;
  export type ContextValue = ProgressContextValue;

  export namespace Label {
    export type Props = ProgressLabelProps;
  }

  export namespace Root {
    export type Props = ProgressRootProps;
  }

  export namespace Section {
    export type Props = ProgressSectionProps;
  }
}
