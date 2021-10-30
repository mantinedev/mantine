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
import { upperFirst } from '@mantine/hooks';
import { MantineIcon } from '../icons/MantineIcon';
import { NpmIcon } from '../icons/NpmIcon';
import { ColorControl } from '../ColorControl/ColorControl';
import { GalleryComponent } from '../../../types';
import useStyles from './CanvasHeader.styles';

function getDependencyInfo(url: string) {
  if (url.startsWith('/core') || url.startsWith('/hooks')) {
    const _name = url.split('/')[2];
    const name = url.startsWith('/hooks') ? _name : _name.split('-').map(upperFirst).join('');

    return {
      name,
      url: `https://mantine.dev${url}`,
      icon: <MantineIcon color="blue" />,
    };
  }

  if (url.startsWith('/component')) {
    return {
      name: url.split('/')[1].split('-').map(upperFirst).join(''),
      url,
      icon: <MantineIcon color="blue" />,
    };
  }

  if (url.startsWith('https://')) {
    const _name = url.replace('https://', '').replace('www.', '');
    const name = _name.endsWith('/') ? _name.slice(0, -1) : _name;
    return {
      name,
      url,
      icon: <ExternalLinkIcon />,
    };
  }

  return {
    name: url,
    url: `https://www.npmjs.com/package/${url}`,
    icon: <NpmIcon />,
  };
}

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
  url,
  _component,
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
