import React, { useState } from 'react';
import cx from 'clsx';
import { Link } from 'gatsby';
import {
  EyeOpenIcon,
  CodeIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  InfoCircledIcon,
} from '@modulz/radix-icons';
import { Prism } from '@mantine/prism';
import {
  SegmentedControl,
  Center,
  Text,
  ActionIcon,
  Group,
  MenuItem,
  Menu,
  MenuLabel,
} from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import * as GalleryComponents from '../../../../gallery';
import { GalleryPreview } from '../GalleryPreview/GalleryPreview';
import { GalleryComponent } from '../../types';
import { MantineIcon } from './icons/MantineIcon';
import { NpmIcon } from './icons/NpmIcon';
import useStyles from './ComponentCanvas.styles';

export function ComponentCanvas(props: GalleryComponent) {
  const [state, setState] = useState('preview');
  const classes = useStyles();
  const Component = GalleryComponents[props._component];

  const dependencies = props.attributes.dependencies.map((dependency) => {
    if (dependency.trim().startsWith('/')) {
      const componentName = dependency.split('/')[2].split('-').map(upperFirst).join('');
      return (
        <MenuItem component={Link} to={dependency} icon={<MantineIcon />}>
          {componentName}
        </MenuItem>
      );
    }

    return (
      <MenuItem
        component="a"
        href={`https://www.npmjs.com/package/${dependency}`}
        target="_blank"
        icon={<NpmIcon />}
      >
        {dependency}
      </MenuItem>
    );
  });

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

          <Menu
            withArrow
            placement="end"
            position="bottom"
            transition="pop-top-right"
            transitionDuration={100}
            control={
              <ActionIcon className={classes.action} title="Component dependencies">
                <InfoCircledIcon style={{ width: 14, height: 14 }} />
              </ActionIcon>
            }
          >
            <MenuLabel>Component dependencies</MenuLabel>
            {dependencies}
          </Menu>
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
            <GalleryPreview canvas={props.attributes.canvas}>
              <Component />
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
