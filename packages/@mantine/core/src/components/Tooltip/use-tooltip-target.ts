import { useEffect, useEffectEvent, useRef, useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';

export type TooltipTarget = React.RefObject<HTMLElement | null> | HTMLElement | null | string;

interface UseTooltipTargetInput {
  target: TooltipTarget | undefined;
  setReference: (node: HTMLElement | null) => void;
  getReferenceProps: () => Record<string, unknown>;
}

function resolveTarget(target: TooltipTarget | undefined): HTMLElement | null {
  if (!target) {
    return null;
  }

  if (target instanceof HTMLElement) {
    return target;
  }

  if (typeof target === 'string') {
    return document.querySelector<HTMLElement>(target);
  }

  return target.current;
}

export function useTooltipTarget({
  target,
  setReference,
  getReferenceProps,
}: UseTooltipTargetInput) {
  const [targetNode, setTargetNode] = useState<HTMLElement | null>(null);
  const targetNodeRef = useRef<HTMLElement | null>(null);

  useIsomorphicEffect(() => {
    const node = resolveTarget(target);

    if (node === targetNodeRef.current) {
      return;
    }

    targetNodeRef.current = node;
    setTargetNode(node);

    if (target) {
      setReference(node);
    }
  });

  const describedBy = targetNode
    ? (getReferenceProps()['aria-describedby'] as string | undefined)
    : undefined;

  useEffect(() => {
    if (!targetNode || !describedBy) {
      return undefined;
    }

    const previous = targetNode.getAttribute('aria-describedby');
    targetNode.setAttribute(
      'aria-describedby',
      previous ? `${previous} ${describedBy}` : describedBy
    );

    return () => {
      if (previous === null) {
        targetNode.removeAttribute('aria-describedby');
      } else {
        targetNode.setAttribute('aria-describedby', previous);
      }
    };
  }, [targetNode, describedBy]);

  const callReferenceHandler = useEffectEvent((name: 'onFocus' | 'onBlur', event: FocusEvent) => {
    const handler = getReferenceProps()[name];

    if (typeof handler === 'function') {
      handler({
        nativeEvent: event,
        type: event.type,
        target: event.target,
        currentTarget: targetNode,
        relatedTarget: event.relatedTarget,
        preventDefault: () => event.preventDefault(),
        stopPropagation: () => event.stopPropagation(),
      });
    }
  });

  useEffect(() => {
    if (!targetNode) {
      return undefined;
    }

    const handleFocus = (event: FocusEvent) => callReferenceHandler('onFocus', event);
    const handleBlur = (event: FocusEvent) => callReferenceHandler('onBlur', event);

    targetNode.addEventListener('focusin', handleFocus);
    targetNode.addEventListener('focusout', handleBlur);

    return () => {
      targetNode.removeEventListener('focusin', handleFocus);
      targetNode.removeEventListener('focusout', handleBlur);
    };
  }, [targetNode]);
}
