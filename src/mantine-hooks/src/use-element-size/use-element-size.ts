import { useResizeObserver } from '../use-resize-observer/use-resize-observer';

export function useElementSize<T extends HTMLElement = any>() {
  const [ref, { width, height }] = useResizeObserver<T>();

  return { ref, width, height } as const;
}
