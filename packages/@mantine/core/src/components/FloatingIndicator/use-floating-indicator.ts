import { RefObject, useEffect, useRef, useState } from 'react';
import { useMutationObserver, useTimeout } from '@mantine/hooks';
import { getEnv } from '../../core';

function isParent(
  parentElement: HTMLElement | EventTarget | null,
  childElement: HTMLElement | null
) {
  if (!childElement || !parentElement) {
    return false;
  }

  let parent = childElement.parentNode;
  while (parent != null) {
    if (parent === parentElement) {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
}

interface UseFloatingIndicatorInput {
  target: HTMLElement | null | undefined;
  parent: HTMLElement | null | undefined;
  ref: RefObject<HTMLDivElement>;
  displayAfterTransitionEnd?: boolean;
}

export function useFloatingIndicator({
  target,
  parent,
  ref,
  displayAfterTransitionEnd,
}: UseFloatingIndicatorInput) {
  const transitionTimeout = useRef<number>();
  const [initialized, setInitialized] = useState(false);

  const [hidden, setHidden] = useState(
    typeof displayAfterTransitionEnd === 'boolean' ? displayAfterTransitionEnd : false
  );

  const updatePosition = () => {
    if (!target || !parent) {
      return;
    }

    const targetRect = target.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    const position = {
      top: targetRect.top - parentRect.top,
      left: targetRect.left - parentRect.left,
      width: targetRect.width,
      height: targetRect.height,
    };

    if (ref.current) {
      ref.current.style.transform = `translateY(${position.top}px) translateX(${position.left}px)`;
      ref.current.style.width = `${position.width}px`;
      ref.current.style.height = `${position.height}px`;
    }
  };

  const updatePositionWithoutAnimation = () => {
    window.clearTimeout(transitionTimeout.current);
    if (ref.current) {
      ref.current.style.transitionDuration = '0ms';
    }
    updatePosition();
    transitionTimeout.current = window.setTimeout(() => {
      if (ref.current) {
        ref.current.style.transitionDuration = '';
      }
    }, 30);
  };

  const targetResizeObserver = useRef<ResizeObserver>();
  const parentResizeObserver = useRef<ResizeObserver>();

  useEffect(() => {
    updatePosition();

    if (target) {
      targetResizeObserver.current = new ResizeObserver(updatePositionWithoutAnimation);
      targetResizeObserver.current.observe(target!);
      parentResizeObserver.current = new ResizeObserver(updatePositionWithoutAnimation);
      parentResizeObserver.current.observe(parent!);

      return () => {
        targetResizeObserver.current?.disconnect();
        parentResizeObserver.current?.disconnect();
      };
    }

    return undefined;
  }, [parent, target]);

  useEffect(() => {
    if (parent) {
      const handleTransitionEnd = (event: TransitionEvent) => {
        if (isParent(event.target, parent)) {
          updatePositionWithoutAnimation();
          setHidden(false);
        }
      };

      document.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        document.removeEventListener('transitionend', handleTransitionEnd);
      };
    }

    return undefined;
  }, [parent]);

  useTimeout(
    () => {
      // Prevents warning about state update without act
      if (getEnv() !== 'test') {
        setInitialized(true);
      }
    },
    20,
    { autoInvoke: true }
  );

  useMutationObserver(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
          updatePositionWithoutAnimation();
        }
      });
    },
    { attributes: true, attributeFilter: ['dir'] },
    () => document.documentElement
  );

  return { initialized, hidden };
}
