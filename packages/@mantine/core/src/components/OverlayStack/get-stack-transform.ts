export interface StackTransformInput {
  kind: 'modal' | 'drawer';
  position?: 'top' | 'bottom' | 'left' | 'right';
  depth: number;
  dragProgress?: number;
  scaleStep?: number;
  offsetStep?: number;
  opacityStep?: number;
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
  } = input;

  const d = Math.max(0, depth - dragProgress);

  if (kind === 'modal') {
    const modalOffsetStep = input.offsetStep ?? 9;
    return { transform: `translateY(${-(d * modalOffsetStep)}px)`, opacity: 1 };
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
