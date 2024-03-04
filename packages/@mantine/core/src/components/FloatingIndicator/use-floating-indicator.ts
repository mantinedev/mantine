import { RefObject, useEffect, useRef, useState } from 'react';
import { useMutationObserver, useTimeout } from '@mantine/hooks';
import { getEnv } from '../../core';

export function useFloatingIndicator(
  target: HTMLElement | null | undefined,
  parent: HTMLElement | null | undefined,
  ref: RefObject<HTMLDivElement>
) {
  const transitionTimeout = useRef<number>();
  const [initialized, setInitialized] = useState(false);

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

    ref.current!.style.transform = `translateY(${position.top}px) translateX(${position.left}px)`;
    ref.current!.style.width = `${position.width}px`;
    ref.current!.style.height = `${position.height}px`;
  };

  const updatePositionWithoutAnimation = () => {
    window.clearTimeout(transitionTimeout.current);
    ref.current!.style.transitionDuration = '0ms';
    updatePosition();
    transitionTimeout.current = window.setTimeout(() => {
      ref.current!.style.transitionDuration = '';
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

  return { initialized };
}
