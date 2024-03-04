import React, { RefObject, useEffect, useRef } from 'react';
import classes from './FloatingIndicator.module.css';

interface FloatingIndicatorProps {
  target: HTMLElement | null | undefined;
  parent: HTMLElement | null | undefined;
}

function useMutationObserver<Element extends HTMLLIElement>(
  callback: MutationCallback,
  options: MutationObserverInit,
  target?: HTMLElement | (() => HTMLElement) | null
) {
  const observer = useRef<MutationObserver>();
  const ref: RefObject<Element> = useRef(null);

  useEffect(() => {
    const targetElement = typeof target === 'function' ? target() : target;

    if (targetElement || ref.current) {
      observer.current = new MutationObserver(callback);
      observer.current.observe(targetElement || ref.current!, options);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [callback, options]);

  return ref;
}

function useFloatingIndicator(
  target: HTMLElement | null | undefined,
  parent: HTMLElement | null | undefined,
  ref: RefObject<HTMLDivElement>
) {
  const transitionTimeout = useRef<number>();

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
}

export function FloatingIndicator({ target, parent }: FloatingIndicatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  useFloatingIndicator(target, parent, ref);

  if (!target || !parent) {
    return null;
  }

  return (
    <div className={classes.root} ref={ref} style={{ color: 'red' }}>
      Indicator
    </div>
  );
}
