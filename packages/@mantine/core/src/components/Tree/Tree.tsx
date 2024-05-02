import { useEffect, useMemo } from 'react';
import { useClickOutside, useMergedRef } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getSpacing,
  MantineSpacing,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { TreeNode } from './TreeNode';
import { TreeController, useTree } from './use-tree';
import classes from './Tree.module.css';

export interface TreeNodeData {
  label: React.ReactNode;
  value: string;
  nodeProps?: Record<string, any>;
  children?: TreeNodeData[];
}

export interface RenderNodePayload {
  level: number;
  expanded: boolean;
  hasChildren: boolean;
  selected: boolean;
  node: TreeNodeData;
  elementProps: {
    className: string;
    style: React.CSSProperties;
    onClick: (event: React.MouseEvent) => void;
    'data-selected': boolean | undefined;
    'data-value': string;
  };
}

export type RenderNode = (payload: RenderNodePayload) => React.ReactNode;

export type TreeStylesNames = 'root' | 'node' | 'subtree' | 'label';
export type TreeCssVariables = {
  root: '--level-offset';
};

export interface TreeProps extends BoxProps, StylesApiProps<TreeFactory>, ElementProps<'ul'> {
  /** Data used to render nodes */
  data: TreeNodeData[];

  /** Horizontal padding of each subtree level, key of `theme.spacing` or any valid CSS value, `'lg'` by default */
  levelOffset?: MantineSpacing;

  /** Determines whether tree node with children should be expanded on click, `true` by default */
  expandOnClick?: boolean;

  /** Determines whether node should be selected on click, `false` by default */
  selectOnClick?: boolean;

  /** use-tree hook instance that can be used to manipulate component state */
  tree?: TreeController;

  /** A function to render tree node label */
  renderNode?: RenderNode;

  /** Determines whether selection should be cleared when user clicks outside of the tree, `false` by default */
  clearSelectionOnOutsideClick?: boolean;

  /** Determines whether tree nodes range can be selected with click when `Shift` key is pressed, `true` by default */
  allowRangeSelection?: boolean;
}

function getFlatValues(data: TreeNodeData[]): string[] {
  return data.reduce<string[]>((acc, item) => {
    acc.push(item.value);
    if (item.children) {
      acc.push(...getFlatValues(item.children));
    }
    return acc;
  }, []);
}

export type TreeFactory = Factory<{
  props: TreeProps;
  ref: HTMLUListElement;
  stylesNames: TreeStylesNames;
  vars: TreeCssVariables;
}>;

const defaultProps: Partial<TreeProps> = {
  expandOnClick: true,
  allowRangeSelection: true,
};

const varsResolver = createVarsResolver<TreeFactory>((_theme, { levelOffset }) => ({
  root: {
    '--level-offset': getSpacing(levelOffset),
  },
}));

export const Tree = factory<TreeFactory>((_props, ref) => {
  const props = useProps('Tree', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    data,
    expandOnClick,
    tree,
    renderNode,
    selectOnClick,
    clearSelectionOnOutsideClick,
    allowRangeSelection,
    ...others
  } = props;

  const defaultController = useTree();
  const controller = tree || defaultController;

  const getStyles = useStyles<TreeFactory>({
    name: 'Tree',
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

  const clickOutsideRef = useClickOutside(
    () => clearSelectionOnOutsideClick && controller.clearSelected()
  );

  const mergedRef = useMergedRef(ref, clickOutsideRef);

  const flatValues = useMemo(() => getFlatValues(data), [data]);

  useEffect(() => {
    controller.initialize(data);
  }, [data]);

  const nodes = data.map((node, index) => (
    <TreeNode
      key={node.value}
      node={node}
      getStyles={getStyles}
      rootIndex={index}
      expandOnClick={expandOnClick}
      selectOnClick={selectOnClick}
      controller={controller}
      renderNode={renderNode}
      flatValues={flatValues}
      allowRangeSelection={allowRangeSelection}
    />
  ));

  return (
    <Box
      component="ul"
      ref={mergedRef}
      {...getStyles('root')}
      {...others}
      role="tree"
      aria-multiselectable={controller.multiple}
      data-tree-root
    >
      {nodes}
    </Box>
  );
});

Tree.displayName = '@mantine/core/Tree';
Tree.classes = classes;
