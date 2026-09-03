export type DrawerStackPosition = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerStackStyleInput {
  /** Resolved drawer position (after rtl handling) */
  position: DrawerStackPosition;

  /** Position of the drawer in the stack, 0 is the top drawer */
  depth: number;

  /** Progress of the top drawer swipe-to-close gesture in `[0, 1]`, moves stacked drawers one step toward the front */
  dragProgress?: number;

  /** Size of the top drawer along the position axis in px, `null` if unknown */
  topSize: number | null;

  /** Size of this drawer along the position axis in px, `null` if unknown */
  ownSize: number | null;

  /** Distance in px by which each stacked card peeks past the card in front of it @default 9 */
  offsetStep?: number;

  /** Size reduction in px per depth step @default 14 */
  sizeStep?: number;
}

export interface DrawerStackStyle {
  translate: string;
  scale: number;
  transformOrigin: string;
}

const origins: Record<DrawerStackPosition, string> = {
  left: 'right center',
  right: 'left center',
  top: 'center bottom',
  bottom: 'center top',
};

function getTranslate(position: DrawerStackPosition, shift: number) {
  switch (position) {
    case 'left':
      return `${shift}px 0px`;
    case 'right':
      return `${-shift}px 0px`;
    case 'top':
      return `0px ${shift}px`;
    default:
      return `0px ${-shift}px`;
  }
}

/** Panel transform of a stacked drawer: scaled down by a fixed step toward the edge that faces away from the screen edge and shifted so that a constant strip peeks past the drawer in front of it. A larger drawer is not scaled to fit, its excess lies beyond the screen edge */
export function getDrawerStackStyle({
  position,
  depth,
  dragProgress = 0,
  topSize,
  ownSize,
  offsetStep = 9,
  sizeStep = 14,
}: DrawerStackStyleInput): DrawerStackStyle {
  const d = Math.max(0, depth - dragProgress);
  const transformOrigin = origins[position];

  if (d === 0) {
    return { translate: '0px 0px', scale: 1, transformOrigin };
  }

  if (!ownSize || ownSize <= 0) {
    return { translate: getTranslate(position, d * offsetStep), scale: 1, transformOrigin };
  }

  const scale = Math.max(0, 1 - (d * sizeStep) / ownSize);
  const edgeShift = topSize && topSize > 0 ? topSize - ownSize : 0;
  const shift = edgeShift * Math.min(d, 1) + d * offsetStep;

  return {
    translate: getTranslate(position, Number(shift.toFixed(2))),
    scale: Number(scale.toFixed(4)),
    transformOrigin,
  };
}
