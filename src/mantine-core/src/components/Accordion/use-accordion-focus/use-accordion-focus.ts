import { useRef } from 'react';
import { useDidUpdate } from '@mantine/hooks';

export function useAccordionFocus(itemsCount: number) {
  const controlsRefs = useRef<HTMLButtonElement[]>([]);

  const handleItemKeydown = (index: number) => (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.code === 'ArrowDown') {
      event.preventDefault();
      const nextFocusElement = controlsRefs.current[index + 1];
      if (nextFocusElement) {
        nextFocusElement.focus();
      } else {
        controlsRefs.current[0]?.focus();
      }
    }

    if (event.code === 'ArrowUp') {
      event.preventDefault();
      const previousFocusElement = controlsRefs.current[index - 1];
      if (previousFocusElement) {
        previousFocusElement.focus();
      } else {
        controlsRefs.current[controlsRefs.current.length - 1]?.focus();
      }
    }
  };

  const assignControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs.current[index] = node;
  };

  useDidUpdate(() => {
    controlsRefs.current = controlsRefs.current.slice(0, itemsCount);
  }, [itemsCount]);

  return { handleItemKeydown, assignControlRef };
}
