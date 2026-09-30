import { useState } from 'react';
import { useIsomorphicEffect } from '@mantine/hooks';
import type { ActiveMentionQuery } from './detect-query';
import { getCaretCoordinates } from './utils/get-caret-coordinates';

interface UseMentionsOverlayPositionInput {
  controlRef: React.RefObject<HTMLTextAreaElement | HTMLInputElement | null>;
  overlayRefs: React.RefObject<HTMLElement | null>[];
  anchorMode: 'caret' | 'left';
  query: ActiveMentionQuery | null;
  singleLine: boolean;
  value: string;
}

export function useMentionsOverlayPosition({
  controlRef,
  overlayRefs,
  anchorMode,
  query,
  singleLine,
  value,
}: UseMentionsOverlayPositionInput) {
  const [caretStyle, setCaretStyle] = useState<React.CSSProperties | null>(null);

  const updateCaretAnchor = () => {
    const control = controlRef.current;
    if (anchorMode !== 'caret' || !query || !control) {
      return;
    }

    const coords = getCaretCoordinates(control, query.queryStart);
    setCaretStyle({
      top: singleLine ? 0 : coords.top - control.scrollTop,
      left: coords.left - control.scrollLeft,
      height: singleLine ? control.clientHeight : coords.height,
    });
  };

  const syncOverlayScroll = () => {
    const control = controlRef.current;
    if (!control) {
      return;
    }

    for (const overlayRef of overlayRefs) {
      if (overlayRef.current) {
        overlayRef.current.scrollTop = control.scrollTop;
        overlayRef.current.scrollLeft = control.scrollLeft;
      }
    }
  };

  useIsomorphicEffect(syncOverlayScroll);
  useIsomorphicEffect(updateCaretAnchor, [query, value, anchorMode, singleLine]);

  const handleScroll = () => {
    syncOverlayScroll();
    updateCaretAnchor();
  };

  return { caretStyle, handleScroll };
}
