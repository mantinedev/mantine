import { useEffect, useRef } from 'react';
import { ScrollArea } from '@mantine/core';
import { useTimePickerContext } from '../TimePicker.context';
import { TimeControl } from './TimeControl';

function isElementVisibleInScrollContainer(
  element: HTMLElement | null | undefined,
  container: HTMLElement | null | undefined
) {
  if (!element || !container) {
    return false;
  }

  const elementRect = element.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();

  // Check if element is within container's visible bounds
  const isVisible =
    elementRect.top >= containerRect.top &&
    elementRect.bottom <= containerRect.bottom &&
    elementRect.left >= containerRect.left &&
    elementRect.right <= containerRect.right;

  return isVisible;
}

function getValuesRange(min: number, max: number, step: number) {
  const range = [];
  for (let i = min; i <= max; i += step) {
    range.push(i);
  }
  return range;
}

interface TimeControlsListProps {
  min: number;
  max: number;
  step: number;
  value: number | null;
  onSelect: (value: number) => void;
  reversed: boolean | undefined;
}

export function TimeControlsList({
  min,
  max,
  step,
  value,
  onSelect,
  reversed,
}: TimeControlsListProps) {
  const ctx = useTimePickerContext();
  const ref = useRef<HTMLDivElement>(null);
  const range = getValuesRange(min, max, step);
  const controls = (reversed ? range.reverse() : range).map((control) => (
    <TimeControl key={control} value={control} active={value === control} onSelect={onSelect} />
  ));

  useEffect(() => {
    if (value !== null) {
      const scrollToValue = () => {
        const target = ref.current?.querySelector<HTMLButtonElement>(`[data-value="${value}"]`);
        if (!isElementVisibleInScrollContainer(target, ref.current)) {
          target?.scrollIntoView({ block: 'nearest' });
        }
      };
      requestAnimationFrame(scrollToValue);
    }
  }, [value]);

  return (
    <ScrollArea
      h={ctx.maxDropdownContentHeight}
      type="never"
      viewportRef={ref}
      {...ctx.getStyles('scrollarea')}
      {...ctx.scrollAreaProps}
    >
      <div {...ctx.getStyles('controlsList')}>{controls}</div>
    </ScrollArea>
  );
}

TimeControlsList.displayName = '@mantine/dates/TimeControlsList';
