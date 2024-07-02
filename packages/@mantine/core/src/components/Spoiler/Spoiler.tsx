import { useElementSize, useId, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  rem,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { Anchor } from '../Anchor';
import classes from './Spoiler.module.css';

export type SpoilerStylesNames = 'root' | 'control' | 'content';
export type SpoilerCssVariables = {
  root: '--spoiler-transition-duration';
};

export interface SpoilerProps
  extends BoxProps,
    StylesApiProps<SpoilerFactory>,
    ElementProps<'div'> {
  /** Maximum height of the visible content, when this point is reached spoiler appears, `100` by default */
  maxHeight?: number;

  /** Label for close spoiler action */
  hideLabel: React.ReactNode;

  /** Label for open spoiler action */
  showLabel: React.ReactNode;

  /** Get ref of spoiler toggle button */
  controlRef?: React.ForwardedRef<HTMLButtonElement>;

  /** Initial spoiler state, true to wrap content in spoiler, false to show content without spoiler, opened state is updated on mount */
  initialState?: boolean;

  /** Controlled expanded state value */
  expanded?: boolean;

  /** Called when expanded state changes (when spoiler visibility is toggled by the user) */
  onExpandedChange?: (expanded: boolean) => void;

  /** Spoiler reveal transition duration in ms, set 0 or null to turn off animation, `200` by default */
  transitionDuration?: number;
}

export type SpoilerFactory = Factory<{
  props: SpoilerProps;
  ref: HTMLDivElement;
  stylesNames: SpoilerStylesNames;
  vars: SpoilerCssVariables;
}>;

const defaultProps: Partial<SpoilerProps> = {
  maxHeight: 100,
  initialState: false,
};

const varsResolver = createVarsResolver<SpoilerFactory>((_, { transitionDuration }) => ({
  root: {
    '--spoiler-transition-duration':
      transitionDuration !== undefined ? `${transitionDuration}ms` : undefined,
  },
}));

export const Spoiler = factory<SpoilerFactory>((_props, ref) => {
  const props = useProps('Spoiler', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    initialState,
    maxHeight,
    hideLabel,
    showLabel,
    children,
    controlRef,
    transitionDuration,
    id,
    expanded,
    onExpandedChange,
    ...others
  } = props;

  const getStyles = useStyles<SpoilerFactory>({
    name: 'Spoiler',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  const _id = useId(id);
  const regionId = `${_id}-region`;
  const [show, setShowState] = useUncontrolled({
    value: expanded,
    defaultValue: initialState,
    finalValue: false,
    onChange: onExpandedChange,
  });
  const { ref: contentRef, height } = useElementSize();
  const spoilerMoreContent = show ? hideLabel : showLabel;
  const spoiler = spoilerMoreContent !== null && maxHeight! < height;

  return (
    <Box
      {...getStyles('root')}
      id={_id}
      ref={ref}
      data-has-spoiler={spoiler || undefined}
      {...others}
    >
      {spoiler && (
        <Anchor
          component="button"
          type="button"
          ref={controlRef}
          onClick={() => setShowState(!show)}
          aria-expanded={show}
          aria-controls={regionId}
          {...getStyles('control')}
        >
          {spoilerMoreContent}
        </Anchor>
      )}
      <div
        {...getStyles('content', {
          style: { maxHeight: !show ? rem(maxHeight) : height ? rem(height) : undefined },
        })}
        data-reduce-motion
        role="region"
        id={regionId}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </Box>
  );
});

Spoiler.classes = classes;
Spoiler.displayName = '@mantine/core/Spoiler';
