import React from 'react';
import { Link } from 'gatsby';
import { useMantineTheme, Text } from '@mantine/core';
import logo from '../../../images/favicon.svg';
import useStyles from './NavbarLogo.styles';

export default function NavbarLogo() {
  const classes = useStyles({ theme: useMantineTheme() });

  return (
    <Link to="/" className={classes.logo}>
      <img className={classes.image} src={logo} alt="" />

      <Text size="xl" weight={700} style={{ fontFamily: 'IBM Plex Mono' }}>
        Mantine
      </Text>
    </Link>
  );
}
