import React, { useState } from 'react';
import cx from 'clsx';
import { EyeOpenIcon, CodeIcon, ExternalLinkIcon, GitHubLogoIcon } from '@modulz/radix-icons';
import { Prism } from '@mantine/prism';
import { SegmentedControl, Center, Text, ActionIcon, Group } from '@mantine/core';
import * as GalleryComponents from '../../../../gallery';
import { GalleryComponent } from '../../types';
import useStyles from './ComponentCanvas.styles';

export function ComponentCanvas(props: GalleryComponent) {
  const [state, setState] = useState('preview');
  const classes = useStyles();
  const Component = GalleryComponents[props._component];

  return (
    <div className={classes.canvas}>
      <div className={classes.header}>
        <Group spacing="xs">
          <Text weight={500} style={{ marginRight: 15 }}>
            {props.attributes.title}
          </Text>

          <ActionIcon
            variant="outline"
            className={classes.action}
            title="View component in isolation"
            component="a"
            href={props.url}
            target="_blank"
          >
            <ExternalLinkIcon style={{ width: 14, height: 14 }} />
          </ActionIcon>

          <ActionIcon
            variant="outline"
            className={classes.action}
            title="View source on github"
            component="a"
            href={`https://github.com/mantinedev/mantine/tree/master/docs/src/gallery/${props._component}/${props._component}.tsx`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon style={{ width: 14, height: 14 }} />
          </ActionIcon>
        </Group>

        <SegmentedControl
          value={state}
          onChange={setState}
          data={[
            {
              value: 'preview',
              label: (
                <Center>
                  <EyeOpenIcon />
                  <div className={classes.controlLabel}>Preview</div>
                </Center>
              ),
            },
            {
              value: 'code',
              label: (
                <Center>
                  <CodeIcon />
                  <div className={classes.controlLabel}>Code</div>
                </Center>
              ),
            },
          ]}
        />
      </div>

      <div className={cx(classes.body, { [classes.bodyWithCode]: state === 'code' })}>
        {state === 'preview' ? (
          <div className={classes.preview}>
            <Component />
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
