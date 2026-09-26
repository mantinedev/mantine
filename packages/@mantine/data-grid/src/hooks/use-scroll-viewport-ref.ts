import React, { useCallback, useRef } from 'react';
import { assignRef, useIsomorphicEffect, useLatestRef } from '@mantine/hooks';

interface UseScrollViewportRefOptions {
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
  overflowRef: (node: HTMLElement | null) => void;
  userViewportRef: React.Ref<HTMLDivElement> | undefined;
}

export function useScrollViewportRef({
  scrollContainerRef,
  overflowRef,
  userViewportRef,
}: UseScrollViewportRefOptions): React.RefCallback<HTMLDivElement> {
  const latestUserViewportRef = useLatestRef(userViewportRef);
  const viewportNodeRef = useRef<HTMLDivElement | null>(null);
  const userViewportAttachment = useRef<{
    ref: typeof userViewportRef;
    cleanup: ReturnType<typeof assignRef>;
  } | null>(null);

  const detachUserViewportRef = useCallback(() => {
    const attachment = userViewportAttachment.current;
    userViewportAttachment.current = null;
    if (!attachment) {
      return;
    }
    if (typeof attachment.cleanup === 'function') {
      attachment.cleanup();
    } else {
      assignRef(attachment.ref, null);
    }
  }, []);

  const attachUserViewportRef = useCallback(
    (node: HTMLDivElement, userRef: typeof userViewportRef) => {
      userViewportAttachment.current = { ref: userRef, cleanup: assignRef(userRef, node) };
    },
    []
  );

  const viewportRef = useCallback(
    (node: HTMLDivElement | null) => {
      scrollContainerRef.current = node;
      viewportNodeRef.current = node;
      overflowRef(node);
      if (node) {
        attachUserViewportRef(node, latestUserViewportRef.current);
      }
      return () => {
        scrollContainerRef.current = null;
        viewportNodeRef.current = null;
        overflowRef(null);
        detachUserViewportRef();
      };
    },
    [scrollContainerRef, overflowRef]
  );

  useIsomorphicEffect(() => {
    const node = viewportNodeRef.current;
    if (!node || userViewportAttachment.current?.ref === userViewportRef) {
      return;
    }
    detachUserViewportRef();
    attachUserViewportRef(node, userViewportRef);
  }, [userViewportRef]);

  return viewportRef;
}
