import React, { useState, forwardRef, useEffect, useMemo } from 'react';
import { usePrevious } from '@mantine/hooks';
import useStyles from './MachineNumber.styles';

interface MachineNumberProps {
  value: number | string;
  newOriginalNumber: number;
  oldOriginalNumber: number;
}

export const MachineNumber = forwardRef<HTMLDivElement, MachineNumberProps>((props, ref) => {
  const [oldNumber, setOldNumber] = useState(props.value);
  const [newNumber, setNewNumber] = useState(props.value);
  const [scrollAnimationDirection, setScrollAnimationDirection] = useState<'up' | 'down'>('up');
  const [isActive, setIsActive] = useState(false);
  const prevValueRef = usePrevious(props.value);

  const scrollByDir = (dir: 'up' | 'down') => {
    setIsActive(true);
    setScrollAnimationDirection(dir);
    setTimeout(() => {
      setIsActive(false);
    }, 180);
  };

  const scroll = () => {
    const { newOriginalNumber, oldOriginalNumber } = props;

    if (newOriginalNumber == null || oldOriginalNumber == null) {
      return;
    }

    if (newOriginalNumber > oldOriginalNumber) {
      scrollByDir('up');
    } else if (newOriginalNumber < oldOriginalNumber) {
      scrollByDir('down');
    }
  };

  useEffect(() => {
    setOldNumber(prevValueRef);
    setNewNumber(props.value);
    scroll();
  }, [props.value, prevValueRef]);

  const { classes, cx } = useStyles(null, { name: 'MachineNumber' });

  const newNumberScrollAnimationClass = useMemo(
    () =>
      isActive
        ? scrollAnimationDirection === 'up'
          ? classes.currentNumberScrollUp
          : classes.currentNumberScrollDown
        : null,
    [isActive, scrollAnimationDirection]
  );
  const oldNumberScrollAnimationClass = useMemo(
    () =>
      isActive
        ? scrollAnimationDirection === 'up'
          ? classes.oldNumberScrollUp
          : classes.oldNumberScrollDown
        : null,
    [isActive, scrollAnimationDirection]
  );
  return (
    <span ref={ref} className={classes.baseNumber}>
      {(oldNumber && (
        <span
          className={cx(classes.oldNumber, classes.currentNumberTop, oldNumberScrollAnimationClass)}
        >
          {oldNumber}
        </span>
      )) ||
        null}
      <span>
        <span className={cx(classes.currentNumber, newNumberScrollAnimationClass)}>
          {newNumber}
        </span>
      </span>
      {(oldNumber && (
        <span
          className={cx(classes.oldNumber, classes.oldNumberBottom, oldNumberScrollAnimationClass)}
        >
          {oldNumber}
        </span>
      )) ||
        null}
    </span>
  );
});
