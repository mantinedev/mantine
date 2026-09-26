import { useCallback, useEffect, useRef } from 'react';
import { safePolygon, HandleCloseContext } from '@floating-ui/react';
import { useCallbackRef, useLatestRef } from '@mantine/hooks';
import { useDirection } from '../../core';
import type { CascaderOption, CascaderSafeAreaPolygonOptions } from './Cascader';

export interface CascaderSafeAreaArmInput {
  level: number;
  reference: HTMLElement;
  floating: HTMLElement;
  clientX: number;
  clientY: number;
}

export interface UseCascaderSafeAreaInput {
  safeAreaPolygon: boolean | CascaderSafeAreaPolygonOptions | undefined;
  onFlush: (level: number, option: CascaderOption) => void;
}

export function useCascaderSafeArea({ safeAreaPolygon, onFlush }: UseCascaderSafeAreaInput) {
  const { dir } = useDirection();
  const enabled = Boolean(safeAreaPolygon);

  const optionsRef = useLatestRef<CascaderSafeAreaPolygonOptions | undefined>(
    typeof safeAreaPolygon === 'object' ? safeAreaPolygon : undefined
  );

  const dirRef = useLatestRef(dir);

  const handleFlush = useCallbackRef(onFlush);

  const blockedLevelRef = useRef<number | null>(null);
  const pendingRef = useRef<{ level: number; option: CascaderOption } | null>(null);
  const cleanupRef = useRef<() => void>(() => {});
  const generationRef = useRef(0);

  const disarm = useCallback(() => {
    generationRef.current += 1;
    cleanupRef.current();
    cleanupRef.current = () => {};
    blockedLevelRef.current = null;
    pendingRef.current = null;
  }, []);

  const arm = useCallback(
    ({ level, reference, floating, clientX, clientY }: CascaderSafeAreaArmInput) => {
      disarm();
      const generation = generationRef.current;
      const ownerDocument = floating.ownerDocument;

      const handleMouseMove = safePolygon(optionsRef.current)({
        x: clientX,
        y: clientY,
        placement: dirRef.current === 'rtl' ? 'left-start' : 'right-start',
        elements: { domReference: reference, floating },
        onClose: () => {
          if (generationRef.current !== generation) {
            return;
          }

          const pending = pendingRef.current;
          pendingRef.current = null;
          disarm();

          if (pending) {
            handleFlush(pending.level, pending.option);
          }
        },
      } as unknown as HandleCloseContext);

      blockedLevelRef.current = level;
      ownerDocument.addEventListener('mousemove', handleMouseMove);
      cleanupRef.current = () => ownerDocument.removeEventListener('mousemove', handleMouseMove);
    },
    [disarm]
  );

  useEffect(() => disarm, [disarm]);

  useEffect(() => {
    if (!enabled) {
      disarm();
    }
  }, [enabled, disarm]);

  const isBlocked = (level: number) =>
    blockedLevelRef.current !== null && level <= blockedLevelRef.current;

  const setPending = (level: number, option: CascaderOption) => {
    pendingRef.current = { level, option };
  };

  const clearPending = (level: number, option: CascaderOption) => {
    if (pendingRef.current?.level === level && pendingRef.current?.option.value === option.value) {
      pendingRef.current = null;
    }
  };

  return { enabled, arm, disarm, isBlocked, setPending, clearPending };
}
