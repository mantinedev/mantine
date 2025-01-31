import { IconFileInvoice } from '@tabler/icons-react';
import { ActionIcon, Code, Group, Text } from '@mantine/core';
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

          <Group gap={5}>
            {minorVersion.version !== '1.0.0' && (
              <ActionIcon
                variant="default"
                component="a"
                href={minorVersion.link}
                radius="md"
                size={30}
                target="_blank"
                title="Changelog"
                aria-label="Changelog"
              >
                <IconFileInvoice size={14} />
              </ActionIcon>
            )}
            <ActionIcon
              component="a"
              variant="default"
              href={minorVersion.github}
              target="_blank"
              radius="md"
              size={30}
              className={classes.githubControl}
              title="View on GitHub"
              aria-label="View on GitHub"
            >
              <GithubIcon size={12} />
            </ActionIcon>
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
