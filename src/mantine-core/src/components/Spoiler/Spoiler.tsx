import React, { useRef, useState, useEffect } from 'react';
import cx from 'clsx';
import { DefaultProps } from '@mantine/core/dist/mantine-types/src';
import classes from './Spoiler.styles.less';

interface SpoilerProps extends DefaultProps, React.HTMLProps<HTMLDivElement> {
  maxHeight: number;
  hideLabel: React.ReactNode;
  showLabel: React.ReactNode;
  controlRef?: React.MutableRefObject<HTMLButtonElement> | React.RefCallback<HTMLButtonElement>;
  overlayColor?: string;
}

export default function Spoiler({
  className,
  children,
  maxHeight = 100,
  hideLabel,
  showLabel,
  overlayColor = '#fff',
  ...others
}: SpoilerProps) {
  const [show, setShowState] = useState(false);
  const [spoiler, setSpoilerState] = useState(false);
  const contentRef = useRef(null);

  const spoilerMoreContent = show ? hideLabel : showLabel;

  useEffect(() => {
    setSpoilerState(maxHeight < contentRef.current.clientHeight);
  }, [maxHeight, children]);

  return (
    <div className={cx(classes.spoiler, { [classes.shown]: show }, className)} {...others}>
      <div
        className={cx({ [classes.hiddenContent]: !show })}
        style={{ maxHeight: !show && maxHeight }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
      {spoiler && (
        <button
          type="button"
          ref={contentRef}
          className={classes.more}
          onClick={() => setShowState((opened) => !opened)}
          style={{
            backgroundImage: `linear-gradient(0deg, ${overlayColor} 20%, rgba(0, 0, 0, 0) 1000%)`,
          }}
        >
          {spoilerMoreContent}
        </button>
      )}
    </div>
  );
}

Spoiler.displayName = '@mantine/core/Spoiler';
