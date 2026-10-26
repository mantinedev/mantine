'use client';

import { useState } from 'react';
import classes from './PresetFrame.module.css';

const WIDTHS = ['760', '920', '1080'];

interface PresetFrameProps {
  children: React.ReactNode;
}

export function PresetFrame({ children }: PresetFrameProps) {
  const [width, setWidth] = useState('1080');

  return (
    <div className={classes.root}>
      <div className={classes.bar}>
        <span>Preview pane width, as in the theme editor</span>
        <div className={classes.widths} role="group" aria-label="Preview width">
          {WIDTHS.map((value) => (
            <button
              key={value}
              type="button"
              className={classes.width}
              aria-pressed={value === width}
              onClick={() => setWidth(value)}
            >
              {value}px
            </button>
          ))}
        </div>
      </div>
      <div
        className={classes.frame}
        style={{ '--preview-width': `${width}px` } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
