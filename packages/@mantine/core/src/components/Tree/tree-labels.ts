import type { TreeDragDropPosition } from './move-tree-node/move-tree-node';

export interface TreeDragDropAnnouncementPayload {
  /** Text content of the moved node */
  node: string;

  /** Text content of the target node */
  target: string;

  /** Position relative to the target node */
  position: TreeDragDropPosition;
}

export interface TreeLabels {
  /** Description of the keyboard move, read by screen readers with every node when drag-and-drop is enabled */
  dragDropInstructions: string;

  /** Announced when a node is picked up with the keyboard */
  dragDropStart: (node: string) => string;

  /** Announced when the drop position of the picked up node changes */
  dragDropMove: (payload: TreeDragDropAnnouncementPayload) => string;

  /** Announced when the picked up node is dropped */
  dragDropDrop: (payload: TreeDragDropAnnouncementPayload) => string;

  /** Announced when the keyboard move is cancelled */
  dragDropCancel: (node: string) => string;
}

function getPositionText({ target, position }: TreeDragDropAnnouncementPayload) {
  return `${position} ${target}`;
}

export const DEFAULT_TREE_LABELS: TreeLabels = {
  dragDropInstructions:
    'To move this item, press an arrow key while holding Control or Command. Press Enter to drop, Escape to cancel.',
  dragDropStart: (node) =>
    `Picked up ${node}. Use arrow keys to move, Enter to drop, Escape to cancel.`,
  dragDropMove: (payload) => `${payload.node} ${getPositionText(payload)}`,
  dragDropDrop: (payload) => `Dropped ${payload.node} ${getPositionText(payload)}`,
  dragDropCancel: (node) => `Move cancelled, ${node} returned to its original position`,
};
