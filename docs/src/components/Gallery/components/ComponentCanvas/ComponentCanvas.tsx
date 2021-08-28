import React, { useState } from 'react';
import cx from 'clsx';
import { Prism } from '@mantine/prism';
import { MantineProvider, useMantineTheme } from '@mantine/core';
import * as GalleryComponents from '../../../../gallery';
import { GalleryPreview } from '../GalleryPreview/GalleryPreview';
import { GalleryComponent } from '../../types';
import { CanvasHeader } from './CanvasHeader/CanvasHeader';
import useStyles from './ComponentCanvas.styles';

export function ComponentCanvas(props: GalleryComponent & { zIndex: number }) {
  const [state, setState] = useState('preview');
  const [primaryColor, setPrimaryColor] = useState('blue');
  const theme = useMantineTheme();
  const classes = useStyles();
  const Component = GalleryComponents[props._component];

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
          <div className={classes.preview} style={{ zIndex: props.zIndex }}>
            <GalleryPreview canvas={props.attributes.canvas}>
              <MantineProvider theme={{ primaryColor, colorScheme: theme.colorScheme }}>
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
