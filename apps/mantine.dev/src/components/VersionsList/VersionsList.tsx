import { IconFileInvoice } from '@tabler/icons-react';
import { Button, Code, Group, Text } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import { allVersions } from '@mantinex/mantine-meta';
import classes from './VersionsList.module.css';

function getMinorXVersion(version: string) {
  return `${version.split('.').slice(0, 2).join('.')}.X`;
}

export function VersionsList() {
  const minorVersions = allVersions.map((minorVersion) => {
    const patches = minorVersion.patches
      .filter((patch) => !patch.version.endsWith('0'))
      .map((patch) => (
        <li key={patch.version}>
          <a
            href={`https://github.com/mantinedev/mantine/releases/tag/${patch.version}`}
            target="_blank"
            className={classes.patchLink}
            rel="noreferrer"
          >
            <Code className={classes.patchBadge}>{patch.version}</Code> –{' '}
            <span className={classes.patchLinkLabel}>{patch.date}</span>
          </a>
        </li>
      ));

    return (
      <div key={minorVersion.version} className={classes.minorVersion}>
        <Group className={classes.versionHeader}>
          <a
            href={minorVersion.version !== '1.0.0' ? minorVersion.link : minorVersion.github}
            className={classes.minorVersionBadgeWrapper}
            target="_blank"
            rel="noreferrer"
          >
            <Code className={classes.minorVersionBadge}>{minorVersion.version}</Code>
          </a>

          <Group gap="xs">
            {minorVersion.version !== '1.0.0' && (
              <Button
                variant="default"
                component="a"
                href={minorVersion.link}
                radius="md"
                size="xs"
                target="_blank"
                leftSection={<IconFileInvoice size={14} />}
              >
                Changelog
              </Button>
            )}
            <Button
              component="a"
              variant="default"
              href={minorVersion.github}
              target="_blank"
              radius="md"
              size="xs"
              className={classes.githubControl}
              leftSection={<GithubIcon size={12} />}
            >
              GitHub release
            </Button>
          </Group>

          <Text className={classes.minorVersionDate}>{minorVersion.date}</Text>
        </Group>
        {patches.length > 0 ? (
          <>
            <Text mt="1.5rem" fz={15}>
              <b>{getMinorXVersion(minorVersion.version)}</b> patches:
            </Text>
            <ul>{patches}</ul>
          </>
        ) : (
          <Text mt="1rem" fz={15}>
            Version {minorVersion.version} does not have associated patch releases yet.
          </Text>
        )}
      </div>
    );
  });

  return <div className={classes.root}>{minorVersions}</div>;
}
