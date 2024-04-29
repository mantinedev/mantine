import { useEffect } from 'react';
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
import { TreeController, TreeState, useTree } from './use-tree';
import classes from './Tree.module.css';

export type TreeValue = string | string[] | undefined;

export interface TreeNodeData {
  label: React.ReactNode;
  value: string;
  payload?: Record<string, any>;
  children?: TreeNodeData[];
}

export interface RenderNodePayload {
  level: number;
  nodeProps: Record<string, any>;
  node: TreeNodeData;
}

export type TreeStylesNames = 'root' | 'node' | 'subtree' | 'label';
export type TreeCssVariables = {
  root: '--level-offset';
};

export interface TreeProps extends BoxProps, StylesApiProps<TreeFactory>, ElementProps<'ul'> {
  /** Data used to render nodes */
  data: TreeNodeData[];

  /** Determines whether multiple nodes can be selected at a time, used to set `aria-*` attribute, `false` by default */
  multiple?: boolean;

  /** Value of the node (or multiple nodes) that is currently selected */
  value?: TreeValue;

  /** Horizontal padding of each subtree level, key of `theme.spacing` or any valid CSS value, `'lg'` by default */
  levelOffset?: MantineSpacing;

  /** Determines whether tree node with children should be expanded on click, `true` by default */
  expandOnClick?: boolean;

  /** use-tree hook instance that can be used to manipulate component state */
  tree?: TreeController;

  /** Default expanded state for uncontrolled component */
  initialExpandedState?: TreeState;
}

export type TreeFactory = Factory<{
  props: TreeProps;
  ref: HTMLUListElement;
  stylesNames: TreeStylesNames;
  vars: TreeCssVariables;
}>;

const defaultProps: Partial<TreeProps> = {
  expandOnClick: true,
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
    multiple,
    value,
    expandOnClick,
    tree,
    initialExpandedState,
    ...others
  } = props;

  const defaultController = useTree(initialExpandedState);
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

  useEffect(() => {
    controller.initialize(data, value);
  }, [data]);

  const nodes = data.map((node, index) => (
    <TreeNode
      key={node.value}
      node={node}
      getStyles={getStyles}
      value={value}
      rootIndex={index}
      expandOnClick={expandOnClick}
      controller={controller}
    />
  ));

  return (
    <Box
      component="ul"
      ref={ref}
      {...getStyles('root')}
      {...others}
      role="tree"
      aria-multiselectable={multiple}
      data-tree-root
    >
      {nodes}
    </Box>
  );
});

Tree.displayName = '@mantine/core/Tree';
Tree.classes = classes;
