import { Children, cloneElement, useImperativeHandle } from 'react';
import {
  SplitterPaneSize,
  SplitterStep,
  useMergedRef,
  useSplitter,
  UseSplitterRedistributeFn,
  UseSplitterReturnValue,
} from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getThemeColor,
  MantineColor,
  rem,
  StylesApiProps,
  useDirection,
  useProps,
  useStyles,
} from '../../core';
import { GripHorizontalIcon, GripVerticalIcon } from './GripIcon';
import { SplitterProvider } from './Splitter.context';
import {
  SplitterPane,
  SplitterPaneProps,
  SplitterPaneStylesNames,
} from './SplitterPane/SplitterPane';
import classes from './Splitter.module.css';

const PX_RE = /^(-?[\d.]+)px$/;
const REM_RE = /^(-?[\d.]+)rem$/;

function isFixedPaneSize(size: SplitterPaneSize): boolean {
  return typeof size === 'string' && (PX_RE.test(size) || REM_RE.test(size));
}

function getPaneFlexStyle(size: SplitterPaneSize, pixelMode: boolean): React.CSSProperties {
  const magnitude = typeof size === 'number' ? size : parseFloat(size);

  if (!pixelMode) {
    return { flexBasis: `${magnitude}%` };
  }

  if (isFixedPaneSize(size)) {
    return { flexGrow: 0, flexShrink: 1, flexBasis: size as string };
  }

  return { flexGrow: magnitude, flexShrink: 1, flexBasis: 0 };
}

export type SplitterStylesNames = 'root' | 'handle' | 'thumb' | SplitterPaneStylesNames;

export type SplitterCssVariables = {
  root: '--splitter-line-size' | '--splitter-handle-color';
};

export interface SplitterProps
  extends BoxProps, StylesApiProps<SplitterFactory>, ElementProps<'div'> {
  /** Layout direction @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';

  /** Controlled sizes, each value keeps the unit it was declared in (number/`%` flexible, `px`/`rem` fixed) */
  sizes?: SplitterPaneSize[];

  /** Called during resize with updated sizes, each value keeps its declared unit */
  onSizeChange?: (sizes: SplitterPaneSize[]) => void;

  /** Called when drag starts */
  onResizeStart?: (handleIndex: number) => void;

  /** Called when drag ends */
  onResizeEnd?: (handleIndex: number, sizes: SplitterPaneSize[]) => void;

  /** Called when a panel collapses or expands */
  onCollapseChange?: (panelIndex: number, collapsed: boolean) => void;

  /** How to redistribute space when immediate neighbor is at its min/max */
  redistribute?: 'nearest' | 'equal' | UseSplitterRedistributeFn;

  /** Keyboard step size, a `number`/`%` is a percentage, `px`/`rem` is resolved to pixels @default 1 */
  step?: SplitterStep;

  /** Shift+arrow step size, a `number`/`%` is a percentage, `px`/`rem` is resolved to pixels @default 10 */
  shiftStep?: SplitterStep;

  /** CSS value for separator line thickness between panes @default 2 */
  lineSize?: number | string;

  /** Key of `theme.colors` or any valid CSS color for the separator line */
  handleColor?: MantineColor;

  /** Custom icon displayed in the handle thumb, by default uses grip icon based on orientation */
  handleIcon?: React.ReactNode;

  /** Determines whether the thumb with grip icon is displayed on the handle @default true */
  withHandle?: boolean;

  /** Restore the two panes adjacent to a handle to their default ratio (preserving their combined size) when the handle is double-clicked @default true */
  resetOnDoubleClick?: boolean;

  /** Ref to imperative splitter API (sizes, collapse, expand, etc.) */
  splitterRef?: React.RefObject<UseSplitterReturnValue | null>;

  /** Splitter panes */
  children?: React.ReactNode;
}

export type SplitterFactory = Factory<{
  props: SplitterProps;
  ref: HTMLDivElement;
  stylesNames: SplitterStylesNames;
  vars: SplitterCssVariables;
  staticComponents: {
    Pane: typeof SplitterPane;
  };
}>;

const defaultProps = {
  orientation: 'horizontal',
  lineSize: 2,
  withHandle: true,
  resetOnDoubleClick: true,
} satisfies Partial<SplitterProps>;

const varsResolver = createVarsResolver<SplitterFactory>((theme, { lineSize, handleColor }) => ({
  root: {
    '--splitter-line-size': rem(lineSize),
    '--splitter-handle-color': handleColor ? getThemeColor(handleColor, theme) : undefined,
  },
}));

export const Splitter = factory<SplitterFactory>((_props) => {
  const props = useProps('Splitter', defaultProps, _props);
  const {
    orientation,
    sizes: controlledSizes,
    onSizeChange,
    onResizeStart,
    onResizeEnd,
    onCollapseChange,
    redistribute,
    step,
    shiftStep,
    lineSize,
    handleColor,
    handleIcon,
    withHandle,
    resetOnDoubleClick,
    splitterRef,
    children,
    className,
    classNames,
    style,
    styles,
    unstyled,
    vars,
    mod,
    attributes,
    ref,
    ...others
  } = props;

  const { dir } = useDirection();

  const paneChildren = Children.toArray(children) as React.ReactElement<SplitterPaneProps>[];

  const panels = paneChildren.map((child) => ({
    defaultSize: child.props.defaultSize,
    min: child.props.min,
    max: child.props.max,
    collapsible: child.props.collapsible,
    collapseThreshold: child.props.collapseThreshold,
  }));

  const splitter = useSplitter({
    panels,
    orientation,
    sizes: controlledSizes,
    onSizeChange,
    onResizeStart,
    onResizeEnd,
    onCollapseChange,
    redistribute,
    step,
    shiftStep,
    dir,
    resetOnDoubleClick,
  });

  useImperativeHandle(splitterRef, () => splitter, [splitter]);

  const pixelMode = splitter.sizes.some(isFixedPaneSize);
  const getPaneStyle = (index: number) => getPaneFlexStyle(splitter.sizes[index], pixelMode);

  const mergedRef = useMergedRef(ref, splitter.ref);

  const getStyles = useStyles<SplitterFactory>({
    name: 'Splitter',
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

  const defaultIcon = orientation === 'vertical' ? <GripHorizontalIcon /> : <GripVerticalIcon />;
  const thumbIcon = handleIcon !== undefined ? handleIcon : defaultIcon;

  const items: React.ReactNode[] = [];

  paneChildren.forEach((child, index) => {
    if (index > 0) {
      const handleProps = splitter.getHandleProps({ index: index - 1 });
      const isActive = splitter.activeHandle === index - 1;
      items.push(
        <Box {...getStyles('handle')} key={`handle-${index - 1}`} {...handleProps}>
          {withHandle && (
            <div
              {...getStyles('thumb')}
              data-orientation={orientation}
              data-active={isActive || undefined}
            >
              {thumbIcon}
            </div>
          )}
        </Box>
      );
    }

    items.push(
      cloneElement(child, {
        key: `pane-${index}`,
        __index: index,
      })
    );
  });

  return (
    <SplitterProvider
      value={{
        getStyles,
        sizes: splitter.sizes,
        collapsed: splitter.collapsed,
        orientation: orientation!,
        getPaneStyle,
      }}
    >
      <Box ref={mergedRef} {...getStyles('root')} mod={[{ orientation }, mod]} {...others}>
        {items}
      </Box>
    </SplitterProvider>
  );
});

Splitter.classes = classes;
Splitter.varsResolver = varsResolver;
Splitter.displayName = '@mantine/core/Splitter';
Splitter.Pane = SplitterPane;
