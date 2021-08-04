import React, { useState } from 'react';
import cx from 'clsx';
import { usePopper } from 'react-popper';
import { useBooleanToggle } from '@mantine/hooks';
import useStyles from './Popper.styles';
import { Portal } from '../Portal/Portal';

export interface PopperProps {
  position: 'top' | 'left' | 'bottom' | 'right';
  placement: 'start' | 'center' | 'end';
  gutter: number;
  arrowSize: number;
  withArrow: boolean;
}

export function Popper({ position, placement, gutter, arrowSize, withArrow }: PopperProps) {
  const padding = withArrow ? gutter + arrowSize : gutter;
  const classes = useStyles({ arrowSize });
  const [visible, toggle] = useBooleanToggle(true);

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement === 'center' ? position : `${position}-${placement}`,
    modifiers: [{ name: 'offset', options: { offset: [0, padding] } }],
  });

  return (
    <>
      <button type="button" ref={setReferenceElement} onClick={() => toggle()}>
        Reference element
      </button>

      {visible && (
        <Portal zIndex={1000}>
          <div
            ref={setPopperElement}
            style={{ ...styles.popper, background: 'blue', color: 'white' }}
            {...attributes.popper}
          >
            Popper element
            <div className={cx(classes.arrow, classes[position], classes[placement])} />
          </div>
        </Portal>
      )}
    </>
  );
}

Popper.displayName = '@mantine/core/Popper';
