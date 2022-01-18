import React from 'react';
import {
  EyeOpenIcon,
  CodeIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
  InfoCircledIcon,
} from '@modulz/radix-icons';
import {
  Group,
  Text,
  ActionIcon,
  Menu,
  Badge,
  SegmentedControl,
  Center,
  Anchor,
} from '@mantine/core';
import { ColorControl } from '../ColorControl/ColorControl';
import { getDependencyInfo } from './get-dependency-info';
import { GalleryComponent } from '../../../data';
import useStyles from './CanvasHeader.styles';

export interface CanvasHeaderProps extends GalleryComponent, React.ComponentPropsWithoutRef<'div'> {
  state: string;
  onStateChange(state: string): void;
  onPrimaryColorChange(color: string): void;
  primaryColor: string;
  excludeExternal?: boolean;
  zIndex?: number;
}

export function CanvasHeader({
  attributes,
  slug,
  component,
  state,
  onStateChange,
  primaryColor,
  onPrimaryColorChange,
  excludeExternal = false,
  zIndex,
  ...others
}: CanvasHeaderProps) {
  const { classes } = useStyles();
  const dependencies = attributes.dependencies.map(getDependencyInfo).map((dependency) => (
    <Menu.Item
      component="a"
      href={dependency.url}
      target="_blank"
      key={dependency.url}
      icon={dependency.icon}
    >
      {dependency.name}
    </Menu.Item>
  ));

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
              href={`/component/${slug}`}
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
            href={`https://github.com/mantinedev/mantine/tree/master/gallery/src/gallery/${component}/${component}.tsx`}
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

          <Text size="xs">
            Built by{' '}
            <Anchor
              size="xs"
              href={`https://github.com/${attributes.author}`}
              target="_blank"
              color="gray"
            >
              @{attributes.author}
            </Anchor>
          </Text>
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
