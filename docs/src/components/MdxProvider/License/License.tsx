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
          . All Mantine dependencies also have MIT licence, except{' '}
          <Text
            component="a"
            variant="link"
            href="https://www.npmjs.com/package/react-transition-group"
          >
            react-transition-group
          </Text>{' '}
          package which has BSD-3-Clause license.
        </Text>
      </div>
    </DocsSection>
  );
}
