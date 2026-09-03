export interface StackTransformInput {
  kind: 'modal' | 'drawer';
  position?: 'top' | 'bottom' | 'left' | 'right';
  depth: number;
  dragProgress?: number;
  scaleStep?: number;
  offsetStep?: number;
  opacityStep?: number;

  /** Extra translate along the stacking axis in px, added on top of the depth-based offset */
  offset?: number;
}

export interface StackTransform {
  transform: string;
  opacity: number;
}

export function getStackTransform(input: StackTransformInput): StackTransform {
  const {
    kind,
    position = 'left',
    depth,
    dragProgress = 0,
    scaleStep = 0.04,
    offsetStep = 16,
    opacityStep = 0,
    offset = 0,
  } = input;

  const d = Math.max(0, depth - dragProgress);

  if (kind === 'modal') {
    const modalOffsetStep = input.offsetStep ?? 9;
    return { transform: `translateY(${-(d * modalOffsetStep + offset)}px)`, opacity: 1 };
  }

  const scale = 1 - d * scaleStep;
  const opacity = Math.min(1, Math.max(0, 1 - d * opacityStep));

  let translate: string;

  if (position === 'bottom') {
    translate = `translateY(${d * offsetStep}px)`;
  } else if (position === 'top') {
    translate = `translateY(${-(d * offsetStep)}px)`;
  } else if (position === 'right') {
    translate = `translateX(${d * offsetStep}px)`;
  } else {
    translate = `translateX(${-(d * offsetStep)}px)`;
  }

  return { transform: `scale(${scale}) ${translate}`, opacity };
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
