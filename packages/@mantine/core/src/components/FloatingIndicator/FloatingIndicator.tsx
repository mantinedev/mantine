import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
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

function useElementPosition(
  target: HTMLElement | null | undefined,
  parent: HTMLElement | null | undefined,
  ref: RefObject<HTMLDivElement>
) {
  const updatePosition = () => {
    if (!target || !parent) {
      return { top: 0, left: 0, width: 0, height: 0 };
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

  const targetResizeObserver = useRef<ResizeObserver>();
  const parentResizeObserver = useRef<ResizeObserver>();

  useEffect(() => {
    updatePosition();

    if (target) {
      targetResizeObserver.current = new ResizeObserver(updatePosition);
      targetResizeObserver.current.observe(target!);
      parentResizeObserver.current = new ResizeObserver(updatePosition);
      parentResizeObserver.current.observe(parent!);

      return () => {
        targetResizeObserver.current?.disconnect();
        parentResizeObserver.current?.disconnect();
      };
    }
  }, [parent, target]);

  useMutationObserver(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
          updatePosition();
        }
      });
    },
    { attributes: true, attributeFilter: ['dir'] },
    () => document.documentElement
  );
}

export function FloatingIndicator({ target, parent }: FloatingIndicatorProps) {
  const ref = useRef<HTMLDivElement>(null);
  useElementPosition(target, parent, ref);

  if (!target || !parent) {
    return null;
  }

  return (
    <div className={classes.root} ref={ref} style={{ color: 'red' }}>
      Indicator
    </div>
  );
}
