import React from 'react';
import { Link } from 'gatsby';
import { Text } from '@mantine/core';
import {
  StarIcon,
  ChatBubbleIcon,
  ExclamationTriangleIcon,
  TwitterLogoIcon,
  EnvelopeClosedIcon,
} from '@modulz/radix-icons';
import useStyles from './Footer.styles';

export function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.wrapper}>
      <Text size="sm" align="center" color="gray">
        Mantine respects your privacy. This website has no trackers, analytics or ads.
      </Text>
      <Text size="sm" align="center" color="gray">
        This project is open source and relies on contributors, please consider{' '}
        <Text component={Link} size="sm" variant="link" to="/pages/contribute">
          contributing
        </Text>
        .
      </Text>

      <div className={classes.links}>
        <a href="https://github.com/mantinedev/mantine" className={classes.link}>
          <StarIcon />
          <span className={classes.linkLabel}>Star project on Github</span>
        </a>
        <a href="https://github.com/mantinedev/mantine/discussions" className={classes.link}>
          <ChatBubbleIcon />
          <span className={classes.linkLabel}>Ask a question</span>
        </a>
        <a href="https://github.com/mantinedev/mantine/issues/new" className={classes.link}>
          <ExclamationTriangleIcon />
          <span className={classes.linkLabel}>Report an issue</span>
        </a>
        <a href="https://twitter.com/mantinedev" className={classes.link}>
          <TwitterLogoIcon />
          <span className={classes.linkLabel}>Follow Mantine on Twitter</span>
        </a>
        <a href="https://buttondown.email/mantine" className={classes.link}>
          <EnvelopeClosedIcon />
          <span className={classes.linkLabel}>Subscribe to monthly updates newsletter</span>
        </a>
      </div>
    </footer>
  );
}
