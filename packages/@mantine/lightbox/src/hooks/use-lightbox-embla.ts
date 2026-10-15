import { useMemo, useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useLatestRef } from '@mantine/hooks';

type WatchDragOption = EmblaOptionsType['watchDrag'];

function createWatchDrag(
  getOption: () => WatchDragOption,
  zoomedRef: React.RefObject<boolean>
): WatchDragOption {
  return (emblaApi, event) => {
    if (zoomedRef.current) {
      return false;
    }

    const option = getOption();

    if (typeof option === 'function') {
      return option(emblaApi, event);
    }

    return option ?? true;
  };
}

interface UseLightboxEmblaInput {
  emblaOptions: EmblaOptionsType | undefined;
  loop: boolean | undefined;
  startIndex: number;
  dir: 'ltr' | 'rtl';
  zoomed: boolean;
}

export function useLightboxEmbla({
  emblaOptions,
  loop,
  startIndex,
  dir,
  zoomed,
}: UseLightboxEmblaInput) {
  const zoomedRef = useLatestRef(zoomed);
  const emblaOptionsRef = useLatestRef(emblaOptions);
  const breakpointWatchDragRef = useRef<Record<string, WatchDragOption>>({});

  const resolvedEmblaOptions = useMemo(() => {
    if (!emblaOptions?.breakpoints) {
      breakpointWatchDragRef.current = {};
      return emblaOptions;
    }

    const watchDragOptions: Record<string, WatchDragOption> = {};

    const breakpoints = Object.fromEntries(
      Object.entries(emblaOptions.breakpoints).map(([query, value]) => {
        const { loop: _loop, startIndex: _startIndex, watchDrag, ...rest } = value ?? {};
        watchDragOptions[query] = watchDrag;

        return [
          query,
          watchDrag === undefined
            ? rest
            : {
                ...rest,
                watchDrag: createWatchDrag(() => breakpointWatchDragRef.current[query], zoomedRef),
              },
        ];
      })
    );

    breakpointWatchDragRef.current = watchDragOptions;
    return { ...emblaOptions, breakpoints };
  }, [emblaOptions]);

  return useEmblaCarousel({
    direction: dir,
    ...resolvedEmblaOptions,
    loop,
    startIndex,
    watchDrag: createWatchDrag(() => emblaOptionsRef.current?.watchDrag, zoomedRef),
  });
}
