import { useEffect, useState } from 'react';
import { findTreeNode } from './get-children-nodes-values/get-children-nodes-values';
import type { TreeDragDropPayload, TreeDragDropPosition } from './move-tree-node/move-tree-node';
import type { TreeDragState, TreeNodeData } from './Tree';

export type TreeAllowDrop = (payload: TreeDragDropPayload) => boolean;

interface UseTreeNodeDragDropInput {
  nodeValue: string;
  hasChildren: boolean;
  isExpanded: boolean;
  data: TreeNodeData[];
  onDragDrop: ((payload: TreeDragDropPayload) => void) | undefined;
  dragStateRef: React.RefObject<TreeDragState>;
  allowDrop: TreeAllowDrop | undefined;
  withDragHandle: boolean | undefined;
}

export interface TreeDragHandleProps {
  onMouseDown: (event: React.MouseEvent) => void;
}

function isDescendantOf(
  data: TreeNodeData[],
  ancestorValue: string,
  descendantValue: string
): boolean {
  const ancestor = findTreeNode(ancestorValue, data);
  if (!ancestor || !ancestor.children) {
    return false;
  }

  function check(nodes: TreeNodeData[]): boolean {
    for (const node of nodes) {
      if (node.value === descendantValue) {
        return true;
      }

      if (node.children && check(node.children)) {
        return true;
      }
    }

    return false;
  }

  return check(ancestor.children);
}

function getDragDropPosition(
  event: React.DragEvent,
  element: HTMLElement,
  hasChildren: boolean,
  isExpanded: boolean
): TreeDragDropPosition {
  const rect = element.getBoundingClientRect();
  const y = event.clientY - rect.top;
  const height = rect.height;

  if (hasChildren) {
    // Expanded folder: the subtree is visually below the label, so an 'after' drop
    // on the label itself would be ambiguous — the indicator would render between
    // the folder name and its first child, which reads as "as first child". Use
    // 2 zones: 'before' (top half) and 'inside' (bottom half). To drop after an
    // expanded folder, hover over the next sibling's 'before' position.
    if (isExpanded) {
      if (y < height * 0.5) {
        return 'before';
      }
      return 'inside';
    }

    // Collapsed folder: full 3-zone behavior.
    if (y < height * 0.25) {
      return 'before';
    }

    if (y > height * 0.75) {
      return 'after';
    }

    return 'inside';
  }

  if (y < height * 0.5) {
    return 'before';
  }

  return 'after';
}

const EMPTY_DRAG_PROPS = { elementProps: {}, dragHandleProps: undefined } as const;

export function useTreeNodeDragDrop({
  nodeValue,
  hasChildren,
  isExpanded,
  data,
  onDragDrop,
  dragStateRef,
  allowDrop,
  withDragHandle,
}: UseTreeNodeDragDropInput) {
  const [isDragHandleActive, setIsDragHandleActive] = useState(false);

  useEffect(() => {
    if (!withDragHandle || !isDragHandleActive) {
      return undefined;
    }

    const handleWindowMouseUp = () => setIsDragHandleActive(false);
    window.addEventListener('mouseup', handleWindowMouseUp);
    return () => window.removeEventListener('mouseup', handleWindowMouseUp);
  }, [withDragHandle, isDragHandleActive]);

  if (!onDragDrop) {
    return EMPTY_DRAG_PROPS;
  }

  const handleDragStart = (event: React.DragEvent) => {
    if (withDragHandle && !isDragHandleActive) {
      return;
    }

    event.stopPropagation();
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', nodeValue);
    dragStateRef.current.draggedValue = nodeValue;

    const target = event.currentTarget as HTMLElement;
    const treeItem = target.closest('[role=treeitem]') as HTMLElement | null;
    if (treeItem) {
      treeItem.setAttribute('data-dragging', 'true');
    }

    requestAnimationFrame(() => {
      target.setAttribute('data-dragging', 'true');
    });
  };

  const handleDragOver = (event: React.DragEvent) => {
    const draggedValue = dragStateRef.current.draggedValue;
    if (!draggedValue || draggedValue === nodeValue) {
      return;
    }

    if (isDescendantOf(data, draggedValue, nodeValue)) {
      return;
    }

    const target = event.currentTarget as HTMLElement;
    const position = getDragDropPosition(event, target, hasChildren, isExpanded);

    if (allowDrop && !allowDrop({ draggedNode: draggedValue, targetNode: nodeValue, position })) {
      const prevTarget = dragStateRef.current.currentDropTarget;
      if (prevTarget && prevTarget !== target) {
        prevTarget.removeAttribute('data-drag-over');
      }
      target.removeAttribute('data-drag-over');
      dragStateRef.current.currentDropTarget = null;
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'move';

    const prevTarget = dragStateRef.current.currentDropTarget;
    if (prevTarget && prevTarget !== target) {
      prevTarget.removeAttribute('data-drag-over');
    }

    target.setAttribute('data-drag-over', position);
    dragStateRef.current.currentDropTarget = target;
  };

  const handleDragLeave = (event: React.DragEvent) => {
    const target = event.currentTarget as HTMLElement;
    const related = event.relatedTarget as HTMLElement | null;

    if (related && target.contains(related)) {
      return;
    }

    target.removeAttribute('data-drag-over');

    if (dragStateRef.current.currentDropTarget === target) {
      dragStateRef.current.currentDropTarget = null;
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.currentTarget as HTMLElement;
    const position = target.getAttribute('data-drag-over') as TreeDragDropPosition | null;
    target.removeAttribute('data-drag-over');

    const draggedValue = dragStateRef.current.draggedValue;
    if (draggedValue && position && draggedValue !== nodeValue) {
      const payload = { draggedNode: draggedValue, targetNode: nodeValue, position };
      if (!allowDrop || allowDrop(payload)) {
        onDragDrop(payload);
      }
    }

    dragStateRef.current.draggedValue = null;
    dragStateRef.current.currentDropTarget = null;
  };

  const handleDragEnd = (event: React.DragEvent) => {
    const target = event.currentTarget as HTMLElement;
    target.removeAttribute('data-dragging');

    const treeItem = target.closest('[role=treeitem]') as HTMLElement | null;
    if (treeItem) {
      treeItem.removeAttribute('data-dragging');
    }

    const prevTarget = dragStateRef.current.currentDropTarget;
    if (prevTarget) {
      prevTarget.removeAttribute('data-drag-over');
    }

    dragStateRef.current.draggedValue = null;
    dragStateRef.current.currentDropTarget = null;

    if (withDragHandle) {
      setIsDragHandleActive(false);
    }
  };

  const elementProps = {
    draggable: withDragHandle ? isDragHandleActive : true,
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
    onDragEnd: handleDragEnd,
  };

  const dragHandleProps: TreeDragHandleProps | undefined = withDragHandle
    ? { onMouseDown: () => setIsDragHandleActive(true) }
    : undefined;

  return { elementProps, dragHandleProps };
}
