import React from 'react';
import { Link } from 'gatsby';
import {
  EyeOpenIcon,
  CodeIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  InfoCircledIcon,
} from '@modulz/radix-icons';
import { Group, Text, ActionIcon, Menu, Badge, SegmentedControl, Center } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { MantineIcon } from '../icons/MantineIcon';
import { NpmIcon } from '../icons/NpmIcon';
import { ColorControl } from '../ColorControl/ColorControl';
import { GalleryComponent } from '../../../types';
import useStyles from './CanvasHeader.styles';

export interface CanvasHeaderProps extends GalleryComponent, React.ComponentPropsWithoutRef<'div'> {
  state: string;
  onStateChange(state: string): void;
  onPrimaryColorChange(color: string): void;
  primaryColor: string;
  excludeExternal?: boolean;
}

export function CanvasHeader({
  attributes,
  url,
  _component,
  state,
  onStateChange,
  primaryColor,
  onPrimaryColorChange,
  excludeExternal = false,
  ...others
}: CanvasHeaderProps) {
  const classes = useStyles();
  const dependencies = attributes.dependencies.map((dependency) => {
    if (dependency.trim().startsWith('/')) {
      const componentName = dependency.startsWith('/hooks/')
        ? dependency.split('/')[2]
        : dependency.split('/')[2].split('-').map(upperFirst).join('');

      return (
        <Menu.Item component={Link} to={dependency} icon={<MantineIcon />} key={dependency}>
          {componentName}
        </Menu.Item>
      );
    }

    return (
      <Menu.Item
        component="a"
        href={`https://www.npmjs.com/package/${dependency}`}
        target="_blank"
        key={dependency}
        icon={<NpmIcon />}
      >
        {dependency}
      </Menu.Item>
    );
  });

  return (
    <div className={classes.header} {...others}>
      <Group>
        <Text weight={500} style={{ marginRight: 15 }}>
          {attributes.title}
        </Text>

        <Group spacing="xs" className={classes.actions}>
          {!excludeExternal && (
            <ActionIcon
              variant="outline"
              className={classes.action}
              title="View component in isolation"
              component="a"
              href={url}
              target="_blank"
            >
              <ExternalLinkIcon style={{ width: 14, height: 14 }} />
            </ActionIcon>
          )}

          <ActionIcon
            variant="outline"
            className={classes.action}
            title="View source on github"
            component="a"
            href={`https://github.com/mantinedev/mantine/tree/master/docs/src/gallery/${_component}/${_component}.tsx`}
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
            <Menu.Label>Component dependencies</Menu.Label>
            {dependencies}
          </Menu>
          {attributes.responsive && <Badge>Responsive</Badge>}
        </Group>
      </Group>

      <Group className={classes.controls}>
        {attributes.withColor && (
          <ColorControl onChange={onPrimaryColorChange} value={primaryColor} />
        )}
        <SegmentedControl
          value={state}
          onChange={onStateChange}
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
      </Group>
    </div>
  );
}
