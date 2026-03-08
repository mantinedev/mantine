import { findTreeNode } from './get-children-nodes-values/get-children-nodes-values';
import type { TreeDragDropPayload, TreeDragDropPosition } from './move-tree-node/move-tree-node';
import type { TreeDragState, TreeNodeData } from './Tree';

interface UseTreeNodeDragDropInput {
  nodeValue: string;
  hasChildren: boolean;
  data: TreeNodeData[];
  onDragDrop: ((payload: TreeDragDropPayload) => void) | undefined;
  dragStateRef: React.RefObject<TreeDragState>;
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
  hasChildren: boolean
): TreeDragDropPosition {
  const rect = element.getBoundingClientRect();
  const y = event.clientY - rect.top;
  const height = rect.height;

  if (hasChildren) {
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

const EMPTY_DRAG_PROPS: Record<string, never> = {};

export function useTreeNodeDragDrop({
  nodeValue,
  hasChildren,
  data,
  onDragDrop,
  dragStateRef,
}: UseTreeNodeDragDropInput) {
  if (!onDragDrop) {
    return EMPTY_DRAG_PROPS;
  }

  const handleDragStart = (event: React.DragEvent) => {
    event.stopPropagation();
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', nodeValue);
    dragStateRef.current.draggedValue = nodeValue;

    const target = event.currentTarget as HTMLElement;
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

    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'move';

    const target = event.currentTarget as HTMLElement;
    const position = getDragDropPosition(event, target, hasChildren);

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
      onDragDrop({ draggedNode: draggedValue, targetNode: nodeValue, position });
    }

    dragStateRef.current.draggedValue = null;
    dragStateRef.current.currentDropTarget = null;
  };

  const handleDragEnd = (event: React.DragEvent) => {
    const target = event.currentTarget as HTMLElement;
    target.removeAttribute('data-dragging');

    const prevTarget = dragStateRef.current.currentDropTarget;
    if (prevTarget) {
      prevTarget.removeAttribute('data-drag-over');
    }

    dragStateRef.current.draggedValue = null;
    dragStateRef.current.currentDropTarget = null;
  };

  return {
    draggable: true as const,
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDragLeave: handleDragLeave,
    onDrop: handleDrop,
    onDragEnd: handleDragEnd,
  };
}
