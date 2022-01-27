import React, { useState } from 'react';
import { Prism } from '@mantine/prism';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import rtlPlugin from 'stylis-plugin-rtl';
import * as GalleryComponents from '../../gallery';
import { GalleryComponent } from '../../data';
import { useGalleryDirection } from '../DirectionContext/DirectionContext';
import { GalleryPreview } from '../GalleryPreview/GalleryPreview';
import { CanvasHeader } from './CanvasHeader/CanvasHeader';
import useStyles from './ComponentCanvas.styles';

export function ComponentCanvas(props: GalleryComponent & { zIndex: number }) {
  const [state, setState] = useState('preview');
  const [primaryColor, setPrimaryColor] = useState('blue');
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();
  const Component = GalleryComponents[props.component];
  const dir = useGalleryDirection();

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
              <MantineProvider
                theme={{ primaryColor, colorScheme: theme.colorScheme, dir }}
                emotionOptions={
                  dir === 'rtl'
                    ? { key: 'mantine-rtl', stylisPlugins: [rtlPlugin] }
                    : { key: 'mantine' }
                }
              >
                <Component {...props.attributes.props} />
              </MantineProvider>
            </GalleryPreview>
          </div>
        ) : (
          <Prism language="tsx" className={classes.code}>
            {props.code}
          </Prism>
        )}
      </div>
    </div>
  );
}
