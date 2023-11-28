import React, { cloneElement, forwardRef } from 'react';
import { createEventHandler, isElement, useProps } from '../../../core';
import { useFlipContext } from '../Flip.context';

export interface FlipTargetProps {
  /** Target element */
  children: React.ReactNode;

  /** Key of the prop that should be used to get element ref */
  refProp?: string;
}

const defaultProps: Partial<FlipTargetProps> = {
  refProp: 'ref',
};

export const FlipTarget = forwardRef<HTMLDivElement, FlipTargetProps>((props, ref) => {
  const { children, refProp, ...others } = useProps('MenuTarget', defaultProps, props);

  if (!isElement(children)) {
    throw new Error('Flip.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported');
  }

  const ctx = useFlipContext();

  const onClick = createEventHandler(
    children.props.onClick,
    () => ctx.toggleFlip()
  );

  return (
    <div ref={ref} {...others}>
      {cloneElement(children, {
        onClick,
        'data-flipped': ctx.flipped ? true : undefined,
      })}
    </div>
  );
});

FlipTarget.displayName = '@mantine/core/FlipTarget';
