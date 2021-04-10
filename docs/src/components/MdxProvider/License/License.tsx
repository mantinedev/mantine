import React from 'react';
import { Text } from '@mantine/core';
import DocsSection from '../../DocsSection/DocsSection';
import useStyles from './License.styles';

export function License() {
  const classes = useStyles();

  return (
    <DocsSection>
      <div className={classes.wrapper}>
        <div className={classes.badge}>MIT</div>
        <Text>
          All Mantine packages have MIT licence. Reed full license on{' '}
          <Text
            component="a"
            variant="link"
            href="https://github.com/mantinedev/mantine/blob/master/LICENSE"
          >
            Github
          </Text>
        </Text>
      </div>
    </DocsSection>
  );
}
