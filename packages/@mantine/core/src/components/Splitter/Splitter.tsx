import { Children, cloneElement, useImperativeHandle } from 'react';
import { useMergedRef, useSplitter, UseSplitterReturnValue } from '@mantine/hooks';
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
  /** Layout direction @default 'horizontal' */
  orientation?: 'horizontal' | 'vertical';

  /** Controlled sizes (percentages summing to 100) */
  sizes?: number[];

  /** Called during resize with updated sizes */
  onSizeChange?: (sizes: number[]) => void;

  /** Called when drag starts */
  onResizeStart?: (handleIndex: number) => void;

  /** Called when drag ends */
  onResizeEnd?: (handleIndex: number, sizes: number[]) => void;

  /** Called when a panel collapses or expands */
  onCollapseChange?: (panelIndex: number, collapsed: boolean) => void;

  /** How to redistribute space when immediate neighbor is at its min/max */
  redistribute?: 'nearest' | 'equal' | ((input: any) => number[]);

  /** Keyboard step size in percentage @default 1 */
  step?: number;

  /** Shift+arrow step size in percentage @default 10 */
  shiftStep?: number;

  /** CSS value for separator line thickness between panes @default 2 */
  lineSize?: number | string;

  /** Key of `theme.colors` or any valid CSS color for the separator line */
  handleColor?: MantineColor;

  /** Custom icon displayed in the handle thumb, by default uses grip icon based on orientation */
  handleIcon?: React.ReactNode;

  /** Determines whether the thumb with grip icon is displayed on the handle @default true */
  withHandle?: boolean;

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
