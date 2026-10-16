import { Activity, useRef } from 'react';
import { Box, GetStylesApi } from '../../core';
import { Loader } from '../Loader';
import type { TreeDragDropPayload } from './move-tree-node/move-tree-node';
import type { RenderNode, TreeFactory, TreeNodeData } from './Tree';
import {
  activateTreeItem,
  getRenderedTreeItems,
  getTreeItemCheckedState,
  getTreeRoot,
  handleTreeItemBlur,
  handleTreeItemFocus,
  handleTreeItemKeyDown,
  isTreeRangeSelection,
  selectTreeItemsRange,
} from './tree-item';
import { nodeHasChildren } from './tree-walk/tree-walk';
import type { TreeStore } from './use-tree';
import type { useTreeKeyboardDragDrop } from './use-tree-keyboard-drag-drop';
import { TreeAllowDrop, TreeDragState, useTreeNodeDragDrop } from './use-tree-node-drag-drop';

interface TreeNodeProps {
  node: TreeNodeData;
  getStyles: GetStylesApi<TreeFactory>;
  rootIndex: number | undefined;
  store: TreeStore;
  expandOnClick: boolean | undefined;
  level?: number;
  renderNode: RenderNode | undefined;
  selectOnClick: boolean | undefined;
  allowRangeSelection: boolean | undefined;
  expandOnSpace: boolean | undefined;
  checkOnSpace: boolean | undefined;
  keepMounted: boolean | undefined;
  onDragDrop: ((payload: TreeDragDropPayload) => void) | undefined;
  allowDrop: TreeAllowDrop | undefined;
  withDragHandle: boolean | undefined;
  dragStateRef: React.RefObject<TreeDragState>;
  keyboardDragDrop: ReturnType<typeof useTreeKeyboardDragDrop> | undefined;
  dragDropInstructionsId: string | undefined;
  data: TreeNodeData[];
}

export function TreeNode({
  node,
  getStyles,
  rootIndex,
  store,
  expandOnClick,
  selectOnClick,
  level = 1,
  renderNode,
  allowRangeSelection,
  expandOnSpace,
  checkOnSpace,
  keepMounted,
  onDragDrop,
  allowDrop,
  withDragHandle,
  dragStateRef,
  keyboardDragDrop,
  dragDropInstructionsId,
  data,
}: TreeNodeProps) {
  const ref = useRef<HTMLLIElement>(null);
  const hasChildren = nodeHasChildren(node);
  const isLoading = store.isNodeLoading(node.value);
  const loadError = store.getNodeLoadError(node.value);
  const isExpanded = store.expandedState[node.value] || false;

  const nested = (node.children || []).map((child) => (
    <TreeNode
      key={child.value}
      node={child}
      getStyles={getStyles}
      rootIndex={undefined}
      level={level + 1}
      store={store}
      expandOnClick={expandOnClick}
      renderNode={renderNode}
      selectOnClick={selectOnClick}
      allowRangeSelection={allowRangeSelection}
      expandOnSpace={expandOnSpace}
      checkOnSpace={checkOnSpace}
      keepMounted={keepMounted}
      onDragDrop={onDragDrop}
      allowDrop={allowDrop}
      withDragHandle={withDragHandle}
      dragStateRef={dragStateRef}
      keyboardDragDrop={keyboardDragDrop}
      dragDropInstructionsId={dragDropInstructionsId}
      data={data}
    />
  ));

  const { elementProps: dragElementProps, dragHandleProps } = useTreeNodeDragDrop({
    nodeValue: node.value,
    hasChildren,
    isExpanded,
    data,
    onDragDrop,
    dragStateRef,
    allowDrop,
    withDragHandle,
  });

  const behaviorOptions = {
    value: node.value,
    hasChildren,
    expanded: isExpanded,
    store,
    expandOnClick,
    selectOnClick,
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>) => {
    if (keyboardDragDrop?.handleKeyDown(event, node.value)) {
      return;
    }

    handleTreeItemKeyDown(event, {
      ...behaviorOptions,
      expandOnSpace,
      checkOnSpace,
      allowRangeSelection,
    });
  };

  const handleBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    keyboardDragDrop?.handleBlur(event, node.value);
    handleTreeItemBlur(event);
  };

  const handleNodeClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    const root = getTreeRoot(ref.current);

    if (root && isTreeRangeSelection(event, store, allowRangeSelection)) {
      selectTreeItemsRange(store, getRenderedTreeItems(root), node.value);
    } else {
      activateTreeItem(behaviorOptions);
    }

    ref.current?.focus();
  };

  const selected = store.selectedState.includes(node.value);
  const elementProps = {
    ...getStyles('label'),
    onClick: handleNodeClick,
    'data-selected': selected || undefined,
    'data-value': node.value,
    ...dragElementProps,
  };

  const withLoadingIndicator = isExpanded && isLoading && nested.length === 0;

  return (
    <li
      {...getStyles('node', {
        style: { '--label-offset': `calc(var(--level-offset) * ${level - 1})` },
      })}
      role="treeitem"
      aria-selected={selected}
      aria-expanded={hasChildren ? isExpanded : undefined}
      aria-busy={isLoading || undefined}
      aria-checked={checkOnSpace ? getTreeItemCheckedState(store, node.value) : undefined}
      aria-describedby={dragDropInstructionsId}
      data-value={node.value}
      data-selected={selected || undefined}
      data-level={level}
      tabIndex={rootIndex === 0 ? 0 : -1}
      onKeyDown={handleKeyDown}
      onFocus={(event) => handleTreeItemFocus(event, node.value)}
      onBlur={handleBlur}
      ref={ref}
    >
      {typeof renderNode === 'function' ? (
        renderNode({
          node,
          level,
          selected,
          isRoot: level === 1,
          store,
          expanded: isExpanded,
          hasChildren,
          isLoading,
          loadError,
          elementProps,
          dragHandleProps,
        })
      ) : (
        <div {...elementProps}>{node.label}</div>
      )}

      {withLoadingIndicator && (
        <Box component="ul" role="group" {...getStyles('subtree')} data-level={level}>
          <li
            role="none"
            {...getStyles('node', {
              style: { '--label-offset': `calc(var(--level-offset) * ${level})` },
            })}
          >
            <div {...getStyles('label')}>
              <Loader size={16} style={{ marginInlineStart: 4 }} />
            </div>
          </li>
        </Box>
      )}

      {keepMounted && nested.length > 0 ? (
        <Activity mode={isExpanded ? 'visible' : 'hidden'}>
          <Box component="ul" role="group" {...getStyles('subtree')} data-level={level}>
            {nested}
          </Box>
        </Activity>
      ) : (
        isExpanded &&
        nested.length > 0 && (
          <Box component="ul" role="group" {...getStyles('subtree')} data-level={level}>
            {nested}
          </Box>
        )
      )}
    </li>
  );
}

TreeNode.displayName = '@mantine/core/TreeNode';
