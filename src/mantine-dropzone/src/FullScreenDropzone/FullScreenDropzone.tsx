import React, { useState } from 'react';
import { Portal, Transition, MantineNumberSize } from '@mantine/core';
import { useIsomorphicEffect } from '@mantine/hooks';
import { Dropzone, DropzoneProps } from '../Dropzone';
import useStyles from './FullscreenDropzone.styles';

export interface FullScreenDropzoneProps extends DropzoneProps {
  /** Space between dropzone and viewport edges */
  offset?: MantineNumberSize;
}

export function FullScreenDropzone({
  className,
  style,
  offset = 'xl',
  ...others
}: FullScreenDropzoneProps) {
  const { classes, cx } = useStyles({ offset });
  const [visible, setVisible] = useState(false);

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault();
    setVisible(true);
  };

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault();
    setVisible(false);
  };

  useIsomorphicEffect(() => {
    document.addEventListener('dragover', handleDragOver, false);
    document.addEventListener('dragleave', handleDragLeave, false);
    document.addEventListener('drop', handleDragLeave, false);

    return () => {
      document.removeEventListener('dragover', handleDragOver, false);
      document.removeEventListener('dragleave', handleDragLeave, false);
      document.removeEventListener('drop', handleDragLeave, false);
    };
  }, []);

  return (
    <Portal>
      <Transition transition="fade" duration={200} timingFunction="ease" mounted={visible}>
        {(transitionStyles) => (
          <div style={{ ...style, ...transitionStyles }} className={cx(classes.wrapper, className)}>
            <Dropzone {...others} className={classes.dropzone} />
          </div>
        )}
      </Transition>
    </Portal>
  );
}

FullScreenDropzone.displayName = '@mantine/dropzone/FullScreenDropzone';
