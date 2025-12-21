import type { CheckedNodeStatus } from './get-all-checked-nodes/get-all-checked-nodes';
import type {
  RenderTreeNodePayload,
  TreeCssVariables,
  TreeFactory,
  TreeNodeData,
  TreeProps,
  TreeStylesNames,
} from './Tree';
import type { UseTreeInput, UseTreeReturnType } from './use-tree';

export { Tree } from './Tree';
export { useTree, getTreeExpandedState } from './use-tree';

export type {
  TreeProps,
  TreeStylesNames,
  TreeFactory,
  TreeCssVariables,
  TreeNodeData,
  RenderTreeNodePayload,
  UseTreeInput,
  UseTreeReturnType,
  CheckedNodeStatus,
};

export namespace Tree {
  export type Props = TreeProps;
  export type StylesNames = TreeStylesNames;
  export type Factory = TreeFactory;
  export type NodeData = TreeNodeData;
  export type RenderNodePayload = RenderTreeNodePayload;
}
