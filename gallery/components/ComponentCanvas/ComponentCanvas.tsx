import React, { useState } from 'react';
import { Prism } from '@mantine/prism';
import { MantineProvider } from '@mantine/core';
import * as GalleryComponents from '../../gallery';
import { GalleryComponent } from '../../data';
import { GalleryPreview } from '../GalleryPreview/GalleryPreview';
import { CanvasHeader } from './CanvasHeader/CanvasHeader';
import useStyles from './ComponentCanvas.styles';

export function ComponentCanvas(props: GalleryComponent & { zIndex: number }) {
  const [state, setState] = useState('preview');
  const [primaryColor, setPrimaryColor] = useState('blue');
  const { classes, cx } = useStyles();
  const Component = GalleryComponents[props.component];

  return (
    <div className={classes.canvas}>
      <CanvasHeader
        {...props}
        state={state}
        primaryColor={primaryColor}
        onStateChange={setState}
        onPrimaryColorChange={setPrimaryColor}
      />

      <div
        className={cx(classes.body, {
          [classes.bodyWithCode]: state === 'code',
          [classes.bodyRaw]: !props.attributes.canvas.center,
        })}
      >
        {state === 'preview' ? (
          <div
            className={cx(classes.preview, { [classes.previewDimmed]: props.attributes.dimmed })}
            style={{ zIndex: props.zIndex }}
          >
            <GalleryPreview canvas={props.attributes.canvas}>
              <MantineProvider inherit theme={{ primaryColor }}>
                <Component {...props.attributes.props} />
              </MantineProvider>
            </GalleryPreview>
          </div>
        ) : (
          <Prism language="tsx" classNames={{ code: classes.code }}>
            {props.code}
          </Prism>
        )}
      </div>
    </div>
  );
}
