import { Children, cloneElement, useImperativeHandle } from 'react';
import {
  SplitterPaneSize,
  SplitterStep,
  useId,
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

export type SplitterStylesNames = 'root' | 'handle' | 'thumb' | SplitterPaneStylesNames;

export type SplitterCssVariables = {
  root: '--splitter-line-size' | '--splitter-handle-color';
};

export interface SplitterProps
  extends BoxProps, StylesApiProps<SplitterFactory>, ElementProps<'div'> {
  /** Layout direction @default 'horizontal' @category appearance */
  orientation?: 'horizontal' | 'vertical';

  /** Controlled sizes, each value keeps the unit it was declared in (number/`%` flexible, `px`/`rem` fixed) @category state */
  sizes?: SplitterPaneSize[];

  /** Called during resize with updated sizes, each value keeps its declared unit @category state */
  onSizeChange?: (sizes: SplitterPaneSize[]) => void;

  /** Called when drag starts @category behavior */
  onResizeStart?: (handleIndex: number) => void;

  /** Called when drag ends @category behavior */
  onResizeEnd?: (handleIndex: number, sizes: SplitterPaneSize[]) => void;

  /** Called when a panel collapses or expands @category behavior */
  onCollapseChange?: (panelIndex: number, collapsed: boolean) => void;

  /** How to redistribute space when immediate neighbor is at its min/max @category behavior */
  redistribute?: 'nearest' | 'equal' | UseSplitterRedistributeFn;

  /** Keyboard step size, a `number`/`%` is a percentage, `px`/`rem` is resolved to pixels @default 1 @category behavior */
  step?: SplitterStep;

  /** Shift+arrow step size, a `number`/`%` is a percentage, `px`/`rem` is resolved to pixels @default 10 @category behavior */
  shiftStep?: SplitterStep;

  /** CSS value for separator line thickness between panes @default 2 @category appearance */
  lineSize?: number | string;

  /** Key of `theme.colors` or any valid CSS color for the separator line @category appearance */
  handleColor?: MantineColor;

  /** Custom icon displayed in the handle thumb, by default uses grip icon based on orientation @category appearance */
  handleIcon?: React.ReactNode;

  /** Determines whether the thumb with grip icon is displayed on the handle @default true @category appearance */
  withHandle?: boolean;

  /** Restore the two panes adjacent to a handle to their default ratio (preserving their combined size) when the handle is double-clicked @default true @category behavior */
  resetOnDoubleClick?: boolean;

  /** A function to pass props down to handles, called with the handle index, use it to set `aria-label` on each handle @category behavior */
  getHandleProps?: (index: number) => React.ComponentProps<'div'> & Record<`data-${string}`, any>;

  /** Ref to imperative splitter API (sizes, collapse, expand, etc.) */
  splitterRef?: React.RefObject<UseSplitterReturnValue | null>;

  /** Splitter panes @category appearance */
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
    getHandleProps,
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
  const idBase = useId();

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

  const getPaneId = (index: number) => paneChildren[index].props.id ?? `${idBase}-pane-${index}`;

  paneChildren.forEach((child, index) => {
    if (index > 0) {
      const handleProps = splitter.getHandleProps({ index: index - 1 });
      const isActive = splitter.activeHandle === index - 1;
      const {
        className: handleClassName,
        style: handleStyle,
        ...userHandleProps
      } = getHandleProps?.(index - 1) || {};
      items.push(
        <Box
          {...getStyles('handle', { className: handleClassName, style: handleStyle })}
          key={`handle-${index - 1}`}
          aria-controls={getPaneId(index - 1)}
          {...userHandleProps}
          {...handleProps}
        >
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
        id: getPaneId(index),
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
        getPaneStyle: splitter.getPaneStyle,
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
