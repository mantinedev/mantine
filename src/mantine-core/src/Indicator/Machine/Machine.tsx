import React, { useState, forwardRef, useMemo, useEffect } from 'react';
import { usePrevious } from '@mantine/hooks';
import { MachineNumber } from './MachineNumber';
import useStyles from './Machine.styles';

interface MachineNumberProps {
  value: number | string;
  max: number;
}

export const Machine = forwardRef<HTMLDivElement, MachineNumberProps>(({ value = 0, max }, ref) => {
  const [oldValue, setOldValue] = useState<number>();
  const [newValue, setNewValue] = useState<number>();
  const prevValueRef = usePrevious(value);

  useEffect(() => {
    if (typeof value === 'string') {
      setOldValue(undefined);
      setNewValue(undefined);
    } else if (typeof prevValueRef === 'string') {
      setOldValue(undefined);
      setNewValue(value);
    } else {
      setOldValue(prevValueRef);
      setNewValue(value);
    }
  }, [value, prevValueRef]);

  const numbers = useMemo(() => {
    if (typeof value === 'string') {
      return [];
    }

    if (value < 1) {
      return [0];
    }

    const result: number[] = [];
    let currentValue = value;

    if (typeof max === 'number') {
      currentValue = Math.min(max, currentValue);
    }

    while (currentValue >= 1) {
      result.push(currentValue % 10);
      currentValue /= 10;
      currentValue = Math.floor(currentValue);
    }

    result.reverse();
    return result;
  }, [value, max]);

  const { classes } = useStyles(null, { name: 'machine' });

  return typeof value === 'string' ? (
    <span ref={ref}>{value}</span>
  ) : (
    <span ref={ref} className={classes.base}>
      {numbers.map((number, i) => (
        <MachineNumber
          key={numbers.length - i - 1}
          value={number}
          oldOriginalNumber={oldValue}
          newOriginalNumber={newValue}
        />
      ))}
      {typeof max === 'number' && value > max && <span>+</span>}
    </span>
  );
});
