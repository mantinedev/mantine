import { memo, useEffect, useRef } from 'react';
import { FlatTreeLineState, FlattenedTreeNodeData } from './flatten-tree-data/flatten-tree-data';
import { RenderNode, TreeNodeData } from './Tree';
import {
  activateTreeItem,
  focusPendingTreeItem,
  getFlatTreeItemPosition,
  getFlatTreeItems,
  getTreeItemCheckedState,
  getTreeRoot,
  handleTreeItemBlur,
  handleTreeItemFocus,
  handleTreeItemKeyDown,
  scheduleTreeTabStopSync,
} from './tree-item';
import { TreeStore } from './use-tree';
import classes from './Tree.module.css';

export interface FlatTreeNodeProps {
  /** Node data from tree data */
  node: TreeNodeData;

  /** Nesting level of the node, starts at 1 */
  level: number;

  /** Value of the parent node, `null` for root nodes */
  parent: string | null;

  /** Whether the node has children */
  hasChildren: boolean;

  /** Whether the node is expanded */
  expanded: boolean;

  /** Tree store instance, return value of `useTree` hook */
  store: TreeStore;

  /** If set, tree node with children is expanded on click @default true */
  expandOnClick?: boolean;

  /** If set, tree node is selected on click @default false */
  selectOnClick?: boolean;

  /** If set, tree node with children is expanded on space key press @default true */
  expandOnSpace?: boolean;

  /** If set, tree node is checked on space key press @default false */
  checkOnSpace?: boolean;

  /** A function to render tree node label */
  renderNode?: RenderNode;

  /** Style to apply to the root element, used for virtualizer positioning */
  style?: React.CSSProperties;

  /** Initial tab index of the node. After mount, a single node in the tree is kept tabbable: the last focused node, the first rendered selected node or the first rendered node. */
  tabIndex?: number;

  /** Full `flattenTreeData` result the node belongs to. When set, `aria-setsize` and `aria-posinset` are added and keyboard navigation (`Home`, `End`, arrows) can reach rows that are not rendered. */
  flatData?: FlattenedTreeNodeData[];

  /** Called with the index in `flatData` of a row that keyboard navigation targets but that is not rendered. Scroll the virtualizer to that index (for example, `virtualizer.scrollToIndex(index)`), the row is focused once it is rendered. */
  onScrollToIndex?: (index: number) => void;

  /** Line state per ancestor + own level, computed by `flattenTreeData`.
   * When provided and the tree root has `data-with-lines`, connector lines are rendered. */
  linesPath?: FlatTreeLineState[];
}

export const FlatTreeNode = memo(function FlatTreeNode({
  node,
  level,
  hasChildren,
  expanded,
  store,
  expandOnClick = true,
  selectOnClick,
  expandOnSpace = true,
  checkOnSpace,
  renderNode,
  style,
  tabIndex = -1,
  linesPath,
  flatData,
  onScrollToIndex,
}: FlatTreeNodeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rootRef = useRef<Element | null>(null);
  const isLoading = store.isNodeLoading(node.value);
  const loadError = store.getNodeLoadError(node.value);
  const selected = store.selectedState.includes(node.value);

  const position = flatData ? getFlatTreeItemPosition(flatData, node.value) : undefined;
  const behaviorOptions = {
    value: node.value,
    hasChildren,
    expanded,
    store,
    expandOnClick,
    selectOnClick,
  };

  useEffect(() => {
    rootRef.current = getTreeRoot(ref.current);
    scheduleTreeTabStopSync(rootRef.current);
    focusPendingTreeItem(rootRef.current, ref.current);
  });

  useEffect(() => () => scheduleTreeTabStopSync(rootRef.current), []);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    activateTreeItem(behaviorOptions);
    ref.current?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) =>
    handleTreeItemKeyDown(event, {
      ...behaviorOptions,
      expandOnSpace,
      checkOnSpace,
      allowRangeSelection: false,
      getItems: flatData ? () => getFlatTreeItems(flatData) : undefined,
      onScrollToIndex,
    });

  const elementProps = {
    className: classes.label,
    style: {} as React.CSSProperties,
    onClick: handleClick,
    'data-selected': selected || undefined,
    'data-value': node.value,
  };

  return (
    <div
      ref={ref}
      className={classes.node}
      style={{
        ...({
          '--label-offset': `calc(var(--level-offset, var(--mantine-spacing-lg)) * ${level - 1})`,
        } as React.CSSProperties),
        ...style,
      }}
      role="treeitem"
      aria-selected={selected}
      aria-expanded={hasChildren ? expanded : undefined}
      aria-busy={isLoading || undefined}
      aria-checked={checkOnSpace ? getTreeItemCheckedState(store, node.value) : undefined}
      aria-level={level}
      aria-setsize={position?.setSize}
      aria-posinset={position?.posInSet}
      data-value={node.value}
      data-selected={selected || undefined}
      data-level={level}
      tabIndex={tabIndex}
      onKeyDown={handleKeyDown}
      onFocus={(event) => handleTreeItemFocus(event, node.value)}
      onBlur={handleTreeItemBlur}
    >
      {linesPath?.map((state, idx) => {
        if (state === 'none') {
          return null;
        }
        const column = idx + 2;
        return (
          <span
            key={column}
            aria-hidden
            className={`${classes.flatLine}${state === 'closing' ? ` ${classes.flatLineClosing}` : ''}`}
            style={{ '--flat-line-column': column } as React.CSSProperties}
          />
        );
      })}
      {typeof renderNode === 'function' ? (
        renderNode({
          node,
          level,
          selected,
          isRoot: level === 1,
          store,
          expanded,
          hasChildren,
          isLoading,
          loadError,
          elementProps,
          dragHandleProps: undefined,
        })
      ) : (
        <div {...elementProps}>{node.label}</div>
      )}
    </div>
  );
});

FlatTreeNode.displayName = '@mantine/core/FlatTreeNode';
