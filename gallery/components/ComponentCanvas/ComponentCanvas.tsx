import React, { useState } from 'react';
import { Prism } from '@mantine/prism';
import { MantineProvider, Box } from '@mantine/core';
import * as GalleryComponents from '../../gallery';
import { GalleryComponent } from '../../data';
import { GalleryPreview } from '../GalleryPreview/GalleryPreview';
import { CanvasHeader } from './CanvasHeader/CanvasHeader';
import useStyles from './ComponentCanvas.styles';
import { CodeStateControl } from './CodeStateControl/CodeStateControl';

export function ComponentCanvas(props: GalleryComponent & { zIndex: number }) {
  const [state, setState] = useState('preview');
  const [primaryColor, setPrimaryColor] = useState('blue');
  const [codeState, setCodeState] = useState<'code' | 'mockdata'>('code');
  const { classes, cx } = useStyles();
  const Component = GalleryComponents[props.component];
  const mockdata = props.attributes.props;

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
          <Box sx={{ position: 'relative' }}>
            {mockdata && (
              <CodeStateControl
                state={codeState}
                onToggle={() =>
                  setCodeState((current) => (current === 'code' ? 'mockdata' : 'code'))
                }
              />
            )}

            <Prism
              language={codeState === 'code' ? 'tsx' : 'json'}
              classNames={{ code: classes.code }}
            >
              {codeState === 'code' ? props.code : JSON.stringify(mockdata, null, 2)}
            </Prism>
          </Box>
        )}
      </div>
    </div>
  );
}
