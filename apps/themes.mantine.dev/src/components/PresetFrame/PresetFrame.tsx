'use client';

import { useEffect, useRef } from 'react';
import { isEmbedded, postToEditor } from '../PresetProvider/embedded-bridge';
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

    const observer = new ResizeObserver(() => {
      postToEditor({ type: 'theme-editor:resize', height: Math.ceil(node.offsetHeight) });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={classes.root}>
      {children}
    </div>
  );
}
