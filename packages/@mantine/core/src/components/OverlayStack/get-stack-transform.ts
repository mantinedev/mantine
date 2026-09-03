export interface StackTransformInput {
  /** Position of the modal in the stack, 0 is the top modal */
  depth: number;

  /** Progress of the top item swipe gesture in `[0, 1]`, moves stacked items one step toward the front */
  dragProgress?: number;

  /** Translate in px per depth step @default 9 */
  offsetStep?: number;

  /** Extra translate along the stacking axis in px, added on top of the depth-based offset */
  offset?: number;
}

export interface StackTransform {
  transform: string;
}

/** Transform of a stacked modal: each card behind the top one is shifted up so that a constant strip peeks above the card in front of it */
export function getStackTransform({
  depth,
  dragProgress = 0,
  offsetStep = 9,
  offset = 0,
}: StackTransformInput): StackTransform {
  const d = Math.max(0, depth - dragProgress);
  return { transform: `translateY(${-(d * offsetStep + offset)}px)` };
}

export interface CenteredStackOffsetInput {
  /** Measured height of the top item in px */
  topHeight: number;

  /** Natural height of the stacked item measured while it was on top, `null` if unknown */
  ownHeight: number | null;

  depth: number;
  sizeStep?: number;
}

/** Distance in px between the top edges of a vertically centered stacked item and the top item, used to keep the peeking edge constant for centered modals */
export function getCenteredStackOffset({
  topHeight,
  ownHeight,
  depth,
  sizeStep = 14,
}: CenteredStackOffsetInput): number {
  const clampedHeight = Math.max(0, topHeight - depth * sizeStep);
  const renderedHeight =
    ownHeight && ownHeight > 0 ? Math.min(ownHeight, clampedHeight) : clampedHeight;
  return Math.max(0, (topHeight - renderedHeight) / 2);
}
