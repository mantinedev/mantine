import {
  factory,
  Factory,
  MantineColor,
  StylesApiProps,
  useProps,
  useResolvedStylesApi,
} from '../../core';
import classes from './Progress.module.css';
import { ProgressLabel } from './ProgressLabel/ProgressLabel';
import {
  __ProgressRootProps,
  ProgressRoot,
  ProgressRootCssVariables,
  ProgressRootStylesNames,
} from './ProgressRoot/ProgressRoot';
import { ProgressSection } from './ProgressSection/ProgressSection';

export type ProgressStylesNames = ProgressRootStylesNames;

export interface ProgressProps extends __ProgressRootProps, StylesApiProps<ProgressFactory> {
  /** Value of the progress */
  value: number;

  /** Key of `theme.colors` or any valid CSS value @default theme.primaryColor */
  color?: MantineColor;

  /** If set, the section has stripes @default false */
  striped?: boolean;

  /** If set, the sections stripes are animated, `striped` prop is ignored @default false */
  animated?: boolean;
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
    'aria-label': label,
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
        value={value}
        color={color}
        striped={striped}
        animated={animated}
        aria-label={label}
      />
    </ProgressRoot>
  );
});

Progress.classes = classes;
Progress.displayName = '@mantine/core/Progress';
Progress.Section = ProgressSection;
Progress.Root = ProgressRoot;
Progress.Label = ProgressLabel;
