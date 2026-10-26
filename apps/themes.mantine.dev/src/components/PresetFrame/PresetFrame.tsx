'use client';

import { useEffect, useRef } from 'react';
import { isEmbedded, postToEditor, subscribeToEditor } from '../PresetProvider/embedded-bridge';
import classes from './PresetFrame.module.css';

interface PresetFrameProps {
  children: React.ReactNode;
}

export function PresetFrame({ children }: PresetFrameProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || !isEmbedded()) {
      return undefined;
    }

    const postHeight = () =>
      postToEditor({ type: 'theme-editor:resize', height: Math.ceil(node.offsetHeight) });

    const observer = new ResizeObserver(postHeight);
    observer.observe(node);
    const unsubscribe = subscribeToEditor(postHeight);

    return () => {
      observer.disconnect();
      unsubscribe();
    };
  }, []);

  return (
    <div ref={ref} className={classes.root}>
      {children}
    </div>
  );
}
