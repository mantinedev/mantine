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
  extends BoxProps, StylesApiProps<SpoilerFactory>, ElementProps<'div'> {
  /** Maximum height of visible content in px. When content exceeds this height, the toggle control appears @default 100 */
  maxHeight?: number;

  /** Content displayed in the toggle button when content is collapsed (to expand) */
  showLabel: React.ReactNode;

  /** Content displayed in the toggle button when content is expanded (to collapse) */
  hideLabel: React.ReactNode;

  /** Ref of the toggle button element */
  controlRef?: React.Ref<HTMLButtonElement>;

  /** Initial expanded state in uncontrolled mode. If `true`, content starts expanded. If `false`, content starts collapsed @default false */
  defaultExpanded?: boolean;

  /** Controlled expanded state value */
  expanded?: boolean;

  /** Called when expanded state changes (when spoiler visibility is toggled by the user) */
  onExpandedChange?: (expanded: boolean) => void;

  /** Spoiler reveal transition duration in ms. Set to 0 to disable animation @default 200 */
  transitionDuration?: number;

  /** Accessible label for the toggle button when collapsed. If not set, `showLabel` is used */
  showAriaLabel?: string;

  /** Accessible label for the toggle button when expanded. If not set, `hideLabel` is used */
  hideAriaLabel?: string;
}

export type SpoilerFactory = Factory<{
  props: SpoilerProps;
  ref: HTMLDivElement;
  stylesNames: SpoilerStylesNames;
  vars: SpoilerCssVariables;
}>;

const defaultProps = {
  maxHeight: 100,
  defaultExpanded: false,
} satisfies Partial<SpoilerProps>;

const varsResolver = createVarsResolver<SpoilerFactory>((_, { transitionDuration }) => ({
  root: {
    '--spoiler-transition-duration':
      transitionDuration !== undefined ? `${transitionDuration}ms` : undefined,
  },
}));

export const Spoiler = factory<SpoilerFactory>((_props) => {
  const props = useProps('Spoiler', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    defaultExpanded,
    maxHeight,
    hideLabel,
    showLabel,
    children,
    controlRef,
    transitionDuration,
    id,
    expanded,
    onExpandedChange,
    showAriaLabel,
    hideAriaLabel,
    attributes,
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
    attributes,
    vars,
    varsResolver,
  });

  const _id = useId(id);
  const regionId = `${_id}-region`;
  const [show, setShowState] = useUncontrolled({
    value: expanded,
    defaultValue: defaultExpanded,
    finalValue: false,
    onChange: onExpandedChange,
  });
  const { ref: contentRef, height } = useElementSize();
  const spoilerMoreContent = show ? hideLabel : showLabel;
  const spoiler = spoilerMoreContent !== null && maxHeight! < height;
  const ariaLabel = show ? hideAriaLabel : showAriaLabel;

  return (
    <Box {...getStyles('root')} id={_id} data-has-spoiler={spoiler || undefined} {...others}>
      {spoiler && (
        <Anchor
          component="button"
          type="button"
          ref={controlRef}
          onClick={() => setShowState(!show)}
          aria-expanded={show}
          aria-controls={regionId}
          aria-label={ariaLabel}
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
Spoiler.varsResolver = varsResolver;
Spoiler.displayName = '@mantine/core/Spoiler';
